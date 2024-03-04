import { Flip, toast, ToastOptions } from "react-toastify";

const MessageToast = {
  defaultConfigs: {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Flip,
  } as ToastOptions,
  error: (message: string) => {
    MessageToast.toast(message, "error");
  },
  success: (message: string) => {
    MessageToast.toast(message, "success");
  },
  warn: (message: string) => {
    MessageToast.toast(message, "warning");
  },
  info: (message: string) => {
    MessageToast.toast(message, "info");
  },
  toast: (message: string, type: "success" | "info" | "warning" | "error") => {
    toast(message, {
      ...MessageToast.defaultConfigs,
      type: type,
    });
  },
};

export default MessageToast;
