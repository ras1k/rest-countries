const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = (countries) =>{
    const countryHtml = countries.map(country => getCountryHtml(country))
    // console.log(countryHtml[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countryHtml.join(' ') ;
}
const getCountryHtml = (country) =>{
    return`
    <div class ="country">
        <h2>${country.name.common}</h2>    
        <img src="${country.flags.png}">
    </div>`
}
loadCountries()