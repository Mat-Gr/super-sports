export interface IProduct {
    id: number,
    name: string,
    category: string,
    price: number,
    oldprice?: number,
    description: string,
    rating: number,
    colors: Array<string>,
    sizes: Array<number>,
    heroimg: string,
    img2: string,
    img3: string
}
