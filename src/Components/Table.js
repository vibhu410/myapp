import React, { useState, useEffect } from "react";
import { useDrag } from "react-dnd";

import Modal from "react-modal";
const Table = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    email: "",

    position: "",
  });
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  const storedData = JSON.parse(localStorage.getItem("tableRows")) || [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      position: "Developer",
    },
    {
      id: 2,
      name: "Vibha Kaushik",
      email: "janedoe@example.com",
      position: "Designer",
    },
    {
      id: 3,
      name: "Chintoo Sharma",
      email: "johndoe@example.com",
      position: "Developer",
    },
    {
      id: 4,
      name: "Jane Doe",
      email: "janedoe@example.com",
      position: "Designer",
    },
    {
      id: 5,
      name: "Shilpa Gupta",
      email: "johndoe@example.com",
      position: "Developer",
    },
    {
      id: 6,
      name: "Deepa garg",
      email: "janedoe@example.com",
      position: "Designer",
    },
  ];
  const edit = (rowData) => {
    console.log("edit", rowData);
    setEditData({
      id: rowData.id,
      name: rowData.name,
      email: rowData.email,

      position: rowData.position,
    });

    setIsModalOpen(true);
  };
  const handleDeleteClick = (rowData) => {
    setDeleteConfirmation(rowData);
  };

  const handleDeleteConfirm = () => {
    const updatedTableRows = storedData.filter(
      (rowData) => rowData.name !== deleteConfirmation.name
    );

    localStorage.setItem("tableRows", JSON.stringify(updatedTableRows));

    setDeleteConfirmation(null);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalCloseDel = () => {
    setIsModalOpen(false);
    setDeleteConfirmation(null);
  };
  const handleSaveChanges = () => {
    const updatedTableRows = storedData.map((rowData) =>
      rowData.id === editData.id ? { ...editData } : rowData
    );

    localStorage.setItem("tableRows", JSON.stringify(updatedTableRows));

    setIsModalOpen(false);
  };
  const DraggableRow = ({ data, index }) => {
    const [, drag] = useDrag({
      item: { type: "ROW", index },
    });
    return (
      <tr ref={drag}>
        <td>{data.column1}</td>
        <td>{data.column2}</td>
      </tr>
    );
  };

  useEffect(() => {
    localStorage.setItem("tableRows", JSON.stringify(storedData));
  }, [storedData]);
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Edit Modal"
      >
        <div
          style={{
            paddingTop: "200px",
            position: "absolute",
            top: "50",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h2>Edit Data</h2>
          <form>
            <input
              type="text"
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
            />
            <br />
            <input
              type="email"
              value={editData.email}
              onChange={(e) =>
                setEditData({ ...editData, email: e.target.value })
              }
            />
            <br />
            <input
              type="text"
              value={editData.position}
              onChange={(e) =>
                setEditData({ ...editData, position: e.target.value })
              }
            />
            <br />
            <button type="button" onClick={handleSaveChanges}>
              Save Changes
            </button>
            <br />
            <button type="button" onClick={handleModalClose}>
              Close
            </button>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={deleteConfirmation !== null}
        onRequestClose={handleModalClose}
        contentLabel="Delete Confirmation Modal"
      >
        <h2>Delete Confirmation</h2>
        <p>
          Are you sure you want to delete{" "}
          {deleteConfirmation && deleteConfirmation.name}?
        </p>
        <button onClick={handleDeleteConfirm}>Yes, Delete</button>
        <button style={{ marginLeft: "20px" }} onClick={handleModalCloseDel}>
          Cancel
        </button>
      </Modal>
      <div>
        <h1> Table</h1>

        <table border="2">
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody>
            {storedData.map((rowData, index) => {
              console.log(rowData, "item");
              return (
                <>
                  <tr
                    onMouseEnter={() => setShowButtons(true)}
                    onMouseLeave={() => setShowButtons(false)}
                  >
                    <td>{rowData.name}</td>
                    <td>{rowData.email}</td>
                    <td>{rowData.position}</td>
                    <td>
                      {showButtons && (
                        <div>
                          <button onClick={() => edit(rowData)}>Edit</button>
                          <button onClick={() => handleDeleteClick(rowData)}>
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
