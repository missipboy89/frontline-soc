<template>
  <div>
    <b-img :src="require('../assets/about.jpg')" fluid-grow></b-img>
    <b-card>
        <b-card-text class="vis">
            Our Vision
        </b-card-text>
        <hr class="my-3">
        <b-card-text class="vis1">
            ~That the men of FRONTLINE will become united and always honor the Lord, Jesus Christ, in every area of their lives.~
        </b-card-text>
    </b-card>
    <hr class="my-5">
    <b-container fluid="lg">
        <b-img :src="require('../assets/mission.jpg')" fluid-grow alt="Responsive image"></b-img>
        <b-card-text class="vis1">
            The FRONTLINE Men’s Discipleship Training Class exists to develop biblically grounded men of faith who:
        </b-card-text>
        <b-list-group>
            <b-list-group-item><b-icon icon="caret-right-fill"></b-icon> Seek the Word of God in study and prayer</b-list-group-item>
            <b-list-group-item><b-icon icon="caret-right-fill"></b-icon> Share with each other the burdens of life for the purpose of growth and encouragement</b-list-group-item>
            <b-list-group-item><b-icon icon="caret-right-fill"></b-icon> Reach other men in the community with the Gospel</b-list-group-item>
            <b-list-group-item><b-icon icon="caret-right-fill"></b-icon> Lead their families in worship</b-list-group-item>
        </b-list-group>
    </b-container>
    <hr class="my-5">
    <b-container fluid="lg">
        <b-card>
            <b-card-text class="foun">
                Foundational Verse
            </b-card-text>
            <hr class="my-1">
            <b-card-text class="vis2">
                2 Timothy 2:3-4
            </b-card-text>
            <b-card-text class="vis1">
                Join with me in suffering, like a good soldier of Christ Jesus.  No one serving as a soldier gets entangled in civilian affairs, but rather tries to please his commanding officer.
            </b-card-text>
        </b-card>
    </b-container>
    <hr class="my-5">
    <b-container fluid="lg">
        <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="require('../assets/flmin.jpg')" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body>
                        <b-list-group flush>
                            <b-list-group-item><b-icon icon="caret-right-fill"></b-icon> Meets Wednesday nights (following dinner and church family meeting) at 6:30pm in Room 211</b-list-group-item>
                            <b-list-group-item><b-icon icon="caret-right-fill"></b-icon> Men's Night Out - Once a month we meet at church and travel to a restaurant for food and fellowship with the intent of making new relationships.</b-list-group-item>
                            <b-list-group-item><b-icon icon="caret-right-fill"></b-icon> Many members are involved in homeless ministry</b-list-group-item>
                            <b-list-group-item><b-icon icon="caret-right-fill"></b-icon> Annually we try to attend a men's conference in the tri-state area</b-list-group-item>
                            <b-list-group-item><b-button variant="primary" to="/calendar">Found Out More</b-button></b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </b-container>
    <!-- fun easter egg
    <b-embed
    type="video"
    aspect="16by9"
    :src="require('../assets/rr.mp4')"
    allowfullscreen
    autoplay=true
  ></b-embed>
    -->
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
.vis {
    text-align: center;
    font-size: 75px;
    background-color: rgb(245, 243, 243);
    font-weight: bold;
}
.vis1 {
    text-align: center;
    font-size: 30px;
}
.vis2 {
    text-align: center;
    font-size: 40px;
    background-color: rgb(245, 243, 243);
    font-weight: bold;
}
.foun {
    text-align: center;
    font-size: 60px;
    background-color: rgb(245, 243, 243);
    font-weight: bold;
}
</style>
