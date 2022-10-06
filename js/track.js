
$(document).ready(function(){
  const playPauseButton = document.querySelector('.play-pause');

    const onClikLike = function() {
      let  like = document.getElementById(this.id)
      if(like.style.color == "rgb(0, 119, 255)"){
          like.style.color = 'red'
      } else{
          like.style.color = "#0077ff"
      }
  }
    
    const onclickTreks = async () => {
          const token = await getToken();
          const tracks = await getTracks(token, 'https://api.spotify.com/v1/playlists/37i9dQZF1DWWY64wDtewQt/tracks/');
          let  i = 0
          $('#track-main').empty()
          tracks.forEach(async(el) => {
              const track = await getTrack(token, el.track.href);
              if(el.track.preview_url == null){
                   console.log('404 not found element track preview url !')
              }else {
                  $('#track-main').append(`
                  <div id="container-track">
                        <div class="card">
                          <img src="${track.album.images[1].url}" alt="Lago di Braies">
                          <div class="card__details">
                            <span class="tag">${track.name}</span>
                            <!--<span class="tag">${track.album.name}</span> -->
                            <ul>
                                <button class="play"><i name="${track.name}" src="${el.track.preview_url}" id="${i}" class="fa fa-play play-icon"></i></button>
                                <button class="like"><i id="like${i}" class="fa fa-heart"></i></button>
                            </ul>
                          </div>
                        </div>
                      </div>  
                </div>
                `)
           
              document.getElementById(i).onclick = onClickPlayTrack;
              document.getElementById(`like${i}`).onclick = onClikLike;
              i += 1
            }
        })
      }
      onclickTreks();    
});