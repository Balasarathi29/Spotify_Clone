import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import { albumsData } from '../assets/spotify-assets/assets/assets';
import {assets} from '../assets/spotify-assets/assets/assets';

const DisplayAlbum = () => { 
    const {id} = useParams();
    const albumData = albumsData[id]
  return (
    <>
        <Navbar />
        <div className='mt-10 flex flex-col gap-8 md:flex-row mg:items-end'>
            <img className = "w-48 rounded" src={albumData.image} alt={albumData.name} />
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className='mt-1'>
                    <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                    <b> Spotify </b>
                    * 1,323,154 Likes
                    * <b>50 Songs, </b>
                    about 2 hr 30 min
                </p>
            </div>
        </div>
    </>
  )
}

export default DisplayAlbum