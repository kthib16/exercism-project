import './App.css';
import React from 'react';
import Search from './Components/Search'
// import NavBar from './Components/NavBar'
import TestimonialItem from './Components/TestimonialItem'

export default class  App extends React.Component {
  state = {
    currentPage: 1
  }

  componentDidMount() {
    this.getTestimonialItems()
  }

  getTestimonialItems = async () => {
    const testimonials = await fetch(`https://exercism.org/api/v2/hiring/testimonials?${this.state.currentPage}`)
    const data = await testimonials.json()

    console.log(data)

    this.setState({
      testimonialList: data
    })
  }

  render() {
      return (
        <>
        <TestimonialItem testimonialList={this.state.testimonialList}/>
        </>

      )

  }
}
