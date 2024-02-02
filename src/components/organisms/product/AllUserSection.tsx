import Table from '@components/atoms/Table';
import Title from '@components/atoms/Title';
import { userTableColumns } from '@models/crawling/entity/crawling';
import { TableDataList } from '@type/table';

type AllUserSectionProps = {
	datas: TableDataList;
};

const AllUserSection = ({ datas }: AllUserSectionProps) => {
	return (
		<div className="h-1/2 overflow-auto">
			<Title title="전체 유저" />
			<Table columns={userTableColumns} datas={datas} />
		</div>
	);
};

export default AllUserSection;
