import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Product from '../components/product';
import '../index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyList from './my-list';

class Lexikon extends Component {
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
            <React.Fragment >
                <div className='main-container'>
                    <div className='product-container'>
                        <Product onAdd={() => this.addItem(1, 'Blumen', 2.99)} title="Blumen" img="flowers.jpg" text="Diese Blumen sind sehr schön." />
                        <Product onAdd={() => this.addItem(1, 'Bäume', 5.99)} title="Bäume" img="trees.jpg" text="Diese Bäume sind sehr grün." />
                        <Product onAdd={() => this.addItem(1, 'Wiese', 3.99)} title="Wiese" img="grass.jpg" text="Diese Wiese ist sehr frisch." />
                        <Product onAdd={() => this.addItem(1, 'Vögel', 4.99)} title="Vögel" img="birds.jpg" text="Diese Vögel sind sehr flink." />
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Lexikon;