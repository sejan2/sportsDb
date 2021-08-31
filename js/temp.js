const searchTemp = () => {
    const searchTemp = document.getElementById('search-temp');
    searchText = searchTemp.value;
    console.log(searchText);
    searchTemp.value = ''

    // load data

    const url = `https://api.openweathermap.org/data/2.5/box/city?bbox=${searchText}&appid=${b7889962aa67c781ca66163cb1cc2442}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}