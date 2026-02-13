import React, { Component } from 'react';
import '../index.css';
import ShoppingCart from '../components/shopping-cart';


class myList extends Component {
    state = {
        items: []
    }

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;

        let existingItem = this.state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.amount++;
        } else {
            currentItems.push({
                amount, name, price
            });
        }
        //content neu rendern durch setState
        this.setState({ items: currentItems });
        console.log(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <div className='main-container'>
                    <div className='product-container'></div>
                    <ShoppingCart items={this.state.items} />
                </div>
            </React.Fragment>
        );
    }
}

export default myList;