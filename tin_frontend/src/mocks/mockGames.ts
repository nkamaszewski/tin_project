import { Game } from "../types/Game";
import { generateID } from "../utils/generateId";
import { mockDevStudios } from "./mockDevStudios";

export const mockGames: Game[] = [
    {id: generateID(), name: 'Doom 2: hell on earth', description: 'Doom II: Hell on Earth is a first-person shooter game by id Software. It was originally released for MS-DOS computers in 1994 and Macintosh computers in 1995. Unlike the original Doom, which was initially only available through shareware and mail order, Doom II was sold in stores. Master Levels for Doom II, an expansion pack with 21 new levels, was released on December 26, 1995', devStudio: mockDevStudios[0], photoPath: '', releaseDate: new Date(30,09,1994)},
    {id: generateID(), name: 'Wolfenstein', description: 'Wolfenstein is a series of World War II video games. It was originally created by Muse Software, before being revived by id Software. The first two games in the series, Castle Wolfenstein and Beyond Castle Wolfenstein, were developed by Muse Software and focused on stealth-based gameplay from a top-down perspective.', devStudio: mockDevStudios[0], photoPath: '', releaseDate: new Date(1992)},
    {id: generateID(), name: 'Diablo', description: 'Diablo is an action role-playing hack and slash video game developed by Blizzard North and released by Blizzard Entertainment in January 1997.', devStudio: mockDevStudios[1], photoPath: '', releaseDate: new Date(3, 1, 1997)},
    {id: generateID(), name: 'Warcraft', description: 'Warcraft is a franchise of video games, novels, and other media created by Blizzard Entertainment.', devStudio: mockDevStudios[1], photoPath: '', releaseDate: new Date(23, 11, 1994)},
    {id: generateID(), name: 'Starcraft', description: 'StarCraft (SC) is a real-time strategy (RTS) computer game introduced by Blizzard Entertainment in 1998.', devStudio: mockDevStudios[1], photoPath: '', releaseDate: new Date(28, 3, 1998)},
]