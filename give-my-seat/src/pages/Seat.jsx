import styled from "styled-components";
import arrowIcon from "../assets/prev_arrow.svg";

const Body = styled.div`
  display: flex;
  height: 100%;
`;

const Title = styled.div`
  color: #000000;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  gap: 90px;
  margin: 22px 0 87px 10px;
`;

const Background = styled.div`
  background: var(--bg-color);
  width: 100%;
  height: 181px;
  border-radius: 0 0 10px 10px;
`;

const SeatsBackground = styled.div`
  background: #f8f8f8;
  border-radius: 10px;
  width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const SeatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 204px;
  gap: 10px;
`;

const SeatWrapper = styled.div`
  width: 42px;
  height: 39px;
  border-radius: 10px;
  background: ${({ isEmpty }) =>
    isEmpty ? "var(--bg-color)" : "var(--primary-color)"};
`;

const Seat = ({ seats, SetSeatView }) => {
  return (
    seats && (
      <Body>
        <Background>
          <Title>
            <img
              src={arrowIcon}
              alt="arrow icon"
              onClick={() => SetSeatView(false)}
            />
            <h4>카페 여기</h4>
          </Title>
          <SeatsBackground>
            <SeatsContainer>
              {seats.map((item) => (
                <SeatWrapper key={item.id} isEmpty={item.isEmpty} />
              ))}
            </SeatsContainer>
          </SeatsBackground>
        </Background>
      </Body>
    )
  );
};

export default Seat;
