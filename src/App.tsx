import { useEffect, useReducer } from 'react';
import { activityReducer, initialState } from "./reducer/activityReducer"
import { ActiviyList, CalorieTracker, Form, Header } from './components';

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

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

      <section className="w-11/12 max-w-4xl mx-auto mb-8 p-4">
        <h2 className="mb-8 text-4xl text-center font-bold text-gray-700">Listado de Actividades</h2>

        <ActiviyList
          state={state}
          dispatch={dispatch}
        />
      </section>

      <footer className='py-4 bg-lime-600'>
        <p className="p-4 text-center md:text-start"> <span className="font-bold">JMCode</span> | ©2025 - Transformando ideas en realidad.</p>
      </footer>
    </>
  )
}

export default App
