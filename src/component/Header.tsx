import { toast } from "react-toastify";
import { useActivityStore } from "../store";

const Header = () => {
  const { activities, reset } = useActivityStore();
  const isEmtpy = activities.length === 0;

  const handleReset = () => {
    reset();
    toast.success('Contador reiniciado correctamente');
  }

  return (
    <header className="bg-lime-600">
      <div className="w-11/12 max-w-5xl mx-auto py-8 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <h1 className="text-4xl text-center font-bold text-white uppercase">Contador de Calorias</h1>

        <button
          disabled={isEmtpy}
          onClick={() => handleReset()}
          className="p-2 inline-block font-bold uppercase rounded-md text-white bg-black disabled:opacity-10 disabled:cursor-not-allowed">
          reiniciar
        </button>
      </div>
    </header>
  )
}

export default Header