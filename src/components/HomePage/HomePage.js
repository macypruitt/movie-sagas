import React, { Component } from "react";
import { connect } from 'react-redux'
import mapStoreToProps from '../../modules/mapStoreToProps';
import Grid from '@material-ui/core/Grid';
import MovieCard from '../MovieCard/MovieCard'

class HomePage extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_MOVIES'});
    }

    render() {
       

        return (
            <div>
                <Grid container>
                    {this.props.store.moviesReducer.map((item, index) => {
                        return (
                        <MovieCard key={index} movieData={item}/>

                    )})}
                </Grid>
            </div>
        )
    }
}

export default connect(mapStoreToProps) (HomePage);
