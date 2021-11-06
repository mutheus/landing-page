import styled from 'styled-components/macro'
import RobotImg from 'shared/assets/robot-image.png'
import { ReactComponent as RightArrow } from 'shared/assets/right-arrow.svg'
import { Button } from 'shared/styles'

const HeroContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 12em 1em 9em;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: .875rem;
  color: ${({ theme }) => theme.colors.secondary};
`

const Title = styled.h1`
  font-family: 'Fredoka One', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.5;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const Description = styled.p`
  font-size: 0.75rem;
  letter-spacing: .38px;
  line-height: 1.5;
  padding: 0 3em;
`

export function Hero () {
  return (
    <HeroContainer>
      <img src={RobotImg} alt='Robot illustration' />

      <Subtitle>Seja aprovado no Enem e Vestibulares :)</Subtitle>

      <Title>Você escolhe <br />o que aprender<span>.</span></Title>

      <Description>Aqui você terá toda assistência que precisa com materiais desenvolvido por <strong>mestres e doutores em matemática</strong></Description>

      <Button>Veja nossos planos <RightArrow /></Button>
    </HeroContainer>
  )
}
