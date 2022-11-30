import {BehaviorSubject} from "rxjs";
import axios from "axios";
import {Planet} from "@astro-lab/definitions";

export const planets$ = new BehaviorSubject<Planet[]>([])

const planets  = await axios.post<Planet[]>('http://localhost:7654/planets/fetch-all').then(response => response.data)
planets$.next(planets)
