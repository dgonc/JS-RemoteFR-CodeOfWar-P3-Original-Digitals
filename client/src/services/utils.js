import { toast, Slide } from "react-toastify";

export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
}
export function notifySuccess() {
  toast.success("Succès", {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });
}

export function notifyError() {
  toast.error("Echec", {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });
}
