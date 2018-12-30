import './App.css'
import DataTable from "react-data-table-view";

import React, { Component } from 'react'

class App extends Component {
    state = {loading: false}

    render() {
        return <div className="App">
            <div className="App-heading App-flex">
                <h2>Welcome to <span className="App-react">React</span></h2>
            </div>
            <DataTable
              title="Test Data"
            />
            <div className="App-instructions App-flex">
                <img className="App-logo" src={require('./react.svg')} />
                <p>Edit <code>src/App.js</code> and save to hot reload your changes.</p>
            </div>
        </div>
    }
}

export default App
