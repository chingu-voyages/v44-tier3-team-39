interface Milestone {
    title: string;
    description: string;
    // Add any other properties of the Milestone object
  }
  
  const HistoryTab: React.FC<{ milestone: Milestone }> = ({ milestone }) => {
    return (
      <div className="flex items-center justify-start w-full">
        <div className="w-10"></div>
        <div className="ml-4 w-5/6">
          <div className="bg-white rounded-lg mt-4 pb-1">
            <div className="font-bold text-md p-4">{milestone.title}</div>
            <div className="p-4">
              {milestone.description}
            </div>
            {/* <div className="ml-4 mb-4">
              <button className="bg-red-100 rounded-lg px-8 py-2 mr-4">Python</button>
              <button className="bg-indigo-100 rounded-lg px-8 py-2 mr-4">JS</button>
            </div> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default HistoryTab;
  