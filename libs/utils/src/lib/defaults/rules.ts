import { Rule } from "../interfaces/rules";
// type: RuleType;
// displayName: string;
// value: any;
// info?: string;

export const defaultGameRules: Rule[] = [
    {
        id: 'max_cards',
        type: 'num',
        displayName: 'Max Cards',
        value: 10,
        info: 'Set the maximum number of cards the game should reach before reversing.'
    },
    {
        id: 'start_order',
        type: 'toggle',
        displayName: 'Asc. order',
        value: true,
        info: 'Set the order the game should start with. (default: 1 -> Max card -> 1)'
    },
    {
        id: 'dealer_rebet',
        type: 'toggle',
        displayName: 'Dealer Rebet',
        value: true,
        info: 'In case the number of bets are the same as the number of cards dealt that round, the dealer will need to change their bet.'
    },
    {
        id: 'obl_hit',
        type: 'toggle',
        displayName: 'Obl. to hit',
        value: true,
        info: 'Players are obligated to hit ( = place a card that is higher in value than the current round\'s highest).'
    },
];

export const defaultLobbyRules: Rule[] = [
    {
        id: 'is_private',
        type: 'toggle',
        displayName: 'Private',
        value: true,
        info: 'Set the lobby to require a password to join.'

    },
    {
        id: 'max_players',
        type: 'num',
        displayName: 'Max Players',
        value: 5,
        info: 'Set the maximum number of players in the lobby.'
    }
];