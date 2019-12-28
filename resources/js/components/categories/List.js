import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import Pagination from "react-js-pagination";

class List extends Component{

    constructor(props){
        super(props);
        this.state = {
            categories : [],
            activePage : 1,
            itemsCountPerPage : 1,
            totalItemsCount : 1,
            pageRangeDisplayed : 1
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        // console.log(`active page is ${pageNumber}`);
        // this.setState({activePage: pageNumber});
        axios.get('http://localhost:8000/api/categories?page='+pageNumber)
            .then(response=>{
                this.setState({
                    categories: response.data.data,
                    activePage : response.data.current_page,
                    itemsCountPerPage : response.data.per_page,
                    totalItemsCount : response.data.total,
                    pageRangeDisplayed : response.data.to
                });
            });
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/categories')
            .then(response=>{
                this.setState({
                    categories: response.data.data,
                    activePage : response.data.current_page,
                    itemsCountPerPage : response.data.per_page,
                    totalItemsCount : response.data.total,
                    pageRangeDisplayed : response.data.to
                });
            });
    }

    onDelete(category_id){
        axios.delete('http://localhost:8000/api/categories/'+category_id)
            .then(response=>{
               let categories = this.state.categories;
               for (let i = 0; i<categories.length; i++){
                   if(categories[i].id===category_id) categories.splice(i, 1);
                   this.setState({
                       categories : categories
                   })
               }
            });
    }

    render(){
        let sl = 0;
        return(
            <div className="card mt-1">
                <div className="card-header">
                    Categories
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead className="bg-info" >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Updated at</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.categories.map(category=>{
                                return (
                                    <tr key={category.id.toString()}>
                                        <th scope="row">{++sl}</th>
                                        <td>{ category.name }</td>
                                        <td>
                                            <button className="btn btn-outline-success">{ category.active_status==0?'Inactive':'Active'}</button>
                                        </td>
                                        <td>{ category.created_at }</td>
                                        <td>{ category.updated_at }</td>
                                        <td>

                                            <Link to={`/categories/edit/${category.id}`} className="btn btn-outline-warning">Edit</Link>
                                            <button className="btn btn-outline-danger ml-2" onClick={this.onDelete.bind(this, category.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange}
                        itemClass={'page-item'}
                        linkClass={'page-link'}
                    />
                </div>
            </div>
        );
    }
}

export default List;
