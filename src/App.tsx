import { useReducer } from "react"
import { activityReducer, initialState } from "./reducer/actividadReducer"
import Header from "./component/Header"
import Form from "./component/Form"
import ActivityList from "./component/ActivityList"
import ActivitySummary from "./component/ActivitySummary"


function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <>
      <Header
        activities={state.activities}
        dispatch={dispatch}
      />

      <Form
        dispatch={dispatch}
        state={state}
      />

      <ActivitySummary
        activities={state.activities}
      />

      <section className="py-20">
        <div className="w-11/12 max-w-5xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-600">Comida y Actividades</h2>

          <ActivityList
            activities={state.activities}
            dispatch={dispatch}
          />
        </div>
      </section>
    </>
  )
}

export default App
