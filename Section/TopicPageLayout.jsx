import styled from "styled-components";
import React, {useState} from "react";


import { makeStyles } from "@material-ui/styles";
import styles from "./navbar.module.css";

import LiveClasses from "./LiveClasses/LiveClass";
import Notes from "./Notes/Lectures";
import RecordedLectures from "./Recordings/Lectures"
import { margin } from "@mui/system";


const TopicLayout = ({ courseId, chapterId }) => {
  const classes = useStyles();
  // Active Button State
  const [active, setActive] = useState(1);
  return (
    <>
      <SideNavBar className={styles.container}>
        <Button1
          className={active === 1 ? `${classes.activeButton1}` : ""}
          onClick={() => setActive(1)}
        >
          Live Classes
        </Button1>
        <Button1
          className={active === 2 ? `${classes.activeButton1}` : ""}
          onClick={() => setActive(2)}
        >
          Recorded Lecture
        </Button1>
        <Button1
          className={active === 3 ? `${classes.activeButton1}` : ""}
          onClick={() => setActive(3)}
        >
          Notes
        </Button1>
        <Button1
          className={active === 4 ? `${classes.activeButton1}` : ""}
          onClick={() => setActive(4)}
        >
          Join the Discussion
        </Button1>
      </SideNavBar>
      {/* ////////////// */}
      <Content>
         <div className={`${active !== 1 ? "hidden" : ""}`}>
               <LiveClasses courseId={courseId} />
         </div>

         <div className={`${active !== 2 ? "hidden" : ""}`}>
              {active==2? (<RecordedLectures  courseId={courseId} chapterId={chapterId}/>) : ("")}
         </div>

         <div className={`${active !== 3 ? "hidden" : ""}`}>
         {active==3? (<Notes courseId={courseId} chapterId={chapterId}/>): ("")}
         </div>

         <div className={`${active !== 4 ? "hidden" : ""}`}>
               <div>
               <img src="/images/coming-soon.svg" alt="coming-soon" style={{height:'600px' ,'margin-left':'500px'}}></img>
              </div>
         </div>


      </Content>
      
    </>
  );
};
const SideNavBar = styled.div`
  width: 30%;
  height: 30%;
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

const Content = styled.div`
  .hidden {
    display: none;
  }
`;

const useStyles = makeStyles(() => ({
  activeButton1: {
    fontWeight: "600 !important",
    borderLeft: "0.5vw solid green !important",
  },
}));

export default TopicLayout;
