import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Listing from "../components/Listing";
import { createClient } from "urql";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { SUBGRAPH_URL } from "../constants";
import { useAccount } from "wagmi";

export default function Home() {
  // State variables to contain active listings and signify a loading state
  const [listings, setListings] = useState();
  const [loading, setLoading] = useState(false);

  const { isConnected } = useAccount();

  // Function to fetch listings from the subgraph
  async function fetchListings() {
    setLoading(true);
    // The GraphQL query to run
    const listingsQuery = `
      query ListingsQuery {
      listingEntities {
        id
        nftAddress
        tokenId
        price
        seller
        buyer
      }
    }
  `;

  // Create a urql client
  const urqlClient = createClient({
    url: SUBGRAPH_URL,
  });

  // Send the query to the subgraph GraphQL API and get the response
  const response = await urqlClient.query(listingsQuery).toPromise();
  const listingEntities = response.data.listingEntities;

  // Filter out active listings i.e. ones which haven't been sold yet
  const activeListings = listingEntities.filter((l) => l.buyer === null);
  
  // Update state variables
  setListings(activeListings);
  setLoading(false);
  }

  useEffect(() => {
    // Fetch listings on page load once wallet connection exists
    if (isConnected) {
      fetchListings();
    }
  }, []);

  return (
    <>
      {/* Add NavBar to homepage */}
      <NavBar />

      {/* Show loading status if query hasn't responded yet */}
      {loading && isConnected && <span>Loading...</span>}

      <center>  
      <img src='https://assets.bigcartel.com/theme_images/39541006/FullSizeRender.jpg' className="rotate" width="150" height="100" />
      </center>
      <center> Asu Madre Latin Music NFT Marketplace </center>

      {/* Render the listings */}
      <div className={styles.container}>
        {!loading &&
          listings &&
          listings.map((listing) => {
            return (
              <Link
                key={listing.id}
                href={`/${listing.nftAddress}/${listing.tokenId}`}
              >
                <a>
                  <Listing
                    nftAddress={listing.nftAddress}
                    tokenId={listing.tokenId}
                    price={listing.price}
                    seller={listing.seller}
                  />
                </a>
              </Link>
            );
          })}
      </div>

      {/* Show "No listings found" if query returned empty */}
      {!loading && listings && listings.length === 0 && (
        <span>No listings found</span>
      )}

      <Footer/>
    </>
  );
}