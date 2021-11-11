import { ReactComponent as MathIcon } from './assets/math-icon.svg'
import { ReactComponent as WorkspaceIcon } from './assets/workspace-icon.svg'
import { ReactComponent as CompassIcon } from './assets/compass-icon.svg'
import { ReactComponent as RightArrow } from 'shared/assets/right-arrow.svg'
import Teenager from './assets/teenager.png'
import Students from './assets/students-happy.png'
import * as S from './styles'

export function Benefits () {
  return (
    <S.BenefitsWrapper>
      <S.Container>
        <S.Benefit>
          <S.IconWrapper>
            <MathIcon />
          </S.IconWrapper>

          <div>
            <h2>100% focado na Matemática</h2>

            <p>Todo material é construído por profissionais especializados e com foco no perfil de cada vestibular.</p>
          </div>
        </S.Benefit>

        <S.Benefit>
          <S.IconWrapper>
            <WorkspaceIcon />
          </S.IconWrapper>

          <div>
            <h2>Acompanhamento de perto!</h2>

            <p>Todo o suporte que você precisa para aprender o conteúdo dos principais vestibulares!</p>
          </div>
        </S.Benefit>

        <S.Benefit>
          <S.IconWrapper>
            <CompassIcon />
          </S.IconWrapper>

          <div>
            <h2>Matemática de um jeito fácil!</h2>

            <p>Resolução instantânea de qualquer equação algébrica na plataforma, além de vídeos, apostilas, simulados e central de dúvidas 24h!</p>
          </div>
        </S.Benefit>

        <S.BenefitsButton>Quero ser aprovado <RightArrow /></S.BenefitsButton>
      </S.Container>

      <S.PhotosWrapper>
        <div>
          <img onDragStart={(e) => { e.preventDefault() }} src={Teenager} alt='Teeanager' />
        </div>

        <div>
          <img onDragStart={(e) => { e.preventDefault() }} src={Students} alt='Students happy' />
        </div>
      </S.PhotosWrapper>
    </S.BenefitsWrapper>
  )
}
