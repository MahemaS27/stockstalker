import React, { Component } from 'react';
import "./alpacatable.css"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Order, createOrder, deleteOrder } from './alpacalib';

class AlpacaTable extends Component<{}, {orders: Order[]}> {

    state = { orders: [] }

    getOrders = () => {
        fetch('/api/orders')
            .then(res => res.json())
            .then(orders => this.setState({ orders }));
    }

    makeOrder = (e: any) => {
        createOrder("AAPL", 2).then((order: Order) => {
            let orders: Order[] = this.state.orders
            orders.push(order)
            this.setState({ orders });
            // alert("Order " + order.id + " created.")
        })
    }

    cancelOrder = (order: Order) => (e: any) => {
        deleteOrder(order.id)
        let orders = this.state.orders.filter((val: Order, index, arr) => {
            return val.id != order.id
        });
        this.setState({ orders });
        // alert("Order deleted.")
    }

    componentDidMount() {
        this.getOrders();
    }

    renderOrder = (order: Order) => {
        return (
            <tr>
                <td>{ order.id }</td>
                <td>{ order.symbol }</td>
                <td>
                    <Button variant="danger" onClick={this.cancelOrder(order)}>Cancel order</Button>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <Row className="align-middle">
                    <Col>
                        <Button variant="success" onClick={this.makeOrder}>Create AAPL Order</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <tr>
                                <th>ID</th>
                                <th>Ticker</th>
                                <th>Buttons</th>
                            </tr>
                            {this.state.orders.map(this.renderOrder)}
                        </Table>
                    </Col>
                </Row>
            </div>
                );
            }
        }
        
export default AlpacaTable;