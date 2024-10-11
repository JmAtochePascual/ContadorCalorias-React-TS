import { Dispatch } from "react"
import { ActivityAction } from "../reducer/actividadReducer"
import { TActivity } from "../types"

type HeaderProps = {
  activities: TActivity[],
  dispatch: Dispatch<ActivityAction>,
}

const Header = ({ activities, dispatch }: HeaderProps) => {
  const isEmtpy = activities.length === 0;

  return (
    <header className="bg-lime-600">
      <div className="w-11/12 max-w-5xl mx-auto py-8 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <h1 className="text-4xl text-center font-bold text-white uppercase">Contador de Calorias</h1>

        <button
          disabled={isEmtpy}
          onClick={() => dispatch({ type: 'reset' })}
          className="p-2 inline-block font-bold uppercase rounded-md text-white bg-black disabled:opacity-10 disabled:cursor-not-allowed">
          reiniciar
        </button>
      </div>
    </header>
  )
}

export default Header