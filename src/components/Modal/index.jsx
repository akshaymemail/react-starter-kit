import React, { useState } from "react";
import { Button, Modal } from "antd";

const AppModal = ({
  title,
  children,
  onOk,
  onCancel,
  asyncLogic = false,
  open,
  setOpen,
  isOk = true, // Show OK button by default
  isCancel = true, // Show Cancel button by default
  okButtonText = "OK", // Default OK button text
  cancelButtonText = "Cancel", // Default Cancel button text
  ...rest
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    if (asyncLogic) {
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
        if (onOk) onOk();
      }, 2000);
    } else {
      setOpen(false);
      if (onOk) onOk();
    }
  };

  const handleCancel = () => {
    setOpen(false);
    if (onCancel) onCancel();
  };

  const footerButtons = [];
  if (isOk) {
    footerButtons.push(
      <Button
        key="ok"
        type="primary"
        loading={confirmLoading}
        onClick={handleOk}
      >
        {okButtonText}
      </Button>
    );
  }
  if (isCancel) {
    footerButtons.push(
      <Button key="cancel" onClick={handleCancel}>
        {cancelButtonText}
      </Button>
    );
  }

  return (
    <Modal
      title={title}
      open={open}
      onCancel={handleCancel}
      footer={footerButtons.length > 0 ? footerButtons : null} // Dynamically set footer based on the buttons
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default AppModal;
