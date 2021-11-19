
export enum LobbyType {
    PUBLIC=0,
    PRIVATE=1
}

export type TabType = 'game' | LobbyType.PRIVATE | LobbyType.PUBLIC;
