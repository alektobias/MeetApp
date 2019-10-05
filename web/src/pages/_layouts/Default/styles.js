import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #22202c, #402845);
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  form {
    max-width: 940px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    hr {
      margin: 20px 0;
      background: rgba(255, 255, 255, 0.1);
      height: 1px;
      border: 0;
    }
    input {
      align-self: stretch;
      height: 50px;
      padding: 15px 20px;
      background: rgba(0, 0, 0, 0.3);
      color: #fff;
      font-size: 18px;
      border: 0;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  }
  button {
    background: #f94d6a;
    color: #fff;
    font-weight: bold;
    align-self: flex-end;
    display: inline-flex;
    align-items: center;
    padding: 13px 20px;
    border: 0;
    border-radius: 4px;
    margin: 15px 0;
    font-size: 16px;
    svg {
      margin-right: 17px;
    }
  }
  h2 {
    font-size: 32px;
    color: #fff;
    font-weight: bold;
  }
`;
