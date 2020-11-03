<template>
    <div>
        <b-card
            overlay
            text-variant="white"
            :img-src="require('../assets/contact.jpg')"
            img-alt="Card Image"
            class="img"
        >
            <b-card-text class="form">
                CONTACT US
            </b-card-text>
        </b-card>
        <b-container>
            <b-form action="https://formspree.io/f/xayljbqo"
            v-if="show"
            method="POST"
            >
                <b-form-group
                    id="input-group-1"
                    label="Email address"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter email"
                        name="_replyto"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-2"
                    label="Your Name:"
                    label-for="input-2"
                >
                    <b-form-input
                        id="input-2"
                        v-model="form.name"
                        required
                        placeholder="Enter name"
                        name="message"
                    ></b-form-input>
                    <b-form-group
                        id="textarea"
                        label="Message (Optional)"
                        label-for="textarea"
                    >
                        <b-form-textarea
                            id="textarea"
                            v-model="form.textarea"
                            placeholder="Enter message..."
                            rows="5"
                            max-rows="10"
                            name="message"
                        ></b-form-textarea>
                    </b-form-group>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Clear</b-button>
            </b-form>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data () {
        return {
            form: {
                email: '',
                name: '',
                textarea: ''
            },
            show: true
        }
    },
    methods: {
        onSubmit (evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset (evt) {
            evt.preventDefault()
            this.form.email = ''
            this.form.name = ''
            this.form.textarea = ''
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>

<style>
@font-face {
  font-family: PLATOoN;
  src: local("PLATOoN"),
  url(../fonts/PLATOoN.ttf) format("truetype");
}/* Mobile */
@media (max-width: 480px) {
    .form {
    font-family: "PLATOoN";
    font-size: 200px;
    color: black;
    text-align: center;
    margin: auto;
    padding: 100px;
    text-shadow: 2px 2px 20px white;
    }
}/* low res tab */
@media (min-width: 481px) and (max-width: 767px) {
    .form {
    font-family: "PLATOoN";
    font-size: 200px;
    color: black;
    text-align: center;
    margin: auto;
    padding: 100px;
    text-shadow: 2px 2px 20px white;
    }
}/* Tab */
@media (min-width: 768px) and (max-width: 1024px) {
    .form {
    font-family: "PLATOoN";
    font-size: 100px;
    color: black;
    text-align: center;
    margin: auto;
    padding: 50px;
    text-shadow: 2px 2px 20px white;
    }
}/* Desktop */
@media (min-width: 1025px) and (max-width: 1280px) {
    .form {
    font-family: "PLATOoN";
    font-size: 500px;
    color: black;
    text-align: center;
    margin: auto;
    padding: 100px;
    text-shadow: 2px 2px 20px white;
    }
}
.img {
    margin: auto;
    padding: 0;
}
</style>
