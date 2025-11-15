import Image from "next/image";
import foxWithLaptop from '../../../image/fox-with-laptop.png'
import scss from './_description.module.scss'
import { Robot } from "@/components/font/fonts";

const Description: React.FC = () => {
    return (
        <div className={`${scss.descriptionContainer} ${Robot.className}`}>
            <h2>Why Ireland is My Dream Destination</h2>
            <div className={scss.textCol}>
                <div className={scss.textDescriptio}>
                    <p>
                        Ireland is my number one dream destination — a country that captivates me 
                        with its soul, its culture, and its people. Everything about it feels like 
                        a masterpiece: from the dramatic cliffs kissing the Atlantic to the cozy 
                        pubs where strangers become friends over a pint and a story.
                    </p>
                    <p>
                        I'm mesmerized by the Irish spirit — warm, genuine, and full of life. 
                        The landscapes are breathtaking: endless green hills, ancient castles 
                        standing proud against stormy skies, and winding roads that promise 
                        adventure at every turn. The music, the folklore, the literary heritage — 
                        it all speaks to something deep within me.
                    </p>
                    <p>
                        Ireland isn't just a place on the map. It's a feeling, a connection, 
                        a dream I carry in my heart. And one day, I will walk those emerald paths, 
                        breathe that misty air, and finally stand on the land that has called to me 
                        for so long. Ireland, I'm coming for you.
                    </p>
                </div>
                <div className={scss.imageDescription}>
                    <Image
                        src={foxWithLaptop}
                        alt='Dreaming about Ireland'
                    />
                </div>
            </div>
        </div>
    );
};

export default Description;