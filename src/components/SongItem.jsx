import React from 'react'
import { useNavigate } from 'react-router-dom';

const SongItem = ({name,image,desc,id}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/song/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} alt={name} className="rounded" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-sm text-slate-200'>{desc}</p>
    </div>
  )
}

export default SongItem