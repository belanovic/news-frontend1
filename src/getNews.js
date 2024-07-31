import HOST_BACKEND from './hostBackend.js';

export async function getFrontpageNews() {
    try {
        const response = await fetch(`${HOST_BACKEND}/frontpageArticlesFE`);
        const responseBody = await response.json();

        if(responseBody.error) {
            return null
        }
        if(responseBody.frontpageArticles) {
            return responseBody.frontpageArticles;
        }
        return null
    }
    catch(error) {
        return null;
    }
}

export async function getArticle(id) {
    try {
        const response = await fetch(`${HOST_BACKEND}/oneArticleFE/${id}`);
        const responseBody = await response.json();
        
        if(responseBody.error) {
            return null
        }
        if(responseBody.articleFound) {
            return responseBody.articleFound;
        }
        return null
    }
    catch(error) {
        return null;
    }
}

export async function getNewsByCategory(category, pageNum, tag) {

    const options = { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            category: category,
            pageNum: pageNum,
            tag: tag
        })
    }

    try {
        const response = await fetch(`${HOST_BACKEND}/${pageNum.isLast == true? 'lastPageFE' : 'category'}`, options);
        const responseBody = await response.json();
        if(responseBody.error) {
            return null
        }
        if(responseBody.newsMsg) {
            return responseBody.newsMsg
        }
        return null
    }
    catch (error) {
        return null
    }

}

export async function getLatestNews(count, category) {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            count: count,
            category: category
        })

    }

    try {
        const response = await fetch(`${HOST_BACKEND}/getLatestNews`, options);
        const responseBody = await response.json();

        if(responseBody.error) {
            return null
        }
        if(responseBody.latestNews) {
            return responseBody.latestNews;
        }
    }
    catch(error) {
        return null;
    }
}


export async function getSettings() {

    const options = { 
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const response = await fetch(`${HOST_BACKEND}/getSettingsFE`, options);
        const responseBody = await response.json();

        if(responseBody.error) {
            return null;
        }
        if(responseBody.settingsMsg) {
            return responseBody.settingsMsg;
        }
        return null
    }
    catch (error) {
        return null;
    }
}


export async function getWeather(location) {

    const options = { 
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const response = await fetch(`${HOST_BACKEND}/weather/${location}`, options);
        const responseBody = await response.json();
    
        if(responseBody.error) {
            return null;
        }
        if(responseBody.weatherMsg) {
            return responseBody.weatherMsg;
        }
        return null
    }
    catch (error) {
        return null;
    }
}
