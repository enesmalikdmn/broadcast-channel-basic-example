const getTop100Film = async () => {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const key = '26eadefb01msh96b008f63cb47e7p126028jsna52241e7ce82';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
            'x-rapidapi-key': key
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

export const filmListService = {
    getTop100Film
};