
const Header = () => {
    return (<div className='flex justify-between items-center w-full bg-white'>
        <div className='font-bold text-2xl p-4'>Milestone</div>
        <div className='text-blue-400 p-4'>
            <a className="mr-4" href="/login">Login</a>
            <a href='/logout'>Register</a>
        </div>
    </div>)
}

const TextButton: any = ({ text, placeholder }: any): any => {
    return (
        <div className="p-4 rounded-3xl">
            <div>{text}</div>
            <div className="w-full border-2 rounded-lg border-gray-400"><input className="h-8 border-3 border-solid rounded-md border-gray-400 w-full" placeholder={placeholder} /></div>
        </div>
    )
}

const HistoryTab: any = (): any => {
    return (<div className="flex items-center justify-start w-full">
        <div className="w-10"></div>
        <div className="ml-4 w-5/6">
            <div className="bg-white rounded-lg mt-4 pb-1">
                <div className="font-bold text-md p-4">Graduated from Coding Boot Camp</div>
                <div className="p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis, ex nec pretium convallis, mauris ipsum vehicula risus, et mollis massa ante quis diam. Integer pellentesque porta orci vitae mollis. Vestibulum tempus felis efficitur egestas dictum. Mauris congue faucibus nisi, nec scelerisque urna.

                    Lorem.
                    Lorem.
                    Lorem.</div>
                <div className="ml-4 mb-4">
                    <button className="bg-red-100 rounded-lg px-8 py-2 mr-4">Python</button>
                    <button className="bg-indigo-100 rounded-lg  px-8 py-2 mr-4">JS</button>
                </div>
            </div>
        </div>
    </div>
    )
}

const Body = () => {
    return (
        <div className='h-full w-full overflow-hidden'>
            <div className="flex flex-row w-full h-full">
                <div className="w-2/4 h-full flex flex-col items-center overflow-y-scroll">
                    <div className="bg-white rounded-lg w-5/6 mt-8">
                        <div className="font-bold text-xl p-4">Add New Milestone</div>
                        <TextButton text="Title" placeholder="Enter milestone title" />
                        <TextButton text="Description" placeholder="Enter description" />
                        <TextButton text="Start Date" placeholder="mm/dd/yyyy" />
                        <TextButton text="End Date" placeholder="mm/dd/yyyy" />
                        <TextButton text="End Date" placeholder="mm/dd/yyyy" />
                        <div className="flex items-end justify-end mb-4 w-full">
                            <div></div>
                            <button className="bg-blue-500 rounded-lg text-white px-8 py-2 mr-4">Add +</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg w-5/6 mt-4">
                        <div className="font-bold text-xl p-4">Tags</div>
                        <div className="ml-4 mb-4">
                            <button className="bg-red-100 rounded-lg px-8 py-2 mr-4">Python</button>
                            <button className="bg-indigo-100 rounded-lg  px-8 py-2 mr-4">JS</button>
                            <button className="bg-green-100 rounded-lg  px-8 py-2 mr-4">Hobby</button>
                        </div>
                    </div>
                </div>
                <div className="w-2/4 h-full overflow-y-scroll">
                    <div className="mt-8 flex items-center justify-start">
                        <div className="rounded-full bg-blue-400 w-10 h-10"></div>
                        <div className="ml-4 text-gray-500">May 9, 2023</div>
                    </div>

                    <HistoryTab />

                    <div className="mt-8 flex items-center justify-start">
                        <div className="rounded-full bg-blue-400 w-10 h-10"></div>
                        <div className="ml-4 text-gray-500">February 1, 2023</div>
                    </div>

                    <HistoryTab />

                    <div className="mt-8 flex items-center justify-start">
                        <div className="rounded-full bg-blue-400 w-10 h-10"></div>
                        <div className="ml-4 text-gray-500">December 23, 2022</div>
                    </div>

                    <HistoryTab />

                    <div className="mt-8 flex items-center justify-start">
                        <div className="rounded-full bg-blue-400 w-10 h-10"></div>
                        <div className="ml-4 text-gray-500">October 3, 2022</div>
                    </div>

                    <HistoryTab />
                </div>


            </div>
        </div >)
}

const Footer = () => {
    return (
        <div className='flex justify-between items-center w-full bg-white'>
            <div className='p-4'>
                <span className='mr-4'>About</span>
                <span className='mr-4'>Privacy</span>
                <span className='mr-4'>Terms</span>
            </div>
            <div className='p-4'>
                <span>Milestoned v1.0.0</span>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <main className="flex flex-col max-w-screen-lg justify-center items-center w-full h-screen">
            <Header />
            <Body />
            <Footer />
        </main>
    )
}
