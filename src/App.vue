<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
            <b-navbar-brand tag="h1" class="platoon" to="/">FRONTLINE SOC</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/" class="item">Home</b-nav-item>
                    <b-nav-item to="/about" class="item">About Us</b-nav-item>
                    <b-nav-item to="/calendar" class="item">Calendar</b-nav-item>
                    <b-nav-item to="/contact" class="item">Contact Us</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
@font-face {
  font-family: PLATOoN;
  src: local("PLATOoN"),
  url(./fonts/PLATOoN.ttf) format("truetype");
}

.platoon {
  font-family: "PLATOoN";
  font-size: 120px;
  color: solid black;
  text-align: center;
  margin: auto;
}
</style>
