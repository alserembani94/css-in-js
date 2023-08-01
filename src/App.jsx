import styled from "styled-components";

function App() {
  const Title = styled.p`
    background-color: red;
    color: white;
    border-radius: 8px;
    padding: 16px 32px;
  `;

  const Title2 = styled.p`
    background-color: red;
    color: white;
    border-radius: 8px;
    padding: 16px 32px;
  `;

  return (
    <>
      <Title>Hello React</Title>
      <Title2>Hello React</Title2>
      <Title>Hello React</Title>
    </>
  );
}

export default App;
