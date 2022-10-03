$(document).ready(function(){
    
    $("form").submit(function (event) {
        // message = document.querySelector('.autosave-message')
        // const SAVING_MESSAGE = 'Saving...';
        // const SAVED_MESSAGE = 'All changes saved.';
        var formData = {
          genresName: $("#genreName").val(),
          image: $('#file-input').val(),
        };
        // message.classList.add('autosave-message-saving');
        // message.textContent = SAVING_MESSAGE;
        
        console.log(formData)

        event.preventDefault();
    })

    
  const onClickPlay = function() {
    // console.log($(this).find('audio').html())
    //console.log(this['audio'])
    //onst aud = $(this).find('audio').html()
    console.log($(this))
    //aud.play()
     //console.log(audio)
    //var a = document.createElement('audio');
   //audioElement.setAttribute("src", );
    
     
    // get data track name and playlist name  
    const trackName = $(this).parents('li').find("span")[0].innerHTML
    const playlistName = $(this).parents('li').find("span")[2].innerHTML
    //console.log($(this).parents('li').find("span")[0].innerHTML + "[########]" + $(this).parents('li').find("span")[1].innerHTML)

    const linkTracksSpotify = this.getElementsByTagName('a')
    const idTrack = this.getElementsByTagName('audio')[0].id
    console.log(idTrack)
    //udio.trigger('load');
  
  
   // document.getElementById('dima').play()

    const track = linkTracksSpotify[0].href
    //audioElement.setAttribute("src", track);
    //const ts  = document.getElementById('source').src = track
    textScroll = document.getElementById('scroll-text')
    //console.log(this)
    console.log(textScroll.innerHTML)
    textScroll.innerHTML = `${trackName}<br>${playlistName}`
    
    console.log(audioElement)
    if (track == document.getElementById('source').src){
        console.log('pass ###[OK]')
        // if(document.getElementById('source').src == 'http://127.0.0.1:5500/null'){
        //     console.log('Sory trak not faund')
        //     this.className = 'fa fa-pause play-icon'
        //     $(this).parents('li').find("span")[0].innerHTML =  "Sory trak not faund 404 ):"
            
        // }
       
    }else{
        const sourceSrc  = document.getElementById('source').src = track
      
        // if(sourceSrc == 'http://127.0.0.1:5500/null'){
        //     console.log('Sory trak not faund')
        //     this.className = 'fa fa-pause play-icon'
        //     $(this).parents('li').find("span")[0].innerHTML =  "Sory trak not faund 404 ):"
           
        // }else{
        $("#audio").trigger('load');
        //}
        const lis = $(".playlist-item").find('ul').children()
        console.log(lis)
        lis.each(element => {
             console.log(lis[element])
             lis[element].getElementsByTagName('i')[0].classList.value = 'fa fa-play play-icon'
        })
       
        // for(var i  in lis){
        //     console.log(i)
        // }
    }
    //$("#audio").trigger('load');
    //console.log($("#audio").trigger('load'))
   // window.AudioContext.createMediaElementSource(audioElement);
    //audioElement.play()
    //audio.src = track
    //a.src = track
    //console.log(a.src)
    //console.log(track)
    //const audioElement = document.getElementById('audio')
    //audioElement.src = track
    //console.log(audioElement.src)
    // if (audioCheck.isNotExsist){
    //     var audio = new Audio(track)
    //     audioCheck.isNotExsist = false
    // } else {
    //     console.log('pass')
    // }
    // //const audio = new Audio(track)
    
    // if (audio.duration > 0 && !audio.paused) {

    //     console.log('play')

    // } else {

    //     console.log('not play')

    // }

    //console.log(audio.src)
      
   // audioElement.src = track

    // this.className = 'fa fa-pause play-icon'
    //const audio = new Audio(track);
    if(this.className == 'fa fa-play play-icon'){
              this.className = 'fa fa-pause play-icon'
              $("#audio").trigger('play');
              //document.getElementById(idTrack).play()
              //audioElement.play()
             
              //document.getElementById('audio').play()
            //   var isPlaying = audio.currentTime > 0 && !audio.paused && !audio.ended 
            //                 && audio.readyState > audio.HAVE_CURRENT_DATA;

            //         if (!isPlaying) {
            //             audio.play();
            //             }
              //audio.play()
              //audio.play();
    }else{
          this.className = 'fa fa-play play-icon'
          $("#audio").trigger('pause');
          $("#audio").prop("currentTime", audio.currentTime);
          //document.getElementById('audio').pause()
          //document.getElementById(idTrack).pause()
          //audio.pause();
          //audioElement.pause()
    }
    
  }
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

   const onclickTreks = async function () {
    const token = await getToken();
    
    linkTracksSpotify = this.getElementsByTagName('a')
    const tracks = await getTracks(token, linkTracksSpotify[0].href)
    console.log(linkTracksSpotify[0].href + "  [+++++++++++++]")
    //console.log(tracks)
    //console.log($(this).find('span').text())
    //onsole.log(this['name'] + "tyt")

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
    const ttt = $(this).find('span').text()
    tracks.forEach(async(el) => {
        //console.log(el.track.href + el.track.preview_url + el.track.name)
        const track = await getTrack(token, el.track.href);
        track.album.images[2].url
        //console.log(track)
        //const minuteTrack = convertMsToMinutesSeconds((track.duration_ms)) 
        //console.log(el.track.preview_url)
        
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
            <span>${minuteTrack}</span>
            <span style="display: none;">${ttt}</span>
            </li>
            `)
            //document.getElementById(i).onclick = onClickPlay
            document.getElementById(i).onclick = onClickPlay

            i += 1

        }
        
      
    })
   
   }
  const onClick =  async function() {
    const token = await getToken();
    
    $("#genres").empty()
    const playlist = await getPlaylistByGenre(token, this.id);
 
    playlist.forEach(element => {
        //console.log(element)
        $('#genres').append(`
          <div class="main-item" id="${element.id}">
              <img src="${element.images[0].url}" alt="Rock">
              <span>${element.name}</span>
              <a id="tracksLink" href="${element.tracks.href}"></a>
          </div>
          `)
          //tracks = {
           // track : element.tracks.href
          //}
        //   tracks = element.tracks.href
        //   element.append(tracks)
        //console.log(element.tracks.href)
       document.getElementById(element.id).onclick = onclickTreks

    }) 
    //console.log(playlist)

  }
 const loadGenres = async() => {
     //get the token
     const token = await getToken();           
     //store the token onto the page
     //UICtrl.storeToken(token);
     //get the genres
     const genres = await getGenres(token);
     console.log(genres)
     //populate our genres select element
     genres.forEach(element => {
         console.log(element.id)
         $('#genres').append(`
       <div class="genre" id="${element.id}">
           <img src="${element.icons[0].url}" alt="${element.name}">
           <span>${element.name}</span>
       </div>
       `)
       document.getElementById(element.id).onclick = onClick
    });
  }
  loadGenres();
    
});
