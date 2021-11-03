export interface Book {
    _id: number,
    title: string,
    year_written: number,
    edition: string,
    price: number,
    author : { name : string, nationality : string},
    tags: string[];
}
