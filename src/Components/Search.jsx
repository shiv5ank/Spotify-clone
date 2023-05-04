import "./Search.css";
import { BsChevronLeft, BsChevronRight, BsSearch } from "react-icons/bs";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";


function Search() {
  return (
    <div className="search-container">
      <div className="search-container-top-bar-container">
        <div className="search-container-top-bar-left">
          <BsChevronLeft color={"white"} className="leftarrow" />
          <BsChevronRight color={"white"} className="rightarrow" />
        </div>
        <div className="search-container-top-bar-mid">
          <BsSearch size={20} color="black" />
          <input type="text" placeholder="What do you want to listen to?" />
        </div>
        <div className="search-container-top-bar-right">
          <span>Sign Up</span>
          <button>Login</button>
        </div>
      </div>

      <div className="search-container-card-container">
        <h3>Podcast</h3>
      </div>

      <div className="search-container-footer-container">
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

export default Search;
