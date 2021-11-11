import StarSvg from './assets/star-vector.svg'
import { ReactComponent as CheckIcon } from './assets/check-icon.svg'
import * as S from './styles'

export function Plans () {
  return (
    <S.PlansWrapper id='planos'>
      <S.Title>Nossos planos</S.Title>

      <S.Subtitle>Invista no seu futuro</S.Subtitle>

      <div>
        <S.Card>
          <S.Header>
            <div>
              <p>1 ano de acesso</p>

              <h5>Plano recomendado</h5>
            </div>

            <S.StarWrapper star={StarSvg}>
              <h6>70%</h6>

              <span>de desconto</span>
            </S.StarWrapper>
          </S.Header>

          <S.Body>
            <h5>vantagens</h5>

            <ul>
              <li><CheckIcon /> Acesso a todos os benefícios da Plataforma (Videoaulas, Exercícios, Apostilas e muito mais)</li>
              <li><CheckIcon /> 36 aulas ao vivo</li>
              <li><CheckIcon /> Revisão para o ENEM</li>
              <li><CheckIcon /> Grupo no Whatsapp com professores e alunos</li>
              <li><CheckIcon /> Reforço para FUVEST, Unicamp e Vestibulares de Medicina</li>
            </ul>
          </S.Body>

          <S.Footer>
            <S.PlanPriceWrapper>
              <small>de R$ 178,80</small>

              <S.PlanPrice>
                <S.Currency>R$</S.Currency>

                <S.CurrencyValue>49,90</S.CurrencyValue>

                <span>/ano</span>
              </S.PlanPrice>

              <p>Menos de 5 reais por mês :)</p>
            </S.PlanPriceWrapper>

            <S.CardButton>Eu quero!</S.CardButton>
          </S.Footer>
        </S.Card>

        <S.SecondaryCard>
          <S.Header>
            <div>
              <p>6 meses de acesso</p>

              <h5>Plano Aprovado</h5>
            </div>
          </S.Header>

          <S.Body>
            <h5>vantagens</h5>

            <ul>
              <li><CheckIcon /> Acesso a todos as videoaulas</li>
              <li><CheckIcon /> Ganhe pontos resolvendo questões e troque por prêmios</li>
              <li><CheckIcon /> 3.000 exercícios com resolucão em vídeo</li>
              <li><CheckIcon /> 4 apostilas com todo o conteúdo de Matemática</li>
              <li><CheckIcon /> Reforço para FUVEST, Unicamp e Vestibulares de Medicina</li>
            </ul>
          </S.Body>

          <S.Footer>
            <S.PlanPriceWrapper>
              <S.SecondaryPlanPrice>
                <S.Currency>R$</S.Currency>

                <S.CurrencyValue>39,90</S.CurrencyValue>

                <span>/semestre</span>
              </S.SecondaryPlanPrice>
            </S.PlanPriceWrapper>

            <S.SecondaryButton>Eu quero!</S.SecondaryButton>
          </S.Footer>
        </S.SecondaryCard>
      </div>
    </S.PlansWrapper>
  )
}
