import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import styles from "./navbar.module.css";
const Navbar = () => {
  const classes = useStyles();
  // Active Button State
  const [active, setActive] = React.useState(1);
  const SetView = (active) => {
    setActive(active);
    if (active === 1) {
      History("/section");
    }
    if (active === 2) {
      History("/record/1");
    }
    if (active === 3) {
      History("/notes/1");
    }
    if (active === 4) {
      History("/discussion");
    }
  };

  const History = useHistory();

  return (
    <>
      <SideNavBar className={styles.container}>
        <Button1
          className={active === 1 ? `${classes.activeButton1}` : ""}
          onClick={() => SetView(1)}
        >
          Live Classes
        </Button1>
        <Button1
          className={active === 2 ? `${classes.activeButton1}` : ""}
          onClick={() => SetView(2)}
        >
          Recorded Lecture
        </Button1>
        <Button1
          className={active === 3 ? `${classes.activeButton1}` : ""}
          onClick={() => SetView(3)}
        >
          Notes
        </Button1>
        <Button1
          className={active === 4 ? `${classes.activeButton1}` : ""}
          onClick={() => SetView(4)}
        >
          Join the Discussion
        </Button1>
      </SideNavBar>
    </>
  );
};
const SideNavBar = styled.div`
  width: 485px;
  height: 533px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background: #e9f0ef;
  border-radius: 12px;
  padding: 1%;
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 15%;
  }
`;

const Button1 = styled.button`
  width: 90%;
  height: 13%;
  border-style: none;
  background-color: #ffffff;
  color: #5f5f5f;
  font-family: "Roboto";
  text-align: left;
  font-weight: 700;
  font-size: 18px;
  border-radius: 6px;
  margin: 2.5%;
  padding: 5%;
  display: flex;
  flex-direction: "row";
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 90%;
    height: 25%;
  }
`;

const useStyles = makeStyles(() => ({
  activeButton1: {
    fontWeight: "600 !important",
    borderLeft: "0.5vw solid green !important",
  },
}));

export default Navbar;
