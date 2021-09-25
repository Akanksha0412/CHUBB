$(window).on("load",function(){
   $(".loader-wrapper").fadeOut("slow");
});
const container=document.querySelector(".container-fluid");
console.log(container);
const card=document.querySelector(".card");
var create=function(){

  fetch("https://restcountries.com/v3/all")
  .then(function(data){

    return data.json();
  })
  .then(function(countries){
    var rows=Math.floor(countries.length/3);
    console.log(rows);
    var c=0;
    console.log(countries);
    for(var i=0;i<rows;i++)
    {
      var row=document.createElement('div');
      row.className="row justify-content-center m-5";
      container.appendChild(row);
      for(var j=0;j<3;j++)
      {
        // console.log(c);
        // console.log(countries[c].name.common);
        var capital=countries[c].capital;
        if(!capital){
          capital="None";
        }
        var cardHTML=`<div class="col-lg-4 col-sm-12"><div class="d-flex justify-content-center"><div class="card shadows text-center"><p id=`+c+` class="card-header">`+countries[c].name.common+`</p><div class="d-flex justify-content-center color-grey p-3 mt-3 w-75 shadows ml-auto mr-auto"><img class="card-img-top w-75" src="`+countries[c].flags[0]+`" alt="flags"></div><div class="card-body"><p><span class="heading">Capital-</span> `+capital+`</p><p><span class="heading">Region-</span> `+countries[c].region+`</p><p><span class="heading">Country Code-</span> `+countries[c].altSpellings[0]+`</p><a href="#" class="btn btn-primary">Weather</a></div></div></div></div>`;
        row.innerHTML+=cardHTML;
        c++;

      }
    }
  })
}



// var create=function(){
//   var country=fetch("https://restcountries.com/v3/all");
//   var weather=fetch("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=7efabb514883dd5b2b8b5d8fc318dec0");
//   var cardHTML='<div class="col-lg-4 col-sm-12"><div class="d-flex justify-content-center"><div class="card shadows text-center"><p class="card-header"></p><div class="d-flex justify-content-center color-grey p-3 mt-3 w-75 shadows ml-auto mr-auto"><img class="card-img-top w-75" src="" alt=""></div><div class="card-body"><p>capital</p><a href="#" class="btn btn-primary">Weather</a></div></div></div></div>';
//   var i=0;
//   Promise.all([country,weather])
//   .then(function(response){
//     return response[0].json()
//   })
//   .then(function(country){
//     var i=0;
//         var row=document.createElement('div');
//         row.className="row justify-content-center m-5";
//         if(i%3==0)
//         container.appendChild(row);
//         i++;
//         for(var j=0;j<3;j++)
//         {
//           row.innerHTML+
//           document.querySelector(".card-header").setAttribute("id",data.name.common);
//           var header=document.getElementById(data.name.common);
//           header.appendChild(newtext);
//         }
//
//   // var countrydata=response[0].json();
//   // console.log(countrydata);
//   //
//   // // countrydata.forEach(function(country){
//   // //   console.log(country.name.common);
//   // // })
//
//
// }
create();
