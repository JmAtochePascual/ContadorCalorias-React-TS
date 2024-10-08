import { categorias } from "../data/data"

const Form = () => {
  return (
    <section className="py-20 bg-lime-500">
      <form className="w-11/12 max-w-5xl mx-auto p-8 rounded-lg shadow-lg bg-white" >
        <div className="mb-4">
          <label
            htmlFor="categoria"
            className="mb-1 block font-bold uppercase">
            Categoria
          </label>

          <select
            name="categoria"
            id="categoria"
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
            placeholder="Ejemplo: Comida, Jugo de Naranja, Ensalada, Ejericio, Pesas, Bicicleta, etc."
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
            className="w-full p-2 border border-slate-300 rounded-md leading-tight focus:outline-none" />
        </div>

        <input
          type="submit"
          value="Agregar Actividad o Comida"
          className="w-full bg-gray-800 hover:bg-gray-900 text-white uppercase font-bold py-2 px-4 cursor-pointer" />
      </form>
    </section>
  )
}

export default Form