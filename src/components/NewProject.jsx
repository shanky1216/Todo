import React, { useRef } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";

const NewProject = ({ handleCancel, handleSave }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSaveItem() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    const item = {
      id: Math.random(),
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.showModal();
      return ;
    }
    handleSave(item);
  }
  return (
    <>
      <Modal ref={modal}>
        <h1>An error occurs</h1>
      </Modal>
      <section className="lg:w-[55rem] w-[35rem] mt-[10rem]">
        <div className="flex justify-end">
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSaveItem} dark>
            Save
          </Button>
        </div>
        <div className="mt-[4rem]">
          <Input
            ref={title}
            label="Title"
            type="text"
            name="title"
            id="title"
          />
          <Input
            ref={description}
            textarea
            label="Description"
            name="description"
            id="description"
          />
          <Input
            ref={dueDate}
            label="Due Date"
            type="date"
            name="dueDate"
            id="dueDate"
          />
        </div>
      </section>
    </>
  );
};

export default NewProject;
