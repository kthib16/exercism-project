import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const PageButtons = props => {

  const pageArr = []
  if(props.pagination.total_pages <= 6){
  for(var i = 0; i <= props.pagination.total_pages; i++){
      pageArr.push(props.pagination.current_page + i)
    }}

    else if(props.pagination.current_page + 4 >= props.pagination.total_pages ){
    pageArr.push(1, '...', props.pagination.total_pages - 4, props.pagination.total_pages - 3, props.pagination.total_pages - 2, props.pagination.total_pages - 1, props.pagination.total_pages)
  }
  else if(props.pagination.current_page - 3 < 0){
    pageArr.push(1, 2, 3, '...', props.pagination.total_pages - 2, props.pagination.total_pages - 1, props.pagination.total_pages)
  } else {
    pageArr.push(1, '...', props.pagination.current_page, props.pagination.current_page + 1, props.pagination.current_page + 2, props.pagination.current_page + 3, '...', props.pagination.total_pages)
  }

  console.log(pageArr)

  let pageButtons = pageArr.map(page => {
    if( page === props.pagination.current_page){
    return(

      <button  className='page-button page-number border border-[#76709F] bg-[#E1EBFF] text-[#130B43]'>{page}</button>
    )} else if(page === '...'){
      return <div  className='mx-2 my-2'>{page}</div>
    }
    else {
      return(
        <button  onClick={() => props.onPageClick(page)} className='page-button page-number text-[#130B43]'>{page}</button>

      )
    }
  })



    return(
      <div className='flex flex-row'>
      {props.pagination.current_page === 1
        ?<button className='page-button left-0 bg-[#E0E0ED] cursor-not-allowed text-[#76709F] opacity-70'><FontAwesomeIcon className='pr-2' icon={faArrowLeft}/>Previous</button>
        :<button onClick={() => props.onPageClick(props.pagination.current_page - 1)} className='page-button left-0'><FontAwesomeIcon className='pr-2' icon={faArrowLeft}/>Previous</button>
      }


      <div className='button-container mx-auto flex'>

      {pageButtons}
      </div>
      {props.pagination.current_page === props.pagination.total_pages
        ?<button className='page-button right-0 bg-[#E0E0ED] cursor-not-allowed text-[#76709F] opacity-70'>Next <FontAwesomeIcon className='pl-2' icon={faArrowRight}/></button>
        :<button onClick={() => props.onPageClick(props.pagination.current_page + 1)} className='page-button right-0'>Next <FontAwesomeIcon className='pl-2' icon={faArrowRight}/></button>
      }
      </div>
    )



}

export default PageButtons
