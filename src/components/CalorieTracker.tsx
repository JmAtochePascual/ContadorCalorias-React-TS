import { TActivityState } from "../reducers/activityReducer"

type TCalorieTrackerProps = {
  state: TActivityState,
}

const CalorieTracker = ({ state }: TCalorieTrackerProps) => {
  const consumidas = state.activities.reduce((acc, activity) => activity.category === '1' ? acc + activity.calories : acc, 0);
  const quemadas = state.activities.reduce((acc, activity) => activity.category === '2' ? acc + activity.calories : acc, 0);
  const total = consumidas - quemadas;

  return (
    <div className="grid gap-12 md:grid-cols-3">
      <p className="text-center font-black text-6xl text-white">
        {consumidas}
        <span className="block text-lg">Consumidas</span>
      </p>

      <p className="text-center font-black text-6xl text-white">
        {quemadas}
        <span className="block text-lg">Ejercicio</span>
      </p>

      <p className="text-center font-black text-6xl text-white">
        {total}
        <span className={`block text-lg`}>Total</span>
      </p>
    </div>
  )
}

export default CalorieTracker