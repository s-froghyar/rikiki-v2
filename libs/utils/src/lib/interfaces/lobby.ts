import { Player } from "./player";
import { RikikiRules } from "./rules";

export interface Lobby {
    id: number;
    displayName?: string;
    players: Player[];
    rules: RikikiRules;
    selected?: boolean;
}



export interface LobbyPlayer {
    id: string;
    name: string;
    isReady: boolean;
}
export interface LobbyDto {
    adminUserId: string;
    lobbyIconId: number;
    lobbyId: string;
    lobbyName: string;
    players: LobbyPlayer[];
    rules: RikikiRules;
}

export class DisplayedLobby {
    id!: number;
    lobbyId: string;
    adminId: string;
    name!: string;
    players: LobbyPlayer[] = [];
    rules: RikikiRules;
    selected = false;
    constructor(dto: LobbyDto, displayedId: number) {
        this.id = displayedId;
        this.lobbyId = dto.lobbyId;
        this.adminId = dto.adminUserId;
        this.name = dto.lobbyName;
        this.players = dto.players;
        this.rules = dto.rules;
    }
}