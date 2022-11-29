import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/solid";
import {useObservableState} from "observable-hooks";
import {astronauts$} from "../stores/astronauts-store";

export function AstronautList() {

  const astronauts = useObservableState(astronauts$)

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" onChange={console.log}/>
            </label>
          </th>
          <th>Astronaut</th>
          <th>Planet</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {
          astronauts.map(astronaut =>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12">
                    <img src={astronaut.profile_pic}/>
                  </div>
                  <div className="font-bold">{astronaut.firstname} {astronaut.lastname}</div>
                </div>
              </td>
              <td>{astronaut.planet_id}</td>
              <td>
                <div className='flex gap-3 justify-center'>
                  <button>
                    <PencilSquareIcon className="h-5 w-5 hover:text-blue-500"/>
                  </button>
                  <button>
                    <TrashIcon className="h-5 w-5 hover:text-blue-500"/>
                  </button>
                </div>
              </td>
            </tr>
          )
        }
        </tbody>

      </table>

    </div>
  )
}
