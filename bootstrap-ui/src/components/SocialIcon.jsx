import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialIcon = () => {
  return (
    <>
    <div className='mt-4'>
        <a href="" className='btn fs-3 p-0'>
         <FaFacebook />
        </a>
          <a href="" className='btn fs-3 p-1'>
         <FaTwitter />
        </a>
          <a href="" className='btn fs-3 p-1'>
         <FaLinkedin />
        </a>
          <a href="" className='btn fs-3 p-1'>
         <FaInstagram />
        </a>
          <a href="" className='btn fs-3 p-1'>
         <FaGithub />
        </a>
    </div>
      
    </>
  )
}

export default SocialIcon
