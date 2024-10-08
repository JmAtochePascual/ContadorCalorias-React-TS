import { categories } from "../data/data"
import { TActivity } from "../types"

type ActivityListProps = {
  activities: TActivity[]
}

const ActivityList = ({ activities }: ActivityListProps) => {

  const categoryName = (id: TActivity['category']) => categories.find(category => category.id === id)?.name

  return (
    <>
      {
        activities.length === 0
          ? <p className="text-center text-4xl font-extrabold text-gray-600">No hay actividades registradas...</p>
          : activities.map(activity =>
            <div
              key={activity.id}
              className="mb-4 p-4 flex justify-between items-center shadow-md rounded-md bg-white ">

              <div>
                <p className={`mb-1 px-4 py-1 inline-block font-bold text-white ${activity.category === 1 ? "bg-lime-500" : "bg-orange-500"}`}>
                  {categoryName(activity.category)}
                </p >
                <p className="text-lg font-bold uppercase text-gray-700"> {activity.name} </p>
                <p className="text-4xl font-extrabold text-lime-500"> {activity.calorie} Calorias</p>
              </div>

              <div>
                <button className="mr-2 p-2 bg-sky-600 text-white rounded-md">Editar</button>
                <button className="p-2 bg-rose-500 text-white rounded-md">Eliminar</button>
              </div>
            </div>


          )
      }
    </>
  )
}

export default ActivityList