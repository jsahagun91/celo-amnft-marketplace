import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Onboarding.module.css"

export default function Onboard() {
return (
    <>
    {/* Show the navigation bar */}
    <Navbar />

    <div className={styles.container}>
        <div class="card">
  <h5 class="card-header">Onboard to Web3</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </div>
    </>
    );

    <Footer/>
}