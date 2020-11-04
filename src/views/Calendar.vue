<template>
    <div>
        <!--Photo is a Temporary placeholder-->
        <b-card
            overlay
            text-variant="white"
            :img-src="require('../assets/cal.jpg')"
            img-height="500px"
            img-alt="Card Image"
            class="img"
        >
            <b-card-text class="cal">
                CALENDAR
            </b-card-text>
        </b-card>
        <b-container>
            <b-table
                striped
                :select-mode="selectMode"
                selectable
                @row-selected="onRowSelected"
                head-variant="dark"
                :items="events"
                sort-by="date"
            >
            </b-table>
        <div v-if="selected.event">
            <b-jumbotron>
                <template class="event" #header>{{ selected.event }}</template>
                <hr class="my-4">
                <p class="when">
                    {{ selected.date }} {{ selected.time }}
                </p>
                <p class="where">{{ selected.where }}</p>
                <p class="extra" v-if="selected.event === 'Men\'s Night Out'">
                    We will meet in the church parking lot in front of the family life center.
                </p>
                <b-button variant="primary" to="/contact">For More Info, Contact Us</b-button>
            </b-jumbotron>
        </div>
        </b-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Calendar',
    data () {
        return {
            value: '', // calendar value
            selectMode: 'single',
            selected: 'Events Will Show Here.'
        }
    },
    computed: {
        ...mapState([
            'events'
        ])
    },
    methods: {
        onRowSelected (items) {
            this.selected = items[0]
        }
    }
}
</script>

<style>
@font-face {
  font-family: PLATOoN;
  src: local("PLATOoN"),
  url(../fonts/PLATOoN.ttf) format("truetype");
}
* { margin: 0; }

@media only screen and (max-width: 600px) {
.cal {
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
.cal {
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
.cal {
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
.cal {
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
.cal {
    font-family: "PLATOoN";
    font-size: 180px;
    color: black;
    text-align: center;
    margin: auto;
    padding: 70px;
    text-shadow: 2px 2px 20px white;
    }
}
.img {
    margin: auto;
    padding: 0;
}
.when {
    font-size: 50px;
}
.where {
    font-size: 60px;
}
.event {
    font-weight: bold;
}
.extra {
    font-size: 20px;
    font-weight: bold;
}
</style>
