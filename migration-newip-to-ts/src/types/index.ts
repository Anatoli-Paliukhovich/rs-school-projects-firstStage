export interface NewsItem {
	id: string;
	name: string;
	description: string;
	url: string;
	category: string;
	language: string;
	country: string;
}
export interface NewsItemResponse {
	status: string;
	sources: NewsItem[];
}