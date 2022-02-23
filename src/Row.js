import React, { useState,useEffect } from 'react';
import axios from './axios';
import './row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title,fetchUrl,isLargeRow}) {
  const base_url="https://image.tmdb.org/t/p/original/"
  const [trailerUrl,SetTrailer]=useState('');
    const [movies,setMovies] =useState([]);
    useEffect(() => {
      async function fetchData(){
        const request=await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request; 
      }
      fetchData();
    }, [fetchUrl])
    const opts={
      height:"390",
      width:"100%",
      playerVars: {
        autoplay:1,
      },
    };
    const handleClick=(movie)=>{
      if(trailerUrl){
        SetTrailer('');
      }else{
        movieTrailer(movie?.name || movie?.title || movie?.original_title ||"")
        .then(url=>{
          const urlParam=new URLSearchParams(new URL(url).search);
          SetTrailer(urlParam.get("v"));

        }).catch((error)=>console.log(error));
      }
    }
    const imageList=movies.map(movie=>{
      return(
      <img  key={movie.id} onClick={()=>handleClick(movie)} className={`row__poster ${isLargeRow && "row__postersLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
      )
    })
  return (
  <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
        {imageList}
      </div>
      {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}
  </div>
  )
}

export default Row;
