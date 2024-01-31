import { CrawlingTableData } from '@models/crawling/entity/crawling';

export const crawlingTableMockData: (
	id: number | 'new',
) => CrawlingTableData = (id: number | 'new') => ({
	id: id === 'new' ? Math.random() : id,
	detail: '상품 상세 설명',
	thumbnailUrl: 'https://via.placeholder.com/150',
	categoryType: '카테고리',
	imageUrls: [
		'https://via.placeholder.com/150',
		'https://via.placeholder.com/150',
	],
	videoUrls: [
		'https://via.placeholder.com/150',
		'https://via.placeholder.com/150',
	],
	redirectUrl: 'https://via.placeholder.com/150',
	isMDPick: true,
	isOpen: true,
	price: 10000,
});

export const crawlingTableMockDataList = Array(10)
	.fill(undefined)
	.map((_, index) => crawlingTableMockData(index));

export const crawlingProductLink = (id: number | 'new') => {
	return crawlingTableMockData(id);
};
