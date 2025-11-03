"use client"

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    // Add fade-in animation to page content on route change
    const pageContent = document.querySelector(".App")
    if (pageContent) {
      pageContent.style.opacity = "0"
      pageContent.style.transition = "opacity 0.5s ease"
      setTimeout(() => {
        pageContent.style.opacity = "1"
      }, 50)
    }
  }, [pathname])

  return null
}

export default ScrollToTop
