import { PlusIcon } from "@heroicons/react/24/solid";
import { UpvoteButtonProps } from "@/types/upvotes";

const AddUpvote = ({ upVoteCount, onClick, isActive }: UpvoteButtonProps) => {
	return (
		<button
			type="button"
			className={`p-1 rounded mt-1.5 cursor-pointer disabled:opacity-50 ${isActive ? 'bg-[#E5E8FD]' : 'bg-[#F4F6F8]'}`}
			onClick={onClick}
			disabled={upVoteCount >= 5}
		>
			<PlusIcon className={`w-6 h-6 ${isActive ? 'text-[#253CF2]' : 'text-[#343A40]'}`} />
		</button>
	);
};

export default AddUpvote;
