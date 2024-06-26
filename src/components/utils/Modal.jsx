import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
	const dialog = useRef();
	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});
	return createPortal(
		<dialog ref={dialog} className="backdrop:bg-stone-900/90 px-5 py-7 rounded-md">
			{children}
			<form method="dialog">
				<button className="bg-stone-800 float-right text-white px-3 py-2 mt-4 rounded-md">{btnCaption}</button>
			</form>
		</dialog>,
		document.getElementById("modal-root")
	);
});

export default Modal;
