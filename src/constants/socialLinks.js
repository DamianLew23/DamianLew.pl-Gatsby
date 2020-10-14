import React from "react"
import {
  FaLinkedin,
  FaBehanceSquare,
  FaGithubSquare,
  FaRocket,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/damian-lew/",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/DamianLew23",
  },
  {
    id: 3,
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "https://www.behance.net/damianlew",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" rel="nofollow" target="_blank">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
