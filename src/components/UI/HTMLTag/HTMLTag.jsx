import "./HTMLTag.scss";

const HTMLTag = ({ isClosed, text }) => {
  return isClosed ? (
    <span className="html-tag"> &#60;&#47;{text}&#62;</span>
  ) : (
    <span className="html-tag"> &#60;{text}&#62;</span>
  );
};

export default HTMLTag;
