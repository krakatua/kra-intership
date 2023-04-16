import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const ItemDetails = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { nftId } = useParams();
  const [posts, setPost] = useState([]);
  console.log(nftId)



  async function fetchPost() {
    const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`)
    setPost(data)
    //data.filter(x => x.nftId === nftId).map(x=> console.log(x))
  }
  useEffect(() => {
    fetchPost()
  }, [])

    

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].nftId === nftId) {
      console.log(posts[i])
    }
  }

 

  



 


  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section arial-label="section"
          className="mt90 sm-mt-0">
          <div className="container">
            {
              Object.values(posts).map((post, index) => {
                return (
                  <div className="row" key={index}>
                    <div className="col-md-6 text-center">
                      <img
                        src={post.authorImage}
                        className="img-fluid img-rounded mb-sm-30 nft-image"
                        alt=""
                      />
                    </div>
                  </div>
                )
              })
            }
          </div>

        </section>
      </div>
    </div>

  );
};

export default ItemDetails;
