import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../../store";
import { FormInitialStateProps } from "../../store/slices/formSlice";

type FormValues = {
  carName: string;
  carCost: number;
  email: string;
  // carimage?: FileList;
};

const Form = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const dispatch = useDispatch();
  const { carName, carCost } = useSelector(
    (state: { form: FormInitialStateProps }) => {
      return {
        carName: state.form.carName,
        carCost: state.form.carCost,
      };
    }
  );
  // const cost = useSelector(
  //   (state: { cars: { Car: { cost: number } }[] }) => state.cars[0]?.Car?.cost
  // );

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCarCost = (e) => {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(addCar({ carName: data.carName, carCost: data.carCost }));
    () => reset();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
      >
        <h1 className="p-4 flex justify-center font-bold text-lg">
          Add New Car
        </h1>
        <div className="px-4  sm:p-8">
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-carName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First carName
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register("carName")}
                  onChange={handleNameChange}
                  value={carName}
                  className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="Cost"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Car Cost
              </label>
              <div className="mt-2">
                <input
                  value={carCost || ""}
                  type="number"
                  {...register("carCost")}
                  onChange={handleCarCost}
                  className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* <div className="sm:col-span-3">
              <label
                htmlFor="car-model"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Car Image
              </label>
              <div className="mt-2">
                <input
                  // value={carName}
                  {...register("carimage")}
                  type="file"
                  name="car-model"
                  id="car-model"
                  className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
