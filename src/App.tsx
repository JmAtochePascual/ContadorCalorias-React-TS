import { useReducer } from "react"
import Form from "./component/Form"
import Header from "./component/Header"
import { actividadReducer, estadoInicial } from "./reducer/actividadReducer"
import Actividad from "./component/Actividad";


function App() {
  const [estado, dispatch] = useReducer(actividadReducer, estadoInicial);

  return (
    <>
      <Header />

      <Form
        dispatch={dispatch}
      />

      <section className="py-20">
        <div className="w-11/12 max-w-5xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-600">Comida y Actividades</h2>

          {
            estado.actividades.length === 0
              ? <p className="text-center text-lg text-gray-500 mt-4">No hay actividades</p>
              : <>
                {
                  estado.actividades.map(actividad =>
                    <Actividad
                      key={actividad.id}
                      actividad={actividad}
                    />
                  )
                }
              </>
          }
        </div>
      </section>
    </>
  )
}

export default App
