import { v4 as uuidv4 } from 'uuid';

import { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { categories, RECORD_INITIAL } from "../data/categories"
import { TRecord } from '../types/index';
import { RecordAction } from '../reducers/recordReducer';

type TFromProps = {
  dispatch: Dispatch<RecordAction>;
}

const Form = ({ dispatch }: TFromProps) => {
  const [record, setRecord] = useState<TRecord>(RECORD_INITIAL);
  const isRecordValid = [record.category, record.activity.trim(), record.calories].every(Boolean) && record.calories > 0;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setRecord({ ...record, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({
      type: 'addRecord',
      payload: { ...record, activity: record.activity.trim(), calories: +record.calories, id: uuidv4() }
    });

    // Reset form
    setRecord(RECORD_INITIAL);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-11/12 max-w-4xl mx-auto p-4 flex flex-col gap-2 rounded-lg shadow-md bg-white">

      <div>
        <label
          htmlFor="category"
          className="block font-bold text-gray-600">
          Categoria:
        </label>
        <select
          name="category"
          id="category"
          value={record.category}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md outline-none cursor-pointer text-center">
          <option value="">-- Seleccione una categoria --</option>
          {
            categories.map(category =>
              <option
                key={category.id}
                value={category.id}>
                {category.name}
              </option>
            )
          }
        </select>
      </div>

      <div>
        <label
          htmlFor="activity"
          className="block font-bold text-gray-600">
          Actividad:
        </label>
        <input
          type="text"
          name="activity"
          id="activity"
          placeholder="Ej. Correr 5km, 30 minutos de yoga, Jugo de naranja, etc."
          value={record.activity}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md outline-none" />
      </div>

      <div>
        <label
          htmlFor="calories"
          className="block font-bold text-gray-600">
          Calorias:
        </label>
        <input
          type="number"
          name="calories"
          id="calories"
          placeholder="Ej. 150"
          value={record.calories}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md outline-none" />
      </div>

      <input
        type="submit"
        value={`${record.category ? record.category === '1' ? 'Agregar Comida' : 'Agregar Ejercicio' : 'Agregar'}`}
        disabled={!isRecordValid}
        className="w-full p-2 mt-4 cursor-pointer uppercase bg-black text-white font-bold disabled:opacity-20 disabled:cursor-not-allowed"
      />
    </form>
  )
}

export default Form