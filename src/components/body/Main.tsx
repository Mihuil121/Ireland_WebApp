'use client'
import React from 'react'
import style from './main.module.scss'
import { Robot } from '../font/fonts'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/store'
import SwiperMain from './Swiper'

const Main: React.FC = () => {
  const isScrolled = useSelector((state: RootState) => state.counter.isScrolled)

  return (
    <div className={Robot.className}>
      <main className={style.maiAndVideo}>
        <video
          className={style.backgrounVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{
            filter: isScrolled ? 'blur(8px)' : 'blur(0px)',
            transition: 'filter 0.5s ease',
          }}
        >
          <source src='/video/IrlandVideo.mp4' type='video/mp4' />
        </video>

        <div className={style.blokIrland}>
          <article className={style.borederGreen} />
          <div className={style.bloked}>
            <h1>Ireland</h1>
            <p>sweet green isle</p>
          </div>
        </div>

      </main>
      <SwiperMain />
      <div style={{ height: '200vh' }} />
    </div>
  )
}

export default Main
