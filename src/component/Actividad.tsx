import { categorias } from "../data/data"
import { TActividad } from "../types"

type ActividadProps = {
  actividad: TActividad
}

const Actividad = ({ actividad }: ActividadProps) => {
  const categoriaNombre = categorias.find(categoria => categoria.id === actividad.categoria)?.name

  return (
    <div className="mb-4 p-4 flex justify-between items-center rounded-md bg-white shadow-lg">
      <div>
        <p className={`mb-2 py-1 px-4 inline-block font-bold uppercase text-center text-white ${actividad.categoria === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>{categoriaNombre}</p>
        <p className="text-lg font-bold uppercase text-gray-600">{actividad.actividad}</p>
        <p className="text-2xl font-black text-lime-500">Calorias: {actividad.calorias}</p>
      </div>

      <div>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md">Eliminar</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">Editar</button>
      </div>
    </div>
  )
}

export default Actividad