import { Dispatch } from 'react';
import { ActivitydAction, TActivityState } from '../reducers/activityReducer';

type THeaderProps = {
  state: TActivityState,
  dispatch: Dispatch<ActivitydAction>;
}

const Header = ({ state, dispatch }: THeaderProps) => {
  return (
    <header className="p-4 bg-lime-600">
      <div className="w-11/12 max-w-4xl mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl text-center text-white font-bold uppercase">
          Contador de Calorias
        </h1>

        <button
          onClick={() => dispatch({ type: 'reset-Activity' })}
          disabled={state.activities.length === 0}
          className="px-4 py-2 rounded-md text-white bg-gray-800 hover:bg-black cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
          Resetar Actividades
        </button>
      </div>
    </header>
  )
}

export default Header