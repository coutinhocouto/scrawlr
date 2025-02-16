import { ReactNode } from "react";

export type UpvotesActions =
	| { type: "UPVOTE"; payload: number }
	| { type: "RESET" }
	| { type: "NEW_LIST" }
	| { type: "TOGGLE_UPVOTE"; payload: number };

export type VoteAction = { type: "UPVOTE"; payload: number };

export interface VotesProviderProps {
	children: ReactNode;
}
