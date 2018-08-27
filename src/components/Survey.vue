<template>
   
        <div class="container" style="margin: auto; margin-top: 25vh">
            <router-link to="/new">
            <div class="img">
                <b-img :src="require('../photo/page1.png')"></b-img>
            </div>
            </router-link>   
            <div class="name">
                <h1><strong>PTEI Interactive Survey</strong></h1> 
            </div>
            
        </div>
    
  
</template>

<style>
.container{
      text-align: center;
}
.name{
    margin-top: 10vh;
}
</style>

