import boyOnARocket from './assets/boy-on-a-rocket.png'
import boyJumping from './assets/boy-jumping.png'
import * as S from './styles'

export function Details () {
  return (
    <S.DetailsWrapper id='quem-somos'>
      <div>
        <S.Content>
          <S.Title>100% Matemática</S.Title>

          <S.Subtitle>Matemática para quem quer entrar na facul.</S.Subtitle>

          <S.Paragraph>Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.</S.Paragraph>
        </S.Content>

        <img src={boyOnARocket} alt='Boy on a rocket' />
      </div>

      <div>
        <S.Content>
          <S.Title>Quer ser aprovado?</S.Title>

          <S.Subtitle>Se seu foco é ser aprovado, nós estamos aqui por você.</S.Subtitle>

          <S.Paragraph>Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.</S.Paragraph>
        </S.Content>

        <img src={boyJumping} alt='Boy jumping' />
      </div>
    </S.DetailsWrapper>
  )
}
