import React, { useState ,useEffect} from 'react'
import axios from './axios';
import requests from './request';
import'./Banner.css';

function Banner() {
  const base_url="https://image.tmdb.org/t/p/original/"
    const [movies,setMovies]=useState([]);
    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals)
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);
            return request
        }
        fetchData();
    }, [])
    const url = `${base_url}${movies?.backdrop_path}`
  return (
    <header className='Banner' style={{
      backgroundImage:`url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }} >
      <div className='Banner_container'>
      <h1 className='title'>{movies?.name||movies?.title||movies?.origina_name}</h1>
      <div className='buttons_container'>
        <button className='btnContainer'>test</button>
        <button className='btnContainer'>test</button>
      </div>
      <h1 className='desc_container'>{movies.overview}</h1>
      </div>
    </header>
  )
}

export default Banner