import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Skill from './Skill'
import Blog from './Blog'
import Contact from './Contact'

export default class Whole extends Component {
  render() {
    return (
      <div>
        <Home/>
        <About/>
        <Skill/>
        <Services/>
        <Projects/>
        <Blog/>
        <Contact/>

      </div>
    )
  }
}
