'use client'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Store/store'
import { closeFullscreen } from '@/Store/Counter/counterSlice'
import { ObjectPhoto } from './swipe'
import Image from 'next/image'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

const FullscreenViewer: React.FC = () => {
  const dispatch = useDispatch()
  const { selectedPhotoId, isFullscreenOpen } = useSelector((state: RootState) => state.counter)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isFullscreenOpen) {
      setTimeout(() => setIsVisible(true), 10)
    } else {
      setIsVisible(false)
    }
  }, [isFullscreenOpen])

  if (!isFullscreenOpen || !selectedPhotoId) return null

  const selectedPhoto = ObjectPhoto.find(photo => photo.name === selectedPhotoId)

  if (!selectedPhoto) return null

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => dispatch(closeFullscreen()), 300)
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
      onClick={handleClose}
    >
      <button
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          borderRadius: '50%',
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'white',
          transition: 'all 0.2s',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
      >
        <X size={32} />
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          position: 'relative',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.9)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Image
          src={selectedPhoto.image}
          alt={selectedPhoto.name}
          width={selectedPhoto.image.width}
          height={selectedPhoto.image.height}
          style={{
            maxWidth: '100%',
            maxHeight: '90vh',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  )
}

export default FullscreenViewer