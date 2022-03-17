import React from 'react'

const TestimonialItem = ( props ) => {

  const testimonialList = props.testimonialList.testimonials.results.map(testimonial => {
    return(
      <li>
      <div>
        <img src={testimonial.track.icon_url} />
      </div>
      <div className="list-inline-item">
      {testimonial.content}
      </div>

      </li>

    )
  })

    return (
    <div>
      <ul>
         {testimonialList
          ?testimonialList
          : ''}

      </ul>
    </div>

    )
  }



export default TestimonialItem
