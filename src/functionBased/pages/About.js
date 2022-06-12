import React from "react"
import { Link, useMatch, Route, Routes } from "react-router-dom"
import SinglePage from "./SinglePage"

const About = () => {
    const match = useMatch("/about/:slug")
    // console.log(match)
  return (
      <>
      
    {/* <div style={{color: "#ffffff"}}>hello from about page</div> */}
    <div className="about__content">
    <ul className="about__list">
    <li>
        <Link to={`/about/about-app`}>About App</Link>
      </li>
      <li>
        <Link to={`/about/about-author`}>About Author</Link>
      </li>
    </ul>
    <Routes>
    <Route path=":slug" element={<SinglePage/>} />
    </Routes>
  </div>
    </>
  )
}
export default About
