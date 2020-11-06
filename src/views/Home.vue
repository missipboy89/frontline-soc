<template>
    <div>
        <b-img :src="require('../assets/unnamed2.jpg')" fluid-grow></b-img>
        <div>
            <b-container fluid class="p-3 bg-dark">
                <b-card-group deck>
                    <b-card title="Upcoming Events"
                    :img-src="require('../assets/cal.jpg')"
                    img-alt="cross"
                    img-top
                    >
                        <b-card-text>
                            <h6>Keep up to date on our upcoming classes and events.</h6>
                        </b-card-text>
                        <template #footer>
                            <b-button variant="primary" to="/calendar">Calendar</b-button>
                        </template>
                    </b-card>
                    <b-card title="Our Mission"
                    :img-src="require('../assets/cross.jpg')"
                    img-alt="cross"
                    img-top
                    >
                        <b-card-text>
                            <h6>This is who we are and where we stand. Find out more about us.</h6>
                        </b-card-text>
                        <template #footer>
                            <b-button variant="primary" to="/about">About Us</b-button>
                        </template>
                    </b-card>
                    <b-card title="Upcoming Events"
                    :img-src="require('../assets/cross.jpg')"
                    img-alt="cross"
                    img-top
                    >
                        <b-card-text>
                            Keep up to date on our upcoming classes and events.
                        </b-card-text>
                        <template #footer>
                            <b-button variant="primary" to="/contact">Contact Us</b-button>
                        </template>
                    </b-card>
                </b-card-group>
            </b-container>
            <b-container fluid class="p-5 bg-dark">
                <b-row>
                    <b-img rounded :src="require('../assets/tim.jpg')" fluid-grow alt="Responsive image"></b-img>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>

</style>
