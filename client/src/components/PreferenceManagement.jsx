import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import CustomModal from "./CustomModal";

export default function PreferenceManagement() {
  const [showModal, setShowModal] = useState(false);
  const { setUser, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleDelete = async () => {
    await axios
      .delete(`${import.meta.env.VITE_API_URL}/api/user`, {
        withCredentials: true,
      })
      .then(() => {
        setUser({ id: null, email: null });
        setIsAuthenticated(false);
        localStorage.clear();
        navigate("/landing");
      })
      .catch((error) => console.error(error));
    setShowModal(false);
  };
  return (
    <div className="preferences-window">
      <p className="delete-text">
        You can delete your account by clicking below.
      </p>
      <button
        type="button"
        className="delete-button"
        onClick={handleDeleteClick}
      >
        Delete your account
      </button>
      <CustomModal
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleDelete}
        modalTitle="Account removal confirmation"
        modalText="Are you sure you want to delete your account ?"
      />
    </div>
  );
}
