import React from "react";
import Button from "../UI/Button";

const SideBar = ({
  handleAddProject,
  data,
  handleSelectedProject,
  projectId,
}) => {
  return (
    <aside className="lg:w-[25rem] w-[15rem] bg-stone-900 h-screen rounded-tr-lg p-5">
      <h2 className="uppercase text-2xl text-stone-400 font-extrabold mb-5">
        Your Project
      </h2>
      <Button dark onClick={handleAddProject}>
        + Add Project
      </Button>
      <ul className="mt-10">
        {data.projects.map((d) => {
          let css = "p-2 m-2 rounded-lg w-full";
          if(d.id===projectId){
            css += " bg-stone-700 text-stone-200"
          }else{
            css += " text-stone-400"
          }
          return (
            <li key={d.id}>
              <button
                className={css}
                onClick={() => handleSelectedProject(d.id)}
              >
                {d.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
