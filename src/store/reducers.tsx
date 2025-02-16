import { UpvotesActions } from "@/types/store";
import { UpvoteItem } from "@/types/upvotes";

export const votesReducer = (
	state: UpvoteItem[],
	action: UpvotesActions
): UpvoteItem[] => {
	switch (action.type) {
		case "UPVOTE":
			return state.map(item =>
				item.id === action.payload ? { ...item, upVotes: item.upVotes + 1, isActive: true } : { ...item, isActive: false }
			);
		case "NEW_LIST": {
			const newId = state.length > 0
				? Math.max(...state.map((item: UpvoteItem) => item.id)) + 1
				: 1;
			return [...state, { id: newId, upVotes: 0, isActive: false, isToggleOn: false }];
		}
		case "TOGGLE_UPVOTE":
			return state.map(item => {
				if (item.id === action.payload) {
					if (item.upVotes === 5) {
						return { ...item, upVotes: item.upVotes - 1, isToggleOn: false, isActive: true };
					}
					if (item.isToggleOn) {
						return { ...item, upVotes: item.upVotes - 1, isToggleOn: false, isActive: true };
					} else {
						return { ...item, upVotes: item.upVotes + 1, isToggleOn: true, isActive: true };
					}
				} else {
					return { ...item, isActive: false, isToggleOn: false };
				}
			});
		case "RESET":
			return [{ id: 1, upVotes: 0, isActive: false, isToggleOn: false }];
		default:
			return state;
	}
};