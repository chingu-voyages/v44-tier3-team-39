import Link from "next/link";
import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
    weight: "700",
    subsets: ["latin"],
});

export default function Landing() {
    return (
        <div className="w-full h-full flex flex-row gap-10">
            <div className="flex flex-col items-center justify-center mx-auto text-center gap-2">
                <div className={libreBaskerville.className + " text-5xl mb-5"}>
                    Welcome to
                    <p className="text-blue-600">Milestoned</p>
                </div>
                <p className="w-3/4">
                    With Milestoned, you can create personalized milestones for
                    your accomplishments, and easily filter them by tags.
                    Whether you want to remember a major career breakthrough, or
                    simply mark a personal milestone, we made it easy to stay
                    organized and motivated. Start celebrating your journey
                    today with Milestoned!
                </p>
                <Link href="/login">
                    <button className="rounded-lg bg-slate-700 text-white px-16 py-2">
                        LOGIN
                    </button>
                </Link>
                <p>
                    Don't have an account?{" "}
                    <Link href="/register" className="text-blue-600">
                        Register here!
                    </Link>
                </p>
            </div>
            <div className="w-full h-full flex items-center justify-center">
                <div className="rounded-3xl border-0 w-[850px] h-[700px] border-black relative">
                    <div className="rounded-3xl w-[583px] h-[85%] border-black bg-slate-400 z-0 absolute bottom-0"></div>
                    <Image
                        src="/../public/hand holding phone UPDATED without button.png"
                        className="lg:block absolute object-cover object-left-top"
                        alt="Hand holding phone"
                        fill={true}
                    />
                </div>
            </div>
        </div>
    );
}
