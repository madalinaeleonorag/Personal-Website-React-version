import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="title">MadalinaEleonora</div>
      <div className="right-items">
        <a href="https://madalinaeleonorag.medium.com/" target="_blank">
          Medium
        </a>
        <a href="https://github.com/madalinaeleonorag" target="_blank">
          GitHub
        </a>
        <a href="./assets/CV.pdf" target="_blank">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
