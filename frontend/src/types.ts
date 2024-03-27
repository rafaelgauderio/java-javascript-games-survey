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
    totalPage: number; 
    numberOfElements?:number;
    last?: boolean;
    first?: boolean;
}
