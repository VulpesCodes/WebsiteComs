function loadArt(e) {
  var apiEndpointBaseURL = "https://api.harvardartmuseums.org/image";
  var myAPI = "4b640370-568b-11ea-a094-0932e3838ded"
  let randomImage = Math.floor(Math.random()*100)
  var finalURL = apiEndpointBaseURL + "?sort=random" + "&apikey=" + myAPI
  console.log(finalURL)


  fetch(finalURL)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      for (var recordNum = 0; recordNum<10; recordNum++ ) {
        base = document.getElementsByClassName("imageGrid")
        item = document.createElement('item');
        item.className = "item";
        img = document.createElement('img');
        img.src = json.records[recordNum].baseimageurl
        base[0].appendChild(item)
        grey = document.createElement('div');
        grey.className = "greyBar";
        grey.innerHTML = "<p>Image Number " +json.records[recordNum].imageid+ "</p>"
        absolute = document.createElement('absolute');
        absolute.className = "absolute";
        item.appendChild(img)
        item.appendChild(absolute)
        absolute.appendChild(grey)
        item.addEventListener("mouseenter", function(event) {
          event.target.childNodes[1].childNodes[0].style.visibility = "visible";
        })
        item.addEventListener("mouseleave", function(event) {
          event.target.childNodes[1].childNodes[0].style.visibility = "hidden";
        })
      }
    });
};
loadArt();
loadArt();
loadArt();
loadArt();
