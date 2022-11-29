import {BehaviorSubject} from "rxjs";
import axios from "axios";
import {Astronaut} from "@astro-lab/definitions";

export const astronauts$ = new BehaviorSubject<Astronaut[]>([])

axios.post('http://localhost:7654/astronaut-manager/fetch-all').then(response => astronauts$.next(response.data))
