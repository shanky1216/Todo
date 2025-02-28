import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [data, setData] = useState({
    projects: [],
    tasks: [],
    projectId: undefined,
  });

  function handleAddProject() {
    setData((prevState) => {
      return {
        ...prevState,
        projectId: null,
      };
    });
  }
  function handleCancel() {
    setData((prevState) => {
      return {
        ...prevState,
        projectId: undefined,
      };
    });
  }
  function handleSave(item) {
    setData((prevState) => {
      const id = Math.random();
      return {
        ...prevState,
        projects: [...prevState.projects, item],
        projectId: undefined,
      };
    });
    data.projectId === undefined;
    console.log(data);
  }

  function handleSelectedProject(id) {
    setData((prevState) => {
      return {
        ...prevState,
        projectId: id,
      };
    });
    console.log(data);
  }

  function handleDelete(id) {
    setData((prevState) => {
      return {
        ...prevState,
        projectId: undefined,
        projects: prevState.projects.filter((p) => p.id !== id),
      };
    });
  }

  function handleAddTask(enteredTask) {
    setData((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: enteredTask,
        projectId: prevState.projectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
    console.log(data);
  }
  function handleDeleteTask(id) {
    setData((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id),
      };
    });
    console.log(data);
  }

  const selectedPro = data.projects.find((p) => p.id === data.projectId);
  let content = (
    <SelectedProject
      project={selectedPro}
      handleDelete={handleDelete}
      handleAddTask={handleAddTask}
      tasks={data.tasks}
      handleDeleteTask={handleDeleteTask}
    />
  );

  if (data.projectId === undefined) {
    content = <NoProjectSelected handleAddProject={handleAddProject} />;
  }
  if (data.projectId === null) {
    content = (
      <NewProject handleCancel={handleCancel} handleSave={handleSave} />
    );
  }

  return (
    <main className="mt-5 flex">
      <SideBar
        handleAddProject={handleAddProject}
        data={data}
        handleSelectedProject={handleSelectedProject}
        projectId={data.projectId}
      />
      {content}
    </main>
  );
}

export default App;
