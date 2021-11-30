import { Player } from "./player";
import { Rules } from "./rules";

export interface Lobby {
    id: number;
    displayName?: string;
    players: Player[];
    rules: Rules;
    selected?: boolean;
}
