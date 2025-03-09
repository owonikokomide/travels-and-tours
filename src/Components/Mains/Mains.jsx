import React from 'react'
import "./mains.css"
import img from "../../assets/bora.jpg"
import img2 from "../../assets/michu.jpg"
import img3 from "../../assets/reef.jpg"
import img4 from "../../assets/cappadocia.jpg"
import img5 from "../../assets/Guanajuato.jpg"
import img6 from "../../assets/Cinque Terre.jpg"
import img7 from "../../assets/Angkur Wat.jpg"
import img8 from "../../assets/Taj Mihal.jpg"
import img9 from "../../assets/Bali Island.jpg"
import { HiOutlineClipboard, HiOutlineLocationMarker } from 'react-icons/hi'
function Mains() {
  const Data = [
    {
      id: 1,
      imgSrc: img,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for it luxurious stays and adventurous activities.'
    },

    {
      id: 2,
      imgSrc: img2,
      destTitle: 'Machu Picchu',
      location: 'Peru',
      grade: 'CULTURAL RELAX',
      fees: '$600',
      description: 'Huayna Picchu is a mountain in Peru, rising over Machu Pacchu, the so-called Lost city of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular. '
    },

    {
      id: 3,
      imgSrc: img3,
      destTitle: 'Great Barrier Reef',
      location: 'Australia',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is "Lavish" and "Beauty". Always interesting to be in this place.'
    },

    {
      id: 4,
      imgSrc: img4,
      destTitle: 'Cappadocia',
      location: 'Turkey',
      grade: 'CULTURAL RELAX',
      fees: '$800',
      description: 'According to the World Tourism Ranking, 45million people visit Turkey every year, and from that about 2million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities. '
    },
    
    {
      id: 5,
      imgSrc: img5,
      destTitle: 'Guanajuato',
      location: 'Mexico',
      grade: 'CULTURAL RELAX',
      fees: '$1100',
      description: 'A city in central Mexico, Guanajuato is known fo its history of silver minig and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'
    },

    {
      id: 6,
      imgSrc: img6,
      destTitle: 'Cinque Terre',
      location: 'Italy',
      grade: 'CULTURAL RELAX',
      fees: '$840',
      description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy explorng great food.'
    },

    {
      id: 7,
      imgSrc: img7,
      destTitle: 'Angkur Wat',
      location: 'Cambodia',
      grade: 'CULTURAL RELAX',
      fees: '$790',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for it luxurious stays and adventurous activities.'
    },

     {
      id: 8,
      imgSrc: img8,
      destTitle: 'Taj Mihal',
      location: 'India',
      grade: 'CULTURAL RELAX',
      fees: '$900',
      description: 'An immense mausoleum of white marble , built-in Agra by Mughal emperor Shan Jahan in memoru of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities.'
    },

     {
      id: 9,
      imgSrc: img9,
      destTitle: 'Bali Island',
      location: 'Indonesia',
      grade: 'CULTURAL RELAX',
      fees: '$500',
      description: 'Bali is an Indonesia Island and one of the best holiday destination in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beach.'
    }

  ]
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Most visited destination
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h3 className="destTitle">
                    {destTitle}
                  </h3>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade} <small> +1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboard className='icon' />
                  </button>


                </div>

              </div>
            )

          })
        }
      </div>
    </section>
  )
}

export default Mains