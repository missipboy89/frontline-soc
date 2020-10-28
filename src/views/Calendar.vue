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
            <!-- I want this code to show the event in a specific format -->
            {{ selected }}
            <!--
                I want something like
                selected.event
                selected.date and selected.time
                slected.where
            -->
        </b-container>
        <!--
        <h1>{{ events[0].event }}</h1>
        <h3>{{ events[0].date }} at {{ events[0].time }}</h3>
        <h2>{{ events[0].where }}</h2>
        -->
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
            this.selected = items
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
.cal {
  font-family: "PLATOoN";
  font-size: 200px;
  color: black;
  text-align: center;
  margin: auto;
  padding: 100px;
  text-shadow: 2px 2px 20px white;
}
.img {
    margin: auto;
    padding: 0;
}
</style>
