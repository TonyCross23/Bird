"use client";

import { useEffect, useState } from "react";

function Themes() {

  const [darkMode, setDarkMode] = useState(null);

  useEffect( () => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setDarkMode('dark');
    } else {
     setDarkMode('light');
    }
  },[]);

  const handleThemeSwitch = () => {
		setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
	};

  useEffect( () => {
    if(darkMode === 'dark') {
      document.documentElement.classList.add('dark');
    }else {
      document.documentElement.classList.remove('dark');
    }
  },[darkMode]);

  return (
    <div>
      <button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed z-10 right-2 top- text-lg p-1 rounded-md"
			>
				{darkMode === 'dark' ? '🌙' : '🌞'}
			</button>
    </div>
  )
}

export default Themes
