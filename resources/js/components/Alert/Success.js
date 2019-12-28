import React, {Component} from 'react';
class Success extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Success!</strong> Request done successfully.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}


export default Success;
