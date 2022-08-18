import React, { useContext } from "react";
import "./Works.css";
import StudentIcon from "../../img/Student-Icon.png";
import TeacherIcon from "../../img/Teacher-Icon.jpg";
import AdministratorIcon from "../../img/Administrator-Icon.jpg";
import SmsLogo from "../../img/Sms-Logo.jpg";
import ParentIcon from "../../img/Parent-Icon.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Users & Clients</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contact Us</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={AdministratorIcon} height = '140px' width = '140px' alt="" />
          </div>
          <div className="w-secCircle">
            <img src={TeacherIcon} height = '150px' width = '150px' alt="" />
          </div>
          <div className="w-secCircle">
            <img src={SmsLogo} height = '140px' width = '140px' alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={StudentIcon} height = '140px' width = '140px' alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ParentIcon} height = '140px' width = '140px' alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
