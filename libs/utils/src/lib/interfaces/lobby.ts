import { Player } from "./player";
import { RikikiRules } from "./rules";

export interface Lobby {
    id: number;
    displayName?: string;
    players: Player[];
    rules: RikikiRules;
    selected?: boolean;
}
