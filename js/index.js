Vue.config.devtools = true;

new Vue ({
    el: "#app",
    data: {
        apiGenerateMail: "https://flynn.boolean.careers/exercises/api/random/mail",
        arrayEmail: [],
    },
    methods: {
        createMail(){
            for (let i = 0; i < 10; i++) {
                axios.get(this.apiGenerateMail).then((ajaxResponse) => {
                    this.arrayEmail.push(ajaxResponse.data.response)
                })
            }
        },
    }
})