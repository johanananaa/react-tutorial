import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyList from './pages/my-list';
import Lexikon from './pages/lexikon';

class App extends Component {
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

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;

        debugger;
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
                <Navbar />

                <Routes>
                    <Route path="/lexikon" element={<Lexikon />} />
                    <Route path="/my-list" element={<MyList />} />
                </Routes>
            </React.Fragment >
        );
    }
}

export default App;