import React from "react";
import subject from "./subject.jpg";
import { useEffect, useState } from "react";
import styles from "../Recordings/record.module.css";
import styles1 from "./lectures.module.css";
import { useLocation, Link } from "react-router-dom";
import Loader from "../../../pages/Loader";
import { baseURL } from "../../../Apis";
import NotesCard from "./TopicCard";
import Search from "../Search";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom,Slide } from 'react-toastify';

function Layout({courseId, chapterId}) {
  const [active, setActive] = useState(1);
  const [items, setItems] = useState(null);
  const [SubItems, setSubItems] = useState(null);
  const [mark, setmark] = useState(null);
  const [subId, setsubId] = useState(null);
  const [topicData, setTopicData] = useState(null);
  const [completed, setCompleted] = useState([]);
  const [State, setState] = useState([]);
  const [pagenumber, setPagenumber]= useState(1);
  const [recents,setRecents]=useState(null);

  const searchHandler = (filtered)=>{
    if(!filtered.length) return toast('No Matching Notes', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Zoom,
      });
      setState(filtered);
      setItems(filtered);
  }


  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/course/${courseId}?queryParam=1&chapterID=${chapterId}`, 
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const json = await response.json();
      if (json.success) {
        json.data.chapter.topics.forEach(ele => {
          ele.subTopics.forEach(subele => {
            if(subele.isCompleted){
              setCompleted(prevState => [...prevState, subele._id] );
            }
          });
        });
        setItems(json.data);    
        // setTopicData(json.data); 
        setRecents(json.data.chapter.topics);
      }
    };
    fun();
    // eslint-disable-next-line
  }, []);

  const handelSub = async (id) => {
    // setActive(3);
    const response = await fetch(`${baseURL}/course/subtopics/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const json = await response.json();
    if (json.success) {
      setSubItems(json);
      setsubId(id);
  };
  
  };

 
  const location = useLocation();
  if(recents) {var high = Math.ceil(recents.length/9);}
  
  useEffect(() => {

    
    if(recents)setState(recents.slice((pagenumber - 1) * 9, (pagenumber - 1) * 9 + 9));
    
  },[pagenumber,recents?1:0]);
const yes=0;
  return (
    
    <>
   

    {(items && recents) ? (
      <> 
          {<>
            <div className={styles.container}>
              <div className={styles.top}>
              <div className={styles.left}>
          
          </div>
                <div className={styles.right}>
                  <Search items={items} recents={recents} yes={yes} searchHandler={searchHandler}/>
                  </div>
                </div>
            <p className={styles1.heading}>All Notes</p>
            <div className={styles1.cardsShow}>
                {State.map((Obj, i) => (
                  <NotesCard obj={Obj} i={i} pagenumber={pagenumber} handelSub={handelSub} completed={completed} items={items}/>
                  
                ))}
               
            </div>
        <div className={styles1.pagination}>
      
          {pagenumber && pagenumber > 1 && (
            <button className={styles1.pageItem} onClick={()=> {setPagenumber(pagenumber-1)}}>
            Previous
          </button>
          )}
          <>
            {[3, 2, 1].map((Obj, i) => (
              <>
                {pagenumber - Obj >= 1 && (
                  <button className={styles1.pageItem} onClick={()=> {setPagenumber(pagenumber-Obj)}} >
                  {pagenumber - Obj}
                </button>
                )}
              </>
            ))}
          </>

          {pagenumber && pagenumber < high && (
            <button className={styles1.pageItem} onClick={()=> {setPagenumber(pagenumber+1)}}>
            Next
          </button>
          )}
        </div>
      </div>
        </>  }        
        
      </>
    ) : (
      <Loader />
    )}
     <ToastContainer/>
   </>
  );

}

export default Layout;
