import React from "react";
import {connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';

function DetailsPage (props) {

    function handleClickBack(e) {
        console.log('clicky');
    }

    let specificMovie = props.store.moviesReducer.filter((item,index) => {
        return item.id == props.match.params.id
    })

    return (
        <div className="details">
            <Button onClick={handleClickBack}>Back to List</Button>
            <Button>Edit</Button>
            <h2>{specificMovie[0].title}</h2>
            <p>{specificMovie[0].description}</p>
            <p>{specificMovie[0].name}</p>
            <h3>Id: {props.match.params.id}</h3>
        </div>
    )
}

export default connect(mapStoreToProps)(DetailsPage);
