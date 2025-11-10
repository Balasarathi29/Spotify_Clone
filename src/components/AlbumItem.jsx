import React from 'react'

const AlbumItem = ({image,name,desc }) => {
  return (
    <div className='min-w-[180px] py-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} alt={name} className="rounded" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-sm text-slate-200'>{desc}</p>
    </div>
  )
}

export default AlbumItem