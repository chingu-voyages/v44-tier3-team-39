import Link from "next/link";
import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import handPic from "../public/hand holding phone UPDATED without button.png";

const libreBaskerville = Libre_Baskerville({
    weight: "700",
    subsets: ["latin"],
});

export default function Landing() {
    return (
        <div className="w-full h-full grid grid-cols-2 items-center justify-center">
            <div className="flex justify-end">
                <div className="flex flex-col items-center justify-center text-center gap-2">
                    <div
                        className={
                            libreBaskerville.className +
                            " text-6xl mb-5 text-[#334155]"
                        }
                    >
                        Welcome to
                        <p className="text-blue-600">Milestoned</p>
                    </div>
                    <p className="max-w-[600px] min-w-[600px] text-xl">
                        With Milestoned, you can create personalized milestones
                        for your accomplishments, and easily filter them by
                        tags. Whether you want to remember a major career
                        breakthrough, or simply mark a personal milestone, we
                        made it easy to stay organized and motivated. Start
                        celebrating your journey today with Milestoned!
                    </p>
                    <Link href="/login">
                        <button className="rounded-lg bg-[#334155] text-white px-16 py-2 text-center w-full">
                            LOGIN
                        </button>
                    </Link>
                    <p className="md:text-lg 2xl:text-2xl">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-blue-600 ">
                            Register here!
                        </Link>
                    </p>
                </div>
            </div>
            <div className="max-w-[650px] h-full max-h-[1000px] flex items-center justify-start p-5 pl-16">
                <div className="rounded-3xl border-2 border-black relative w-full min-w-[600px] h-5/6">
                    <div className="rounded-3xl bg-[#334155] w-full h-5/6 absolute bottom-0"></div>
                    <Image
                        src={handPic}
                        className="lg:block absolute left-[0px] object-none object-left-top rounded-3xl h-full lg:w-full"
                        alt="Hand holding phone"
                        // fill={true}
                        // sizes="(max-width: 1200px) width: 876px"
                        width={876}
                        height={1023}
                    />
                </div>
            </div>
        </div>
    );
}

// {/* <div className="w-full h-full flex items-center justify-center">
// <div className="flex flex-1 flex-col items-center justify-center mx-auto text-center gap-2">
//     <div
//         className={
//             libreBaskerville.className +
//             " text-5xl mb-5 text-[#334155]"
//         }
//     >
//         Welcome to
//         <p className="text-blue-600">Milestoned</p>
//     </div>
//     <p className="w-1/2">
//         With Milestoned, you can create personalized milestones for
//         your accomplishments, and easily filter them by tags.
//         Whether you want to remember a major career breakthrough, or
//         simply mark a personal milestone, we made it easy to stay
//         organized and motivated. Start celebrating your journey
//         today with Milestoned!
//     </p>
//     <Link href="/login">
//         <button className="rounded-lg bg-[#334155] text-white px-16 py-2">
//             LOGIN
//         </button>
//     </Link>
//     <p>
//         Don't have an account?{" "}
//         <Link href="/register" className="text-blue-600">
//             Register here!
//         </Link>
//     </p>
// </div>
// <div className="flex-1 flex justify-center items-center pr-10">
//     <div className="rounded-3xl border-2 border-black relative w-full h-[722px]">
//         {/* w-[583px] h-[722px] */}
//         <div className="rounded-3xl bg-[#334155] w-full h-5/6 absolute bottom-0"></div>
//         <Image
//             src={handPic}
//             className="lg:block absolute left-[0px] h-full w-full object-none object-left-top rounded-3xl "
//             alt="Hand holding phone"
//             width={700}
//             height={900}
//         />
//     </div>
// </div>
// </div> */}

// {/* <div className="w-full h-full flex justify-center items-center p-10">
// <div className="rounded-3xl border-0 border-black relative w-[583px] h-[722px]">
//     {/* w-[660px] h-[900px]*/}
//     <div className="rounded-3xl bg-[#334155] w-full h-5/6 absolute bottom-0"></div>
//     {/* h-[702px] */}
//     <Image
//         src={handPic}
//         className="lg:block absolute left-[0px] h-full w-full object-none object-left-top rounded-3xl "
//         alt="Hand holding phone"
//         // width={700}
//         // height={900}
//         // sizes="(max-width: 700px) 50vw, (max-width: 876px) 50vw"
//         width={700}
//         height={900}
//     />
// </div>
// </div> */}

// {/* <div className="w-full h-full flex justify-center items-center">
// <div className="rounded-3xl border-0 border-black relative w-8/12 h-5/6">
//     {/* w-[660px] h-[900px]*/}
//     <div className="rounded-3xl bg-[#334155] w-full h-5/6 absolute bottom-0"></div>
//     {/* h-[702px] */}
//     <Image
//         src={handPic}
//         className="lg:block absolute left-[0px] h-full w-full object-none object-left-top rounded-3xl "
//         alt="Hand holding phone"
//         // width={700}
//         // height={900}
//         // sizes="(max-width: 700px) 50vw, (max-width: 876px) 50vw"
//         width={876}
//         height={1023}
//     />
// </div> */}

// {/* <div className="w-full h-full flex justify-center items-center">
// <div className="rounded-3xl border-0 border-black relative w-[660px] h-[900px]">
//     <div className="rounded-3xl bg-[#334155]  w-full h-[702px] absolute bottom-0"></div>
//     <Image
//         src={handPic}
//         className="lg:block absolute  left-[-5pxpx] h-full w-full object-none object-left-top rounded-3xl "
//         alt="Hand holding phone"
//         width={876}
//         height={1023}
//     />
// </div>
// </div> */}

// export default function Landing() {
//     return (
//         <div className="w-full h-full flex flex-row gap-10">
//             <div className="flex flex-col items-center justify-center mx-auto text-center gap-2">
//                 <div
//                     className={
//                         libreBaskerville.className +
//                         " text-5xl mb-5 text-[#334155]"
//                     }
//                 >
//                     Welcome to
//                     <p className="text-blue-600">Milestoned</p>
//                 </div>
//                 <p className="w-3/4">
//                     With Milestoned, you can create personalized milestones for
//                     your accomplishments, and easily filter them by tags.
//                     Whether you want to remember a major career breakthrough, or
//                     simply mark a personal milestone, we made it easy to stay
//                     organized and motivated. Start celebrating your journey
//                     today with Milestoned!
//                 </p>
//                 <Link href="/login">
//                     <button className="rounded-lg bg-[#334155] text-white px-16 py-2">
//                         LOGIN
//                     </button>
//                 </Link>
//                 <p>
//                     Don't have an account?{" "}
//                     <Link href="/register" className="text-blue-600">
//                         Register here!
//                     </Link>
//                 </p>
//             </div>
//             <div className="w-full h-full flex items-center justify-center">
//                 <div className="rounded-3xl border-0 w-[850px] h-[700px] border-black relative">
//                     <div className="rounded-3xl w-[583px] h-[85%]  bg-[#334155] z-0 absolute bottom-0"></div>
//                     <Image
//                         src="/../public/hand holding phone UPDATED without button.png"
//                         className="lg:block absolute object-cover object-left-top"
//                         alt="Hand holding phone"
//                         fill={true}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }
