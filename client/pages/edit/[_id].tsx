import React, {
    FormEvent,
    useEffect,
    useState,
    useMemo,
    MouseEventHandler,
} from "react";
import { updateMilestones, deleteMilestones } from "@/store/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import useRequest from "@/hooks/use-request";
import BuildClient from "@/api/buildClient";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
interface Milestone {
    _id: string;
    title: string;
    description: string;
    deadline: string;
    status: string;
    owner: string;
    collaborators: [];
    tags: string;
    // Add any other properties of the Milestone object
}

// interface UserState {
//     user: User | null;
// }

interface User {
    user: string;
}

const MilestoneEdit = () => {
    const router = useRouter();
    const mId = router.query._id;
    const user: any = useSelector((state: RootState) => state.user?.user);
    // const [milestone, setMilestone] = useState<Milestone>({});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [deadline, setDeadline] = useState("");
    const [tags, setTags] = useState("");
    // const [owner, setOwner] = useState("");
    const [collaborators, setcollaborators] = useState([]);
    const [textCount, setTextCount] = useState(0);
    const maxDescriptionLength = 500;
    // const owner: any = useSelector(
    //     (state: UserState) => state.user?.user || null
    // );
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

    const tagHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setTags(e.currentTarget.value);
    };

    useEffect(() => {
        const milestoneToEdit = user.milestones.filter((item: any) => {
            return item._id == router.query._id;
        });
        const milestone: Milestone = milestoneToEdit[0];
        // console.log(milestone);
        setTitle(milestone.title);
        setDescription(milestone.description);
        setDeadline(
            new Date(milestone.deadline).toLocaleDateString(undefined, {
                month: "numeric",
                day: "numeric",
                year: "numeric",
            })
        );
        setStatus(milestone.status);
        // setOwner(milestone.owner);
        setcollaborators(milestone.collaborators);
        // TODO: convert tags string into an array for better separation addition/separation.
        setTags(milestone.tags);
    }, []);

    const { doRequest, errors } = useRequest({
        url: `https://milestoned-api.onrender.com//api/milestones/milestones/${mId}`,
        method: "patch",
        body: {
            title,
            description,
            deadline,
            status,
            owner: user?.id,
            collaborators,
            tags,
        },
        onSuccess: async (data) => {
            console.log("patch successful");
            await fetchMilestones();
            router.push("/profile");
        },
        // onFailure: async (errors) =>{

        // }
    });

    const dispatch = useDispatch();
    const fetchMilestones = async () => {
        try {
            const client = BuildClient({ req: undefined });
            const response = await client.get(
                `api/milestones/milestones?owner=${user.id}`
            );
            const fetchedMilestones: Milestone[] = response.data;
            dispatch(updateMilestones(fetchedMilestones)); // Dispatch an action to update the milestones in Redux state
            console.log("Fetched milestones:", fetchedMilestones);
        } catch (error) {
            console.error("Error fetching milestones:", error);
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        doRequest();
        // await fetchMilestones();
    };

    const deleteHandler = async () => {
        try {
            const client = BuildClient({ req: undefined });

            // await axios.delete(`api/milestones/milestones/${mId}`)

            const response = await client.delete(
                `api/milestones/milestones/${mId}`
            );
            console.log(response.data); // delete successful

            dispatch(deleteMilestones(mId));
            console.log("store updated");

            router.push("/profile");
        } catch (error) {
            console.error("Error fetching milestones:", error);
        }
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
                                    onChange={tagHandler}
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
                                <div className="flex gap-3">
                                    <button
                                        onClick={deleteHandler}
                                        className="bg-slate-600 rounded-lg text-white px-8 py-2 flex justify-between gap-1"
                                    >
                                        Delete
                                        {/* <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/trash--v1.png" alt="trash--v1"/> */}
                                        <Image
                                            className="text-white invert"
                                            width="24"
                                            height="24"
                                            src="https://img.icons8.com/material-outlined/24/trash--v1.png"
                                            alt="trash--v1"
                                        />
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-green-600 rounded-lg text-white px-8 py-2 flex justify-between gap-1"
                                    >
                                        Save
                                        <i className="gg-check"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* <div>{errors}</div> */}
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
        // </div>
    );
};

export default MilestoneEdit;
