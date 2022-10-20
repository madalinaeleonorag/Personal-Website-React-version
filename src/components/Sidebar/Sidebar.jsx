import ArrowTooltip from "../UI/ArrowTooltip";
import "./Sidebar.scss";

const Sidebar = () => {
  const items = [
    {
      value: "#",
      text: "⬆️",
      tooltip: "Go to the top",
    },
    {
      value: "#skills",
      text: "🌟",
      tooltip: "Skills",
    },
    {
      value: "#work",
      text: "📁",
      tooltip: "Work experience",
    },
    {
      value: "#education",
      text: "📚",
      tooltip: "Education",
    },
    {
      value: "#certifications",
      text: "📃",
      tooltip: "Certifications",
    },
    {
      value: "#projects",
      text: "💻",
      tooltip: "Latest projects",
    },
    {
      value: "#awards",
      text: "🏆",
      tooltip: "Awards",
    },
    {
      value: "#publications",
      text: "✏️",
      tooltip: "Publications",
    },
    {
      value: "#passion",
      text: "📸",
      tooltip: "My passion",
    },
    {
      value: "#recommendations",
      text: "💬",
      tooltip: "Recommendations",
    },
    {
      value: "#contact",
      text: "💌",
      tooltip: "Contact me",
    },
  ];

  return (
    <div className="sidebar">
      {items.map((item) => (
        <ArrowTooltip text={item.tooltip} key={item.text}>
          <a className="app-card" href={item.value} onClick="return false;">
            {item.text}
          </a>
        </ArrowTooltip>
      ))}
    </div>
  );
};

export default Sidebar;
