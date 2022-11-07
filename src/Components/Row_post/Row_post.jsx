import React, { useEffect } from "react";
import { useState } from "react";
import "./row_post.css";
import axios from "../../axios";
import { imageURL, API_key } from "../../constants/constants";
import YouTube from "react-youtube";


function Row_post(props) {
  //creating an empty array bcuz , while mapping whwn a null obj is mapped it throws error

  const [movie, setMovie] = useState([]);
  const [urlId, seturlId] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      // console.log(response.data)
      setMovie(response.data.results);
    });
  }, []);

  //for the youtube API

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  //this function is used to take the id from onclick and transfer it the tmdb api and
  //get the youtube url to give .
  //we get the movie id whenn we click, using obj.id

  const handleMovieTrailer = (id) => {

    if (id != null) {
      axios.get(`movie/${id}/videos?api_key=${API_key}&language=en-US`)
        .then((response) => {
          // console.log(response.data)
          if (response.data.results.length != 0) {
            seturlId(response.data.results[0]);
          } else {
            console.log("Array Empty")
            alert(`Trailer not found`)
            setShowTrailer(false)
          }
        })
    } else {
      console.log("nothing");
      setShowTrailer(false)
    }
    return true
   
    // console.log('But Why ! ')
  };
  
  return (
    <div className="row">
      <br />
      <h2>{props.title}</h2>
      <br />

      <div className="posters">
      
        {movie.map((obj) => (
          <img onClick={() => {

              setShowTrailer(
                (!showTrailer) ? handleMovieTrailer(obj.id) : null);
            }}
            
            className={props.isSmall ? "post_small" : "Poster"}
            src={`${imageURL + obj.poster_path}`}
            alt="Poster"/>
        ))}

        {/* {showTrailer ? <h1>Trailer showing</h1> : null} */}
      </div>
      {urlId && showTrailer && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default Row_post;
