import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/prakhar-singh-652a32208/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="hhttps://github.com/prakhar12330/" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://leetcode.com/prakhar12330/" target="_blank" rel="noreferrer" ><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials