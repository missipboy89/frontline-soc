<template>
    <div>
        <b-img :src="require('../assets/contact1.jpg')" fluid-grow></b-img>
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
}
* { margin: 0; }

@media only screen and (max-width: 600px) {
.form {
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
.form {
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
.form {
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
.form {
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
.form {
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
</style>
