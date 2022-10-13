import Tooltip from "@mui/material/Tooltip";

const ArrowTooltip = ({ text, children }) => {
  return (
    <Tooltip title={text} arrow>
      {children}
    </Tooltip>
  );
};

export default ArrowTooltip;
