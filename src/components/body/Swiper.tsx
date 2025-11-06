'use client'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { ObjectPhoto, PhotoItem } from './swipe'
import Image from 'next/image'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { openFullscreen } from '@/Store/Counter/counterSlice'

const SwiperMain: React.FC = () => {
  const swiperRef = useRef<any>(null)
  const dispatch = useDispatch()

  const handleImageClick = (photoName: string) => {
    dispatch(openFullscreen(photoName))
  }

  return (
    <div style={{ position: 'relative', padding: '40px 0' }}>
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        style={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        style={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
      >
        <ChevronRight size={28} />
      </button>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        style={{ padding: '0 60px' }}
      >
        {ObjectPhoto.map((photo: PhotoItem) => (
          <SwiperSlide key={photo.name}>
            <div style={{ padding: '10px 0' }}>
              <Image
                src={photo.image}
                alt={photo.name}
                width={photo.image.width}
                height={photo.image.height}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                }}
                onClick={() => handleImageClick(photo.name)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SwiperMain