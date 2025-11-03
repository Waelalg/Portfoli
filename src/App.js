"use client"

import { useState, useEffect } from "react"
import Preloader from "../src/components/Pre"
import Navbar from "./components/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer"
import Resume from "./components/Resume/ResumeNew"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import "./style.css"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { updateMetaTags } from "./utils/seoHelpers"

function App() {
  const [load, upadateLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const currentPath = window.location.pathname

    const pageMetaData = {
      "/": {
        title: "Home",
        description: "Wael's Full Stack Developer Portfolio - React, Node.js, and Modern Web Technologies",
      },
      "/about": {
        title: "About",
        description: "Learn more about Wael - Skills, experience, and technical expertise in full stack development",
      },
      "/project": {
        title: "Projects",
        description: "Explore Wael's portfolio projects - React, Next.js, Node.js, and more innovative web solutions",
      },
      "/resume": {
        title: "Resume",
        description: "Wael's professional resume and work experience in full stack development",
      },
    }

    const meta = pageMetaData[currentPath] || pageMetaData["/"]
    updateMetaTags(meta.title, meta.description, `https://yourportfolio.com${currentPath}`)
  }, [])

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
