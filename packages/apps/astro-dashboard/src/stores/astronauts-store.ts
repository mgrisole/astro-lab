import {BehaviorSubject} from "rxjs";
import axios from "axios";
import {Astronaut} from "@astro-lab/definitions";
import {fetchAllAstronauts} from "../services/astronauts-service";

export const astronauts$ = new BehaviorSubject<Astronaut[]>([])

const astronauts  = await fetchAllAstronauts()
astronauts$.next(astronauts)
