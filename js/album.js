
$(document).ready(function(){ 
      const onClickRotate = function () {
        const cardFlip = $(this).parents('ul').parents('.thefront').parents('.thecard')
        $(cardFlip).addClass("thecard-rotate");
      } 
      const onClickBack = function () {
        const backFlip = $(this).parents('.btn-container').parents('.card_flip').parents('.theback').parents('.thecard');
        $(backFlip).removeClass("thecard-rotate");
      }

      // Play album track 
      const onClickPlayAlbum = function() {
        console.log(this);

        // translate a player track name
        const trackName = this.getAttribute('name')
        textScroll = document.getElementById('scroll-text')
        textScroll.innerHTML = `${trackName}`
        
        
        if (this.getAttribute('src') == document.getElementById('source').src){
          console.log('[PASS]')
        }else {
          const sourceSrc  = document.getElementById('source').src = this.getAttribute('src')
          $("#audio").trigger('load');
          const lis = $(".card_flip").find('ul').find('i')
          console.log(lis)
          lis.each(element => {
        //      console.log(lis[element].className = 'fa fa-play play-icon')
        //     // lis[element].getElementsByTagName('i')[0].classList.value = 'fa fa-play play-icon'
        //     //lis[element][0].classList.value = 'fa fa-play play-icon'
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

      const loadAlbum = async (input) => {
        const token = await getToken();
        
        const searchAlbum = await getSearch(token, input, "artist%2Calbum")
        console.log(searchAlbum)
        //const album = await getAlbum(token)
        //console.log(album)
        // const tracks = await getTracks(token, 'https://api.spotify.com/v1/albums/5jvbjb51hQQAIycnBFS4cG/tracks')
        // console.log(tracks)
        $(".album-main-container").empty()
        searchAlbum.albums.items.forEach(async element => {
          const tracks = await getTracks(token, `${element.href}/tracks`)
          $(".album-main-container").append(`
             <div class="maincontainer">
               <div class="thecard" id="thecardFlip">
                   <div class="thefront">
                       <img src="${element.images[0].url}" alt="">
                       <ul>
                           <div>
                               <span class="tag-album">${element.artists[0].name}</span>
                           </div>
                           <div class="name">${element.name}</div>
                           <button  class="read-more" id="${element.id}">Read more</button>
                       </ul>
                      
                   </div>
                   <div class="theback">
                       <div class="card_flip">
                           <ul id="${element.id}_list"> 
                           </ul>
                           <div class="btn-container"><button class="back" id="${element.id}_back">Back</button></div>
                       </div>
                   </div>     
                </div>
             </div>
            `)
            document.getElementById(element.id).onclick = onClickRotate
            document.getElementById(`${element.id}_back`).onclick = onClickBack
            tracks.forEach(el => {
              if(el.preview_url == null){
                console.log('nou track url bro')
              }else {
                   //const track = await getTrack(token, el.href);
                   //console.log($(`#${element.id}_back`).parents('.btn-container').find('ul'))
                   console.log(el.preview_url + "[Preview URL]")
                   //const ulApend  = $(`#${element.id}_back`).parents('.btn-container').find('ul')
                   $(`#${element.id}_list`).append(`
                     <li>
                       <i id="${el.id}"  src="${el.preview_url}" name="${el.name}" class="fa fa-play play-icon"></i>
                       <span>${el.name}</span>
                     </li>
                    `)
                  document.getElementById(el.id).onclick = onClickPlayAlbum
            }
                  
            })
          
        })
        

}
  $( "#btn-album-search" ).on("click", function () {    
    const input = document.querySelector('#search_album').value;
    if (input == ""){
      console.log("[PASS]")
    }else{
      loadAlbum(input)
      //$('#searchUser').val('');
    }
    
  });
     
 
});
      //loadAlbum()
    

          

// document.addEventListener('DOMContentLoaded', () => {
//     const SAVING_MESSAGE = 'Saving...';
//     const SAVED_MESSAGE = 'All changes saved.';

//     document.querySelectorAll('.autosave-message').forEach(el=> el.textContent = SAVING_MESSAGE)
//     document.querySelectorAll("[data-autosave-url]").forEach(inputField => {
//         console.log(inputField)

//     }); 
// });

