export const getGifs = async (category) => {
    
    const API_KEY = "KIJwaQO7n1XwFAJFgqkrYRtS1kjYsEzE";
    const BASE_URL = "https://api.giphy.com/v1/gifs/search";
    const URL = `${BASE_URL}?q=${encodeURI(category)}&limit=10&api_key=${API_KEY}`;


    const resp = await fetch(URL);
    const { data = [] } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
}