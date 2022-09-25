// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '83f3c853afmsh9f31650c1456db4p1d6c12jsn2d69b3378ad8',
// 		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
// 	}
// };

// fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api').then((data)=>{
//     return data.json();
// })
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

   const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '83f3c853afmsh9f31650c1456db4p1d6c12jsn2d69b3378ad8',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options).then((data)=>{
        return data.json();
     }).then((objectData)=>{
        console.log(objectData);
        
    let tableData="";
    objectData.countries_stat.map((covidData)=>{
       return tableData+= `  <tr>
        <td>${covidData.country_name}</td>
         <td>${covidData.active_cases}</td>
         <td>${covidData.cases}</td>
        <td>${covidData.deaths}</td>
        <td>${covidData.new_cases}</td>
        <td>${covidData.new_deaths}</td>
        <td>${covidData.total_recovered}</td>
        <td>${covidData.total_tests}</td>
      </tr>`;
    });
    document.getElementById("table").innerHTML = tableData;
})
