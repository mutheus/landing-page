import styled from 'styled-components/macro'
import { ReactComponent as MathIcon } from './assets/math-icon.svg'
import { ReactComponent as WorkspaceIcon } from './assets/workspace-icon.svg'
import { ReactComponent as CompassIcon } from './assets/compass-icon.svg'

const BenefitsWrapper = styled.section`
  padding: 2.125em 1em;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4em;
`

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  text-align: center;
  max-width: 15.813em;
  margin: 0 auto;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.125rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: .75rem;
  }
`

const IconWrapper = styled.div`
  padding: 1.5em;
  width: min-content;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  display: flex;
`

export function Benefits () {
  return (
    <BenefitsWrapper>
      <Container>
        <Benefit>
          <IconWrapper>
            <MathIcon />
          </IconWrapper>

          <div>
            <h2>100% focado na Matemática</h2>

            <p>Todo material é construído por profissionais especializados e com foco no perfil de cada vestibular.</p>
          </div>
        </Benefit>

        <Benefit>
          <IconWrapper>
            <WorkspaceIcon />
          </IconWrapper>

          <div>
            <h2>Acompanhamento de perto!</h2>

            <p>Todo o suporte que você precisa para aprender o conteúdo dos principais vestibulares!</p>
          </div>
        </Benefit>

        <Benefit>
          <IconWrapper>
            <CompassIcon />
          </IconWrapper>

          <div>
            <h2>Matemática de um jeito fácil!</h2>

            <p>Resolução instantânea de qualquer equação algébrica na plataforma, além de vídeos, apostilas, simulados e central de dúvidas 24h!</p>
          </div>
        </Benefit>
      </Container>
    </BenefitsWrapper>
  )
}
