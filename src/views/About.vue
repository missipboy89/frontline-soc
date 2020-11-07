<template>
  <div>
      <!--
    <b-img :src="require('../assets/about.jpg')" fluid-grow></b-img>
    -->
    <b-embed
    type="iframe"
    aspect="16by9"
    :src="require('../assets/rr.mp4')"
    allowfullscreen
  ></b-embed>
  </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
@font-face {
  font-family: PLATOoN;
  src: local("PLATOoN"),
  url(../fonts/PLATOoN.ttf) format("truetype");
}
* { margin: 0; }

@media only screen and (max-width: 600px) {
.abt {
    font-family: "PLATOoN";
    font-size: 60px;
    color: black;
    text-align: center;
    margin: auto;
    padding: 10px;
    text-shadow: 2px 2px 20px white;
    }
}
@media only screen and (min-width: 600px) {
.abt {
    font-family: "PLATOoN";
    font-size: 80px;
    color: black;
    text-align: center;
    margin: auto;
    padding: 10px;
    text-shadow: 2px 2px 20px white;
    }
}
@media only screen and (min-width: 768px) {
.abt {
    font-family: "PLATOoN";
    font-size: 100px;
    color: black;
    text-align: center;
    margin: auto;
    padding: 50px;
    text-shadow: 2px 2px 20px white;
    }
}
@media only screen and (min-width: 992px) {
.abt {
    font-family: "PLATOoN";
    font-size: 130px;
    color: black;
    text-align: center;
    margin: auto;
    padding: 50px;
    text-shadow: 2px 2px 20px white;
    }
}
@media only screen and (min-width: 1200px) {
.abt {
    font-family: "PLATOoN";
    font-size: 180px;
    color: black;
    text-align: center;
    margin: auto;
    padding: 70px;
    text-shadow: 2px 2px 20px white;
    }
img {
    max-height: 500px;
    width: 100%;
}
}
</style>
