import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons'


export default class SearchBar extends React.Component {

  state={
    page: this.props.state.page,
    track: this.props.state.track,
    exercise: this.props.state.exercise,
    order: this.props.state.order,
    trackList: this.props.state.testimonialList.testimonials.tracks,
    showTrackMenu: false,
  }

onChange = (e) => {

  this.setState({
    exercise: e.target.value
  })
}

radioOnChange = e => {
  this.props.searchTestimonials(this.state.page, e.target.value, this.state.exercise, this.state.order)


  this.setState({
    track: e.target.value,
    showTrackMenu: false
  })

}



onSubmit = (e) => {
  e.preventDefault()
  this.props.searchTestimonials(this.state.page, this.state.track, this.state.exercise, this.state.order)


}

onClick = e => {
    this.setState({
      [e.target.name]: !this.state.showTrackMenu
    })
  }

  onOptionSelect = e => {
    let order = this.state.order;
    if(order === 'newest_first'){
      order = 'oldest_first'
    } else {
      order = "newest_first"
    }

    this.props.searchTestimonials(this.state.page, this.state.track, this.state.exercise, order)
      this.setState({
        order: order
      })
    }








  render() {
    return(
      <>
        <div className='flex flex-row items-center mx-auto px-1 mb-4 pb-4 border-b-solid border-b-2'>

          <div  name='showTrackMenu'  onClick={this.onClick}>
            <img name='showTrackMenu' className='max-w-[2rem] mr-2 inline-flex my-auto' src='https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/exercism-face-gradient-31ce1b1261c54ead735cf687a2dc8549b3d00bb1.svg' onClick={this.onClick}/>

            <div name='showTrackMenu' onClick={this.onClick} className='flex inline-flex mr-16 my-auto'>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          <div className='flex flex-row rounded-sm bg-[#F0F3F9] px-4 h-10 w-72'>
            <FontAwesomeIcon className='inline-block pr-2 my-auto' icon={faSearch}/>
            <form className='w-72' onSubmit={this.onSubmit}>
              <input className=" h-10 w-72 p-4 bg-[#F0F3F9] focus:outline-none" placeholder='Filter by exercise title' onChange={this.onChange} value={this.state.exercise} />
              </form>
          </div>




          <div onClick={this.onClickOrder} className='flex flex-row rounded-sm bg-[#F0F3F9] h-10 w-72 '>
          <select id="Option-Selector" onChange={this.onOptionSelect} className="cursor-auto text-center text-slate-400 absolute h-10 w-72 focus:outline-none flex flex-row right-0 rounded-sm mr-12" >
            <option onChange={this.onOptionSelect} name='newest_first'>Sort by most recent</option>
            <option onChange={this.onOptionSelect} name='oldest_first'>Sort by oldest</option>
          </select>

          </div>
        </div>
        {this.state.showTrackMenu
          ?<div className='dropdown absolute p-6 bg-white rounded-md w-3/12'>
              <ul className='relative'>
              {this.state.trackList.map(track => {
                let newTrackName = ''
                if(track === 'fsharp'){
                  newTrackName = 'F#'
                } else if (track === 'cpp'){
                  newTrackName = 'C++'
                } else if(track === 'csharp'){
                  newTrackName = 'C#'
                } else {
                let trackArr = track.split('')
                trackArr.splice(0, 1, trackArr[0].toUpperCase())
                newTrackName = trackArr.join('');
              }
                let url  = `https://dg8krxphbh767.cloudfront.net/tracks/${track}.svg`
                return(
                  <li key={track} className='flex flex-row mb-4'>
                    <input onClick={this.radioOnChange} name='buttonGroup' className=' mr-8' type='radio' value={track} />
                    <img src={url} className='max-w-[2rem] mr-8'/>
                    <p className='mr-4'>{newTrackName}</p>
                    <div className='absolute text-[#5C5589] p-[.25rem] right-0 rounded-2xl border-solid border-2 border-[#5C5589] mr-4'>
                        {this.props.testimonialList.testimonials.track_counts[track]}
                      </div>
                  </li>
                )
              })}
              </ul>
              </div>
          : ''
        }

        </>
    )

  }


}
