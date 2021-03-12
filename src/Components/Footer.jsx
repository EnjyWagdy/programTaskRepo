
import React from "react";
import fb from "../Assets/Images/Icon awesome-facebook-square@2x.png"
import insta from "../Assets/Images/Icon ionic-logo-instagram@2x.png"
import linkedin from "../Assets/Images/Icon awesome-linkedin@2x.png"
import twitter from "../Assets/Images/Icon awesome-twitter-square@2x.png"
import discord from "../Assets/Images/Icon awesome-discord@2x.png"


const Footer = () => {

  return (
<div className="row footer bodyContainer">
    <div className="col-md-5 text-right">
        <label className="footer--label">
    Copyright © 2020 StudentGator All rights reserved.</label></div>
    <div className="col-md-4 text-center">
        <label className="footer--label">Follow us</label>
        <img src={fb} />
        <img src={insta} />
        <img src={linkedin} />
        <img src={twitter} />
        <img src={discord} />

    </div>
    <div className="col-md-3">
        <label className="footer--label">Terms & Conditions</label>
        <label className="footer--label">Privacy policy</label>
    </div>

</div>
  );
};
export default Footer;
