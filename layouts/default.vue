<template>
  <div class="container">
    <div class="default-layout-wrapper section">
      <div class="columns">
        <div class="column is-3">
          <left-nav />
        </div>
        <div class="column is-9">
          <nuxt :key="$route.fullPath"/>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

</style>
