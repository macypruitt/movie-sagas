import React, { Component } from "react";
import {connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';

function DetailsPage(props) {
    
    const movieDetails = props.store.moviesReducer.filter((item, index) => {
        console.log(item, 'lkfdjls')
        return item.id === parseInt(props.match.params.id)
    })

    console.log(movieDetails)
    
    return (
        <div>
                {props.match.params.id}
        </div>
    )
}

export default connect(mapStoreToProps)(DetailsPage);
