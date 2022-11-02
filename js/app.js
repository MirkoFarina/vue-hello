const { createApp } = Vue;

createApp({
    data(){
        return {
            messaggio: 'Ciao Snowboarder!',
            colorText: 'red',
            percorsoImg: 'img/',
            img: 'snow.jpg',
            secondImg: 'snow2.webp',
            isShow: false
        }
    },
    methods: {
        changeImg(){
            if (this.img === this.secondImg) {
                this.img = 'snow.jpg';
            }else {
                this.img = this.secondImg;
            }

        }
    }
}).mount('#app')