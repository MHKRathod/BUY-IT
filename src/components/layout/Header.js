import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="nav-brand">
        <Link to="/">
          <span>AmaKart</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-shopping-cart"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* ... your SVG paths ... */}
          </svg>
        </Link>
      </div>
      {/* ... rest of your component ... */}
    </header>
  );
};

export default Header;