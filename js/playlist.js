$(document).ready(function(){
    const selectGenres = document.querySelector('#slct');
    // const playlistMain = document.getElementById('playlist-main')
    // playlistMain.style.justifyContent = 'center'
    const loadGenres = async () => {
        //get the token
        const token = await getToken();   
        //get the genres
        const genres = await getGenres(token);
        genres.forEach(element => {
            const html = `<option value="${element.id}">${element.name}</option>`;
            selectGenres.insertAdjacentHTML('beforeend', html);
        });
       
    }
    loadGenres()
    selectGenres.addEventListener('change', async () => {
        // Check select genres and found playlist from genres
        token = await getToken();
        const genreId = selectGenres.options[selectGenres.selectedIndex].value; 
        const playlist = await getPlaylistByGenre(token, genreId);
        // playlistMain.style.justifyContent = 'flex-start'
       
        $('#contents').empty()
        $('#contents').append('<div id="playlist-main"></div>')
        playlist.forEach(element => {
            $('#playlist-main').append(` 
             <div class="main-item" id="${element.id}">
                 <img src="${element.images[0].url}" alt="${element.name}">
                 <span>${element.name}</span>
                 <a id="tracksLink" href="${element.tracks.href}"></a>
             </div>
             `);
             document.getElementById(element.id).onclick = onclickTreks 
        })
       
    });
     const onClickPlay = function() {
        // Play track and translate name track a scroll text
        const trackName = $(this).parents('li').find("span")[0].innerHTML
        const playlistName = $(this).parents('li').find("span")[2].innerHTML

        const linkTracksSpotify = this.getElementsByTagName('a')
        //const idTrack = this.getElementsByTagName('audio')[0].id
        const track = linkTracksSpotify[0].href

        textScroll = document.getElementById('scroll-text')
        textScroll.innerHTML = `${trackName}<br>${playlistName}`
    
    
        if (track == document.getElementById('source').src){
            console.log('[OK]')
        }else{
            const sourceSrc  = document.getElementById('source').src = track
            $("#audio").trigger('load');
            const lis = $(".playlist-item").find('ul').children()
            console.log(lis)
            lis.each(element => {
                console.log(lis[element])
                lis[element].getElementsByTagName('i')[0].classList.value = 'fa fa-play play-icon'
            })
        }
      
        if(this.className == 'fa fa-play play-icon'){
                    this.className = 'fa fa-pause play-icon'
                    $("#audio").trigger('play');
        }else{
                this.className = 'fa fa-play play-icon'
                $("#audio").trigger('pause');
                $("#audio").prop("currentTime", audio.currentTime);
        }
    }
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
            //console.log(el.track.href + el.track.preview_url + el.track.name)
            const track = await getTrack(token, el.track.href);
            track.album.images[2].url
            // console.log(track) 
            if(el.track.preview_url == null){
                 console.log('404 not found element track preview url !')
            }else {
                const minuteTrack = convertMsToMinutesSeconds((track.duration_ms))
                console.log(minuteTrack)
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
                <span>${minuteTrack}</span>
                <span style="display: none;">${titlePlaylist}</span>
                </li>
                `)
                document.getElementById(i).onclick = onClickPlay
                i += 1
            } 
        }) 
    }   
})