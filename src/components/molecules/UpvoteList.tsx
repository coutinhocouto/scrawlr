import { useContext } from "react";
import AddUpvote from "@/components/atoms/AddUpvote";
import UpArrow from "@/components/atoms/UpArrow";
import { UpvoteProps } from "@/types/upvotes";
import { UpVotesContext } from "@/store/context";

const UpvoteList = ({ upVoteCount, handleUpvote, id, isActive }: UpvoteProps) => {
	const { upVotes, dispatch } = useContext(UpVotesContext);

	const handleToggle = () => {
		dispatch({ type: "TOGGLE_UPVOTE", payload: id });
	};

	const item = upVotes.find(item => item.id === id);

	return (
		<div className="flex gap-2 items-center mb-4 justify-center">
			<div
				className="border border-slate-300 min-w-[190px] p-1.5 rounded flex gap-1 min-h-[46px]"
				onClick={handleToggle}
			>
				{Array.from({ length: item?.upVotes || 0 }).map((_, index) => (
					<UpArrow key={index} isActive={isActive} />
				))}
			</div>
			<div>
				<AddUpvote
					onClick={() => handleUpvote(id)}
					id={id}
					upVoteCount={upVoteCount}
					isActive={isActive}
				/>
			</div>
		</div>
	);
};

export default UpvoteList;
