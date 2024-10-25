import React from 'react'
import style from '../style/Footer.module.css'
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };
  return (
    <footer className={style.footer}>
      <p>Copyright © 2024 Oceanly News Dark.</p>
      
      <p style={{marginTop:5}}>
        
        Theme: Oceanly News Dark by{' '}
        <a href="https://scriptstown.com" target="_blank" rel="noopener noreferrer">
          ScriptsTown
        </a>
      </p>
      
    </footer>
  )
}

export default Footer