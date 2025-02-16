import { ActionButtonProps } from "@/types/upvotes";
import { XMarkIcon, PlusIcon } from "@heroicons/react/24/solid";

const icons = {
	reset: XMarkIcon,
	default: PlusIcon,
};

const ActionButton = ({ label, onClick, isReset }: ActionButtonProps) => {
	const btnClass = "w-4 h-4 mt-0.5";
	const Icon = isReset ? icons.reset : icons.default;

	return (
		<button
			onClick={onClick}
			className="btn cursor-pointer bg-[#F4F6F8] text-[#343A40] hover:text-[#253CF2] hover:bg-[#E5E8FD] rounded p-2 text-sm flex gap-1"
			role="button"
		>
			<Icon className={btnClass} /> {label}
		</button>
	);
};

export default ActionButton;
