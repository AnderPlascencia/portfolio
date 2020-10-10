<template>
    <main>
        <div class="slider" ref="slider">
            <div class="content-box" v-for="section in sections">
                <h2 class="box-title">{{section.title}}</h2>
                <img v-bind:src="section.image" >
            </div>
            <ul class="controls" ref="controls">
                <li class="button" @click="previous">Previous</li>
                <li class="button" @click="next">Next</li>
            </ul>
        </div>
    </main>
</template>

<script>
    export default {
        data(){
            return {
                counter:1,
                distance:-50,
                sections:[
                    {"title":"Creative", "image": "./src/assets/img/bg.jpg"},
                    {"title":"Resume", "image": "./src/assets/img/image2.jpg"},
                    {"title":"Portfolio", "image": "./src/assets/img/image1.jpg"},
                    {"title":"Contact", "image": "./src/assets/img/logo.png"}
                ]
            }
        },
        methods:{
            previous(){
                if(this.counter!= 1){
                    this.counter-=1;
                    this.distance-=100;
                    this.$refs.slider.style.transform = "translateX(-"+(this.counter-1)*100+"%)";
                    this.$refs.controls.style.transform = "translate("+this.distance+"%, -50%)";
                }
            },
            next(){
                if(this.counter != this.sections.length){
                    this.distance+=100;
                    this.$refs.slider.style.transform = "translateX(-"+this.counter*100+"%)";
                    this.$refs.controls.style.transform = "translate("+this.distance+"%, -50%)";
                    this.counter+=1
                }
            }
        }
    }
</script>