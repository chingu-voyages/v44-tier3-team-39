import { RootState } from "@/store/rootReducer";
import BuildClient from "@/api/buildClient";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateMilestones, deleteMilestones } from "@/store/reducers/userSlice";

import Link from "next/link";
interface Milestone {
    _id: string;
    title: string;
    description: string;
    // Add any other properties of the Milestone object
}

const HistoryTab: React.FC<{ milestone: Milestone }> = ({ milestone }) => {
    // const router = useRouter();
    // const dispatch = useDispatch();
    const user: any = useSelector((state: RootState) => state.user?.user);

    // const deleteHandler = async () => {
    //     try {
    //         const client = BuildClient({ req: undefined });
    //         const response = await client.delete(
    //             `api/milestones/milestones/${milestone._id}`
    //         );
    //         console.log(response.data); // delete successful

    //         dispatch(deleteMilestones(milestone._id));
    //         console.log("store updated");

    //         // router.push("/profile");
    //         // router.reload();
    //         router.replace(router.asPath);
    //     } catch (error) {
    //         console.error("Error fetching milestones:", error);
    //     }
    // };

    return (
        <div className="flex items-center justify-start w-full">
            <div className="w-10"></div>
            <div className="ml-4 w-5/6">
                <div className="bg-white rounded-lg mt-4 pb-1">
                    <div className="flex justify-between">
                        <div className="font-semiold text-md p-4">
                            {milestone.title}
                        </div>
                        {user ? (
                            <Link
                                href={`/edit/${milestone._id}`}
                                className=" font-semibold text-green-600 p-4"
                            >
                                EDIT
                            </Link>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div>
                        <div className="p-4">{milestone.description}</div>
                    </div>
                    {/* <div className="flex justify-end pr-4 pb-1">
                        {user ? (
                            <button
                                onClick={deleteHandler}
                                className="text-red-600"
                            >
                                DELETE
                            </button>
                        ) : (
                            <></>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default HistoryTab;
