const app = new Vue({
    el:"#app",
    data : {
        emails: []
    },
    mounted: function (){
        for (let index = 0; index < 10; index++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((show) => {
                // handle success
                this.emails.push(show.data.response)
                console.log(show);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }
    }
});