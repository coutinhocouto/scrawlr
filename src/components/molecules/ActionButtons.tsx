import ActionButton from "@/components/atoms/ActionButton";

const ActionButtons = ({
	handleNewList,
	handleReset,
}: {
	handleNewList: () => void;
	handleReset: () => void;
}) => {
	return (
		<div className="flex justify-center">
			<div className="flex gap-2 justify-around max-w-[190px]">
				<ActionButton label="New List" onClick={handleNewList} />
				<ActionButton label="Reset" onClick={handleReset} isReset />
			</div>
		</div>
	);
};

export default ActionButtons;
