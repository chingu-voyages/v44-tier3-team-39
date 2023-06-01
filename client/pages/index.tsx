import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('../components/Header'), {
  ssr: false
});
const DynamicFooter = dynamic(() => import('../components/Footer'), {
  ssr: false
});
const DynamicBody = dynamic(() => import('../components/Body'), {
  ssr: false
});


export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center w-full">
            <DynamicHeader />
           <DynamicBody />
           <DynamicFooter />
        </main>
    )
}
