import PropTypes from "prop-types";

export default function CustomModal({
  show,
  onClose,
  onConfirm,
  modalTitle,
  modalText,
}) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-window">
      <div className="modal-content">
        <h2>{modalTitle}</h2>
        <p>{modalText}</p>
        <div className="modal-buttons">
          <button type="button" className="modal-btn-cancel" onClick={onClose}>
            Retour
          </button>
          <button
            type="button"
            className="modal-btn-confirm"
            onClick={onConfirm}
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
}

CustomModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalText: PropTypes.string.isRequired,
};
