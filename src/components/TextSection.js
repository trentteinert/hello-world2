import styled from "styled-components";

export default function TextSection() {
  return (
    <Wrapper>
      <Title>Trenton</Title>
      <Description>
        trash
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 0px 0px 0px;
`;

const Title = styled.h1`
  color: rgba(0), 0, 0, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`;

const Description = styled.p`
  max-width: 240px;
  color: rgba(0, 0, 0, 1);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;
