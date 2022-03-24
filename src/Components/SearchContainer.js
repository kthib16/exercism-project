import React from 'react'
import SearchBar from './SearchBar'
import TestimonialItem from './TestimonialItem'
import PageButtons from './PageButtons'
import LoadingScreen from './LoadingScreen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchContainer = props => {

  return (
    <div className='search-container w-[96vw] h-content'>


    {props.testimonialList
      ?<>
        <SearchBar state={props.state} searchTestimonials={props.searchTestimonials} testimonialList={props.state.testimonialList} />
        <TestimonialItem testimonialList={props.state.testimonialList} />

        <PageButtons state={props.state} onPageClick={props.onPageClick} pagination={props.state.testimonialList.testimonials.pagination}/>

        </>
      : <>
      
        </>
    }

    </div>
  )

}

export default SearchContainer;
