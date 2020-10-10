<template>
    <header class="header-section">
        <div class="logo">
            <h2>Ander Plascencia</h2>
            <span>Creative Portfolio</span>
        </div>
        <nav class="navigation">
            <ul>
                <li v-for="section in sections" @click="change(section)"><a href="#">{{section}}</a></li>
            </ul>
        </nav>
        <div class="copyright">
           <p>© Ander Plascencia 2020, All rights reserved</p>
        </div>
    </header>
</template>

<script>
export default {
    data: function(){
        return {
            sections: [
                "Home",
                "Resume",
                "Portfolio",
                "Contact"
            ]
        }
    },
    methods:{
        change(section){
            this.$root.$emit('changing section', section);
        }
    }
}
</script>