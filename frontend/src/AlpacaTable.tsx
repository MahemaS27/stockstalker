import React, { Component } from 'react';
import "./alpacatable.css"

type Order = {
    id: String,
    ticker: String
}

type AlpacaTableProps = {
    orders: Order[]
}

class AlpacaTable extends Component<AlpacaTableProps> {

    static defaultProps = {
        orders: [
            { id: 'test', ticker: 'aapl' },
            { id: 'test2', ticker: 'gpro' }
        ]
    }

    constructor() {
        let orders: Order[] = [];
        let props = {orders: orders};
        super(props);

    }

    renderOrder(order: Order) {
        return (
            <tr>
                <td>{ order.id }</td>
                <td>{ order.ticker }</td>
            </tr>
        );
    }

    renderOrders() {
        return (
            <table >
                <tr>
                    <th>ID</th>
                    <th>Ticker</th>
                </tr>
                {this.props.orders.map(this.renderOrder)}
            </table>
        )
    }

    render() {
        return (
            <div className="AlpacaTable">
                { this.renderOrders() }
            </div>
        );
    }
}
 
export default AlpacaTable;