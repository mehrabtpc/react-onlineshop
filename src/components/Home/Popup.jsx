function Popup({ show, onClose, children }) {
  if (!show) return null;

  const handleOverlayClick = (e) => {
    // اگر روی overlay کلیک شد، پاپاپ بسته شود
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      style={styles.overlay}
      onClick={handleOverlayClick} // کلیک روی overlay
    >
      <div style={styles.popup}>
        {children}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    minWidth: "300px",
    position: "relative",
  },
  closeBtn: {
    marginTop: "20px",
  },
};
export default Popup;
