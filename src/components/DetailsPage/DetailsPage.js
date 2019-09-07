import React, { Component } from "react";
import {connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';

function DetailsPage(props) {
    
    const movieDetails = props.store.moviesReducer.filter((item, index) => {
        console.log(item, 'lkfdjls')
        return item.id ==props.match.params.id
    })

    return (
        <div>
                <p>{movieDetails[0].name}</p>
        </div>
    )
}

export default connect(mapStoreToProps)(DetailsPage);
