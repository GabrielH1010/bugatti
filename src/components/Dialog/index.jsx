import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogBody } from "./styles";

function DialogComponent({ onClose, open, title, children }) {
  return (
    <Dialog onClose={onClose} open={open} maxWidth="md">
      <DialogTitle
        style={{
          color: "black",
          fontFamily: "Dancing Script",
          fontSize: 28,
          fontWeight: "400",
        }}
      >
        {title}
      </DialogTitle>
      <DialogBody>{children}</DialogBody>
    </Dialog>
  );
}

export default DialogComponent;
