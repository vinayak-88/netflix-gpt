import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faCircleInfo} from '@fortawesome/free-solid-svg-icons';
const VideoTitle=({title,overview})=>{
    return(
        <div className='text-white absolute z-10 py-40 px-24 w-full h-full bg-gradient-to-r from-black/60 to-transparent'>
            <h1 className='text-6xl font-bold w-5/12'>{title}</h1>
            <p className='w-1/4 mt-3'>{overview}</p>
            <div>
                <button className='bg-white border h-11 w-28 text-black rounded  font-semibold mt-5'><FontAwesomeIcon icon={faPlay} size='sm' className='text-black mr-1' />Play</button>
                <button className='bg-gray-500  h-11 w-32 text-white rounded font-semibold mt-5 ml-6'><FontAwesomeIcon icon={faCircleInfo} size='sm' className='text-white mr-1' />More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;