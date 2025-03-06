import React from 'react'
import "./mains.css"

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

  ]
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Most visited destination
        </h3>
      </div>

      <div className="secContent grid">

      </div>
    </section>
  )
}

export default Mains