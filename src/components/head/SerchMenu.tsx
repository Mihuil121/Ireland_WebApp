'use client'
import { IBlockSerch, blockSerch } from "./serch";
import style from './blokStyle.module.scss';
import { Robot } from "../font/fonts";
import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice, setActiveSection } from '../../Store/Counter/counterSlice';
import { RootState } from '../../Store/store';

const SerchMenu: React.FC = () => {
  const dispatch = useDispatch();
  const isScrolled = useSelector((state: RootState) => state.counter.isScrolled);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(counterSlice.actions.setIsScrolled(window.scrollY > 50));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  const handleClick = (blok: IBlockSerch) => {
    if (blok.id === 3) {
      // пункт "City" -> показываем CityMain
      dispatch(setActiveSection('city'));
    } else {
      // все остальные -> показываем основной Main
      dispatch(setActiveSection('main'));
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className={Robot.className}>
      <article className={`${style.articleMenu} ${isScrolled ? style.scrolled : ''}`}>
        {blockSerch.map((Blok: IBlockSerch) => (
          <div className={style.Menu} key={Blok.id}>
            {Blok.id !== 6 ? (
              <p onClick={() => handleClick(Blok)} onMouseDown={handleMouseDown} tabIndex={-1}>{Blok.name}</p>
            ) : (
              <Link href={Blok.url || '#'}>
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
