
$(document).ready(function(){

    //   const onClickPlayTrack = function() {
    //     console.log(this);

    //     // translate a player track name
    //     const trackName = this.getAttribute('name')
    //     textScroll = document.getElementById('scroll-text')
    //     textScroll.innerHTML = `${trackName}`
        
        
    //     if (this.getAttribute('src') == document.getElementById('source').src){
    //       console.log('[PASS]')
    //     }else {
    //       const sourceSrc  = document.getElementById('source').src = this.getAttribute('src')
    //       $("#audio").trigger('load');
    //       const lis = $(".play").find('i')
    //       //console.log(lis)
    //       lis.each(element => {
    //          console.log(lis[element].className = 'fa fa-play play-icon')
    //         // lis[element].getElementsByTagName('i')[0].classList.value = 'fa fa-play play-icon'
    //         //lis[element][0].classList.value = 'fa fa-play play-icon'
    //         lis[element].className = 'fa fa-play play-icon'
    //     })

    //     }
       
         
    //      // this.className = 'fa fa-pause play-icon'
    //      if(this.className == "fa fa-play play-icon"){
    //                this.className = 'fa fa-pause play-icon'
    //                $("#audio").trigger('play');
    //                //clickPlay = true
    // //     //           audio.play();
    //      }else{
    //            this.className = 'fa fa-play play-icon'
    //            $("#audio").trigger('pause');
    //            $("#audio").prop("currentTime", audio.currentTime);
    //           // clickPlay = false
    // //       //    audio.pause();
    //     }
    //  }

     const onClikLike = function() {
      console.log(this.id)
   
      let  like = document.getElementById(this.id)
      console.log(like.style.color)
      if(like.style.color == "rgb(0, 119, 255)"){
        console.log("£fssfsf")
        like.style.color = 'red'
       
    } else{
        like.style.color = "#0077ff"
    }

     }
      
      // for(var car in  cars){
      //   console.log(cars[car])
      //   $('#test').append(`
      //   <div id="container-track">
      //         <div class="card">
      //           <img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="Lago di Braies">
          
      //           <div class="card__details">
          
      //             <span class="tag">${cars[car]}</span>
          
      //             <span class="tag">${cars[car]}</span>
          
      //             <ul>
      //                 <button class="play"><i id="${cars[car]}" class="fa fa-play play-icon"></i></button>
      //                 <button class="like"><i id="like${cars[car]}" class="fa fa-heart"></i></button>
      //             </ul>
      //           </div>
      //         </div>
      //       </div>  
      // </div>
      // `)
      // document.getElementById(cars[car]).onclick = onClick;
      // document.getElementById(`like${cars[car]}`).onclick = onClikLike;
      // }
   
        const onclickTreks = async () => {
          const token = await getToken();
          const tracks = await getTracks(token, 'https://api.spotify.com/v1/playlists/37i9dQZF1DWWY64wDtewQt/tracks/');
          let  i = 0
          $('#track-main').empty()
          tracks.forEach(async(el) => {
              //console.log(el.track.href + el.track.preview_url + el.track.name)
              const track = await getTrack(token, el.track.href);
              
              //console.log(el.track.album.name + "[------------]")
              console.log(el.track.preview_url)
              
              if(el.track.preview_url == null){
                   console.log('nou track url bro')
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
                  // $('.playlist-item ul').append(`
                  // <li>
                  // <div class="li-cov-icon"><img class="playlist-cover" src="${track.album.images[2].url}" alt="">
                  //     <i id="${i}" class="fa fa-play play-icon">
                  //         <a href="${el.track.preview_url}"></a>
                  //         <audio controls="controls" id="${track.id}">
                  //             <source src="${el.track.preview_url}" type="audio/mpeg"/>
                  //         </audio>  
                  //     </i>
                  // </div>
                  // <span>${el.track.name}</span>
                  // <span>${track.album.name}</span>
                  // <span style="display: none;">${ttt}</span>
                  // </li>
                  // `)
                  // //document.getElementById(i).onclick = onClickPlay
                  // document.getElementById(i).onclick = onClickPlay
            }
              
        })
 
      }
      onclickTreks();    
});