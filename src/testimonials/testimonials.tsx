import Slider from 'react-slick'
import styled from 'styled-components/macro'
import { photo1, photo2, photo3, photo4 } from './assets'
import { ReactComponent as QuoteIcon } from './assets/quote-icon.svg'
import { ReactComponent as RatingIcon } from './assets/rating-stars.svg'

const Wrapper = styled.section`
  padding: 0 1em;
  margin-top: 5.5em;
`

const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  text-align: center;
`

const Subtitle = styled.h4`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: .5em 0 3em;
  text-align: center;
`

const Image = styled.img`
  max-width: 100%;
  max-width: 55.14px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
`

const testimonialsData = [
  {
    avatar: photo3,
    author: 'Amanda Merien',
    occupation: 'Analista junior',
  },
  {
    avatar: photo2,
    author: 'Lucas Correia',
    occupation: 'CEO / Creative IT',
  },
  {
    avatar: photo1,
    author: 'Rodrigo Godoy',
    occupation: 'Presidente / Amazon',
  },
  {
    avatar: photo4,
    author: 'Jean Souza',
    occupation: 'Desenvolvedor de Software',
  },
]

export function Testimonials () {
  const settigns = {
    infite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    easing: 'linear',
    initialSlide: 0,
    autoplay: true,
    swipe: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Wrapper>
      <Title>Depoimentos</Title>

      <Subtitle>Recomendados por quem é expert no assunto</Subtitle>

      <Slider {...settigns}>
        {
          testimonialsData.map((item, index) => (
            <div key={index}>
              <RatingIcon />

              <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.</p>

              <div>
                <Image src={item.avatar} alt={`${item.author}`} />

                <div>
                  <h5>{item.author}</h5>
                  <p>{item.occupation}</p>
                </div>

                <QuoteIcon />
              </div>
            </div>
          ))
        }
      </Slider>
    </Wrapper>
  )
}
