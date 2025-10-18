'use client'
import { IBlockSerch, blockSerch } from "./serch";
import style from './blokStyle.module.scss';
import { Robot } from "../font/fonts";
import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from '../../Store/Counter/counterSlice'; 
import { RootState } from '../../Store/store'; 

const SerchMenu: React.FC = () => {
  const dispatch = useDispatch();
  const isScrolled = useSelector((state: RootState) => state.counter.isScrolled);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(counterSlice.actions.setIsScrolled(window.scrollY > 50)); 
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  return (
    <div className={Robot.className}>
      <article className={`${style.articleMenu} ${isScrolled ? style.scrolled : ''}`}>
        {blockSerch.map((Blok: IBlockSerch) => (
          <div className={style.Menu} key={Blok.id}>
            {Blok.id !== 6 ? (
              <p>{Blok.name}</p>
            ) : (
              <Link href={`${Blok.url}`}>
                <p>{Blok.name}</p>
              </Link>
            )}
          </div>
        ))}
      </article>
    </div>
  );
}

export default SerchMenu;
