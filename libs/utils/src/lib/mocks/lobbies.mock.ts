import { Lobby } from "../interfaces/lobby";
import { Rules } from "../interfaces/rules";
import { mockLobbyPlayers } from "./players.mock";

export const baseRules: Rules = {
    isAscending: true,
    dealerRebet: false,
    utesKenyszer: true,
    maxCards: 10
}

export const mockLobbies: Lobby[] = [
    {
        id: 1,
        players: mockLobbyPlayers,
        rules: baseRules
    },
    {
        id: 2,
        players: mockLobbyPlayers,
        rules: baseRules
    },
    {
        id: 3,
        players: mockLobbyPlayers,
        rules: baseRules
    }
]