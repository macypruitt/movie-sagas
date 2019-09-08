import React, { Component } from "react";
import mapStoreToProps from '../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class EditPage extends Component {

    //make dispatch to saga to PUT using id

    render(){

        const movieId = this.props.match.params.id;
        console.log(movieId)
        return(

            <div className="edit-div">
                <input type="text" placeholder="Edit title"></input>
                <input type="text" placeholder="Edit description"></input>
                <button>Cancel</button>
                <button>Save</button>




            </div>

        )
    }
}
export default connect(mapStoreToProps)(withRouter(EditPage));
