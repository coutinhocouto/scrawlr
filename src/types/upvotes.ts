export interface UpvoteProps {
	upVoteCount: number;
	handleUpvote: (id: number) => void;
	id: number;
	isActive: boolean;
}

export interface UpvoteItem {
	id: number;
	upVotes: number;
	isActive: boolean;
	isToggleOn?: boolean;
}

export interface UpvoteButtonProps {
	onClick: () => void;
	upVoteCount: number;
	id: number;
	isActive: boolean;
}

export interface ActionButtonProps {
	label: string;
	onClick: () => void;
	isReset?: boolean;
}
