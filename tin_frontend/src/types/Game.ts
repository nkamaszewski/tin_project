import { DevStudio } from "./DevStudio";

export interface Game {
    id: string
    name: string
    releaseDate: Date
    description: string
    photoPath: string
    devStudio: DevStudio
}