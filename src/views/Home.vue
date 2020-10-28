<template>
    <div>
        <div class="ui fluid container">
            <b-img :src="require('../assets/unnamed.jpg')" fluid-grow></b-img>
        </div>
        <div>
            <video class="video-js vid"
            autoplay=true
            muted=true
            loop=true
            height="800"
            vjs-fluid>
                <source src="../assets/video.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
.vid {
    width: 100%;
    opacity: 0.5;
}
</style>
