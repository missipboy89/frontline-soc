<template>
  <div>
    <b-card
            overlay
            text-variant="white"
            :img-src="require('../assets/18160.jpg')"
            img-alt="Card Image"
            align="center"
        >
            <b-card-text class="abt">
                ABOUT US
            </b-card-text>
        </b-card>
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
