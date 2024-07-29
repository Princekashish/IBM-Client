import { toast } from "react-toastify";
export const handleSucess = (message) => {
  toast.success(message);
};
export const handlError = (msg) => {
  toast.error(msg, {
    position: "top-right",
  });
};
