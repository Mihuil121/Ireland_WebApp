'use client';

import Main from '@/components/bodyMain/Main';
import SerchMenu from '@/components/head/SerchMenu';
import CityMain from '@/components/bodyCity/CityMain';
import MyBlock from '@/components/Change';
import { useSelector } from 'react-redux';
import type { RootState } from '@/Store/store';

export default function Home() {
  const activeSection = useSelector(
    (state: RootState) => state.counter.activeSection,
  );

  return (
    <div>
      <SerchMenu />
      
      <MyBlock id="main-block">
        {activeSection === 'main' && <Main />}
      </MyBlock>

      <MyBlock id="city-block">
        {activeSection === 'city' && <CityMain />}
      </MyBlock>
    </div>
  );
}