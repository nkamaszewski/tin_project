import { DevStudio } from "./DevStudio";

export interface Game {
    id: string
    name: string
    releaseDate: Date
    price: number
    description: string
    photoPath: string
    devStudio: DevStudio
}