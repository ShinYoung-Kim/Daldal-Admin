import { UserTableDataList } from '@models/user/entity/user';

export const userTableMockDataList: UserTableDataList = [
	{
		id: 1,
		name: '김철수',
		price: 10000,
		point: 1000,
		accountBank: '신한은행',
		accountNumber: '110-1234-5678',
		refundRequestedDate: '2022-01-01',
		isRefund: true,
	},
	{
		id: 2,
		name: '김영희',
		price: 20000,
		point: 2000,
		accountBank: '국민은행',
		accountNumber: '111-1234-5678',
		refundRequestedDate: '2022-01-02',
		isRefund: false,
	},
	{
		id: 3,
		name: '박철수',
		price: 30000,
		point: 3000,
		accountBank: '우리은행',
		accountNumber: '112-1234-5678',
		refundRequestedDate: '2022-01-03',
		isRefund: true,
	},
	{
		id: 4,
		name: '박영희',
		price: 40000,
		point: 4000,
		accountBank: '하나은행',
		accountNumber: '113-1234-5678',
		refundRequestedDate: '2022-01-04',
		isRefund: false,
	},
	{
		id: 5,
		name: '이철수',
		price: 50000,
		point: 5000,
		accountBank: '농협은행',
		accountNumber: '114-1234-5678',
		refundRequestedDate: '2022-01-05',
		isRefund: true,
	},
	{
		id: 6,
		name: '이영희',
		price: 60000,
		point: 6000,
		accountBank: '기업은행',
		accountNumber: '115-1234-5678',
		refundRequestedDate: '2022-01-06',
		isRefund: false,
	},
];
