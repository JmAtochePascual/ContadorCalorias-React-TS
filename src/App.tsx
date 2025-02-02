import { useReducer } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import { activityReducer, initialState } from "./reducers/activityReducer"

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
      <Header />

      <main className="bg-lime-500">
        <section className="w-11/12 mx-auto py-20">
          <Form
            dispatch={dispatch}
          />
        </section>
      </main>
    </>
  )
}

export default App
