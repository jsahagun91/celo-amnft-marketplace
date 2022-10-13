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
    <h5 class="card-title"> 1) Download <a href="https://metamask.io/download/" class="btn btn-primary">Metamask</a> <img class="mr-1" width="15" src="https://alfajores.celoscan.io/images/svg/brands/metamask.svg" alt="Metamask"/> </h5>
    <p class="card-text">Write down your seed phrase that looks like this:</p>
    <code class="css-seed">dove lumber quote board young robust kit invite plastic regular skull history</code>
  </div>
        </div>
    </div>

    <div className={styles.container}>
        <div class="card">
  <h5 class="card-header">Buy ETH</h5>
  <div class="card-body">
    <h5 class="card-title"> 2) Buy ETH with Metamask <a href="https://metamask.io/download/" class="btn btn-primary">Metamask</a> <img class="mr-1" width="15" src="https://alfajores.celoscan.io/images/svg/brands/metamask.svg" alt="Metamask"/> </h5>
    <p class="card-text">Write down your seed phrase that looks like this:</p>
    <code class="css-seed">dove lumber quote board young robust kit invite plastic regular skull history</code>
  </div>
        </div>
    </div>
    </>
    );

    <Footer/>
}