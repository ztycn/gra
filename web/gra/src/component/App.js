import React, {Component} from 'react';
import { Button } from 'antd';
import axios from 'axios'
// axios.defaults.baseURL = '127.0.0.1';
axios.defaults.timeout = 5000;

class App extends Component {
    test(){
        axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists').then(function (response){
            console.log(response)
        }).catch(function (error){
            console.log(error)
        })
    }
    componentDidMount(){

    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.test}>Primary Button</Button>
            </div>
        );
    }
}

export default App;