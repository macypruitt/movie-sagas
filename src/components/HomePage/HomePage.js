import React, { Component } from "react";
import { connect } from 'react-redux'
import mapStoreToProps from '../../modules/mapStoreToProps';
import Grid from '@material-ui/core/Grid';

class HomePage extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_MOVIES'});
    }

    render() {
        let moviesList = this.props.store.moviesReducer.map((item, index) => {
            return (
                <li key={item.id}>{item.title}</li>
            )})


      


        return (
            <div>
                <ul>{moviesList}</ul>
            </div>
        )
    }
}

export default connect(mapStoreToProps) (HomePage);
