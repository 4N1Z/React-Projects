import React, { useEffect,useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_key,imageURL} from '../../constants/constants'
import YouTube from 'react-youtube'
import { Axios } from 'axios'



function Banner() {

const [movie, setmovie] = useState()
const [getUrl, setgetUrl] = useState('')

const [showTrailer, setshowTrailer] = useState(false)


//Youtube API setttings
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};


const handleMovieTrailer = (id)=> {

  if(movie != " " || movie != null){
    axios.get(`movie/${id}/videos?api_key=${API_key}&language=en-US`).then((response)=>{

      if(response.data.results.length!= 0){
        setgetUrl(response.data.results[0])
        
      }else {
        console.log('Array Empty')
        alert("Trailer Not Found")
        setshowTrailer(false)
      }
    })

  }else{
    console.log('nothing')
    alert('Not Found')
    setshowTrailer(false)
  }
  return true
}


//to bring in random posters.
  useEffect(() => {

    axios.get(`trending/all/week?api_key=${API_key}&language=en-US'`).then((response)=>{
      const rand = Math.floor(Math.random() * 20) + 1
      //used to run the API and get store the results in response.

      setmovie(response.data.results[rand])

    })

  },[])

  return (
    <div className="container_banner">
    <div 
    style={{backgroundImage : `url(${movie ? imageURL + movie.backdrop_path: " "})`}}
    className='Banner'>
        <div className="content">
            <h1 className="movie_name"> { movie ? movie.name || movie.title : " "} </h1>
                <div className="banner_buttons">
                  
                    <button onClick={()=>{
                      setshowTrailer((!showTrailer)? handleMovieTrailer(movie.id):null)

                    }} 
                    className="play">{showTrailer? "STOP":"PLAY"}</button>

                    <button 
                      onClick = {()=> {alert('Feature ComingSoon !')}} 
                      className="playList">LIST + </button>
                </div>

                <h1 className="description">
                
                  {movie ? movie.overview : ""}   
                </h1>

        </div>

        <div className="fade_bottom"></div>

    </div>

    <div className="trailer">
      {getUrl && showTrailer && <YouTube videoId={getUrl.key} opts={opts} />}

    </div>
    </div>
  
  )
}

export default Banner