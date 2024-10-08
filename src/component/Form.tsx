import { useState, ChangeEvent, FormEvent, Dispatch } from "react"
import { categorias } from "../data/data"
import { TActividad } from "../types";
import { ActividadAccion } from "../reducer/actividadReducer";
import { generarID } from "../helpers";

type FormProps = {
  dispatch: Dispatch<ActividadAccion>
}

const ESTADOS_INICIALES = {
  id: '',
  categoria: 1,
  actividad: '',
  calorias: 0
}

const Form = ({ dispatch }: FormProps) => {
  const [form, setForm] = useState<TActividad>(ESTADOS_INICIALES);
  const esActivo = form.actividad.trim() === '' || form.calorias <= 0

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    event.target.name === 'actividad'
      ? setForm({ ...form, [event.target.name]: event.target.value, id: generarID() })
      : setForm({ ...form, [event.target.name]: parseInt(event.target.value), id: generarID() })
  }

  const resetearForm = () => setForm(ESTADOS_INICIALES);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({ type: 'guardar-actividad', payload: { nuevaActividad: form } })

    resetearForm();
  }

  return (
    <section className="py-20 bg-lime-500">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 max-w-5xl mx-auto p-8 rounded-lg shadow-lg bg-white" >
        <div className="mb-4">
          <label
            htmlFor="categoria"
            className="mb-1 block font-bold uppercase">
            Categoria
          </label>

          <select
            name="categoria"
            id="categoria"
            value={form.categoria}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded-md leading-tight focus:outline-none">
            {
              categorias.map(categoria =>
                <option
                  key={categoria.id}
                  value={categoria.id}>
                  {categoria.name}
                </option>
              )
            }
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="actividad"
            className="mb-1 block font-bold uppercase">
            Actividad
          </label>

          <input
            type="text"
            name="actividad"
            id="actividad"
            autoComplete="off"
            placeholder="Ejemplo: Comida, Jugo de Naranja, Ensalada, Ejericio, Pesas, Bicicleta, etc."
            value={form.actividad}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded-md leading-tight focus:outline-none" />
        </div>

        <div className="mb-4">
          <label
            htmlFor="calorias"
            className="mb-1 block font-bold uppercase">
            Calorias
          </label>

          <input
            type="number"
            name="calorias"
            id="calorias"
            placeholder="Ejemplo: 100, 200, 300, etc."
            value={form.calorias}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded-md leading-tight focus:outline-none" />
        </div>

        <input
          type="submit"
          value={form.categoria === 1 ? 'Agregar Comida' : 'Agregar Ejercicio'}
          disabled={esActivo}
          className="w-full bg-gray-800 hover:bg-gray-900 text-white  font-bold py-2 cursor-pointer disabled:opacity-10 disabled:cursor-not-allowed" />
      </form>
    </section>
  )
}

export default Form