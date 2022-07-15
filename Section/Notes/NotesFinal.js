import React from "react";

import Notes from "./Lectures";
import Search from "../Recordings/Search";
import styles from "../Recordings/record.module.css";
import SectionNavbar from "../NavbarSection";
import Navbar from "../../global/Navbar"
import Footer from "../../global/Footer";
function NotesPrd7() {
  return (
    <>
    <Navbar/>
      <div className={styles.container}>
        <div className={styles.top}>
          {/* <div className={styles.left}> */}
            {/* <SectionNavbar></SectionNavbar> */}
          {/* </div> */}
          {/* <div className={styles.right}> */}
            {/* <Search></Search> */}
          {/* </div> */}
        </div>
        <Notes/>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default NotesPrd7;
