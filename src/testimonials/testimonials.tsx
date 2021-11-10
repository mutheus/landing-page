import Slider from 'react-slick'
import styled from 'styled-components/macro'
import { photo1, photo2, photo3, photo4 } from './assets'
import { ReactComponent as QuoteIcon } from './assets/quote-icon.svg'
import { ReactComponent as RatingIcon } from './assets/rating-stars.svg'
import { ReactComponent as ArrowIcon } from './assets/arrow-icon.svg'

const Wrapper = styled.section`
  margin: 5.5em 0 2.494em;
`

const SliderWrapper = styled(Slider)`
  position: relative;
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
  margin: .5em auto 1.5em;
  text-align: center;
  max-width: 15em;
`

const Image = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 50%;
`

const TestimonialCard = styled.div`
  padding: 1.375em;
  box-shadow: 0px 0.918919px 3.67568px rgba(0, 0, 0, 0.22);
  border-radius: .575em;
  margin: 2em .9375em 4em;
  color: ${({ theme }) => theme.colors.text};

  > p {
    margin-bottom: 4em;
  }

  > div {
    display: flex;
    align-items: center;
    gap: .861em;

    *:last-child {
      margin-left: auto;
    }

    h5 {
      font-weight: 600;
      font-size: 1.125rem;
      margin: 5px 0;
      color: ${({ theme }) => theme.colors.primary};
    }

    p {
      margin: 0;
      font-size: .75rem;
    }
  }
`

type ArrowBtnProps = {
  right: boolean
}

const ArrowBtn = styled.button<ArrowBtnProps>`
  width: 31px;
  aspect-ratio: 1/1;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: ${({ right }) => right ? 'calc(50% + 1px)' : 'none'};
  left: ${({ right }) => !right ? 'calc(50% + 1px)' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ right }) => right ? 'none' : 'rotate(180deg)'};
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

const NextArrow = ({ onClick }: any) => {
  return (
    <ArrowBtn right onClick={onClick}>
      <ArrowIcon />
    </ArrowBtn>
  )
}

const PrevArrow = ({ onClick }: any) => {
  return (
    <ArrowBtn right={false} onClick={onClick}>
      <ArrowIcon />
    </ArrowBtn>
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

      <SliderWrapper {...settigns}>
        {
          testimonialsData.map((item, index) => (
            <div key={index}>
              <TestimonialCard key={index}>
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
              </TestimonialCard>
            </div>
          ))
        }
      </SliderWrapper>
    </Wrapper>
  )
}
