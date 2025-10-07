import styled from "styled-components";
let Container = styled.div`
  margin: 0 auto;
  width: 99.9%;
  position: relative;
  padding: 48px 0px;
  display: flex;
  justify-content: space-around;
  height: 417px;
  margin-top: 45px;
  background: #0d263b;
`;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ width }) => width && width};
  align-items: center;
  text-align: center;
`;

Content.Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
  margin-bottom: 32px;
`;
Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 20px;
  color: white;
`;

export { Container, Content };
