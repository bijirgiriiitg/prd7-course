import React from "react";
import styles from "./live.module.css";
import { useState , useEffect} from "react";
import { baseURL } from "../../../Apis"
import image1 from "./image 111.jpg";
import moment from "moment"
import LiveClass from "./imglive.jpg"
import Loader from "../../../pages/Loader";
function LiveClasses({courseId}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(`${baseURL}/course/${courseId}?queryParam=0`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
     
      const json = await response.json();
      if (json.success) {
        setData(json.data);
      }
    };
    fun();
  }, []);


if(data) {
  var time = data.liveClass===undefined ? null:data.liveClass.dateTime ;
  // console.log();
  
}

  return (
    <>
    {!data?(<Loader/>) : (
      <>
    {(data && data.liveClass!=undefined) ? (
      <div className={styles.container}>
        <div className={styles.left}>
        </div>
        <div className={styles.right}>
          <div className={styles.first}>
            <div className={styles.firstHeader}>
              <p className={styles.firstHeading}>{data.subject}</p>
              <div className={styles.firstCourse}>
                <p className={styles.course}>Course : {data.name}</p>
                <p className={styles.batch}>Batch : Achiever</p>
              </div>
            </div>
            <p className={styles.exam}>Exam Target : {data.exam}</p>
            <p className={styles.instructor}>
              Instructor : Shubrodip Chatterjee
            </p>
            <p className={styles.syllabus}>
              Syllabus : Sic de isto et tutius perducit ad actum ipsum, ut si
              dico “Ego autem vadam lavari, ut mens mea in statu naturae
              conformior.” Et similiter circa alias res. Et sic, si contingit ex
              per se lavantem,{" "}
            </p>
          </div>
          <p className={styles.second}>Today’s Topic : {data.liveClass.topic}</p>
          <img src={image1} alt="Science" className={styles.third} />
          <div className={styles.fourth}>
            <p className={styles.fourthHeading}>Meeting Details :</p>
            <p className={styles.fourthDate}>Date : {moment(time).format("Do MMMM YYYY")}  </p>
            <p className={styles.fourthTime}> Time : {moment(time).format("hA")} </p>
            <p className={styles.fourthPlatform} onClick={(e) =>{window.open(data.liveClass.url) ; e.preventDefault();}} >
              Platform: <a href="data.liveclass.url">Joining link: {data.liveClass.url}</a>
            </p>
          </div>
        </div>
      </div>
    ) : (<img src={LiveClass} alt="Live-Class" style={{width: "65%", height: "auto" ,'margin-left':'33%'}} />)}
    </>
    )}
    </>
   
  );
}
export default LiveClasses;
