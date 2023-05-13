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
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-1/2 flex flex-1 flex-col items-center justify-center mx-auto text-center gap-2">
                <div
                    className={
                        libreBaskerville.className +
                        " md:text-6xl 2xl:text-7xl text-4xl mb-5 text-[#334155]"
                    }
                >
                    Welcome to
                    <p className="text-blue-600">Milestoned</p>
                </div>
                <p className="w-1/2 md:text-lg 2xl:text-2xl">
                    With Milestoned, you can create personalized milestones for
                    your accomplishments, and easily filter them by tags.
                    Whether you want to remember a major career breakthrough, or
                    simply mark a personal milestone, we made it easy to stay
                    organized and motivated. Start celebrating your journey
                    today with Milestoned!
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
            <div className="flex-1 flex justify-center items-center pr-10">
                <div className="rounded-3xl border-0 border-black relative w-full h-[722px]">
                    <div className="rounded-3xl bg-[#334155] w-full h-5/6 absolute bottom-0"></div>
                    <Image
                        src={handPic}
                        className="lg:block absolute left-[0px] h-full w-full object-none object-left-top rounded-3xl "
                        alt="Hand holding phone"
                        width={700}
                        height={900}
                    />
                </div>
            </div>
        </div>
    );
}
