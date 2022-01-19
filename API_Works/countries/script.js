function fetchData(){
    let countryName=country_name.value

    fetch(`https://restcountries.commm/v2/name/${countryName}?fullText=true`).
    then(res=>res.json()).then(data=>populateValues(data))
}

function populateValues(country){
    let countryName=country[0].name
    let countryFlag=country[0].flag;
    let countryPopulation=country[0].population;
    let countryCurrency=country[0].currencies[0].name
    let currencySymbol=country[0].currencies[0].symbol

    let html_data=`
    <div class="card" style="width: 18rem;">
  <img src="${countryFlag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">countryName:${countryName}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Population:${countryPopulation}</li>
    <li class="list-group-item">Currency Name:${countryCurrency}</li>
    <li class="list-group-item">Currency Symbol:${currencySymbol}</li>
  </ul>
</div>
    `
    document.querySelector("#result").innerHTML=html_data
}