import styled from 'styled-components'
import boyOnARocket from './assets/boy-on-a-rocket.png'
import boyJumping from './assets/boy-jumping.png'

const DetailsWrapper = styled.section`
  padding: 0 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.3em;
`

const Content = styled.div`
  max-width: 17.063em;
  margin: 0 auto;
  margin-bottom: 4em;
`

const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`

const Subtitle = styled.h4`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: .5em 0;
`

const Paragraph = styled.p`
  font-size: .75rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`

export function Details () {
  return (
    <DetailsWrapper>
      <div>
        <Content>
          <Title>100% Matemática</Title>

          <Subtitle>Matemática para quem quer entrar na facul.</Subtitle>

          <Paragraph>Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.</Paragraph>
        </Content>

        <img src={boyOnARocket} alt='Boy on a rocket' />
      </div>

      <div>
        <Content>
          <Title>Quer ser aprovado?</Title>

          <Subtitle>Se seu foco é ser aprovado, nós estamos aqui por você.</Subtitle>

          <Paragraph>Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.</Paragraph>
        </Content>

        <img src={boyJumping} alt='Boy jumping' />
      </div>
    </DetailsWrapper>
  )
}
