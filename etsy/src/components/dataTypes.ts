export type Item = {
    listing_id: number,
    url: string,
    MainImage: string,
    title: string,
    currency_code: string,
    price: string,
    quantity: number
}

export type Currency = {
    CAD: string,
    GBP: string,
    EUR: string,
    USD: string,
    [key: string]: string
}


export type propsFromList = {
    items: Item[]
}