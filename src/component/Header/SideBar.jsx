

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaCaretRight, FaCaretDown } from "react-icons/fa"
import PropTypes from "prop-types"
import { sidebarItems } from "../../Utils/data"
import Popper from "@mui/material/Popper"
import Fade from "@mui/material/Fade"
import Paper from "@mui/material/Paper"

const SideBar = ({ isSidebarOpen }) => {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [clickedItem, setClickedItem] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMouseEnter = (index, event) => {
    if (!isSidebarOpen) {
      setHoveredItem(index)
      setAnchorEl(event.currentTarget)
    }
  }

  const handleMouseLeave = () => {
    if (!isSidebarOpen) {
      setHoveredItem(null)
      setAnchorEl(null)
    }
  }

  const handleClick = (index, event) => {
    if (isSidebarOpen) {
      // Check if the section has subSections
      if (sidebarItems[index].subSections) {
        // If it has subSections, prevent default navigation
        event.preventDefault()
        setClickedItem((prevClickedItem) => (prevClickedItem === index ? null : index))
      }
    }
  }

  return (
    <div className="h-full">
      <div className="sticky bg-white w-full h-12">
        <div className="sticky top-0">
          {isSidebarOpen ? (
            <img src="/image-1.png" alt="Logo" className="h-12 mx-auto p-1" />
          ) : (
            <img src="/image-1.png" alt="Logo" className="h-12 mx-auto p-1" />
          )}
        </div>
      </div>

      <div className="w-full flex flex-col justify-center bg-primary-500 text-white">
        {sidebarItems.map((section, index) => {
          const content = (
            <div className="fixed -top-6 w-48 flex flex-col min-h-12 pl-4 py-3 text-primary-500 bg-primary-600 justify-start">
              <Link to={section.path} className="-ml-4">
                {section.title}
              </Link>
              {section.subSections &&
                section.subSections.map((subItem, subIndex) => (
                  <Link
                    to={subItem.path}
                    key={subIndex}
                    className="flex  items-center gap-2 ml-2 hover:text-primary-500"
                  >
                    {subItem.icon}
                    {subItem.title}
                  </Link>
                ))}
            </div>
          )

          return (
            <div key={index} onMouseEnter={(event) => handleMouseEnter(index, event)} onMouseLeave={handleMouseLeave}>
              <Popper
                open={!isSidebarOpen && hoveredItem === index}
                anchorEl={anchorEl}
                placement="right"
                transition
                sx={{ zIndex: 1200 }}
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={700}>
                    <Paper>{content}</Paper>
                  </Fade>
                )}
              </Popper>

              <div className="relative flex border-b items-center hover:bg-primary-600 lg:w-full w-64 hover:text-primary-500">
                {section.subSections ? (
                  <div className="w-full">
                    <button
                      onClick={(e) => handleClick(index, e)}
                      className={`relative flex items-center justify-center h-12 w-full transition-all duration-300 ease-in-out hover:border-l-4 hover:border-primary-500`}
                    >
                      <div className="w-12 flex justify-center items-center text-xl">{section.icon}</div>
                      <div
                        className={`flex items-center transition-transform duration-300 ease-in-out ${
                          isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                        }`}
                      >
                        {isSidebarOpen && (
                          <div className={`h-12 ml-3 flex items-center whitespace-nowrap w-36 text-white p-2`}>
                            {section.title}
                          </div>
                        )}
                        {isSidebarOpen && section.subSections && (
                          <div className="text-white ml-auto mr-4">
                            {clickedItem === index ? <FaCaretDown /> : <FaCaretRight />}
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                ) : (
                  <Link to={section.path} className="w-full">
                    <button
                      className={`relative flex items-center justify-center h-12 w-full transition-all duration-300 ease-in-out hover:border-l-4 hover:border-primary-500`}
                    >
                      <div className="w-12 flex justify-center items-center text-xl">{section.icon}</div>
                      <div
                        className={`flex items-center transition-transform duration-300 ease-in-out ${
                          isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                        }`}
                      >
                        {isSidebarOpen && (
                          <div className={`h-12 ml-3 flex items-center whitespace-nowrap w-36 text-white p-2`}>
                            {section.title}
                          </div>
                        )}
                      </div>
                    </button>
                  </Link>
                )}
              </div>

              {section.subSections && (
                <div
                  className={`${isSidebarOpen && clickedItem === index ? "block" : "hidden"} 
                  bg-primary-500 transition-all duration-300 ease-in-out`}
                >
                  {section.subSections.map((subSection, subIndex) => (
                    <Link
                      to={subSection.path}
                      key={subIndex}
                      className="flex items-center px-8 py-2 hover:bg-primary-600 hover:text-white"
                    >
                      <div className="flex text-white pr-2 justify-center transition-transform duration-300 ease-in-out">
                        {subSection.icon}
                      </div>
                      <span
                        className={`transition-transform duration-300 ease-in-out ${
                          isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                        }`}
                      >
                        {subSection.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

SideBar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
}

export default SideBar
