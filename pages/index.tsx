import Link from "next/link";
import Image from "next/image";
import { Libre_Baskerville, Kalam } from "next/font/google";
import handPic from "../public/handHoldingPhone.png";
import arrowImg from "../public/arrow.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



const libreBaskerville = Libre_Baskerville({
    weight: "700",
    subsets: ["latin"],
});

const kalam = Kalam({
    weight: "700",
    subsets: ["latin"],
});

function Landing() {
    return (
        <div className="w-screen h-screen grid grid-cols-2 items-center justify-center gap-20">
            <div className="flex justify-end pl-10">
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
                    <p className="max-w-[600px]  min-w-[600px] text-xl">
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
                    <p className="text-xl">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-blue-600 ">
                            Register here!
                        </Link>
                    </p>
                </div>
            </div>
            <div className="max-w-[650px] h-full max-h-[1000px] flex items-center justify-start p-5 pr-10 relative bottom-10">
                <div className="rounded-3xl border-0 border-black relative w-full min-w-[600px] h-5/6">
                    <p
                        className={
                            kalam.className +
                            " text-[#EA580C] absolute text-3xl min-w-[155px] right-[600px] top-[140px] z-50 text-"
                        }
                    >
                        Try it now!
                    </p>
                    <Link
                        href="/dashboard"
                        className="absolute left-[166px] top-[120px] z-20"
                    >
                        <button className="rounded-lg bg-blue-600 text-white px-12 py-2 text-center w-full">
                            Create a New Milestone
                        </button>
                    </Link>
                    <Image
                        src={arrowImg}
                        className="absolute z-30 object-none right-[410px] top-[130px] w-[300px]"
                        alt="Arrow pointing at button to use app as guest"
                        width={200}
                        height={50}
                    />
                    <div className="rounded-3xl bg-[#334155] w-full h-5/6 absolute bottom-0"></div>
                    <Image
                        src={handPic}
                        className="absolute left-[0px] object-none object-left-top rounded-3xl h-full w-full"
                        alt="Hand holding phone"
                        width={876}
                        height={1023}
                    />
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <main>
            <Header />
            <Landing />
            <Footer />
        </main>
    )
}