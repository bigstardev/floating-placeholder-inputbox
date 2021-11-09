import styled from 'styled-components';
export const InputPlaceholderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  input {
    font-weight: 500;
    font-size: 35px;
    color: #f5f4f1;
    padding: 15px 15px;
    border: 0;
    background-color: black;
    font-family: 'Aeonik';
    text-align: center;
  }

  span.placeholder {
    position: absolute;
    margin: 17px 0;
    padding: 0 4px;
    color: #f5f4f1;
    font-size: 35px;
    top: 0;
    transition: all ease-in 0.2s;
    pointer-events: none;
  }

  input:valid + span.placeholder,
  input:focus + span.placeholder {
    transform: scale(0.6) translateY(-70px);
  }
  input:focus {
    outline: none;
  }
  span.placeholder div {
    letter-spacing: 0.15rem;
  }
  input:focus + span.placeholder div {
    color: #626262;
  }
`;
export const FloatingInputPlaceholder =()=>{
  return (
<InputPlaceholderWrapper >
    <input type="text" name="input-text" required spellCheck="false" />
    <span className="placeholder">
     First and Last name
    </span>
</InputPlaceholderWrapper>
    )
}