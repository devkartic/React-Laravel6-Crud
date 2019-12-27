import React, {Component} from 'react';
import axios from 'axios';
class Edit extends Component{

    constructor(props) {
        super(props);
        this.state = { name : '' };
        this.onchangeHandler = this.onchangeHandler.bind(this);
        this.onsubmitHandler = this.onsubmitHandler.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/categories/edit/'+this.props.match.params.id)
            .then(response=>{
                this.setState({
                    name : response.data.name
                });
            });
    }

    onchangeHandler(event){
        this.setState({
            name : event.target.value
        });
    }

    onsubmitHandler(event){
        event.preventDefault();
        // console.log(this.state.name);

        axios.put('http://localhost:8000/api/categories/'+this.props.match.params.id, {
          name : this.state.name,
          headers: {
             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        }).then(response=>{
                console.log(response);
        });
    }

    render(){
        return(
            <div className="card mt-1">
                <div className="card-header">
                    Category Update
                </div>
                <div className="card-body">
                    <form onSubmit={this.onsubmitHandler}>
                        <div className="form-group">
                            <label htmlFor="name">Category Name</label>
                            <input type="text" className="form-control" onChange={this.onchangeHandler} id="name" aria-describedby="name" placeholder="Enter Name" value={this.state.name} />
                            <small id="emailHelp" className="form-text text-muted">name field is required</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Edit;
