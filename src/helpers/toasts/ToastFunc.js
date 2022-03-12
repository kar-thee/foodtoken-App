import toast from "react-hot-toast";

const ToastFunc = ({ msg, type }) => {
  return toast(msg, {
    icon: type === "success" ? "👍" : "👎",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: type === "success" ? "#198754" : "#dc3545",
    },
  });
};

export default ToastFunc;
