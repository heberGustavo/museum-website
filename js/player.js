 // Carrega a API do YouTube
 var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 var player;
 function onYouTubeIframeAPIReady() {
     player = new YT.Player('player', {
         videoId: 'Yk1xGz72nj0',
         playerVars: {
             autoplay: 1,
             controls: 0,
             modestbranding: 1,
             rel: 0,
             iv_load_policy: 3,
             fs: 0,
             mute: 1,
             loop: 1,
             playlist: 'Yk1xGz72nj0'
         },
         events: {
             'onStateChange': onPlayerStateChange
         }
     });
 }

 function onPlayerStateChange(event) {
     if (event.data == YT.PlayerState.ENDED) {
         player.playVideo(); // Se o vídeo acabar, reinicie
     }
 }