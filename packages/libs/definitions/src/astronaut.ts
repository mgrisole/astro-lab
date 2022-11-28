import { Planet } from "./utils";

export type Astronaut = {
  id: string;
  profilePic: string;
  firstname: string;
  lastname: string;
  planet: Planet;
}