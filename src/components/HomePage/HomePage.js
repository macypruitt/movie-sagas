import React, { Component } from "react";
import { connect } from 'react-redux'
import mapStoreToProps from '../../modules/mapStoreToProps';

class HomePage extends Component {
    render() {
        return (
            <div>
                ayyy
            </div>
        )
    }
}

export default connect(mapStoreToProps) (HomePage);
