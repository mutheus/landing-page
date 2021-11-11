import { photo1, photo2, photo3, photo4 } from './assets'
import { ReactComponent as QuoteIcon } from './assets/quote-icon.svg'
import { ReactComponent as RatingIcon } from './assets/rating-stars.svg'
import { ReactComponent as ArrowIcon } from './assets/arrow-icon.svg'
import * as S from './styles'

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

const NextArrow = ({ onClick }: any) => {
  return (
    <S.ArrowBtn right onClick={onClick}>
      <ArrowIcon />
    </S.ArrowBtn>
  )
}

const PrevArrow = ({ onClick }: any) => {
  return (
    <S.ArrowBtn right={false} onClick={onClick}>
      <ArrowIcon />
    </S.ArrowBtn>
  )
}

export function Testimonials () {
  const settigns = {
    infite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    easing: 'linear',
    initialSlide: 0,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <S.Wrapper>
      <S.Title>Depoimentos</S.Title>

      <S.Subtitle>Recomendados por quem é expert no assunto</S.Subtitle>

      <S.SliderWrapper {...settigns}>
        {
          testimonialsData.map((item, index) => (
            <div key={index}>
              <S.TestimonialCard key={index}>
                <RatingIcon />

                <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.</p>

                <div>
                  <S.Image src={item.avatar} alt={`${item.author}`} />

                  <div>
                    <h5>{item.author}</h5>

                    <p>{item.occupation}</p>
                  </div>

                  <QuoteIcon />
                </div>
              </S.TestimonialCard>
            </div>
          ))
        }
      </S.SliderWrapper>
    </S.Wrapper>
  )
}
