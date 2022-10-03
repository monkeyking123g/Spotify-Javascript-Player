//import {APIContr} from './apiSpotify';

$(document).ready(function(){
    //const selectGenres = document.querySelector('#select_genre');
    const selectGenres = document.querySelector('#slct');
    //console.log(selectGenres)
    
    const loadGenres = async () => {
        //get the token
        const token = await getToken();   
             
        //store the token onto the page
        //UICtrl.storeToken(token);
        //get the genres
        const genres = await getGenres(token);
        console.log(genres)
        //populate our genres select element
       
        genres.forEach(element => {
            //const html = `<option class="option-genre" value="${element.id}">${element.name}</option>`;
            const html = `<option value="${element.id}">${element.name}</option>`;

            selectGenres.insertAdjacentHTML('beforeend', html);
            //$('#slct').append(html)
            //selectGenres.insertAdjacentHTML('required', html)
            //console.log(element.id)
        
            //document.getElementById(element.id).onclick = onclickTreks 
        });
       
    }
    loadGenres()
    selectGenres.addEventListener('change', async () => {
        token = await getToken();
        const genreId = selectGenres.options[selectGenres.selectedIndex].value; 
        console.log(genreId)
        const playlist = await getPlaylistByGenre(token, genreId);
        console.log(playlist)
        $('#playlist-main').empty()
        playlist.forEach(element => {
            
            $('#playlist-main').append(`
             <div class="main-item" id="${element.id}">
                 <img src="${element.images[0].url}" alt="${element.name}">
                 <span>${element.name}</span>
                 <a id="tracksLink" href="${element.tracks.href}"></a>
             </div>
             `);
             document.getElementById(element.id).onclick = onclickTreks 
            //  $('#genres').append(`
            //  <div class="main-item" id="${element.id}">
            //      <img src="${element.images[0].url}" alt="Rock">
            //      <span>${element.name}</span>
            //      <a id="tracksLink" href="${element.tracks.href}"></a>
            //  </div>
            //  `)
        })
        //reset the playlist
        //UICtrl.resetPlaylist();
        //get the token that's stored on the page
        //const token = UICtrl.getStoredToken().token;        
        // get the genre select field
        //const genreSelect = UICtrl.inputField().genre;       
        // get the genre id associated with the selected genre
        //const genreId = genreSelect.options[genreSelect.selectedIndex].value;             
        // ge the playlist based on a genre
        //const playlist = await APICtrl.getPlaylistByGenre(token, genreId);       
        // create a playlist list item for every playlist returned
        //playlist.forEach(p => UICtrl.createPlaylist(p.name, p.tracks.href));
    });

   

   
     const onClickPlay = function() {
        const trackName = $(this).parents('li').find("span")[0].innerHTML
        const playlistName = $(this).parents('li').find("span")[2].innerHTML

        const linkTracksSpotify = this.getElementsByTagName('a')
        const idTrack = this.getElementsByTagName('audio')[0].id
        
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
            console.log(track) 
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