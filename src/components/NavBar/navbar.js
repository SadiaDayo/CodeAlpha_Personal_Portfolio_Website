import React ,{useState} from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';


const Navbar = () => {
  const [showMenu, setshowMenu]= useState(false);
  return (
    <nav className="navbar">
      <h1>SADIA.</h1>
<div className='desktopMenu'>
<Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>HOME</Link>
<Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem'>ABOUT</Link>
<Link activeClass='active' to ='works' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem'>PROJECTS</Link>
<Link activeClass='active' to ='contactPage' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem'>CONTACT</Link>
</div>
<a href={require('../../assets/CV.jpg')} download="Sadia_CV.jpg">
  <button className='desktopMenuBtn'>
    <img src={contactImg} alt='contact' className='desktopMenuImg'/>Download CV
  </button>
</a>


<img src={menu} alt='menu' className='mobMenu'onClick={()=>setshowMenu(!showMenu)}/>
<div className='navMenu' style={{display: showMenu?'flex':'none'}}>
<Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setshowMenu(false)}>HOME</Link>
<Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-50} duration={500}  className='ListItem'onClick={()=>setshowMenu(false)}>ABOUT</Link>
<Link activeClass='active' to ='works' spy={true} smooth={true} offset={-50} duration={500}  className='ListItem'onClick={()=>setshowMenu(false)}>PROJECTS</Link>
<Link activeClass='active' to ='contactPage' spy={true} smooth={true} offset={-50} duration={500}  className='ListItem'onClick={()=>setshowMenu(false)}>CONTACT</Link>
</div>

    </nav>
  )
}

export default Navbar
