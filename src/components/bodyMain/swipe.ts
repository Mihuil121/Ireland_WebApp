import irishLand from '../../image/Irish_land.jpg'
import dublin from '../../image/Dublin.jpg'
import irishRok from '../../image/Irish_rok.jpg'
import rossCastle from '../../image/RossCastle.jpg'
import type { StaticImageData } from 'next/image'

export interface PhotoItem {
  name: string
  image: StaticImageData
}

const photoMap: Record<string, StaticImageData> = {
  irishLand,
  dublin,
  irishRok,
  rossCastle,
}

const ObjectPhoto: PhotoItem[] = Object.entries(photoMap).map(([name, image]) => ({
  name,
  image,
}))

export {ObjectPhoto}