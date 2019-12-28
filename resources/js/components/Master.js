import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./includes/Header";
import Footer from "./includes/Footer";

class Master extends Component{
    render(){
        return(
            <div className="container">
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Master;

if (document.getElementById('app')) {
    ReactDOM.render(<Router><Master /></Router>, document.getElementById('app'));
}
