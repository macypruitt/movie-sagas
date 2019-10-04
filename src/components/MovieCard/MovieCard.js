import React, { Component } from "react";
import { connect } from 'react-redux'
import mapStoreToProps from '../../modules/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Card,
        CardContent,
        CardActionArea,
        Typography,
        Grid } from '@material-ui/core';
import './MovieCard.css';

class MovieCard extends Component {

    handleClickPoster = (event) => {
        this.props.history.push("/movies/"+this.props.movieData.movie_id);
    }

    render() {
        
        const movieImagePath = this.props.movieData.poster;
        console.log(movieImagePath);
        let titleImage = <img src={movieImagePath} alt="movie-poster"></img>
        const movieDescription = this.props.movieData.description.replace(/\s/g,' ');

        return (
            <div>
                <Grid item>
                <Card className="movie-card">
                    <CardActionArea>
                        <CardContent>
                            <div className="movie-poster" onClick={this.handleClickPoster}>
                            {titleImage}
                            </div>
                            <Typography>
                                <div className="card-content">
                                    <h3>{this.props.movieData.title}</h3>
                                    {movieDescription}
                                    {this.props.movieData.name}
                                </div>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    
                </Card>
                </Grid>
                
            </div>
        )
    }
}

export default connect(mapStoreToProps)(withRouter(MovieCard));
