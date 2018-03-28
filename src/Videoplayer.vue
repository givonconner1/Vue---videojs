<template>
    <div>
        <link href="http://vjs.zencdn.net/6.6.3/video-js.css" rel="stylesheet">
        <video id ="my-video"
            controls
            class="video-js vjs-big-play-centered"
            ref="videoPlayer"
            poster="http://vjs.zencdn.net/v/oceans.png"
            data-setup="{}"
        >

            <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
            <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser tht <a href="http://videojs.com/html5-vide-support/" target="_blank">supports HTML5 video</a>
            </p>
        </video>

    </div>
</template>

<script>
import Video from 'video.js'
let videojs = require('video.js')

export default {
  data () {

      return {
          video: null
      }
    },
    mounted() {
        var video = videojs('my-video');
        console.log('video is loaded');
    },
    ready() {
        //video = videojs('my-video');

        /*Here, I am having a problem getting this to work.
        If you try "var video = videojs('my-video);", it will work and set video as a variable.
        For whatever reason, it is not working in the above line of code.*/
    },
    player() {
      return this.$refs.videoPlayer.player
    },
}
</script>


