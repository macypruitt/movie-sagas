import React from "react";
import {connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

function DetailsPage (props) {

    function handleClickBack(e) {
        props.history.push("/");
    }

    function handleClickEdit(e) {
        console.log("clicky");
        props.history.push("/edit/"+props.match.params.id);
    }

    let specificMovie = props.store.moviesReducer.filter((item,index) => {
        return item.movie_id == props.match.params.id
    })

    return (
        <div className="details">
            <Button onClick={handleClickBack}>Back to List</Button>
            <Button onClick={handleClickEdit}>Edit</Button>
            <h2>{specificMovie[0].title}</h2>
            <p>{specificMovie[0].description}</p>
            <p>{specificMovie[0].name}</p>
            <h3>Id: {props.match.params.id}</h3>
        </div>
    )
}

export default connect(mapStoreToProps)(withRouter(DetailsPage));
