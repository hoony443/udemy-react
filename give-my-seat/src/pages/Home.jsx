import { Link } from "react-router-dom";
import { ReactComponent as Barista } from "../assets/barista.svg";
import { ReactComponent as GiveMYSeat } from "../assets/give MY__Seat.svg";
import styled from "styled-components";

const SLayout = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SGiveMYSeat = styled(GiveMYSeat)`
  position: absolute;
  left: 0;
  top: 0;
`;

const SBarista = styled(Barista)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const SLink = styled(Link)`
  font-size: 14px;
  color: var(--primary-color);
  z-index: 1;
`;

const Home = () => {
  return (
    <SLayout>
      <SGiveMYSeat />
      <SLink to="/login">로그인 하러가기</SLink>
      <SBarista />
    </SLayout>
  );
};

export default Home;
