import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../assets/logo1.jpg"; // add your logo image in src/assets

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="title">CodeSage</h1>
        <img src={logo} alt="CodeSage Logo" className="logo" />
        <p className="description">
          Your intelligent AI-powered code reviewer. Paste your code and get smart suggestions instantly.
        </p>
        <button onClick={() => navigate("/review")} className="home-review-btn">
          Review
        </button>
      </div>
    </div>
  );
}

export default Home;
