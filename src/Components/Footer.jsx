import { FaGithub } from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-links">

        <a
          href="https://github.com/githarsh7/GEEKS-FOR-GEEKS-CLONESITE"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >

          <FaGithub className="github-icon" />

          View Source on Github

        </a>

        <span className="footer-divider">
          /
        </span>

        <a href="#">
          Need any help?
        </a>

        <span className="footer-divider">
          /
        </span>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          Say Hi on Twitter
        </a>

        <span className="footer-divider">
          /
        </span>

        <a href="#">
          Read My Blog
        </a>

      </div>

      <p className="footer-copy">

        © 2026{" "}

        <span>
          GeeksforGeeks Blog Clone
        </span>

      </p>

    </footer>
  );
}

export default Footer;