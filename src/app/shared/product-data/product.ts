interface IOptions {
    color: string;
    sizes: Array<number>;
}

export interface IProduct {
    id: number,
    name: string,
    category: string,
    price: number,
    oldprice?: number,
    description: string,
    rating: number,
    options: Array<IOptions>,
    heroimg: string,
    img2: string,
    img3: string,
    brandimg: string
}
