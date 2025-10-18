import React from 'react'
import style from './main.module.scss'
import { Robot } from '../font/fonts'

const Main: React.FC = () => {
  return (
    <div className={Robot.className}>
      <main className={style.maiAndVideo}>
        <video className={style.backgrounVideo}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src='/video/IrlandVideo.mp4' type='video/mp4' />

        </video>
        <div className={style.blokIrland}>
          <article className={style.borederGreen} />
          <div className={style.bloked}>
            <h1>Irland</h1>
            <p> sweet green isle </p>
          </div>
        </div>

      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Main