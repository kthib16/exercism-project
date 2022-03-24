import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'

const LoadingScreen = () => {

  return(
    <div className='search-container w-[96vw] h-content'>

    <div className='flex flex-row items-center mx-auto px-1 border-b-solid border-b-2'>

      <div  name='showTrackMenu' >
        <img name='showTrackMenu' className='max-w-[2rem] mr-2 inline-flex my-auto' src='https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/exercism-face-gradient-31ce1b1261c54ead735cf687a2dc8549b3d00bb1.svg'/>

        <div name='showTrackMenu' className='flex inline-flex mr-16 my-auto'>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
      <div className='flex flex-row rounded-sm bg-[#F0F3F9] h-10 w-72'>
        <FontAwesomeIcon className='inline-block pr-2 my-auto' icon={faSearch}/>
        <form >
          <input className=" h-10 w-72 p-4 focus:outline-none" placeholder='Filter by exercise title'  />
          </form>
      </div>




      <div className='flex flex-row rounded-sm bg-[#F0F3F9] h-10 w-72 '>
      <select className="cursor-auto text-center text-slate-400 absolute h-10 w-72 focus:outline-none flex flex-row right-0 rounded-sm mr-12" >
        <option name='newest_first'>Sort by most recent</option>
        <option  name='oldest_first'>Sort by oldest</option>
      </select>

      </div>
    </div>
        <div className=' bg-[#FBFCFE] h-80 '>
        <FontAwesomeIcon icon={faSpinner} className='absolute left-2/4 top-2/4 h-1/6  animate-spin-slow'/>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />

        </div>
        </div>
  )

}

export default LoadingScreen
