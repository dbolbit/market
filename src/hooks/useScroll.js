import React from "react"

const useScroll = node => e => node.scrollTo({ left: node.scrollLeft + e.deltaY * 3, behavior: "smooth" })

export default useScroll
