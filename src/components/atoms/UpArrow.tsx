import { ArrowUpIcon } from "@heroicons/react/24/solid";
import cn from '@/utility/cn';

const UpArrow = ({ isActive }: { isActive: boolean }) => {
	return (
		<div className={cn('p-2 rounded', { 'bg-[#E5E8FD]': isActive, 'bg-[#F4F6F8]': !isActive })}>
			<ArrowUpIcon className={cn('size-4', { 'text-[#253CF2]': isActive, 'text-[#343A40]': !isActive })} />
		</div>
	);
};

export default UpArrow;
