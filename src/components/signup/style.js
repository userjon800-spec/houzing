import styled from "styled-components";

let Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  align-items: center;
  background: #e6e9ec;
`;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px;
  background: white;
  width: 100%;
  border: 1px solid #e6e9ec;
  border-radius: 6px;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  max-width: 580px;
  margin: 64px;
`;
export { Container, Content };
