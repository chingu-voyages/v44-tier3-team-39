import React, { FormEvent, useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { useRouter } from "next/router";
// import HistoryTab from '@/components/HistoryTab';
import useRequest from "@/hooks/use-request";
import BuildClient from "@/api/buildClient";
import { updateMilestones } from "@/store/reducers/userSlice";
import axios from "axios";
interface Milestone {
    _id: string;
    title: string;
    description: string;
    status: string;
    deadline: string;
    owner: string;
    // Add any other properties of the Milestone object
}

interface UserState {
    user: User | null;
}

interface User {
    user: string;
}

const MilestoneEdit = () => {
    const router = useRouter();
    const mId = router.query._id;
    const user: any = useSelector((state: RootState) => state.user?.user);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [deadline, setDeadline] = useState("");
    const [tags, setTags] = useState("");
    const [textCount, setTextCount] = useState(0);
    const maxDescriptionLength = 500;

    const descriptionLength = useMemo(() => {
        return description.length;
    }, [description]);

    const descriptionHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (descriptionLength < maxDescriptionLength) {
            setDescription(e.currentTarget.value);
        } else {
            console.log("max description size reached.");
        }
    };

    useEffect(() => {
        const milestoneToEdit = user.milestones.filter((item: any) => {
            return item._id == router.query._id;
        });
        console.log(milestoneToEdit);
        setTitle(milestoneToEdit[0].title);
        setDescription(milestoneToEdit[0].description);
        setStatus(milestoneToEdit[0].status);
        // setDeadline(milestoneToEdit[0].deadline);
        setDeadline(
            new Date(milestoneToEdit[0].deadline).toLocaleDateString(
                undefined,
                {
                    month: "numeric",
                    day: "numeric",
                    year: "numeric",
                }
            )
        );
        setTags(milestoneToEdit[0].tags);
        description;
    }, [user]);

    const { doRequest, errors } = useRequest({
        url: `http://localhost:4000/api/milestones/edit/:${mId}`,
        method: "patch",
        body: {
            title,
            description,
            status,
            deadline,
            owner: user?.id,
        },
        onSuccess: async (data) => {
            router.push("/profile");
            // console.log("Data:", data);
            // Add the new milestone to the milestones state
            // console.log({
            //     title,
            //     description,
            //     status,
            //     deadline,
            //     owner: owner.id,
            // });
            // await fetchMilestones();
            // setTitle("");
            // setDescription("");
            // setStatus("");
            // setDeadline("");
            // setTags("");
        },
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        doRequest();
        // axios
        //     .put(
        //         `http://localhost:4000/api/milestones/milestones/${router.query._id}`,
        //         {
        //             title,
        //             description,
        //             deadline,
        //             status,
        //             owner: user?.id,
        //         }
        //     )
        //     .then(() => {
        //         console.log("Update successful");
        //         router.push("/profile");
        //     })
        //     .catch((err) => {
        //         console.log("patch failed.");
        //         console.log(err);
        //     });

        // Fetch the updated milestones
        // await fetchMilestones();

        // Reset the form fields
        // setTitle("");
        // setDescription("");
        // setStatus("");
        // setDeadline("");
        // setTags("");
    };

    return (
        // <div className="h-full w-full">
        <div className="w-full h-full flex items-center justify-center m-auto">
            {/* <div className="w-full md:w-1/2 h-full flex flex-col items-center"> */}
            <div className="bg-white rounded-lg lg:max-w-[900px] sm:w-2/3 md:mt-16">
                <div className="mx-2 md:mx-5">
                    <div className="p-2 md:p-4">
                        <form onSubmit={handleSubmit} className="">
                            {/* Form title */}
                            <div className="font-bold text-xl mb-4">
                                Edit Existing Milestone
                            </div>
                            {/* Milestone title input */}
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter milestone title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            {/* Milestone description input */}
                            <div className="mb-0">
                                <textarea
                                    name="description"
                                    placeholder="Enter description"
                                    value={description}
                                    onChange={descriptionHandler}
                                    className="w-full h-40 border border-gray-300 rounded-md px-3 py-2 mt-1 resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>
                            </div>
                            {/* Description text count */}
                            <div className="flex mb-4 justify-end mr-2">
                                <div className="text-xs leading-4 font-normal text-gray-400">
                                    {descriptionLength}/{maxDescriptionLength}
                                </div>
                            </div>
                            {/* Milestone status, dropdown select */}
                            <div className="mb-4">
                                <select
                                    name="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="" disabled>
                                        Select status
                                    </option>
                                    <option value="In Progress">
                                        In Progress
                                    </option>
                                    <option value="Completed">Completed</option>
                                    <option value="Not Started">
                                        Not Started
                                    </option>
                                </select>
                            </div>
                            {/* Milestone date completed input */}
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="dateCompleted"
                                    placeholder="Date completed (mm/dd/yyyy)"
                                    value={deadline}
                                    onChange={(e) =>
                                        setDeadline(e.target.value)
                                    }
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            {/* Milestone tags input */}
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="tags"
                                    placeholder="Tags (separated by commas)"
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex items-end justify-between mb-4 w-full">
                                <Link href={"/profile"}>
                                    <button className="bg-red-600 rounded-lg text-white px-8 py-2 mr-4 flex justify-between gap-2">
                                        Cancel
                                        <p>X</p>
                                    </button>
                                </Link>
                                {/* <div>{errors}</div> */}
                                <button
                                    type="submit"
                                    className="bg-green-600 rounded-lg text-white px-8 py-2 flex justify-between gap-1"
                                >
                                    Save
                                    <i className="gg-check"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
        // </div>
    );
};

export default MilestoneEdit;
