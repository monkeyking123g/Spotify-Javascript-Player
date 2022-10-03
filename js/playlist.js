
$(document).ready(function(){
    $("form").submit(function (event) {
        // message = document.querySelector('.autosave-message')
        // const SAVING_MESSAGE = 'Saving...';
        // const SAVED_MESSAGE = 'All changes saved.';
        var formData = {
          playlistName: $("#playlistName").val(),
          genres: $("#country").val(),
          image: $('#file-input').val(),
        };
        // message.classList.add('autosave-message-saving');
        // message.textContent = SAVING_MESSAGE;
        
        console.log(formData)

        event.preventDefault();
    });
    
    //let clickPlay = false
    //const cars = ["1", "2", "3", "4", "5", "6", "7"];
    // var audio = new Audio('../mixkit-born-620.mp3');
    // const onClick = function() {
    //   console.log(this.id, this.className );
    //   // this.className = 'fa fa-pause play-icon'
    //   if(!clickPlay){
    //             this.className = 'fa fa-pause play-icon'
    //              clickPlay = true
    //              audio.play();
    //   }else{
    //         this.className = 'fa fa-play play-icon'
    //         clickPlay = false
    //         audio.pause();
    //   }
    // }
    // for(var car in  cars){
    //   console.log(cars[car])
    //   $('.playlist').append(`
      
    //         <div class="container-playlist">
                
    //         <span class="playlist-name">Playlist name</span>
    //         <div class="playlist-content">
    //             <!-- <div class="playlist-cover">
    //                 <img src="./img/cyberpank.jpg" alt=""> 
    //             </div> -->
    //             <div class="playlist-item">
    //                 <ul>
                        
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
        
    //   `)
    //   for(var track in cars){
    //     console.log(track)
    //   $('.playlist-item ul').append(`
    //     <li>
    //       <div class="li-cov-icon"><img class="playlist-cover" src="../img/cyberpank.jpg" alt="">
    //         <i id="1" class="fa fa-play play-icon"></i>
    //       </div>
    //       <span>dua lipa 2d asadad fd ad sdy</span>
    //     </li>
      
    // `)
    // }

      //document.getElementById(cars[car]).onclick = onClick;
    // $(`#${cars[car]}`).click(function(){
    //     console.log("sdsfd")
      
    //      if(!clickPlay){
    //          buttonPlay.className = 'fa fa-pause play-icon'
    //          clickPlay = true
    //     }else{
    //         buttonPlay.className = "fa fa-play play-icon"
    //         clickPlay = false
    //     }
    //   })
    
    //}
    // var tabs = $("#play");

    // tabs.on("click", function () {
    //   $("this").className = "fa fa-play play-icon"
    // })
    // $("#play").click(function(){
    //   console.log("sdsfd")
    
    //    if(!clickPlay){
    //        buttonPlay.className = 'fa fa-pause play-icon'
    //        clickPlay = true
    //   }else{
    //       buttonPlay.className = "fa fa-play play-icon"
    //       clickPlay = false
    //   }
    // })
    
});