import React from "react";
import {connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import { ok } from "assert";

function DetailsPage (props) {

    console.log(props);
    let specificMovie = props.store.moviesReducer.filter((item,index) => {
        
        return item.id == props.match.params.id

    })

    return (
        <div>
            <p>{specificMovie[0].title}</p>
            <p>{specificMovie[0].description}</p>
            <p>{specificMovie[0].name}</p>
            <h3>Id: {props.match.params.id}</h3>
        </div>
    )
}

export default connect(mapStoreToProps)(DetailsPage);
