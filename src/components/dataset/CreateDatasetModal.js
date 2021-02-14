import Modal from "react-modal";
import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CreateDataset from "./CreateDataset";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -45%)",
    width: window.screen.width < 700 ? "80%" : "40%",
  },
};
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
Modal.setAppElement("#root");
function CreateDatasetModal(props) {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button
        className="btn text-light mr-3 col-xs-12 col-sm-12 col-md-3 mb-4"
        style={{ backgroundColor: "#353431" }}
        onClick={handleOpenModal}
      >
        {props.create ? "Add Dataset" : "Update Dataset"}
      </button>
      <Modal
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <h4>{props.create ? "Create Dataset" : "Update Dataset"}</h4>
        <CreateDataset handleClose={handleCloseModal} create={props.create} id={props.id} classes={classes} />
      </Modal>
    </>
  );
}
export default CreateDatasetModal;
