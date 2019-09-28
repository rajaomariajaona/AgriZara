var map =
{
"diana" : "",
"sava" : "Capitale mondiale de la vanille <br/> C’est à Bemarivo (district de Sambava) qu’est située la plus grande zone de production de gousses de vanille avec une production annuelle évaluée à 800 tonnes, essentiellement destinée à l’exportation.",
"sofia" : "",
"analajirofo" : "",
"boeny" : "",
"betsiboka" : "",
"alaotra-Mangoro" : "",
"atsinanana" : "",
"melaky" : "",
"bongolava" : "",
"analamanga" : "test1",
"itasy" : "test2",
"menabe" : "",
"vakinakaratra" : "",
"vatovavy-fitovinany" : "",
"amoron-i-mania" : "",
"haute-matsiatra" : "",
"atsimo-andrefana" : "",
"ihorombe" : "",
"atsimo-atsinanana" : "",
"anosy" : "",
"androy" : ""
}

const format = (phrase) => {
    if(phrase !== "amoron-i-mania"){
        return phrase
      .toLowerCase()
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    }else{
        return "Amoron'i Mania"
    }
    
  };

  $('#map-region-name').html('Sava')
  $('#map-region-text').html(map['sava'])
var regions = document.getElementsByClassName('map-region');
Array.prototype.forEach.call(regions, function(el) {
    el.addEventListener('click', (event) => {
        $(regions).removeClass('active')
        var target = event.currentTarget
        $('#map-region-name').html(format(target.id))
        $('#map-region-text').html(map[target.id])
        $(target).addClass('active');
    })
});
