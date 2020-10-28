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
        <b-row>
            <b-col md="auto">
                <b-calendar
                    v-model="value"
                    :date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit' }"
                    locale="en-US"></b-calendar>
            </b-col>
            <b-col>
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
                    {{ selected }}
                </b-container>
            </b-col>
        </b-row>
        <h1>{{  events[0].event }}</h1>
        <h3>{{ events[0].date }} at {{ events[0].time }}</h3>
        <h2>{{ events[0].where }}</h2>
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
            selected: ''
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
