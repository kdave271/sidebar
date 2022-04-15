import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { GiShoppingBag } from 'react-icons/gi'
import { MdEditCalendar, MdOutlineAnalytics, MdSpeed } from 'react-icons/md'
import {
  RiBankLine,
  RiArrowDropDownLine,
  RiArrowDropUpLine
} from 'react-icons/ri'

export const SideBarData = [
  {
    title: 'GENERAL',
    categories: [
      {
        subTitle: 'App',
        path: '/App',
        icon: <MdSpeed />,
        cName: 'nav-text',
        subCategories: []
      },
      {
        subTitle: 'E-Commerce',
        path: '/ECommerce',
        icon: <GiShoppingBag />,
        cName: 'nav-text',
        subCategories: []
      },
      {
        subTitle: 'Analytics',
        path: '/Analytics',
        icon: <MdOutlineAnalytics />,
        cName: 'nav-text',
        subCategories: []
      },
      {
        subTitle: 'Banking',
        path: '/Banking',
        icon: <RiBankLine />,
        cName: 'nav-text',
        subCategories: []
      },
      {
        subTitle: 'Booking',
        path: '/Booking',
        icon: <MdEditCalendar />,
        cName: 'nav-text',
        subCategories: []
      }
    ]
  },
  {
    title: 'MANAGEMENT',
    categories: [
      {
        subTitle: 'User',
        icon: <AiOutlineUser />,
        cName: 'nav-text',
        dropdownIcon: <RiArrowDropDownLine size={30} />,
        dropupIcon: <RiArrowDropUpLine size={30} />,
        isActive: false,
        subCategories: [
          {
            action: 'Profile',
            path: '/Profile'
          },
          {
            action: 'Cards',
            path: '/Cards'
          },
          {
            action: 'List',
            path: '/List'
          },
          {
            action: 'Create',
            path: '/Create'
          },
          {
            action: 'Edit',
            path: '/Edit'
          },
          {
            action: 'Account',
            path: '/Account'
          }
        ]
      },
      {
        subTitle: 'E-Commerce',
        path: '/',
        icon: <BsFillCartFill />,
        cName: 'nav-text',
        subCategories: []
      }
    ]
  }
]
