import React, { FormEvent, useEffect, useState } from "react";
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
    const user: any = useSelector((state: RootState) => state.user?.user);
    // const [milestone, setMilestone] = useState<Milestone>(
    //     user?.milestones.filter((item: Milestone) => {
    //         return item._id == router.query._id;
    //     })
    // );
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [deadline, setDeadline] = useState("");
    const [tags, setTags] = useState("");
    // console.log(milestone);

    useEffect(() => {
        const milestoneToEdit = user.milestones.filter((item: any) => {
            return item._id == router.query._id;
        });
        console.log(milestoneToEdit);
        setTitle(milestoneToEdit[0].title);
        setDescription(milestoneToEdit[0].description);
        setStatus(milestoneToEdit[0].status);
        setDeadline(milestoneToEdit[0].deadline);
        setTags(milestoneToEdit[0].tags);
        // console.log(milestoneToEdit[0].title);
        // console.log(milestoneToEdit[0].description);
    }, [user]);

    const { doRequest, errors } = useRequest({
        url: "http://localhost:4000/api/milestones/milestones",
        method: "post",
        body: {
            title,
            description,
            status,
            deadline,
            owner: user?.id,
        },
        onSuccess: async (data) => {
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
            setTitle("");
            setDescription("");
            setStatus("");
            setDeadline("");
            setTags("");
        },
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        doRequest();
        // Fetch the updated milestones
        // await fetchMilestones();

        // Reset the form fields
        setTitle("");
        setDescription("");
        setStatus("");
        setDeadline("");
        setTags("");
    };

    return (
        <div className="h-full w-full overflow-hidden ">
            <div className="flex flex-col md:flex-row w-full h-full">
                <div className="w-full md:w-1/2 h-full flex flex-col items-center">
                    <div className="bg-white rounded-lg w-full md:w-2/3 mt-8">
                        <div className="mx-2 md:mx-5">
                            <div className="p-2 md:p-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="font-bold text-xl mb-4">
                                        Add New Milestone
                                    </div>

                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="Enter milestone title"
                                            value={title}
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <textarea
                                            name="description"
                                            placeholder="Enter description"
                                            value={description}
                                            onChange={(e) =>
                                                setDescription(e.target.value)
                                            }
                                            className="w-full h-40 border border-gray-300 rounded-md px-3 py-2 mt-1 resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        ></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <select
                                            name="status"
                                            value={status}
                                            onChange={(e) =>
                                                setStatus(e.target.value)
                                            }
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="" disabled>
                                                Select status
                                            </option>
                                            <option value="In Progress">
                                                In Progress
                                            </option>
                                            <option value="Completed">
                                                Completed
                                            </option>
                                            <option value="Not Started">
                                                Not Started
                                            </option>
                                        </select>
                                    </div>
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
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            name="tags"
                                            placeholder="Tags (separated by commas)"
                                            value={tags}
                                            onChange={(e) =>
                                                setTags(e.target.value)
                                            }
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="flex items-end justify-end mb-4 w-full">
                                        {/* <div>{errors}</div> */}
                                        <button
                                            type="submit"
                                            className="bg-blue-500 rounded-lg text-white px-8 py-2 mr-4"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MilestoneEdit;
