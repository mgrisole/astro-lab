import { Astronaut } from './definitions/astronaut'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { AstronautEditionModal } from './AstronautEditionModal';

function App() {

  const astronauts: Astronaut[] = [
    {id: 'BB789275-3D6E-47AD-B9AB-E80F142248DC', profilePic: 'https://doodleipsum.com/100x100/avatar?shape=circle&bg=lightgray&n=1', firstname: 'Jean', lastname: 'Bartik', planet: 'Sunaru'},
    {id: '4F038669-8107-4C38-8F13-3DB52DE2684D', profilePic: 'https://doodleipsum.com/100x100/avatar?shape=circle&bg=lightgray&n=2', firstname: 'Alain', lastname: 'Touring', planet: 'Eleven'},
    {id: '0CCAA0E2-6DB5-4130-993E-506DD815BD62', profilePic: 'https://doodleipsum.com/100x100/avatar?shape=circle&bg=lightgray&n=3', firstname: 'Kristof', lastname: 'Mahaie', planet: 'Sunev'},
    {id: '90762351-DEB7-4DBA-899B-0814EA5B2724', profilePic: 'https://doodleipsum.com/100x100/avatar?shape=circle&bg=lightgray&n=4', firstname: 'Marie', lastname: 'Curry', planet: 'Eleven'},
    {id: '8F7C3953-6FFD-469C-A3E8-8A6523A87B34', profilePic: 'https://doodleipsum.com/100x100/avatar?shape=circle&bg=lightgray&n=5', firstname: 'Jason', lastname: 'Quantum', planet: 'Yrucrem'}
  ]

  return (
    <div className="p-4 md:p-12">
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
                        <img src={astronaut.profilePic}/>
                      </div>
                      <div className="font-bold">{astronaut.firstname} {astronaut.lastname}</div>
                    </div>
                  </td>
                  <td>{astronaut.planet}</td>
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

        <AstronautEditionModal astronaut={astronauts[0]} />
      </div>
    </div>
  )
}

export default App
