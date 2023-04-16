import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const ItemDetails = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {nftId} = useParams();
  const [posts, setPost] = useState({});

 console.log(nftId)
  

  async function fetchPost() {
    const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`)
    setPost(...data)
    //data.filter(x => x.nftId === nftId).map(x=> console.log(x))
  }
  useEffect(() => {
    fetchPost()
  }, [])

  

  console.log(posts)

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section arial-label="section"
        className="mt90 sm-mt-0">
          <div className="container">
            {
              posts.Search.map((post) => (
                <div>{post.nftImage}</div>
              ))
            }
          </div>

        </section>
      </div>
    </div>
    
  );
};

export default ItemDetails;
