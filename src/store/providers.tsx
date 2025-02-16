import React, { useReducer, useEffect } from "react";
import { VotesProviderProps } from "@/types/store";
import { UpVotesContext } from "@/store/context";
import { votesReducer } from "@/store/reducers";
import { UpvoteItem } from "@/types/upvotes";

const getInitialState = (): UpvoteItem[] => {
	const storedVotes = localStorage.getItem("upvotes");
	return storedVotes ? JSON.parse(storedVotes) : [{ id: 1, upVotes: 0, isToggleOn: false, isActive: false }];
};

export const UpVotesProvider: React.FC<VotesProviderProps> = ({ children }) => {
	const [upVotes, dispatch] = useReducer(votesReducer, getInitialState());

	useEffect(() => {
		localStorage.setItem("upvotes", JSON.stringify(upVotes));
	}, [upVotes]);

	return (
		<UpVotesContext.Provider value={{ upVotes, dispatch }}>
			{children}
		</UpVotesContext.Provider>
	);
};
