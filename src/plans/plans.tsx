import styled from 'styled-components/macro'
import StarSvg from './assets/star-vector.svg'
import { ReactComponent as CheckIcon } from './assets/check-icon.svg'
import { Button } from 'shared/styles'

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
  padding: 1.5em;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  gap: .7em;
  margin-bottom: 1.438em;
`

type StarProps = {
  star: string
}

const Header = styled.div`
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
      font-weight: 700;
      margin: .313em 0;
      font-family: 'Nunito', sans-serif;
    }
  }

  div:last-child {

  }
`

const StarWrapper = styled.div<StarProps>`
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
`

const Body = styled.div`
  h5 {
    font-size: .75rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  ul {
    padding-left: 29px;
    font-size: .563rem;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  li {
    list-style: none;
    line-height: 2.2;
  }

  svg {
    margin-right: .688em;
  }
`

const Footer = styled.div`
  display: flex;
  font-size: .5rem;
  color: rgba(255, 255, 255, 0.45);
  place-items: center;
`

const PlanPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 5px;

  p {
    margin: 0;
  }
`

const CardButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-image: linear-gradient(145.09deg, rgba(38, 233, 207, 1), rgba(37, 205, 225, 1));
  box-shadow: -0.652262px 0.652262px 3.91357px rgba(126, 87, 87, 0.26);
  border-radius: 6px;
  max-width: 111px;
  height: 33.64px;
  font-size: .625rem;
  font-family: 'DM Sans', sans-serif;
  margin: 0;
  margin-left: auto;
`

const Currency = styled.span`
  font-size: .7rem;
  color: ${({ theme }) => theme.colors.secondary};
`

const CurrencyValue = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
`

const PlanPrice = styled.div`
  display: flex;
  gap: 4px;
`

const SecondaryCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: 0.56px solid rgba(32, 30, 84, 0.18);

  path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const SecondaryButton = styled(CardButton)`
  background: ${({ theme }) => theme.colors.primary};
`

const SecondaryPlanPrice = styled(PlanPrice)`
  p,
  span:last-child {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export function Plans () {
  return (
    <PlansWrapper>
      <Title>Nossos planos</Title>

      <Subtitle>Invista no seu futuro</Subtitle>

      <Card>
        <Header>
          <div>
            <p>1 ano de acesso</p>

            <h5>Plano recomendado</h5>
          </div>

          <StarWrapper star={StarSvg}>
            <h6>70%</h6>

            <span>de desconto</span>
          </StarWrapper>
        </Header>

        <Body>
          <h5>vantagens</h5>

          <ul>
            <li><CheckIcon /> Acesso a todos os benefícios da Plataforma (Videoaulas, Exercícios, Apostilas e muito mais)</li>
            <li><CheckIcon /> 36 aulas ao vivo</li>
            <li><CheckIcon /> Revisão para o ENEM</li>
            <li><CheckIcon /> Grupo no Whatsapp com professores e alunos</li>
            <li><CheckIcon /> Reforço para FUVEST, Unicamp e Vestibulares de Medicina</li>
          </ul>
        </Body>

        <Footer>
          <PlanPriceWrapper>
            <small>de R$ 178,80</small>

            <PlanPrice>
              <Currency>R$</Currency>

              <CurrencyValue>49,90</CurrencyValue>

              <span>/ano</span>
            </PlanPrice>

            <p>Menos de 5 reais por mês :)</p>
          </PlanPriceWrapper>

          <CardButton>Eu quero!</CardButton>
        </Footer>
      </Card>

      <SecondaryCard>
        <Header>
          <div>
            <p>6 meses de acesso</p>

            <h5>Plano Aprovado</h5>
          </div>
        </Header>

        <Body>
          <h5>vantagens</h5>

          <ul>
            <li><CheckIcon /> Acesso a todos as videoaulas</li>
            <li><CheckIcon /> Ganhe pontos resolvendo questões e troque por prêmios</li>
            <li><CheckIcon /> 3.000 exercícios com resolucão em vídeo</li>
            <li><CheckIcon /> 4 apostilas com todo o conteúdo de Matemática</li>
            <li><CheckIcon /> Reforço para FUVEST, Unicamp e Vestibulares de Medicina</li>
          </ul>
        </Body>

        <Footer>
          <PlanPriceWrapper>
            <SecondaryPlanPrice>
              <Currency>R$</Currency>

              <CurrencyValue>39,90</CurrencyValue>

              <span>/semestre</span>
            </SecondaryPlanPrice>
          </PlanPriceWrapper>

          <SecondaryButton>Eu quero!</SecondaryButton>
        </Footer>
      </SecondaryCard>
    </PlansWrapper>
  )
}
