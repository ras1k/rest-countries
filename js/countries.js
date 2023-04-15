const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = (countries) =>{
    console.log(countries)
    const countryHtml = countries.map(country => getCountryHtml(country))
    // console.log(countryHtml);
    const container = document.getElementById('countries');
    container.innerHTML = countryHtml.join(' ') ;
}

//original
// const getCountryHtml = (country) =>{
//     return`
//     <div class ="country">
//         <h2>${country.name.common}</h2>    
//         <img src="${country.flags.png}">
//     </div>`
// }

//option 1
// const getCountryHtml = (country) =>{
//     const {name, flags} = country;
//     return`
//     <div class ="country">
//         <h2>${name.common}</h2>    
//         <img src="${flags.png}">
//     </div>`
// }

//option 2
const getCountryHtml = ({name, flags, area, region}) =>{
    return`
    <div class ="country">
        <h2>${name.common}</h2>    
        <p>Area : ${area}</p>
        <p>Continent : ${region}</p>
        <img src="${flags.png}">
    </div>`
}

loadCountries()