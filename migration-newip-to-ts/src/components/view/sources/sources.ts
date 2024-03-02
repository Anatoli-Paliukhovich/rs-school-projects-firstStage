import './sources.css';
import { NewsItem } from 'src/types/index';
class Sources<T extends NewsItem> {
    draw(data: T[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as ParentNode;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.source.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.source.id);

            fragment.append(sourceClone);
        });
        const sourceContainer = document.querySelector('.sources') as HTMLElement;
        if (sourceContainer) {
            sourceContainer.append(fragment);
        }
    }
}

export default Sources;
