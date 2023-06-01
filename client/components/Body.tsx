import dynamic from 'next/dynamic';
import HistoryTab from './HistoryTab';

const Body = () => {
  return (
    <div className="h-full w-full overflow-hidden ">
      <div className="flex flex-row w-full h-full m-5">
        <div className="w-2/4 h-full flex flex-col items-center m-5">
          <div className="bg-white rounded-lg w-2/3 mt-8 m-5">
            <div className="p-4 m-5">
              <form action="/submit" method="POST">
                <div className="font-bold text-xl mb-4">Add New Milestone</div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter milestone title"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="description"
                    placeholder="Enter description"
                    className="w-full h-40 border border-gray-300 rounded-md px-3 py-2 mt-1 resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <select
                    name="status"
                    defaultValue=""
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Select status
                    </option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Started">Not Started</option>
                  </select>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="dateCompleted"
                    placeholder="Date completed (mm/dd/yyyy)"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="tags"
                    placeholder="Tags (separated by commas)"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex items-end justify-end mb-4 w-full">
                  <div></div>
                  <button
                    type="submit"
                    className="bg-blue-500 rounded-lg text-white px-8 py-2 mr-4"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-2/4 h-full">
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
    </div>
  );
};

export default dynamic(() => Promise.resolve(Body), { ssr: false });
