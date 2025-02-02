import { useEffect, useReducer } from 'react';
import Form from "./components/Form"
import Header from "./components/Header"
import { activityReducer, initialState } from "./reducers/activityReducer"
import Activity from "./components/Activity"
import CalorieTracker from './components/CalorieTracker';

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  const isActivitiesEmpty = state.activities.length === 0;

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities));
  }, [state.activities])

  return (
    <>
      <Header
        state={state}
        dispatch={dispatch}
      />

      <main className="bg-lime-500">
        <section className="w-11/12 mx-auto py-20">
          <Form
            state={state}
            dispatch={dispatch}
          />
        </section>
      </main>

      <section className='mb-10 py-10 bg-gray-800'>
        <div className="w-11/12 max-w-4xl mx-auto">
          <h2 className='mb-8 text-3xl font-black text-center text-white md:text-4xl'> Resumen de Calorias</h2>

          <CalorieTracker
            state={state}
          />
        </div>
      </section>

      <section className="w-11/12 max-w-4xl mx-auto p-4">
        <h2 className="mb-8 text-4xl text-center font-bold text-gray-700">Listado de Actividades</h2>

        {
          isActivitiesEmpty
            ? <p className="text-center text-gray-500">No hay actividades registradas </p>
            : <div className="flex flex-col gap-4 ">
              {
                state.activities.map(activity =>
                  <Activity
                    key={activity.id}
                    activity={activity}
                    dispatch={dispatch}
                  />
                )}
            </div>
        }
      </section>
    </>
  )
}

export default App
