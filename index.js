
const menuBtn = document.querySelector('.menu-btn');
const menuVerticaliOpen = document.getElementById("navbar-width");
const displayText = document.querySelectorAll('.link-text');
const optionMenu = document.querySelector('.content-option')
const contOption = document.querySelector('.nav-link-last')
const optionButton = document.querySelector('.option-btn')
const optionMobile = document.querySelector('.option-content-mobile')

let clickOptionMenu = false
let keyMenu = sessionStorage.getItem("menuKey");

//Spotify Credensial
const CLIENT_ID = '51236b5451a244338d05226506161860';
const CLIENT_SECRET = '52fd577c48f74e1fb65a08cd4a7132c5';

// defult page from app
if (keyMenu == null){
    sessionStorage.setItem('menuKey', 'genres');
    keyMenu = sessionStorage.getItem("menuKey");
}
const parent = document.getElementById('main');
const cardRotate = document.querySelector('.thecard')

$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'html/' + $(this).data('include') + '.html'
        $(this).load(file)
        })
});

// function strToElem(optionMenu){
//     // var temp = '<p> An absolute URL : <a href="'+ link + '">'+text+'</a></p>';
//     // var option = '<div data-include="'+optionMenu+'">Fuck</div>'
//     var option = '<div id="DivContent">'
//     var div = document.createElement("div");
//     div.innerHTML = option;
//     console.log(div.childNodes[0])
//     return div.childNodes[0];
//   }

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        // optionMenu.classList.add('option-open');
        //clickOptionMenu = false
        menuVerticaliOpen.style.width = '16rem';
        // displayText.classList.add('link-text-visible')
        for (var i = 0; i < displayText.length; ++i) {
            displayText[i].classList.add('link-text-visible');
         }
        //displayText.forEach(element => element.style.display = 'inline');
        // displayText.forEach(element => element.style.opacity = 1,element.style.visibility = 'visible');
        menuOpen = true
} else {
        menuBtn.classList.remove('open');
        optionMenu.classList.remove('option-open')
        menuVerticaliOpen.style.width = '5rem';
        // displayText.forEach(element => element.style.display = 'none');
        for (var i = 0; i < displayText.length; ++i) {
            displayText[i].classList.remove('link-text-visible');
         }
        menuOpen = false;
    }
});


$('#option').click(function(){
    let width = screen.width;
    if(!clickOptionMenu){
        optionButton.classList.remove('rotate-option-clouse')
        optionButton.classList.add('rotate-option')
        clickOptionMenu = true
        if(menuOpen){
            optionMenu.classList.add('option-open');
            optionButton.classList.remove('rotate-option-clouse')
            optionButton.classList.add('rotate-option')
            // contOption.classList.add('aaa')
            clickOptionMenu = true
        }
        if(width < 700){
            console.log(width)
            optionMobile.classList.add('option-open-mobile');
        } 
    }else {
        // contOption.classList.remove('aaa')
        optionButton.classList.remove('rotate-option')
        optionButton.classList.add('rotate-option-clouse')
        clickOptionMenu = false
        if(menuOpen){
            optionMenu.classList.remove('option-open');  
            // contOption.classList.remove('aaa')
        }
        if(width < 700){
            optionMobile.classList.remove('option-open-mobile');
        }
    } 
});
// Defult value menu 'genres'
 $.ajax({
     url: `./html/${keyMenu}.html`,
     success: function(html) {
        $("#contents").append(html);
     }
});
let clickMenu = {
    clickAlbum : false,
    clickTrack : false,
    clickPlaylist : false,
    clickGenre : false,
 }
// click form mobile version
$('#genresFormMobile').click(function(){
    sessionStorage.setItem('menuKey', 'genresForm')
    $('#contents').empty()
    $.ajax({
        url: './html/genresForm.html',
        success: function(html) {
            $("#contents").append(html)
        }
    })
});

$('#playlistFormMobile').click(function(){
    sessionStorage.setItem('menuKey', 'playlistForm')
    $('#contents').empty()
    $.ajax({
        url: './html/playlistForm.html',
        success: function(html) {
            $("#contents").append(html)
        }
    })
});
$('#albumFormMobile').click(function(){
    sessionStorage.setItem('menuKey', 'albumForm')
    $('#contents').empty()
    $.ajax({
        url: './html/albumForm.html',
        success: function(html) {
            $("#contents").append(html)
        }
    })
});

$('#trackFormMobile').click(function(){
    
        $("#contents").empty()
        sessionStorage.setItem('menuKey', 'trackForm');
        $.ajax({
            url: './html/trackForm.html',
            success: function(html) {
               $("#contents").append(html);
            }
         });
});

// click form window version
$('#genresForm').click(function(){
    sessionStorage.setItem('menuKey', 'genresForm')
    $('#contents').empty()
    $.ajax({
        url: './html/genresForm.html',
        success: function(html) {
            $("#contents").append(html)
        }
    })
});

$('#playlistForm').click(function(){
    sessionStorage.setItem('menuKey', 'playlistForm')
    $('#contents').empty()
    $.ajax({
        url: './html/playlistForm.html',
        success: function(html) {
            $("#contents").append(html)
        }
    })
});
$('#albumForm').click(function(){
    sessionStorage.setItem('menuKey', 'albumForm')
    $('#contents').empty()
    $.ajax({
        url: './html/albumForm.html',
        success: function(html) {
            $("#contents").append(html)
        }
    })
});

$('#trackForm').click(function(){
    
        $("#contents").empty()
        sessionStorage.setItem('menuKey', 'trackForm');
        $.ajax({
            url: './html/trackForm.html',
            success: function(html) {
               $("#contents").append(html);
            }
         });
});

$('#album').click(function(){
    //if(!clickMenu.clickAlbum){
        $("#contents").empty()
        sessionStorage.setItem('menuKey', 'album');
        $.ajax({
            url: './html/album.html',
            success: function(html) {
               $("#contents").append(html);
            }
         });
        //  clickMenu.clickAlbum = true
        //  clickMenu.clickTrack = false
        //  clickMenu.clickPlaylist = false
    //}else console.log("pass")
    
});
$('#track').click(function(){
    sessionStorage.setItem('menuKey', 'track');
    //if(!clickMenu.clickTrack){
        $("#contents").empty()
        lastMenuKey = 'track'
        $.ajax({
        url: './html/track.html',
        success: function(html) {
            $("#contents").append(html);
        }
    });
    // clickMenu.clickTrack = true
    // clickMenu.clickAlbum = false
    // clickMenu.clickPlaylist = false
    //}else console.log("pass")
});
$('#playlist').click(function(){
    sessionStorage.setItem('menuKey', 'playlist');
    //if(!clickMenu.clickPlaylist){
        $("#contents").empty()
        lastMenuKey = 'playlist'
        $.ajax({
        url: './html/playlist.html',
        success: function(html) {
            $("#contents").append(html);
            }
        });
        // clickMenu.clickPlaylist = true
        // clickMenu.clickTrack = false
        // clickMenu.clickAlbum = false
   //}else{console.log('pass')}
});
$('#genre').click(function(){
    sessionStorage.setItem('menuKey', 'genres');
    //if(!clickMenu.clickGenre){
    $("#contents").empty()
        
    $.ajax({
      url: './html/genres.html',
      success: function(html) {
         $("#contents").append(html);
      }
   });
    
});

function previewFile(input){
    var file = $("input[type=file]").get(0).files[0];

    if(file){
      var reader = new FileReader();

      reader.onload = function(){
          $("#previewImg").attr("src", reader.result);
      }

      reader.readAsDataURL(file);
      let x = document.getElementById('previewImg')
      x.style.width = '100px'
      x.style.height = '100px'
    }
}
const onClickPlayTrack = function() {
    // translate a player track name
    const trackName = this.getAttribute('name')
    textScroll = document.getElementById('scroll-text')
    textScroll.innerHTML = `${trackName}`
    
    
    if (this.getAttribute('src') == document.getElementById('source').src){
      console.log('[PASS]')
    }else {
      const sourceSrc  = document.getElementById('source').src = this.getAttribute('src')
      $("#audio").trigger('load');
      const lis = $(".play").find('i')
       // rename all pause button in play.
       lis.each(element => {
         lis[element].className = 'fa fa-play play-icon'
     })

    }
     if(this.className == "fa fa-play play-icon"){
               this.className = 'fa fa-pause play-icon'
               $("#audio").trigger('play');
 
     }else{
           this.className = 'fa fa-play play-icon'
           $("#audio").trigger('pause');
           $("#audio").prop("currentTime", audio.currentTime);
          
    }
 }

searchTracks = async function (input) {
    const token = await getToken()
    const result = await getSearch(token, input, "track")
   // console.log(result)
    $("#contents").empty()
    $("#contents").append("<div id='track-main'></div>")
    let i = 0
    result.tracks.items.forEach(element => {
        if(element.preview_url == null){
            console.log('nou track url bro')
       }else {
           
           $('#track-main').append(`
           <div id="container-track">
                 <div class="card">
                   <img src="${element.album.images[1].url}" alt="Lago di Braies">
             
                   <div class="card__details">
             
                     <span class="tag">${element.name}</span>
             
                     <!--<span class="tag">${element.album.name}</span> -->
             
                     <ul>
                         <button class="play"><i name="${element.name}" src="${element.preview_url}" id="${element.id}" class="fa fa-play play-icon"></i></button>
                         <button class="like"><i id="like_${element.id}" class="fa fa-heart"></i></button>
                     </ul>
                   </div>
                 </div>
               </div>  
         </div>
         `)
         document.getElementById(element.id).onclick =  onClickPlayTrack
         i += 1
       }
    
        
    });
}

    //return result

$('#search_tracks').click(function () {
    console.log("Clicked")
    const input = document.querySelector('#search').value;
    console.log(input)
    const tracks = searchTracks(input)
    // tracks.forEach(element => {
    //     console.log(element + "Yes i'm find tracks")
        
    // });
    //console.log(tracks + "Yes i'm find tracks")
    
    // if (input == ""){
    //   console.log("[PASS]")
    // }else{
    //   loadAlbum(input)
      //$('#searchUser').val('');
    //}
})
// Spotify API 
const getToken = async () => {
 
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
           'Authorization' : 'Basic ' + btoa( CLIENT_ID + ':' + CLIENT_SECRET)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
}
const getTracks = async (token, tracksEndPoint) => {

  const limit = 20;

  const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
    method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
});

  const data = await result.json();
  return data.items;
};

const getTrack = async (token, trackEndPoint) => {

  const result = await fetch(`${trackEndPoint}`, {
      method: 'GET',
    headers: { 'Authorization' : 'Bearer ' + token}
  });

  const data = await result.json();
  return data;
};

const getGenres = async (token) => {
 
    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
         method: 'GET',
         headers: { 'Authorization' : 'Bearer ' + token}
     });

     const data = await result.json();
    return data.categories.items;
 }

 const getPlaylistByGenre = async (token, genreId) => {

     const limit = 10;
    
     const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
         method: 'GET',
         headers: { 'Authorization' : 'Bearer ' + token}
     });

     const data = await result.json();
     return data.playlists.items;
    
 };

 const getAlbum = async (token) => {

    const limit = 10;
   
    const result = await fetch(`https://api.spotify.com/v1/albums`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    console.log(data)
    return data.items;
   
};

const getSearch = async (token, searchInput, type) => {
    const result = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=${type}`, {
        //dfd = "artist%2Calbum"
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    console.log(data)
    return data;
   
};

// trasform ms in minute Digists
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
function convertMsToMinutesSeconds(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.round((milliseconds % 60000) / 1000);
  
    return seconds === 60
      ? `${padTo2Digits(minutes + 1)}:00`
      : `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  }








