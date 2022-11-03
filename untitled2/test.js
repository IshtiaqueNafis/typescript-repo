async function getData(){
    let response= await fetch('https://api.unsplash.com/search/photos?page=2&query=person&client_id=00ipIxlAaPXXmGDK3LU3hz34G7M1qkf1_gqWPx9N2LQ');
    let data = await response.json();
    return data;
}

getData().then(data=>console.log(data.results.map(r=>r.urls.small)))