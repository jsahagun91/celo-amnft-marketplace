import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Onboarding.module.css"

export default function Onboard() {
return (
    <>
    {/* Show the navigation bar */}
    <Navbar />

    <div className={styles.onboard}>
        <div className={styles.card}>
        <a href="https://www.metamask.io/">
        <img src='https://assets.bigcartel.com/theme_images/39541006/FullSizeRender.jpg' className="rotate" width="25%" /> </a>
        <div className={styles.container}>
                    <center>
                  <span>
                    <b>
                    1️⃣ Download Metamask
                    </b>
                  </span>
                  <span> HERE </span>
                  <span> BOOM </span>
                  </center>
                </div>
        </div>
        <div className={styles.card}>
        <a href="https://www.metamask.io/">
        <img src='https://assets.bigcartel.com/theme_images/39541006/FullSizeRender.jpg' className="rotate" width="25%" /> </a>
        <div className={styles.container}>
                    <center>
                  <span>
                    <b>
                     2️⃣ Buy Ether
                    </b>
                  </span>
                  <span> HERE </span>
                  <span> BOOM </span>
                  </center>
                </div>
        </div>
    </div>
    </>
    );

}