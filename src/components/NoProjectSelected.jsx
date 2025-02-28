import React from "react";
import Button from "../UI/Button";
import noteBook  from "../assets/no-projects.png"

const NoProjectSelected = ({handleAddProject}) => {
  return (
    <section
      className="w-full h-screen flex flex-col
  items-center justify-center"
    >
      <img width='100px' heigth="100px" src={noteBook} alt="" />
      <h2 className="text-2xl text-stone-500 font-semibold">No Project Selected</h2>
      <p className="text-stone-400 mb-5">Select a project or get started with a new one.</p>
      <Button dark onClick={handleAddProject}>Create new project</Button>
    </section>
  );
};

export default NoProjectSelected;
