export const getGifs = async(category) =>{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=3swBP3om8YPH44Bs1Vf1HLPDRAzWhQVs&q=${category}&limit=10`
        const res = await fetch(url);
        const {data} = await res.json();

        const gif = data.map(img =>{
            return ({
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            })
        })

        return gif;
    }