import { dataList } from '../db/eatsy'
import { Item } from './dataTypes'


export const formItems: Item[] = dataList.map((obj) => ({
    listing_id: obj.listing_id,
    url: obj.url || 'htttps://test-card.test',
    MainImage: obj.MainImage ? obj.MainImage.url_570xN : 'http://alfa.dev-top-it.ru/local/templates/alpha/img/nophoto.jpg',
    title: obj.title || 'Test title',
    currency_code: obj.currency_code || 'N/A',
    price: obj.price || '00.00',
    quantity: obj.quantity || 0
}))