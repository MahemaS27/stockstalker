export type Order = {
    id: String,
    symbol: String,
    type: String
}

export async function deleteOrder(id: String): Promise<any> {
    return await fetch('/api/orders/' + id, { method: 'delete' }).then(res => {
        return res.json()
    })
}

export async function createOrder(symbol: String, qty: number): Promise<Order> {
    const createUrl = '/api/orders/create/' + symbol + '/' + qty
    return await fetch(createUrl, { method: 'post' }).then(res => {
        return res.json().then(order => {return order})
    })
}