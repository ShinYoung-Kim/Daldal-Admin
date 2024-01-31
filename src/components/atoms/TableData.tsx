import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import TableDataInput from '@components/atoms/TableDataInput';
import { TableDataKey } from '@type/table';
import { getFormattedTableData } from '@utils/formatData';

type TableDataProps = {
	defaultValue: string;
	style: string;
	isEditable?: boolean;
	isClickable?: boolean;
	headerKey: TableDataKey;
	id: number | 'new';
};

const TableData = ({
	defaultValue,
	style,
	isEditable,
	headerKey,
	id,
}: TableDataProps) => {
	const [value, setValue] = useState(
		getFormattedTableData(headerKey, defaultValue),
	);
	const [isEditing, setIsEditing] = useState(false);

	const handleClickTableData = () => {
		if (isEditable) {
			setIsEditing(prev => !prev);
		}
	};

	const renderValueOrInput = () => {
		if (isEditing) {
			return (
				<TableDataInput
					value={value}
					setValue={setValue}
					setIsEditing={setIsEditing}
					headerKey={headerKey}
					id={id}
				/>
			);
		}

		return value;
	};

	return (
		<td
			className={twMerge('border overflow-hidden text-center', style)}
			onClick={handleClickTableData}
		>
			{renderValueOrInput()}
		</td>
	);
};

export default TableData;
