
import Body from '../components/Body';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center w-full mb-5">
        <Header />
            <Body />
           <Footer />
        </main>
    )
}