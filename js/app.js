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
    }
}).mount('#app')