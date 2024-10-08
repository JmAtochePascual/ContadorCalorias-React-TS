import { useReducer } from "react"
import Form from "./component/Form"
import Header from "./component/Header"
import { actividadReducer, estadoInicial } from "./reducer/actividadReducer"


function App() {
  const [estado, dispatch] = useReducer(actividadReducer, estadoInicial);

  return (
    <>
      <Header />

      <Form
        dispatch={dispatch}
      />
    </>
  )
}

export default App
