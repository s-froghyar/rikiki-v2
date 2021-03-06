export interface RikikiRules {
    isAscending: boolean;
    utesKenyszer: boolean;
    dealerRebet: boolean;
    maxCards: number;
}



export type RuleType = 'toggle' | 'num';

export interface Rule {
    id: string;
    type: RuleType;
    displayName: string;
    value: any;
    info?: string;
}
