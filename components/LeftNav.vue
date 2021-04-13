<template>
  <aside id="navigation">
    <template v-if="this.leftNavOpen">
      <NuxtLink v-for="navItem in leftNav" 
        :key="navItem._id" 
        :class='navItem.url === $route.path ?  "active" : ""' 
        :to="navItem.url">{{navItem.entrada}}</NuxtLink>
    </template>
  </aside>
</template>

<style>

</style>

<script>
export default {
  name: 'left-nav',
  created() {
  },
  mounted() {
    //if (this.$refs["menuButton"].display === "none") this.leftNavOpen = true;
  },
  methods: {
    getId: function(navItem) {
      //return navItem.url.substring(1).replaceAll('/','-')
    },
    open: function() {
      this.leftNavOpen = !this.leftNavOpen
    }
  },
  data() {
    return {
      leftNavOpen: true,
      leftNav: []
    }
  },
  //Nuxtjs
  fetch() {
    this.leftNav = this.$staticAPI.getLeftNav(this.$route.path)
  }
}
</script>
