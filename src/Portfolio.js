import React, { Component } from 'react';
import axios from 'axios';

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            portfolio: []
        }
    }

    componentWillPortf() {
        this.getPortfolio();
    }

    getPortfolio() {
        axios.get('http://localhost:3000/api')
            .then(response => {
                this.setState({ portfolio: response.data }, () => {
                    console.log(this.state);
                })
            })
    }

    render() {
        const portfolioItems = this.state.portfolio.map((portfolio, i) => {
            return (
                <li>{portfolio}</li>
            )
        })
        return (
            <>
                <h1>HOLA MUNDO</h1>
            </>
        )
    }
}

export default Portfolio;