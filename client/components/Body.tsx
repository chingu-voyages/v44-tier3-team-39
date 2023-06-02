import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useRequest from '../hooks/use-request';
import HistoryTab from './HistoryTab';
import BuildClient from '@/api/buildClient';
import { useRouter } from 'next/router';

interface Milestone {
  _id: string;
  title: string;
  description: string;
  status: string;
  deadline: string;
  owner: string;
  // Add any other properties of the Milestone object
}

interface UserState {
  user: User | null;
}

interface User {
  user: string;
}

const Body = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [deadline, setDeadline] = useState('');
  const [tags, setTags] = useState('');
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const owner: string | null = useSelector((state: UserState) => state.user?.user || null);
  const router = useRouter();

  const { doRequest, errors } = useRequest({
    url: 'http://localhost:4000/api/milestones/milestones',
    method: 'post',
    body: {
      title,
      description,
      status,
      deadline,
      owner,
    },
    onSuccess: async (data) => {
      console.log('Data:', data);
      // Add the new milestone to the milestones state
      await fetchMilestones();
      setTitle('');
      setDescription('');
      setStatus('');
      setDeadline('');
      setTags('');
    },
  });

  const fetchMilestones = async () => {
    try {
      const client = BuildClient({ req: undefined });
      const response = await client.get('api/milestones/milestones');
      const fetchedMilestones: Milestone[] = response.data;
      setMilestones(fetchedMilestones);
      console.log('Fetched milestones:', fetchedMilestones);
    } catch (error) {
      console.error('Error fetching milestones:', error);
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    doRequest();
  };

  useEffect(() => {
    fetchMilestones();
    if (owner) {
      router.push('/profile'); // Redirect to the profile page
    }
  }, [owner, router]);

  const milestoneList = milestones.map((milestone) => (
    <div key={milestone._id}>
      <div className="mt-8 flex items-center justify-start">
        <div className="rounded-full bg-blue-400 w-10 h-10"></div>
        <div className="ml-4 text-gray-500">
          {new Date(milestone.deadline).toLocaleDateString(undefined, {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
        
      </div>
      
      <HistoryTab milestone = {milestone}/>
    </div>
  ));
  return (
    <div className="h-full w-full overflow-hidden p-10">
      <div className="flex flex-row w-100 h-full mx-10">
        <div className="w-2/4 h-full flex flex-col items-center m-5">
          <div className="bg-white rounded-lg w-2/3 mt-8">
            <div className="p-4 m-5">
              <form onSubmit={handleSubmit}>
                <div className="font-bold text-xl mb-4">Add New Milestone</div>

                <div className="mb-4">
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter milestone title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="description"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full h-40 border border-gray-300 rounded-md px-3 py-2 mt-1 resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <select
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
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
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="tags"
                    placeholder="Tags (separated by commas)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex items-end justify-end mb-4 w-full">
                  <div>{errors}</div>
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

        <div className="w-2/4 h-full">{milestoneList}</div>
      </div>
    </div>
  );
};

export default Body;
