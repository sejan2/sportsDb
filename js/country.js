const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayConntries(data))
}
loadCountries();
const displayConntries = (countries) => {
    const countriesDiv = document.getElementById('countries');
    // for (const country of countries) {
    //     console.log(country);
    // }
    countries.forEach(country => {
        // console.log(country)
        const creDiv = document.createElement('div');
        creDiv.classList.add('country');
        creDiv.innerHTML = `
<h4>${country.name} </h4>
<p> ${country.capital}</p>
<button onclick="loadCountryBYName('${country.name}')">Details</button> `

        // const creh4 = document.createElement('h4');
        // creh4.innerText = country.name;
        // creDiv.appendChild(creh4);
        // const crep = document.createElement('p');
        // crep.innerText = country.capital;
        // creDiv.appendChild(crep);
        countriesDiv.appendChild(creDiv);
    })
}
const loadCountryBYName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDEtail(data[0]))
}
const displayCountryDEtail = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h5>${country.name} </h5>
    <p> ${country.population}</p>
    <img width="200px" src="${country.flag}">`

}