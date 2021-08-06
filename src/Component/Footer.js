import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon  from '@material-ui/icons/Instagram';
import TwitterIcon  from '@material-ui/icons/Twitter';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';

import {  orange } from '@material-ui/core/colors';
const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
      width: 50,
      margin: 0
    }}
  />
);
function Footer() {
  return (
    <div className="nl">
      <div className="container ">
        <div className="onebox">
          <img className="ft mt" src="image/logo.png" alt="logo" />
          <p class="fnt-s"> ut labore et dolore magna aliquaut labore et dolore magna aliqua. Ut enim ad minim veniam, quis aks nostrud exercitation ullamco.</p>
        
        </div>
        <div className="twobox mt cl">
          <h5 className="h5">Quick Links</h5>
          <ColoredLine color="gray" />
          <div className="c">

            <a href="/about">About Us</a><br />
            <a href="/product">Product</a><br />
            <a href="services">Services</a><br />
            <a href="Portfolio">Portfolio</a><br />
            <a href="/contact">Contact Us</a><br />
          </div>
        </div>
        <div className="thirdbox mt cl">
          <h5 className="h5">Contact Us</h5>
          <ColoredLine color="gray" />
          
            <div className="ten">
              <PhoneRoundedIcon style={{ color: orange[500] }} />              <a href="/contact" className="ca">+91-9516247583</a><br />

               < MailOutlineRoundedIcon style={{ color: orange[500] }} />                <a href="/contact" className="ca">abhi85558@yahoo.co.in</a><br />

              <LocationOnRoundedIcon style={{ color: orange[500] }} />             <a href="/contact" className="ca">Bhopal, 442001 Madhya Pradesh</a> 
          
          </div></div>
        <div className="forthbox mt">
          <h5 className="h5">Follow Us</h5>
          <ColoredLine color="gray" />
         
          <div className="c">
            <a href="https://www.facebook.com" className="icon ">< FacebookIcon style={{ color: orange[500] }} /></a>
            <a href="https://www.whatsapp.com" className="icon">< WhatsAppIcon style={{ color: orange[500] }} /></a>
            <a href="https://www.instagram.com" className="icon"><  InstagramIcon  style={{ color: orange[500] }} /></a>
            <a href="https://twitter.com" className="icon">< TwitterIcon   style={{ color: orange[500] }} /></a>
          </div></div>
      </div>

      <div className="text-center copyright">Copyright © 2021</div>
    </div>



  );
}
export default Footer;