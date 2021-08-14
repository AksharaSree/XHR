function getCountries() {
    const xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
    xhttp.send();
    xhttp.onload = function() {
        var countries = JSON.parse(this.responseText);
        //console.log(countries[0]);       

        // var countryShortInfo = countries.map(country => { 
        //     return { "name": country.name, "region": country.region, "subregion" :  country.subregion, "population":country.population };         
        // });
        // console.log(countryShortInfo);
        var countryWithMorePopulation = countries.filter(cn => cn.population > 100000000);
        console.log(countryWithMorePopulation);
    }
}
getCountries();
