import styled from 'styled-components/macro'
import AppleStore from 'shared/assets/apple-store.png'
import GoogleStore from 'shared/assets/google-store.png'

const StoreWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }

  button {
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    width: min-content;
    margin: 0 auto;
  }
`

export function StoreButtons () {
  return (
    <StoreWrapper>
      <button>
        <img src={AppleStore} alt='Apples store' />
      </button>

      <button>
        <img src={GoogleStore} alt='Google store' />
      </button>
    </StoreWrapper>
  )
}
