import React, { Component } from 'react';
import "./alpacatable.css"

type Order = {
    id: String,
    symbol: String
}

class AlpacaTable extends Component<{}, {orders: Order[]}> {

    state = { orders: [] }

    getOrders = () => {
        fetch('/api/orders')
            .then(res => res.json())
            .then(orders => this.setState({ orders }));
    }

    componentDidMount() {
        this.getOrders();
    }

    renderOrder(order: Order) {
        return (
            <tr>
                <td>{ order.id }</td>
                <td>{ order.symbol }</td>
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
                {this.state.orders.map(this.renderOrder)}
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