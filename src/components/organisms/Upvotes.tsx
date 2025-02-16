import { useContext, useState } from "react";
import { UpVotesContext } from "@/store/context";
import UpvoteList from "@/components/molecules/UpvoteList";
import { UpvoteItem } from "@/types/upvotes";
import ActionButtons from "@/components/molecules/ActionButtons";

export const Upvotes = () => {
	const { upVotes, dispatch } = useContext(UpVotesContext);
	const [selected, setSelected] = useState<number | null>(null);

	const handleUpvote = (id: number) => {
		dispatch({ type: "UPVOTE", payload: id });
		setSelected(selected === id ? null : id);
	};

	const handleNewList = () => {
		dispatch({ type: "NEW_LIST" });
	};

	const handleReset = () => {
		dispatch({ type: "RESET" });
	};

	return (
		<>
		<header>
			<img src="/logo.png" alt="logo" className="mx-auto mt-10 w-36" />
		</header>
		<main className="flex flex-col max-w-lg mx-auto my-8">
			{upVotes && upVotes.map((item: UpvoteItem) => (
				<UpvoteList
					key={item.id}
					upVoteCount={item.upVotes}
					handleUpvote={handleUpvote}
					id={item.id}
					isActive={item.isActive}
				/>
			))}
			<ActionButtons handleNewList={handleNewList} handleReset={handleReset} />
		</main>
		</>
	);
};
