import { Game } from "../types/Game";
import { generateID } from "../utils/generateId";
import { mockDevStudios } from "./mockDevStudios";
import doom2 from "../assets/img/doom2.jpg";
import wolfenstein from "../assets/img/wolfenstein.jpg";
import diablo from "../assets/img/diablo.jpg";
import warcraft from "../assets/img/warcraft.jpg";
import starcraft from "../assets/img/starcraft.jpg";

export const mockGames: Game[] = [
    {id: '231csddsadas', name: 'Doom 2: hell on earth', price: 5.00, description: 'Doom II: Hell on Earth is a first-person shooter game by id Software. It was originally released for MS-DOS computers in 1994 and Macintosh computers in 1995. Unlike the original Doom, which was initially only available through shareware and mail order, Doom II was sold in stores. Master Levels for Doom II, an expansion pack with 21 new levels, was released on December 26, 1995', devStudio: mockDevStudios[0], photoPath: doom2, releaseDate: new Date("09-30-1994")},
    {id: '564jkm344', name: 'Wolfenstein', price: 2.99, description: 'Wolfenstein is a series of World War II video games. It was originally created by Muse Software, before being revived by id Software. The first two games in the series, Castle Wolfenstein and Beyond Castle Wolfenstein, were developed by Muse Software and focused on stealth-based gameplay from a top-down perspective.', devStudio: mockDevStudios[0], photoPath: wolfenstein, releaseDate: new Date("01-01-1992")},
    {id: '239ddwwlop2333', name: 'Diablo', price: 6.00, description: 'Diablo is an action role-playing hack and slash video game developed by Blizzard North and released by Blizzard Entertainment in January 1997.', devStudio: mockDevStudios[1], photoPath: diablo, releaseDate: new Date("01-03-1997")},
    {id: '09lkda234mm', name: 'Warcraft', price: 7.00, description: 'Warcraft is a franchise of video games, novels, and other media created by Blizzard Entertainment.', devStudio: mockDevStudios[1], photoPath: warcraft, releaseDate: new Date("11-23-1994")},
    {id: '09dask23189fs', name: 'Starcraft', price: 10.00, description: 'StarCraft (SC) is a real-time strategy (RTS) computer game introduced by Blizzard Entertainment in 1998.', devStudio: mockDevStudios[1], photoPath: starcraft, releaseDate: new Date("03-28-1998")},
]