import styled from 'styled-components/macro'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
} from './assets'

const brandsArr = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
]

export const SliderWrapper = styled(Slider)`
  .slick-prev {
    display: none;
  }

  .slick-next {
    display: none;
  }
`

const BrandImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
`

export function BrandSlider () {
  const settings = {
    infite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplaySpeed: 1500,
    cssEase: 'linear',
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  }

  return (
    <SliderWrapper {...settings}>
      {
        brandsArr.map((elem, index) => (
          <BrandImg src={elem} key={index} />
        ))
      }
    </SliderWrapper>
  )
}
