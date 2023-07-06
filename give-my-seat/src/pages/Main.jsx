import styled from "styled-components";
import heart from "../assets/HeartFilled.svg";
import unHeart from "../assets/Heart.svg";
import cafejeogi from "../assets/cafe jeogi.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GetCafeList } from "../api/fireAPI";
import { useEffect, useState } from "react";

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;

const List = styled.ul`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
const Item = styled.li`
  padding: 12px;
  height: 115px;
  background-color: var(--sub-color);
  display: flex;
  gap: 15px;

  border-radius: 10px;
`;

const Box = styled.div`
  div {
    display: flex;
  }
  .title {
    margin-bottom: 10px;
    justify-content: space-between;
    p {
      font-size: 14px;
      font-weight: 700;
    }
  }
  .address {
    width: 120px;
    font-size: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hash {
    margin-top: 10px;
    color: #fff;
    p {
      font-size: 10px;
      background-color: var(--primary-color);
      border-radius: 5px;
      padding: 5px;
      margin: 0 5px;
      font-weight: 700;
    }
  }
`;

const Main = () => {
  const [cafe, set_cafe] = useState([]);
  useEffect(() => {
    GetCafeList().then((res) => {
      if (res && res.length > 0) {
        set_cafe(res);
      }
    });
  }, []);
  return (
    <>
      <List>
        <Title>구독리스트</Title>

        {cafe.map((item, idx) => (
          <Link key={idx} to={`/cafe/${item.id}`}>
            <Item key={idx}>
              <img src={cafejeogi} alt="카페이미지" />
              <Box>
                <div className="title">
                  <p>{item.title}</p>
                  <img src={item.isLike ? heart : unHeart} alt="하트" />
                </div>
                <p className="address">{item.address}</p>
                <div className="hash">
                  {item.hashTags.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              </Box>
            </Item>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Main;
