import {
  CheckCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { Car } from "../../store/slices/carsSlice";

interface ListProps {
  list: Car[];
  handleCarDelete?: (id) => void;
}
export default function GridList({ list, handleCarDelete }: ListProps) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {list.map((item) => (
        <li
          key={item.id}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {item.carName}
                </h3>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">
                $ {item.carCost}
              </p>
            </div>
            <button
              className="inline-flex items-center gap-x-2 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              onClick={() => handleCarDelete(item)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
