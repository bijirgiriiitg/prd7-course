import React from "react";
import subject from "./subject.jpg";
import { useEffect, useState } from "react";
import styles from "./lectures.module.css";
import styled from "styled-components";

import { useLocation, Link } from "react-router-dom";
//import { baseURL } from "../../../Apis";
//import Search from "../Search";
const NotesCard = ({
  chapterId,
  courseId,
  obj,
  i,
  pagenumber,
  handelSub,
  completed,
}) => {
  console.log("neeww", chapterId, courseId, obj, i, pagenumber);
  return (
    <>
      <div className={styles.cards}>
        <ViewLink
          to={{ pathname: `/course/${courseId}/${chapterId}/${obj._id}` }}
        >
          <img src={subject} alt="topic" className={styles.img} />

          <div className={styles.lower}>
            <ViewLink
              key={i}
              to={{
                pathname: `/topic/${obj._id}`,
                state: { topicIndex: { i } },
              }}
            >
              <div className={styles.about}>
                <p className={styles.number}>{i + 1 + (pagenumber - 1) * 9}.</p>
                <p className={styles.text}>{obj.name}</p>
              </div>
            </ViewLink>
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-bookmark"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>

          <p className={styles.time}>30mintutes</p>
        </ViewLink>
      </div>
    </>
  );
};
const ViewLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-style: auto;
  font-weight: auto;
  &:hover {
    color: #1bbc9b;
  }
`;
export default NotesCard;
