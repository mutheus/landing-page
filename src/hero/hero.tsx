import RobotImg from 'shared/assets/robot-image.png'
import { ReactComponent as RightArrow } from 'shared/assets/right-arrow.svg'
import { Button } from 'shared/styles'
import * as S from './styles'

export function Hero () {
  return (
    <S.HeroContainer id='home'>
      <img src={RobotImg} alt='Robot illustration' />

      <S.Subtitle>Seja aprovado no Enem e Vestibulares :)</S.Subtitle>

      <S.Title>Você escolhe <br />o que aprender<span>.</span></S.Title>

      <S.Description>Aqui você terá toda assistência que precisa com materiais desenvolvido por <strong>mestres e doutores em matemática</strong></S.Description>

      <Button>Veja nossos planos <RightArrow /></Button>
    </S.HeroContainer>
  )
}
