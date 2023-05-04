import { BsFillHouseDoorFill, BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { FiPlusSquare } from "react-icons/fi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./SideBar.css";
function SideBar() {
  return (
    <div className="container">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4GwllHgneveoLzQuxwD_yUSBp7_KrqMEqLJMjEKQxA&s"
          alt="img"
          className="logo"
        />
        <h3>Spotify</h3>
      </div>
      <div className="top-container">
        <Link to="/">
          <div className="item-decor">
            <BsFillHouseDoorFill size={30} />
            <span>Home</span>
          </div>
        </Link>

        <Link to="/search">
          <div className="item-decor">
            <BsSearch size={30} />
            <span>Search</span>
          </div>
        </Link>

        <Link to="/lib">
          <div className="item-decor">
            <BiLibrary size={30} />
            <span>Your Library</span>
          </div>
        </Link>
      </div>

      <div className="mid-container">
        <Link to="/playlist">
          <div className="item-decor">
            <FiPlusSquare size={30} />
            <span>Create Playlist</span>
          </div>
        </Link>
        <Link to="/likedsong">
          <div className="item-decor">
            <BsFillHeartPulseFill size={30} />
            <span> Liked songs</span>
          </div>
        </Link>
      </div>
      <div className="bottom-container">
        <p>Legal &nbsp; &nbsp; &nbsp; Privacy Center</p>
        <p>Privacy Policy &nbsp; &nbsp; &nbsp; Cookies</p>
        <p>About Ads </p>
        <p>Cookies &nbsp; &nbsp; &nbsp;</p>
      </div>
    </div>
  );
}

export default SideBar;
