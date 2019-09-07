import React, { Component } from "react";
import { connect } from 'react-redux'
import mapStoreToProps from '../../modules/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Card,
        CardContent,
        CardActionArea,
        Button,
        CardActions,
        CardMedia,
        Typography } from '@material-ui/core';


class MovieCard extends Component {

    

    render() {
       
        const movieImagePath = this.props.movieData.poster;
        console.log(movieImagePath);
        let titleImage = <img src={movieImagePath} alt="movie-poster"></img>

        return (
            <div>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            {titleImage} />
                            <Typography>
                            {this.props.movieData.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    
                </Card>
                
            </div>
        )
    }
}

export default connect(mapStoreToProps) (MovieCard);
