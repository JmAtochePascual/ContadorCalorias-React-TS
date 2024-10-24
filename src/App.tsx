import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./component/Header"
import Form from "./component/Form"
import ActivityList from "./component/ActivityList"
import ActivitySummary from "./component/ActivitySummary"

function App() {
  return (
    <>
      <Header />

      <Form />

      <ActivitySummary />

      <section className="py-20">
        <div className="w-11/12 max-w-5xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-600">Comida y Actividades</h2>
          <ActivityList />
        </div>
      </section>

      <ToastContainer />
    </>
  )
}

export default App
