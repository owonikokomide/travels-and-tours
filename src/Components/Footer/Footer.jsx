import React from 'react'
import "./footer.css"
import video from "../../assets/footer.mp4"
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'

function Footer() {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video}  muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className="btn flex" type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon' />Travel.</a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ut perferendis dicta possimus ab error corrupti odio nulla! Illum minus consectetur eaque blanditiis distinctio eos, quas optio itaque in adipisci.
            </div>
            <div className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Payments
              </li>
            </div>
            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Rent Cars
              </li>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Hostel World
              </li>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Trip Advisor
              </li>
            </div>
            <div className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                London
              </li>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                California
              </li>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Indonesia
              </li>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Europe
              </li>
              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL THEME</small>
            <small>COPYRIGHT RESERVED - HAYWHY 2025</small>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer