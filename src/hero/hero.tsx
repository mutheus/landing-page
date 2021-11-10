import RobotImg from 'shared/assets/robot-image.png'
import HeroIllustration from './assets/hero-illustration.png'
import { ReactComponent as RightArrow } from 'shared/assets/right-arrow.svg'
import * as S from './styles'

export function Hero () {
  return (
    <S.HeroContainer id='home'>
      <div>
        <div>
          <img src={RobotImg} alt='Robot illustration' />

          <S.Subtitle>Seja aprovado no Enem e Vestibulares :)</S.Subtitle>
        </div>

        <S.Title>Você escolhe <br />o que aprender<span>.</span></S.Title>

        <S.Description>Aqui você terá toda assistência que precisa com materiais desenvolvido por <strong>mestres e doutores em matemática</strong></S.Description>

        <S.HeroButton>Veja nossos planos <RightArrow /></S.HeroButton>
      </div>

      <img src={HeroIllustration} alt='Boy studying' />
    </S.HeroContainer>
  )
}
