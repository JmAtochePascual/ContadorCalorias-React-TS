import { toast } from 'react-toastify';
import { useState, ChangeEvent, FormEvent, useEffect } from "react"
import { categories } from "../data/data"
import { TActivity } from "../types";
import { generarID } from "../helpers";
import { useActivityStore } from '../store';

const INITIAL_STATE: TActivity = { id: '', category: 1, name: '', calorie: 0 }

const Form = () => {
  const { activities, activeId, addActivity, editActivity } = useActivityStore();
  const [activity, setActivity] = useState<TActivity>(INITIAL_STATE);
  const isActive = activity.name.trim() === '' || activity.calorie <= 0;

  // Actualiza el formulario si se selecciona una actividad
  useEffect(() => {
    if (activeId) {
      const selectActivity = activities.find(activity => activity.id === activeId);
      if (selectActivity) setActivity(selectActivity);
    }
  }, [activeId])

  // Maneja los cambios en los inputs
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    event.target.name === 'name'
      ? setActivity({ ...activity, [event.target.name]: event.target.value })
      : setActivity({ ...activity, [event.target.name]: parseInt(event.target.value) })
  }

  // Resetea el formulario
  const resetearForm = () => setActivity(INITIAL_STATE);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Valida si es una edición o una nueva actividad
    if (activeId) {
      editActivity(activity);
      toast.success('Actividad actualizada correctamente');
    } else {
      addActivity({ ...activity, id: generarID() });
      toast.success('Actividad agregada correctamente');
    }

    // Resetear formulario
    resetearForm();
  }

  return (
    <section className="py-20 bg-lime-500">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 max-w-5xl mx-auto p-8 rounded-lg shadow-lg bg-white" >
        <div className="mb-4">
          <label
            htmlFor="category"
            className="mb-1 block font-bold uppercase">
            Categoria
          </label>

          <select
            name="category"
            id="category"
            value={activity.category}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded-md leading-tight focus:outline-none">
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

        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-1 block font-bold uppercase">
            Actividad
          </label>

          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="Ejemplo: Comida, Jugo de Naranja, Ensalada, Ejericio, Pesas, Bicicleta, etc."
            value={activity.name}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded-md leading-tight focus:outline-none" />
        </div>

        <div className="mb-4">
          <label
            htmlFor="calorie"
            className="mb-1 block font-bold uppercase">
            Calorias
          </label>

          <input
            type="number"
            name="calorie"
            id="calorie"
            min="0"
            placeholder="Ejemplo: 100, 200, 300, etc."
            value={activity.calorie}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded-md leading-tight focus:outline-none" />
        </div>

        <input
          type="submit"
          value={activity.category === 1 ? 'Agregar Comida' : 'Agregar Ejercicio'}
          disabled={isActive}
          className="w-full bg-gray-800 hover:bg-gray-900 text-white  font-bold py-2 cursor-pointer disabled:opacity-10 disabled:cursor-not-allowed" />
      </form>
    </section>
  )
}

export default Form