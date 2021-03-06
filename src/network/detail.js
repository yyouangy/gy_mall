import { request } from './request'

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request({
        url: '/recommend'
    })
}


export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.lowNowPrice = itemInfo.lowNowPrice

        // this.title = itemInfo.title
        // this.desc = itemInfo.desc
        // this.discount = itemInfo.discountDesc
        // this.discountBgColor = itemInfo.discountBgColor
        // this.oldPrice = itemInfo.oldPrice
        // this.newPrice = itemInfo.price
        // this.lowNowPrice = itemInfo.lowNowPrice
        // this.columns = columns
        // this.services = services
    }

}

export class Shop {
    constructor(shopInfo) {
        this.name = shopInfo.name
        this.logo = shopInfo.shopLogo
        this.allGoodsUrl = shopInfo.allGoodsUrl
        this.cFans = shopInfo.cFans
        this.goodsCount = shopInfo.cGoods
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
    }
}

export class GoodsParam {
    constructor(info, rule) {
        //注：images可能没有值（某些商品有）
        this.image = info.images ? info.images : ''
        this.infos = info.set
        this.sizes = rule.tables
    }
}