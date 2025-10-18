import {Roboto} from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font'

export const Robot:NextFont = Roboto({
    subsets:['latin','cyrillic'],
    weight:'400'
})