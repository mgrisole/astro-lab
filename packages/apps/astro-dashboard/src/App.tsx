import { AstronautEditionModal } from './components/AstronautEditionModal';
import {AstronautList} from "./components/astronaut-list";

function App() {

  // const astronauts: Astronaut[] = [
  //   {id: 'BB789275-3D6E-47AD-B9AB-E80F142248DC', profilePic: 'https://doodleipsum.com/100x100/avatar?shape=circle&bg=lightgray&n=1', firstname: 'Jean', lastname: 'Bartik', planet: 'Sunaru'},
  //   {id: '4F038669-8107-4C38-8F13-3DB52DE2684D', profilePic: 'https://doodleipsum.com/100x100/avatar?shape=circle&bg=lightgray&n=2', firstname: 'Alain', lastname: 'Touring', planet: 'Eleven'},
  //   {id: '0CCAA0E2-6DB5-4130-993E-506DD815BD62', profilePic: 'https://doodleipsum.com/100x100/avatar?shape=circle&bg=lightgray&n=3', firstname: 'Kristof', lastname: 'Mahaie', planet: 'Sunev'},
  //   {id: '90762351-DEB7-4DBA-899B-0814EA5B2724', profilePic: 'https://doodleipsum.com/100x100/avatar?shape=circle&bg=lightgray&n=4', firstname: 'Marie', lastname: 'Curry', planet: 'Eleven'},
  // ]

  return (
    <div className="p-4 md:p-12">

      <AstronautList />

      {/*<AstronautEditionModal astronaut={astronauts[0]} />*/}
    </div>
  )
}

export default App
