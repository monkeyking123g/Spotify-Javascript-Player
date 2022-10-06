$(document).ready(function(){  
   const onclickTreks = async function () {
    const token = await getToken();
    linkTracksSpotify = this.getElementsByTagName('a')
    const tracks = await getTracks(token, linkTracksSpotify[0].href) 
    $("#contents").empty()
    $("#contents").append(`
        <div class="playlist">
            <div class="container-playlist">    
                <span class="playlist-name">${$(this).find('span').text()}</span>
                <div class="playlist-content">
                    <div class="playlist-item">
                        <ul>
                            
                        </ul>
                    </div>
                </div>
            </div>        
        </div>
        `)
    let  i = 0
    const titlePlaylist = $(this).find('span').text()
    tracks.forEach(async(el) => {
        const track = await getTrack(token, el.track.href);
        track.album.images[2].url
        if(el.track.preview_url == null){
             console.log('nou track url bro')
        }else {
            const minuteTrack = convertMsToMinutesSeconds((track.duration_ms)) 
            $('.playlist-item ul').append(`
            <li>
            <div class="li-cov-icon"><img class="playlist-cover" src="${track.album.images[2].url}" alt="">
                <i id="${i}" class="fa fa-play play-icon">
                    <a href="${el.track.preview_url}"></a>
                    <audio controls="controls" id="${track.id}">
                        <source src="${el.track.preview_url}" type="audio/mpeg"/>
                    </audio>  
                </i>
            </div>
            <span>${el.track.name}</span>
            <!--<span>${track.album.name}</span> -->
            <span class="minute-track">${minuteTrack}</span>
            <span style="display: none;">${titlePlaylist}</span>
            </li>
            `)
            document.getElementById(i).onclick = onClickPlayGenres
            i += 1
        }
    })
  }
  const onClick =  async function() {
    const token = await getToken();
    
    $("#genres").empty()
    const playlist = await getPlaylistByGenre(token, this.id);
 
    playlist.forEach(element => {
        $('#genres').append(`
          <div class="main-item" id="${element.id}">
              <img src="${element.images[0].url}" alt="Rock">
              <span>${element.name}</span>
              <a id="tracksLink" href="${element.tracks.href}"></a>
          </div>
          `)
        document.getElementById(element.id).onclick = onclickTreks

    }) 

  }
 const loadGenres = async() => {
     //Get token
     const token = await getToken();           
     const genres = await getGenres(token);
     //populate our genres select element
     genres.forEach(element => {
         console.log(element.id)
         $('#genres').append(`
            <div class="genre" id="${element.id}">
                <img src="${element.icons[0].url}" alt="${element.name}">
                <span>${element.name}</span>
            </div>
       `)
       document.getElementById(`${element.id}`).onclick = onClick;
    });
  }
  loadGenres();
    
});
