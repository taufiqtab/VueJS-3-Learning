Vue.createApp({
    data(){
        return {
            firstName: "Opik",
            middleName: "",
            lastName: "Abdul",
            url: "https://appdul.com/",
            raw_html: "<a href='https://google.com/' target='_blank'>Google</a>",
            age : 25
        }
    },
    methods: {
        incrementAge(){
           this.age++;
        },
        changeMiddleName(event){
            this.middleName = event.target.value;
        },
        changeLastName(msg, event){
            console.log(msg);
            this.lastName = event.target.value;
        }
    },
    computed:{
        fullName(){
            console.log("fullName Terpanggil")
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
    },
    watch:{
        age(newAge, oldAge){
            console.log(`From ${oldAge} to ${newAge}`)
        }
    }
}).mount('#app');