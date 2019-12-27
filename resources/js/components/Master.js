import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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
    ReactDOM.render(<Master />, document.getElementById('app'));
}
