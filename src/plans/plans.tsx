import styled from 'styled-components/macro'
import StarSvg from './assets/star-vector.svg'

const PlansWrapper = styled.section`
  padding: 0 1em;
  margin: 2em 0;
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

const Card = styled.div`
  padding: 2em 1em 1em;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`

type HeaderProps = {
  star: string
}

const Header = styled.div<HeaderProps>`
  display: flex;

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: .75rem;
      color: #3C5882;
      margin: 0;
    }

    h5 {
      font-size: 1rem;
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      margin: .313em 0;
    }
  }

  div:last-child {
    margin-left: auto;
    color: ${({ theme }) => theme.colors.primary};
    background-image: url(${({ star }) => star});
    background-repeat: no-repeat;
    background-size: contain;
    padding: 2em;
    transform: rotate(19.52deg);
    text-align: center;
    height: auto;
    aspect-ratio: 1/1;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h6 {
      font-size: 1.25rem;
      margin: 0;
    }

    span {
      font-size: .5rem;
    }
  }
`

export function Plans () {
  return (
    <PlansWrapper>
      <Title>Nossos planos</Title>

      <Subtitle>Invista no seu futuro</Subtitle>

      <Card>
        <Header star={StarSvg}>
          <div>
            <p>1 ano de acesso</p>

            <h5>Plano recomendado</h5>
          </div>

          <div>
            <h6>70%</h6>

            <span>de desconto</span>
          </div>
        </Header>

        <p>vantagens</p>

        <ul>
          <li>Acesso a todos os benefícios da Plataforma (Videoaulas, Exercícios, Apostilas e muito mais)</li>
          <li>36 aulas ao vivo</li>
          <li>Revisão para o ENEM</li>
          <li>Grupo no Whatsapp com professores e alunos</li>
          <li>Reforço para FUVEST, Unicamp e Vestibulares de Medicina</li>
        </ul>

        <div>
          <div>
            <small>de R$ 178,80</small>

            <div>
              <p><span>R$</span> 49,90 <small>/ano</small></p>

              <p>Menos de 5 reais por mês :)</p>
            </div>
          </div>

          <button>Eu quero!</button>
        </div>
      </Card>
    </PlansWrapper>
  )
}
