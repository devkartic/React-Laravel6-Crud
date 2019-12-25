import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Create from './create'
import List from './list'
import Edit from "./Edit";

class About extends Component{
    render(){
        return(
            <div>
                <div className="mt-1">
                    <Router>
                        <Link to={'/categories'} className="btn btn-outline-secondary">Categories</Link>
                        <Link to={'/categories/create'} className="btn btn-outline-primary ml-1">Create</Link>
                        <Route exact path={'/categories'} component={List} />
                        <Route exact path={'/categories/create'} component={Create} />
                        <Route exact path={'/categories/edit/:id'} component={Edit} />
                    </Router>
                </div>
            </div>
        );
    }
}

export default About;
