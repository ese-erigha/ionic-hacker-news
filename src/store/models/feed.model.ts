export interface Feed{
    id: number,
    deleted: boolean,
    type: string,
    by: string,
    time: Date,
    text: string,
    dead: boolean,
    parent: number,
    poll: number,
    kids: Array<number>,
    url: string,
    score: number,
    title: string,
    parts: Array<number>,
    descendents: number
};