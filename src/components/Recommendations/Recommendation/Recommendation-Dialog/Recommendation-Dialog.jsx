import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./Recommendation-Dialog.scss";

const RecommendationDialog = ({ onClose, selectedValue, open }) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} className="recommendation-dialog">
      <DialogTitle className="recommendation-dialog-title">
        {selectedValue.author} said:
      </DialogTitle>
      <div className="recommendation-dialog-details">
        {selectedValue.role} at {selectedValue.from} ({selectedValue.date})
      </div>
      <div
        className="recommendation-dialog-text"
        dangerouslySetInnerHTML={{ __html: selectedValue.text }}
      ></div>
    </Dialog>
  );
};

export default RecommendationDialog;
