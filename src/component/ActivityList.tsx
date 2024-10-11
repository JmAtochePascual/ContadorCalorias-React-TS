import { Dispatch } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"

import { TActivity } from "../types"
import { categories } from "../data/data"
import { ActivityAction } from "../reducer/actividadReducer";

type ActivityListProps = {
  activities: TActivity[];
  dispatch: Dispatch<ActivityAction>;
}

const ActivityList = ({ activities, dispatch }: ActivityListProps) => {

  const categoryName = (id: TActivity['category']) => categories.find(category => category.id === id)?.name

  return (
    <>
      {
        activities.length === 0
          ? <p className="text-center text-gray-600">No hay actividades registradas...</p>
          : activities.map(activity =>
            <div
              key={activity.id}
              className="mb-4 p-4 flex flex-col gap-4 shadow-md rounded-md bg-white md:flex-row md:justify-between md:items-center">

              <div>
                <p className={`mb-1 px-4 py-1 font-bold text-center text-white ${activity.category === 1 ? "bg-lime-500" : "bg-orange-500"} md:inline-block`}>
                  {categoryName(activity.category)}
                </p >
                <p className="text-center text-lg font-bold uppercase text-gray-700 md:text-start"> {activity.name} </p>
                <p className="text-center text-4xl font-extrabold text-lime-500 md:text-start" > {activity.calorie} Calorias</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => dispatch({ type: 'set-activeId', payload: { id: activity.id } })}
                  className="w-full p-2 flex gap-1 justify-center bg-sky-600 text-white rounded-md">
                  Editar
                  <PencilSquareIcon className="w-6 h-6 inline-block" />
                </button>

                <button
                  onClick={() => dispatch({ type: 'delete-activity', payload: { id: activity.id } })}
                  className="w-full p-2 flex justify-center gap-1 bg-rose-500 text-white rounded-md">
                  Eliminar
                  <TrashIcon className="w-6 h-6 inline-block" />
                </button>
              </div>
            </div>
          )
      }
    </>
  )
}

export default ActivityList