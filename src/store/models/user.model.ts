export interface User{
    id: number,
    delay: number,
    created: Date,
    karma: number,
    about: string,
    submitted: Array<number>
}