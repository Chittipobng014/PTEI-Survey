<template>
    <div class="fullscreen">
        <div style="width: 100vw;   height: 10vh;   background-color: rgb(13, 172, 132)">
            
      </div>
      
<router-view></router-view>
        <!-- <div style="margin-top:75vh">
  <b-button-toolbar key-nav  aria-label="Toolbar with button groups">
    <b-button-group class="mx-1">

    <b-btn>&lsaquo;</b-btn>
    </b-button-group>
    <b-button-group class="mx-1">
      <b-btn class="right">&rsaquo;</b-btn>

    </b-button-group>
  </b-button-toolbar>
</div> -->

      </div>
</template>

<script>
export default {
    
}
</script>

<style>
.mx-1{
    width: 5vw;
}
.fullscreen{
    height: 100vh;
    width: 100vw;
}

.bgcolor{
    background-color: #00CC99;
} 
</style>
