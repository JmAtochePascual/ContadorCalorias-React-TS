import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, Dispatch, FormEvent, useEffect, useState } from "react";
import { categories, INITIAL_ACTIVITY } from "../data/categories"
import { TActivity } from '../types/index';
import { ActivitydAction, TActivityState } from '../reducers/activityReducer';

type TFromProps = {
  state: TActivityState,
  dispatch: Dispatch<ActivitydAction>;
}

const Form = ({ state, dispatch }: TFromProps) => {
  const [activity, setActivity] = useState<TActivity>(INITIAL_ACTIVITY);
  const isActivityValid = [activity.category, activity.name.trim(), activity.calories].every(Boolean) && activity.calories > 0;

  useEffect(() => {
    if (state.activeId) {
      const activity = state.activities.filter(activity => activity.id === state.activeId)[0];
      setActivity(activity);
    }
  }, [state.activeId, state.activities])

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setActivity({ ...activity, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (state.activeId) {
      dispatch({ type: 'edit-Activity', payload: { ...activity, name: activity.name.trim(), calories: +activity.calories, id: state.activeId } });
    } else {
      dispatch({ type: 'add-Activity', payload: { ...activity, name: activity.name.trim(), calories: +activity.calories, id: uuidv4() } });
    }

    // Reset form
    setActivity(INITIAL_ACTIVITY);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-11/12 max-w-4xl mx-auto p-4 flex flex-col gap-2 rounded-lg shadow-md bg-white">

      <div>
        <label
          htmlFor="category"
          className="block font-bold text-gray-600">
          Categoria:
        </label>
        <select
          name="category"
          id="category"
          value={activity.category}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md outline-none cursor-pointer text-center">
          <option value="">-- Seleccione una categoria --</option>
          {
            categories.map(category =>
              <option
                key={category.id}
                value={category.id}>
                {category.name}
              </option>
            )
          }
        </select>
      </div>

      <div>
        <label
          htmlFor="name"
          className="block font-bold text-gray-600">
          Actividad:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Ej. Correr 5km, 30 minutos de yoga, Jugo de naranja, etc."
          value={activity.name}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md outline-none" />
      </div>

      <div>
        <label
          htmlFor="calories"
          className="block font-bold text-gray-600">
          Calorias:
        </label>
        <input
          type="number"
          name="calories"
          id="calories"
          placeholder="Ej. 150"
          value={activity.calories}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md outline-none" />
      </div>

      <input
        type="submit"
        value={`${activity.category ? activity.category === '1' ? 'Agregar Comida' : 'Agregar Ejercicio' : 'Agregar'}`}
        disabled={!isActivityValid}
        className="w-full p-2 mt-4 cursor-pointer uppercase bg-black text-white font-bold disabled:opacity-20 disabled:cursor-not-allowed"
      />
    </form>
  )
}

export default Form