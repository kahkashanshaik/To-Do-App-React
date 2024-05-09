import { useReducer, useRef } from "react";
import FormInput from "./utils/FormInput";
import Modal from "./utils/Modal";
const AddNewProject = ({ setAction, addProjectAction }) => {
	const title = useRef("");
	const description = useRef("");
	const dueDate = useRef("");

	const modal = useRef();

	function submitAddNwTask() {
		const enteredTitle = title.current.value;
		const enteredDesc = description.current.value;
		const enteredDueDate = dueDate.current.value;

		if (enteredTitle === "" || enteredDesc === "" || enteredDueDate === "") {
			modal.current.open();
			return;
		}

		addProjectAction({
			title: enteredTitle,
			description: enteredDesc,
			dueDate: enteredDueDate,
		});

		title.current.value = "";
		description.current.value = "";
		dueDate.current.value = "";
	}

	return (
		<>
			<Modal ref={modal} btnCaption="Okey">
				<h2 className="text-stone-800 font-bold text-xl mb-4">Invalid Input</h2>
				<p className="text-stone-500">Opps... looks like you forgot to enter a value</p>
				<p className="text-stone-500">Please make sure to provide the valid value for every input field. </p>
			</Modal>
			<section className="flex flex-col gap-5 w-full px-3">
				<div className="flex justify-end gap-5">
					<button onClick={() => setAction("")}> Cancel</button>
					<button className="bg-stone-900 text-white px-4 py-2 rounded-md" onClick={submitAddNwTask}>
						Save
					</button>
				</div>
				<div className="flex-col mt-9">
					<FormInput ref={title} type="text" id="title" placeholder="Enter your project name" label="Title" />
					<FormInput ref={description} type="textarea" id="description" placeholder="Enter project description" label="Description" />
					<FormInput ref={dueDate} type="date" label="Due Date" id="date" />
				</div>
			</section>
		</>
	);
};

export default AddNewProject;
