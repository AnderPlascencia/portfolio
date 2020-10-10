<template>
  <div id="app">
    <app-menu></app-menu>
    <app-content v-if="section=='Home'"></app-content>

    <app-portfolio v-if="section=='Portfolio'"></app-portfolio>
    <app-resume v-if="section=='Resume'"></app-resume>

    <app-contact v-if="section=='Contact'"></app-contact>
  </div>
</template>

<script>
export default{
  data: function(){
    return {
      section: "Content"
    }
  },
  mounted() {
    this.$root.$on('changing section', data => {
      this.section = data
    });
  }
}

</script>

<style>
#app{
  display: flex;
  width: 100%;
}
</style>
