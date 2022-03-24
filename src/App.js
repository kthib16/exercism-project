import './App.css';
import React from 'react';
import NavBar from './Components/NavBar'
import SearchContainer from './Components/SearchContainer'
import LoadingScreen from './Components/LoadingScreen'

export default class  App extends React.Component {
  state = {
    page: 1,
    track: undefined,
    exercise: undefined,
    order: 'newest_first',
    previousPage: undefined
  }

  componentDidMount() {
    this.getTestimonialItems()
    this.getTracks()
  }

  getTestimonialItems = async () => {
    // const testimonials = await fetch(` https://exercism.org/api/v2/hiring/testimonials?page=${this.state.currentPage}&track=python&exercise=ming&order=newest_first.`)
    const testimonials = await fetch(`https://exercism.org/api/v2/hiring/testimonials?page=${this.state.page}&order=${this.state.order}`)
    const data = await testimonials.json()

    this.setState({

      testimonialList: data,
    })
  }

  getTracks = async() => {
    const tracks = await fetch(' https://exercism.org/api/v2/tracks')
    const data = await tracks.json()
    this.setState({
      tracks: data
    })
  }


  searchTestimonials = async (page, track, exercise, order) => {
    let pageParam ;
    let trackParam;
    let exerciseParam;
    let orderParam;
    if(page !== null && page !== undefined ){
      pageParam='page=' + page;
    }
    if(track !== null && track !== undefined){
      trackParam='track=' + track
    }
    if(exercise !== null && exercise !== undefined){
      exerciseParam='exercise=' + exercise
    }
    if(order){
      orderParam='order=' + order
    }

    let paramArr = [pageParam, trackParam, exerciseParam, orderParam]
    let newParam = paramArr.join('&')

    console.log(newParam)
    const testimonials = await fetch(`https://exercism.org/api/v2/hiring/testimonials?${newParam}`)
    const data = await testimonials.json()

    this.setState({
      page: page,
      track: track,
      exercise: exercise,
      order: order,
      testimonialList: data
    })


  }

  onPageClick = (pageNumber) => {
    if(pageNumber === 0){
        return
    } else if (pageNumber > this.state.testimonialList.testimonials.pagination.total_pages){
      return
    } else {
    console.log(pageNumber)
    this.searchTestimonials(pageNumber, this.state.track, this.state.exercise, this.state.order)
    this.setState({
      page: pageNumber,
      previousPage: this.state.page
    })
    }
  }


  render() {
      return (
        <>
          <NavBar />
          <div className='flex justify-center items-center place-items-center mx-auto mb-24'>
          <h2 className='flex flex-row text-4xl font-black mr-8'>Testimonials I've left</h2>
            {this.state.testimonialList
              ? <div className='flex flex-row text-[#5C5589] p-2 rounded-2xl border-solid border-2 border-[#5C5589]'>
                  {this.state.testimonialList.testimonials.pagination.total_count}
                </div>
              : <div className='inline-block'>
                0
                </div>}

            </div>
          {this.state.testimonialList
            ?<SearchContainer state={this.state} onPageClick={this.onPageClick} searchTestimonials={this.searchTestimonials} testimonialList={this.state.testimonialList}  />
            : <LoadingScreen />
          }
        </>

      )

  }
}
