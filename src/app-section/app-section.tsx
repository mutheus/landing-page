import RobotImg from 'shared/assets/robot-image.png'
import styled from 'styled-components'
import { Button } from 'shared/styles'
import { ReactComponent as RightArrow } from 'shared/assets/right-arrow.svg'
import PhoneImg from './assets/phone.png'

const AppWrapper = styled.section`
  padding: 3.375em 1em 0;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
  }
`

const AppDetails = styled.div`
  text-align: center;
  max-width: 17.688em;
  margin: 0 auto;
  line-height: 1.5;

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: .875rem;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: .75rem;
  }
`

const AppButton = styled(Button)`
  margin-top: 3em;
`

export function AppSection () {
  return (
    <AppWrapper>
      <AppDetails>
        <div>
          <img src={RobotImg} alt='Robot' />

          <h3>Baixe aulas no app e estude offline</h3>
        </div>

        <p>Receba lembretes no seu celular e tenha a facilidade de estudar a qualquer hora e de qualquer lugar.<br /> <strong>Baixe nosso app e confira.</strong></p>

        <AppButton>Conheça nosso aplicativo <RightArrow /></AppButton>
      </AppDetails>

      <img src={PhoneImg} alt='Phone' />
    </AppWrapper>
  )
}
