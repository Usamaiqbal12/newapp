import Modal from "react-modal";
import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CreateDataset from "./CreateDataset";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "-15%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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
      <button className="btn col-2 text-dark" onClick={handleOpenModal}>
        Edit
      </button>
      <Modal
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <h3>Create DataSet</h3>
        <CreateDataset />
        <div className="px-3">
          <Button
            // onClick={handleEdit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}
export default CreateDatasetModal;
