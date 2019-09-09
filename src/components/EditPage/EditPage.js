import React, { Component } from "react";
import mapStoreToProps from '../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class EditPage extends Component {
    
    ////state to be dispatched to saga, server
    state = {
        title: '',
        description:'',
        id: parseInt(this.props.match.params.id)
    };

    ////event handlers
    changeHandler(event, dataKey) {
        const fieldValue = event.target.value;
        
        this.setState({
            ...this.state,
            [dataKey]: fieldValue,
        })
    }

    clickSaveHandler = (event) => {
        this.props.dispatch({type: 'EDIT_MOVIE', payload: this.state });
        this.props.history.push("/movies/"+this.props.match.params.id);
    }

    clickCancelHandler = (event) => {
        this.props.history.push("/movies/"+this.props.match.params.id);
    }

    ////DOM
    render(){

        return(
            ////Form inputs for user to edit movie title and description
            <div className="container">
                <div className="edit-div">    
                <input 
                        type="text" 
                        placeholder="Edit title"
                        onChange={(event) => this.changeHandler(event, 'title')}>
                    </input>
                    <input 
                        type="text" 
                        placeholder="Edit description"
                        onChange={(event) => this.changeHandler(event, 'description')}>
                    </input>

                    <Button onClick={this.clickCancelHandler}>Cancel</Button>
                    <Button onClick={this.clickSaveHandler}>Save</Button>
                </div>
            </div>

        )
    }
}
export default connect(mapStoreToProps)(withRouter(EditPage));
