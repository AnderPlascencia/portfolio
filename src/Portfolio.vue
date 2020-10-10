<template>
<main class="portfolio">
    <h1>Portfolio</h1>
    <ul class="portfolio__filters">
        <li v-for="filter in filters">{{filter}}</li>
    </ul>
    <ul class="gallery">
        <li class="gallery__product" v-for="product in products" @click="showImg(product)">
            <img class="gallery__product--img" v-bind:src="product.img">
            <h4 class="gallery__product--title">{{product.title}}</h4>
        </li>
    </ul>
    <div class="overlay-photo" v-if="show">
        <button class="close" @click="show=false">x</button>
        <img v-bind:src="overlay.img" class="image-detail">
        <h3>{{overlay.title}}</h3>
    </div>
</main>
</template>
<script>
export default {
    data: function(){
        return {
            filters: [
                "All",
                "Design",
                "Development",
                "Photography",
            ],
            products:[
                {"title": "Person", "img": "./src/assets/img/image1.jpg"},
                {"title": "Person", "img": "./src/assets/img/image2.jpg"},
                {"title": "Person", "img": "./src/assets/img/bg.jpg"},
                {"title": "Person", "img": "./src/assets/img/image1.jpg"},
                {"title": "Another title", "img": "./src/assets/img/logo.png"},
            ],
            show: false,
            overlay: {
                img:"./src/assets/img/image1.jpg",
                title: "Text"
            }
        }
    },
    methods:{
        showImg(product){
            this.show = true;
            this.overlay.img = product.img;
            this.overlay.title = product.title
        },
    }
}
</script>