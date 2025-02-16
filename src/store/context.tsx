import { createContext, Dispatch } from "react";
import { UpvoteItem } from "@/types/upvotes";
import { UpvotesActions } from "@/types/store";

export const UpVotesContext = createContext<{
    upVotes: UpvoteItem[];
    dispatch: Dispatch<UpvotesActions>;
}>({
    upVotes: [{ id: 1, upVotes: 0, isToggleOn: false, isActive: false }],
    dispatch: () => null,
});