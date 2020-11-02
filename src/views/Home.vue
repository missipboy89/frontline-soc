<template>
    <div>
        <b-img :src="require('../assets/unnamed.jpg')" fluid-grow></b-img>
        <b-container fluid class="test">
            <b-card-group deck>
                <b-card
                    title="Upcoming Events"
                    :img-src="require('../assets/cross.jpg')"
                    img-alt="cross"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 card2"
                >
                    <b-card-text>
                        Keep an eye open for our latest events to come.
                    </b-card-text>

                    <b-button to="/calendar" variant="primary">More info</b-button>
                </b-card>
                <b-card
                    title="Who We Are"
                    :img-src="require('../assets/cross.jpg')"
                    img-alt="cross"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 card2"
                >
                    <b-card-text>
                        Get to know uu! Learn about where we comefrom and God uses us on the Frontline.
                    </b-card-text>

                    <b-button to="/about" variant="primary">More info</b-button>
                </b-card>
                <b-card
                    title="Hear From Us"
                    :img-src="require('../assets/cross.jpg')"
                    img-alt="cross"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 card2"
                >
                    <b-card-text>
                        Reach out to us and join our mailing list, or just let us know what you think.
                    </b-card-text>

                    <b-button to="/contact" variant="primary">More info</b-button>
                </b-card>
            </b-card-group>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
div {
    background-color: lightgray;
}
.test {
    margin-left: 400px;
    padding: 10px;
}
</style>
