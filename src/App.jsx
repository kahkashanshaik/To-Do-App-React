import Header from "./components/Header";
import SideBar from "./components/SideBar";
import NoProjectsFound from "./components/NoProjectFound";
import { useState } from "react";
import AddNewProject from "./components/AddNewProject";
import AddNewTask from "./components/AddNewTask";

const PROJECTS_LIST = [
	{
		id: "PROJECT_1",
		title: "Learning React",
		description: "Learning the core concepts",
		dueDate: "05-08-2024",
		tasks: ["Will be completing todo app today", "Learning more react concepts today"],
	},
];

function App() {
	const [projects, setProjects] = useState([...PROJECTS_LIST]);
	/**
	 * add-new-project Add new project
	 * project-Id : Add new task
	 */
	const [currentAction, setCurrentAction] = useState("");
	// handles set current action
	function handleAction(action) {
		setCurrentAction(action);
	}

	// add new project
	function handleNewProjectAction(inputs) {
		const newProjectData = {
			id: `PROJECT_${projects.length + 1}`,
			title: inputs.title,
			description: inputs.description,
			dueDate: inputs.dueDate,
			tasks: [],
		};
		setProjects((prevProject) => [...prevProject, newProjectData]);
	}
	// add new task
	const selectedProject = currentAction != "" && currentAction != "add-new-project" && projects.filter((project) => project.id === currentAction);
	function handleAddNewTask(input, selectedProjc) {
		selectedProjc.tasks.push(input);
		updateExistingProjectDetails(selectedProjc);
	}
	// delete task from project
	function handleDeleteTask(index, selectedProjc) {
		selectedProjc.tasks.splice(index, 1);
		updateExistingProjectDetails(selectedProjc);
	}

	// delete project
	function handleDeleteProject(project) {
		const updatedProjects = [...projects];
		const index = updatedProjects.findIndex((projc) => projc.id === project.id);
		if (index > -1) updatedProjects.splice(index, 1);

		setProjects(updatedProjects);
		setCurrentAction("");
	}

	// update project lists
	function updateExistingProjectDetails(selectedProjc) {
		const updatedProjects = projects.map((project) => {
			if (project.id === selectedProjc.id) return { ...project, selectedProjc };

			return project;
		});

		setProjects(updatedProjects);
	}

	return (
		<>
			<Header />
			<section className="flex flex-col md:flex-row">
				<SideBar setAction={handleAction} projectsList={projects} isCurrentAction={currentAction} />
				<section className=" flex w-full md:w-3/4 py-6 px-2 lg:ml-80">
					{currentAction == "" && <NoProjectsFound setAction={handleAction} />}
					{currentAction === "add-new-project" && <AddNewProject setAction={handleAction} addProjectAction={handleNewProjectAction} />}
					{currentAction != "" && currentAction != "add-new-project" && <AddNewTask project={selectedProject} addNewTaskAction={handleAddNewTask} deleteTaskAction={handleDeleteTask} deleteProjectAction={handleDeleteProject} />}
				</section>
			</section>
		</>
	);
}

export default App;
