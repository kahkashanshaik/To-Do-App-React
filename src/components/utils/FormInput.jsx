import { forwardRef } from "react";

const FormInput = forwardRef(function FormInput({ type, label, id, ...props }, ref) {
	const cssClasses = "bg-stone-500 border-none border-b border-stone-800 w-full mb-3 p-2 py-5 outline-none text-white rounded-md placeholder:text-white";
	return (
		<>
			<label className="text-stone-700 uppercase font-semibold">{label}</label>
			{type === "textarea" && <textarea className={cssClasses} ref={ref} {...props}></textarea>}
			{type != "textarea" && <input type={type} className={cssClasses} ref={ref} {...props} />}
		</>
	);
});

export default FormInput;
