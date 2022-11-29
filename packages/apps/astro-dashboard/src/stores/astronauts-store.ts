import {BehaviorSubject} from "rxjs";
import {Astronaut} from "@astro-lab/prisma-client";
import axios from "axios";

export const astronauts$ = new BehaviorSubject<Astronaut[]>([])

axios.post('http://localhost:7654/astronaut-manager/fetch-all').then(response => astronauts$.next(response.data))

