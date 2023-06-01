import dynamic from 'next/dynamic';

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

export default dynamic(() => Promise.resolve(HistoryTab), { ssr: false });
  