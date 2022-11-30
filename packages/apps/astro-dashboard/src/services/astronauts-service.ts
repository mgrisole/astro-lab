import axios from "axios";
import {Astronaut} from "@astro-lab/definitions";

export const fetchAllAstronauts = async (): Promise<Astronaut[]> => {
  return await axios.post<Astronaut[]>('http://localhost:7654/astronauts/fetch-all').then(response => response.data)
}

export const deleteAstronaut = async (id: string) => {
  await axios.post('http://localhost:7654/astronauts/remove-one', {id})
}

export const createAstronaut = async (astronaut: Partial<Astronaut>) => {
  await axios.post('http://localhost:7654/astronauts/create', astronaut)
}
