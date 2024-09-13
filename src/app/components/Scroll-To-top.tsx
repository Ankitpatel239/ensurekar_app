"use client"

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'phosphor-react';

const ScrollTotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`fixed text-white text-xl sm:text-2xl rounded-full bg-p1 hover:bg-s2 border border-p1 hover:border-white right-6 md:right-10 p-2 sm:p-3 z-40 jumping1 duration-700 scrollButton scrollButtonHide !leading-[0] ${isVisible ? '' : 'hidden'}`}
      aria-label="bottom to top button"
    >
      <span className="block" style={{display:'block'}}>
        <ArrowUp />
      </span>
    </button>
  );
};

export default ScrollTotop;
