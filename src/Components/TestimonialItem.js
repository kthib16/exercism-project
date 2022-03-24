import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const TestimonialItem = ( props ) => {

  let currentDate = new Date()
  console.log('current date', typeof(currentDate.getDate()))


  let compareDates = function(newDate, oldDate) {

    let formattedDate
    if(newDate.getFullYear() === oldDate.getFullYear()){
      if(newDate.getMonth() === oldDate.getMonth()){
        if(newDate.getDate() === oldDate.getDate()){
          formattedDate = 'Just now'
        } else if(newDate.getDate() - oldDate.getDate() < 14 && newDate.getDate() - oldDate.getDate() >= 7){
          formattedDate = 'one week ago'
        } else if(newDate.getDate() - oldDate.getDate() < 21 && newDate.getDate() - oldDate.getDate() >= 14){
          formattedDate = '2 weeks ago'
        } else if(newDate.getDate() - oldDate.getDate() < 28 && newDate.getDate() - oldDate.getDate() >= 21){
          formattedDate = '3 weeks ago'
        } else if( newDate.getDate() - oldDate.getDate() >= 28){
          formattedDate = '4 weeks ago'
        } else if(newDate.getDate() - oldDate.getDate() === 1){
          formattedDate = 'one day ago'
        }else {
          formattedDate = newDate.getDate() - oldDate.getDate() + ' days ago'
        }

      } else if(newDate.getMonth() - oldDate.getMonth() === 1 || newDate.getMonth() - oldDate.getMonth() === -1){
        formattedDate = 'one month ago'
      } else if(newDate.getMonth() - oldDate.getMonth() < 0){
        let negInt = newDate.getMonth() - oldDate.getMonth
        formattedDate = (oldDate.getMonth + negInt ) + ' months ago'
      }
      else {
        formattedDate = newDate.getMonth() - oldDate.getMonth() + ' months ago'
      }

    } else if (newDate.getFullYear() - oldDate.getFullYear() === 1){
      formattedDate = '1 year ago'
    } else {
      formattedDate = newDate.getFullYear() - oldDate.getFullYear() + ' years ago'

    }
    return formattedDate
  }



  const testimonialList = props.testimonialList.testimonials.results.map(testimonial => {
    let date = new Date(testimonial.created_at)
    let currentDate = new Date()
    let formattedDate = compareDates(currentDate, date)


    return(
      <li key={testimonial.id} className='font-normal leading-9 border-6-solid border-b-[#EAECF3] border-b-2 hover:bg-slate-100'>
        <div className='flex flex-inline flex-row'>
            <div className=' row-icon my-auto'>
              <img src={testimonial.track.icon_url} className=' max-w-[2rem] mr-4'/>
            </div>
            <div className='my-auto max-w-[2rem] mr-4'>
              <img src='https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' className='rounded-full' />
            </div>
            <div className='w-3/12 mr-12 my-auto'>
              <span  className='my-auto font-bold'>{testimonial.mentor.handle}</span><br />On {testimonial.exercise.title} in {testimonial.track.title}
            </div>

            <div className='truncate overflow-hidden text-ellipsis w-4/12 my-auto'>
            {testimonial.content}
            </div>
          </div>
          <div className='relative text-right right-0'>
          <div className='absolute right-0 -translate-y-12 mr-8'>

              <div className='inline mr-12 '>{formattedDate}</div>
              <FontAwesomeIcon className=' inline ' icon={faAngleRight} />
              </div>

          </div>
      </li>

    )
  })

    return (
      <ul className='mb-12 mt-4'>
         {testimonialList}
      </ul >

    )
  }



export default TestimonialItem
