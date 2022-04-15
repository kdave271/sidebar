import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { SideBarData } from './SideBarData'
function NavBar() {
  const [sidebar, SetSideBar] = useState(false)
  const [data, SetData] = useState(SideBarData)
  const activateDropDown = (index, i) => {
    SetData(
      SideBarData.map((a, b) => {
        if (b === index) {
          a.categories.map((c, d) => {
            if (d === i) {
              c.isActive = !c.isActive
            }
            return c
          })
        }
        return a
      })
    )
  }
  return (
    <>
      <div>
        <Link to="#" className="menu-bars">
          <FaBars onClick={() => SetSideBar(!sidebar)} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active overflow-y-scroll' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose
                color="white"
                onClick={() => SetSideBar(!sidebar)}
              />
            </Link>
          </li>
          {data.map((h, index) => (
            <li key={index}>
              <span className="font-semibold">{h.title}</span>
              <ul>
                {h.categories.map((hh, i) =>
                  hh.subCategories.length ? (
                    <li className="px-8 py-4 hover:bg-slate-50 ">
                      <div
                        className="flex items-center justify-between"
                        onClick={() => activateDropDown(index, i)}
                      >
                        <div className="flex items-center">
                          {hh.icon}
                          <span>{hh.subTitle}</span>
                        </div>
                        {hh.isActive ? hh.dropupIcon : hh.dropdownIcon}
                      </div>
                      <ul>
                        {hh.isActive &&
                          hh.subCategories.map((hhh, j) => (
                            <Link to={hhh.path} key={j}>
                              <li className='py-2'>
                                <span>{hhh.action}</span>
                              </li>
                            </Link>
                          ))}
                      </ul>
                    </li>
                  ) : (
                    <Link to={hh.path} key={i}>
                      <li className="flex items-center px-8 py-4 hover:bg-slate-50 ">
                        {hh.icon}
                        <span>{hh.subTitle}</span>
                      </li>
                    </Link>
                  )
                )}
              </ul>
              {/* <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link> */}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavBar
