import { Dispatch } from 'react';
import { categories } from '../data/categories';
import { TActivity } from '../types/index';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ActivitydAction } from '../reducers/activityReducer';

type TActivityProps = {
  activity: TActivity;
  dispatch: Dispatch<ActivitydAction>;
}

const Activity = ({ activity, dispatch }: TActivityProps) => {
  const { category, name, calories } = activity;
  const categoryObject = categories.find(cat => cat.id === +category)!;

  const deleteActivity = () => {
    dispatch({ type: 'delete-Activity', payload: activity.id });
  }

  return (
    <div className='p-4 flex flex-col gap-2 rounded-md md:flex-row md:justify-between md:items-end bg-white shadow-md'>
      <div>
        <p className={`mb-4 py-1 px-4 inline-block uppercase font-bold text-white ${categoryObject.id === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
          {categoryObject.name}
        </p>
        <p className='text-xl font-bold capitalize'>{name}</p>
        <p className='text-4xl font-black text-lime-500'>{calories} Calorias</p>
      </div>

      <div className='flex gap-4'>
        <button>
          <PencilSquareIcon className='w-8 h-8 text-gray-700' />
        </button>

        <button
          onClick={deleteActivity}>
          <TrashIcon className='w-8 h-8 text-gray-700' />
        </button>
      </div>
    </div>
  )
}

export default Activity