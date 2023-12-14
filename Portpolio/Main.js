import React, { useEffect, useState } from 'react'
import MainImage from './static/우주사진_포폴.jpg'
const Main = () => {
  const [isDeveloperVisible, setDeveloperVisible] = useState(false);
  const [isPortfolioVisible, setPortfolioVisible] = useState(false);

  useEffect(() => {
    // Developer 섹션을 500ms 이후에 Fade-in
    setTimeout(() => {
      setDeveloperVisible(true);
    }, 100);

    // Portfolio 섹션을 추가로 1000ms(1초) 이후에 Fade-in
    setTimeout(() => {
      setPortfolioVisible(true);
    }, 700);
  }, []);
  return (
    <>
        <div className='bg-black overflow-hidden h-screen flex items-center justify-center'>'
            <h2 className="z-10 text-white absolute font-['S-CoreDream-3Light'] text-7xl font-semibold tracking-wider"><span className={`text-5xl tracking-normal transition-all transform duration-1000 ${isDeveloperVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Developer</span><br/><span className={` transition-all transform duration-1000 ${isPortfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Portfolio</span></h2>
            <img src={MainImage} className='opacity-30'/>
            
        </div>
    </>
  )
}

export default Main
