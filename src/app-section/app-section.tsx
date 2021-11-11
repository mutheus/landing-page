import RobotImg from 'shared/assets/robot-image.png'
import { ReactComponent as RightArrow } from 'shared/assets/right-arrow.svg'
import PhoneImg from './assets/phone.png'
import { useEffect, useRef, useState } from 'react'
import * as S from './styles'

export function AppSection () {
  const wrapperRef = useRef<HTMLImageElement>(null)
  const [wrapperHeight, setWrapperHeight] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (wrapperRef.current !== null) {
        setWrapperHeight(wrapperRef.current?.getBoundingClientRect().height)
      }
    })
  })

  return (
    <S.AppWrapper wrapperHeight={wrapperHeight}>
      <S.AppDetails>
        <div>
          <img src={RobotImg} alt='Robot' />

          <h3>Baixe aulas no app e estude offline</h3>
        </div>

        <p>Receba lembretes no seu celular e tenha a facilidade de estudar a qualquer hora e de qualquer lugar.<br /> <strong>Baixe nosso app e confira.</strong></p>

        <S.AppButton>Conheça nosso aplicativo <RightArrow /></S.AppButton>
      </S.AppDetails>

      <img onLoad={() => wrapperRef.current !== null && setWrapperHeight(wrapperRef.current?.getBoundingClientRect().height)} ref={wrapperRef} src={PhoneImg} alt='Phone' />
    </S.AppWrapper>
  )
}
