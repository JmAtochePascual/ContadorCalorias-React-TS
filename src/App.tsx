import Form from "./components/Form"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Header />

      <main className="bg-lime-500">
        <section className="w-11/12 mx-auto py-20">
          <Form />
        </section>
      </main>
    </>
  )
}

export default App
