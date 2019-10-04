import React from "react";
import {connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

function DetailsPage (props) {
   
    ////event handlers
    function handleClickBack(e) {
        props.history.push("/");
    }

    function handleClickEdit(e) {
        console.log("clicky");
        props.history.push("/edit/"+props.match.params.id);
    }
    ////filter array to the movie that matches id
    let specificMovie = props.store.moviesReducer.filter((item,index) => {
        return item.movie_id == props.match.params.id
    })

    let movieDescription;

    if(props.store.moviesReducer.length>0){
        movieDescription = specificMovie[0].description.replace(/\s/g,' ');
    }

    return (
        <div className="details-container">
            <Button 
                onClick={handleClickBack}>Back to List
            </Button>
            
            <Button 
                onClick={handleClickEdit}>Edit
            </Button>
            <h2>{specificMovie[0].title}</h2>
            <p>{movieDescription}</p>
            <p>{specificMovie[0].name}</p>
        </div>
    )
}

export default connect(mapStoreToProps)(withRouter(DetailsPage));
