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
import './MovieCard.css';


class MovieCard extends Component {

    handleClickPoster = (event) => {
        this.props.history.push("/movies/"+this.props.movieData.id);
    }

    render() {
        
       
        const movieImagePath = this.props.movieData.poster;
        console.log(movieImagePath);
        let titleImage = <img src={movieImagePath} alt="movie-poster"></img>

        return (
            <div>
                <Card className="movie-card">
                    <CardActionArea>
                        <CardContent>
                            <div className="movie-poster" onClick={this.handleClickPoster}>
                            {titleImage}
                            </div>
                            <Typography>
                            {this.props.movieData.title}
                            {this.props.movieData.description}
                            {this.props.movieData.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    
                </Card>
                
            </div>
        )
    }
}

export default connect(mapStoreToProps)(withRouter(MovieCard));
