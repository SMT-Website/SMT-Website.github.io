
var lastImg = document.getElementById("first");

function enlarge(imgs) {
    var expandImg = document.getElementById("large");
    expandImg.src = imgs.src;
    imgs.style.opacity = 1;
    lastImg.style.opacity = 0.7;
    lastImg = imgs;
}

var button = document.getElementById('other-clients');

button.onclick = function() {
    var div = document.getElementById('otherClients');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

(document).ready(function() {
    
    $('.js-features').waypoint(function(dir) {
        if (dir == "down") {
            $('nav').addClass('sticky');
        } else {$('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
//   13.198205025572062, 80.17873437898226
  const uluru = { lat: 13.198, lng: 80.178 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}