import { TActivity } from "../types";

type ActivitySummaryProps = {
  activities: TActivity[];
}

const ActivitySummary = ({ activities }: ActivitySummaryProps) => {
  const consumed = activities.reduce((acc, activity) => activity.category === 1 ? acc + activity.calorie : acc, 0);
  const exercises = activities.reduce((acc, activity) => activity.category === 2 ? acc + activity.calorie : acc, 0);
  const differences = consumed - exercises;

  return (
    <section className="py-10 bg-gray-800">
      <div className="w-11/12 max-w-5xl mx-auto">
        <h2 className="mb-20 text-center font-bold text-3xl text-white">Resumen de Actividades</h2>

        <div className="grid grid-cols-3 justify-center">
          <div className="">
            <p className="text-5xl font-bold text-center text-white">{consumed}</p>
            <p className="font-bold text-center text-white">Consumidas</p>
          </div>

          <div className="">
            <p className="text-5xl font-bold text-center text-white">{exercises}</p>
            <p className="font-bold text-center text-white">Ejercicios</p>
          </div>

          <div className="">
            <p className="text-5xl font-bold text-center text-white">{differences}</p>
            <p className="font-bold text-center text-white">Diferencias</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivitySummary