import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import Pagination from "react-js-pagination";
import Create from "./Create";
import Edit from "./Edit";
import List from "./List";
class Index extends Component{
    render(){
        return(
            <div>
                <Link to={'/categories'} className="btn btn-outline-secondary mt-2 mb-2">Categories</Link>
                <Link to={'/categories/create'} className="btn btn-outline-primary ml-1 mt-2 mb-2">Create</Link>
                <Route exact path={'/categories'} component={List}/>
                <Route exact path={'/categories/create'} component={Create} />
                <Route exact path={'/categories/edit/:id'} component={Edit} />
            </div>
        );
    }
}

export default Index;
