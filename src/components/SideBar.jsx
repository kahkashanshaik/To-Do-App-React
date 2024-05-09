const SideBar = ({ setAction, isCurrentAction, projectsList }) => {
	return (
		<aside className={`flex flex-col lg:fixed  gap-5 w-full md:w-1/4  bg-stone-800 pt-10 p-7 md:rounded-lg rounded-b-none rounded-tl-none md:h-screen ${isCurrentAction === "" && "md:h-screen"} `}>
			<h1 className="text-white font-bold text-2xl">YOUR PROJECTS</h1>
			<span>
				<button onClick={() => setAction("add-new-project")} className="bg-stone-700 px-7 py-3 block text-white rounded-md hover:bg-stone-600">
					<i className="fa-solid fa-plus"></i> Add Project
				</button>
			</span>
			{projectsList.length > 0 && (
				<div className="flex flex-col ml-3 overflow-y-scroll no-scrollbar h-48 md:h-full pb-9">
					{projectsList.map((project) => {
						return (
							<p className={`text-white mb-3 px-2 py-2 cursor-pointer  ${project.id === isCurrentAction ? "bg-stone-900" : ""}`} onClick={() => setAction(project.id)} key={project.id}>
								{project.title}
							</p>
						);
					})}
				</div>
			)}
		</aside>
	);
};

export default SideBar;
