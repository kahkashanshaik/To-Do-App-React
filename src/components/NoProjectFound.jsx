import NoProjFoundImg from "../assets/no-projects.png";
const NoTaskFound = ({ setAction }) => {
	return (
		<section className="flex flex-col gap-5 justify-center items-center">
			<img src={NoProjFoundImg} alt="" className="w-1/6" />
			<h3 className="text-stone-600 font-bold text-2xl">No Project Selected</h3>
			<p className="text-stone-600">Select a new project to get started with a new one</p>
			<button onClick={() => setAction("add-new-project")} className="bg-stone-700 text-stone-400 px-4 py-2 rounded-md">
				Create new project
			</button>
		</section>
	);
};

export default NoTaskFound;
