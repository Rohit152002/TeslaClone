import React,{useState} from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { selectCars  } from "../features/car/carslice";
import { useSelector  } from "react-redux";

function Header() {
  const [burgerStatus,setBurgerStatus]=useState(false);
  const cars=useSelector(selectCars)
  console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        {cars && cars.map((car,index)=>{
          <a key={index} href="#">{car}</a>
        })}
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model x</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        <li>
          <a href="#">Existing inventory</a>
        </li>
        <li>
          <a href="#">Used inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 2;
  list-style: none;
  padding: 20px;
  transform:${props=>props.show ? 'translateX(0)':'translateX(100%)'};
  transition:transform 0.4s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  li a {
    font-weight: 600;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const CustomClose = styled(CloseRoundedIcon)``;


const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default Header;
