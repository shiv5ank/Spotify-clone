import "./Home.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [playlist, setPlayList] = useState([]);
  const [podcasts, setPodcasts] = useState([]);

  const url =
  'https://spotify23.p.rapidapi.com/search/?q=daily&type=multi&offset=0&limit=10&numberOfTopResults=5';
  const options = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'e0a91f6a96msh514c3a58addc10fp1fb606jsne26e354693b0',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
  };
  const myfn = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setPlayList(result.playlists.items);
      setPodcasts(result.podcasts.items);

      console.log(result.podcasts.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    myfn();
  }, );


  return (
    <div className="home-container">
      <div className="home-container-top-bar-container">
        <div className="home-container-top-bar-left">
          <BsChevronLeft color={"white"} className="leftarrow" />
          <BsChevronRight color={"white"} className="rightarrow" />
        </div>
        <div className="home-container-top-bar-right">
          <span>Sign Up</span>
          <button>Login</button>
        </div>
      </div>
      <div className="home-container-playlist">
        <div className="card-heading-div">
          <span>PlayList</span>
          <span className="span2">show all</span>
        </div>
        <div className="card-div">
          {playlist.map((e) => {
            return (
              <Link to="/songdetails">
                <div className="card">
                  <img src={e.data.images.items[0].sources[0].url} alt="" />
                  <h6>{e.data.name}</h6>
                  <span>{e.data.owner.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="home-container-spotify-playlist-div">
        <div className="card-heading-div">
          <span>Made for Shivank</span>
          <span className="span2">show all</span>
        </div>
        <div className="card-div">
          {playlist.map((e) => {
            return (
              <Link to="/songdetails">
                <div className="card">
                  <img src={e.data.images.items[0].sources[0].url} alt="" />
                  <h6>{e.data.name}</h6>
                  <span>{e.data.owner.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="home-container-sound-of-india-div">
        <div className="card-heading-div">
          <span>Your top mixes</span>
          <span className="span2">show all</span>
        </div>
        <div className="card-div">
          {podcasts.map((e) => {
            return (
              <Link to="/songdetails">
                <div className="card">
                  <img src={e.data.coverArt.sources[0].url} alt="" />
                  <h6>{e.data.publisher.name}</h6>
                  <span>{e.data.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="home-container-footer-div">
        <div className="footer-top">
          <div className="footer-top-left">
            <h5>Company</h5>
            <span>About</span>
            <span>Jobs</span>
            <span>For the Record</span>
          </div>
          <div className="footer-top-mid1">
            <h5>Communities</h5>
            <span>For Artist</span>
            <span>Developers</span>
            <span>Advertising</span>
            <span>Investort</span>
            <span>Vendors</span>
            <span>Spotify For Work</span>
          </div>
          <div className="footer-top-mid2">
            <h5>Useful Links</h5>
            <span>Support</span>
            <span>Free Mobile App</span>
          </div>
          <div className="footer-top-right">
            <AiOutlineInstagram size={30} />
            <AiFillTwitterCircle size={30} />
            <FaFacebook size={30} />
          </div>
        </div>
        <div className="footer-bottom">
          <hr style={{ backgroundColor: "white", height: "2px" }} />

          <div>
            <span>2023 Spotify</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
