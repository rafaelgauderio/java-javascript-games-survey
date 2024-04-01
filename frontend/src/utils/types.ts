export type Platform = "PC" | "PALYSTATION" | "XBOX" | "WII" | "ATARI";

export type RecordItem = {
    id: number;
    moment: string;
    name: string;
    age: number;
    gameTitle: string;
    gamePlatform: Platform;
    genreName: string;
}

export type RecordsResponse = {
    content: RecordItem[];
    totalPages: number;
    numberOfElements?: number;
    last?: boolean;
    first?: boolean;
}

export type Game = {
    id: number,
    title: string,
    platform: Platform;
}

export type GraphicItem = {
    x: string;
    y: number;
}

