import React from 'react'
import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Profile",
    path: "/profile",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "Academics",
    path: "/academics",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBriefcase />,
  },
  {
    id: 3,
    title: "Attendance",
    path: "/attendance",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaCartArrowDown />,
  },
  {
    id: 4,
    title: "Announcements",
    path: "/announcements",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaPhone />,
  },
];
