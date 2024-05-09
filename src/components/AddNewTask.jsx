import { useRef } from "react";
import { formatDate } from "./utils/Helper.js";

const AddNewTask = ({ project, addNewTaskAction, deleteTaskAction, deleteProjectAction }) => {
	const selectedProjc = project[0];
	const newTaskInput = useRef("");
	return (
		<>
			<section className="p-5 flex flex-col w-full gap-2">
				<div className="flex justify-between">
					<h1 className="text-stone-800 text-3xl font-bold">{selectedProjc.title}</h1>
					<button className="hover:text-red-900" onClick={() => deleteProjectAction(selectedProjc)}>
						Delete
					</button>
				</div>
				<p className="text-stone-400">{formatDate(selectedProjc.dueDate)}</p>
				<p className="my-4 text-xl ">{selectedProjc.title}</p>
				<p className="mb-3">{selectedProjc.description}</p>
				<hr className="w-full h-1 bg-stone-300" />
				<h1 className="text-stone-800 text-3xl font-bold mt-4"> Tasks</h1>
				<div className="flex flex-row gap-3">
					<input type="text" name="task" id="task" className="w-3/4 md:w-1/2 bg-stone-400 py-3 px-3 rounded-md" ref={newTaskInput} />
					<button
						onClick={() => {
							addNewTaskAction(newTaskInput.current.value, selectedProjc);
							newTaskInput.current.value = "";
						}}
					>
						Add Task
					</button>
				</div>
				<div className="flex flex-col gap-5 bg-stone-300 p-5 w-full md:w-5/6 mt-6">
					{selectedProjc.tasks.length == 0 && <p className="text-center">No task found add one</p>}
					{selectedProjc.tasks.length > 0 &&
						selectedProjc.tasks.map((task, index) => {
							return (
								<p key={index} className="flex justify-between">
									<span>{task}</span>
									<button onClick={() => deleteTaskAction(index, selectedProjc)} className="hover:text-red-600">
										Clear
									</button>
								</p>
							);
						})}
				</div>
			</section>
		</>
	);
};

export default AddNewTask;
