import News from './news/news';
import Sources from './sources/sources';
import { NewsItem } from 'src/types/index';

export class AppView {
    private news: News<NewsItem>;
    private sources: Sources<NewsItem>;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { articles: NewsItem[] }) {
        this.news.draw(data.articles);
    }

    drawSources(data: { sources: NewsItem[] }) {
        this.sources.draw(data.sources);
    }
}
export default AppView;
