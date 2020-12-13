import $ from "jquery"
import {Category} from '../types'


export function filter(data: Category[], query: string): Category[] {
    if (!query)
        return data;

    query = query.toLowerCase().replace('-', '');
    
    if (!query)
        return data;

    const results: Category[] = [];

    data.forEach(category => {
        const matchingEntries = category.content.filter(entry => {
            const title = entry.title.toLowerCase();
            const address = entry.address.toLowerCase().replace('-', '');
            const categoryName = category.header.toLowerCase();

            return title.includes(query) || address.includes(query) || categoryName.includes(query);
        });

        if (matchingEntries.length > 0)
            results.push({header: category.header, content: matchingEntries});
    });

    return results;
}

export const loadData = async () : Promise<Category[]> => {
    let json = await loadJson();
    const result = parseData(json);

    return result;
}

const loadJson = async () => {
    return new Promise<string>(resolve => {
        $.getJSON("data.json", resolve)
    });
}

function parseData(json: any): Category[] {
    const results = [];

    for (const topCategory in json) {
        const topCategoryContent = json[topCategory];
        for (const category in topCategoryContent) {
            const categoryName = getCategoryName(category !== 'null' ? category : topCategory);
            const categoryContent = topCategoryContent[category];

            results.push({ header: categoryName, content: categoryContent })
        }
    }

    return results;
}

const alternativeTitles: { [key: string]: string; }  = 
{
    'ПРЕДПРИЯТИЯ': 'УЧРЕЖДЕНИЯ',
    'СРЕДСТВА МАССОВОЙ ИНФОРМАЦИИ': 'СМИ',
    'КОММУНАЛЬНЫЕ СЛУЖБЫ': 'КОМ. СЛУЖБЫ',
    'ФИНАНСОВЫЕ УЧРЕЖДЕНИЯ': 'ФИН. УЧРЕЖДЕНИЯ',
};

function getCategoryName(name: string): string {
    return alternativeTitles[name] || name;
}