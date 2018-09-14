<template>
<div style="margin: auto; margin-left:7vh; margin-right:7vh; margin-top: 8vh">
       <h3>{{surveys.qid}}. {{surveys.qname}}</h3>
       <div class="h2"><h2>{{surveys.ans[0].ansname}}</h2></div>
       <hr>
        <div class="row">
            <div class="col" v-for="imgAgree in surveys.imgAgree" v-bind:key="imgAgree.optionA"><b-img rounded="circle" :src="imgAgree.urlA" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col" v-for="imgAgree in surveys.imgAgree" v-bind:key="imgAgree.optionA"><h4>{{imgAgree.optionA}}</h4></div>
        </div>
</div>
</template>
<script>

export default {
    props:['surveys'],
    name: 'qagreement',
    data (){
      return{                
      }
    },
    created() {  
    }
}
</script>

<style scoped>
.img-body{
    width:12vw; 
    height:13vh;
    box-shadow: 0 0 10px #000000;
}
.col{
    margin-top:12px;
    text-align: center;
    
}
.row{
    margin-top:3vh;
    
}
.h2{
    margin-top:3vh;
    text-align: justify;
    text-indent: 45px;
    color: #977400
}
.hr{
    border-top: 10px solid rgba(0, 0, 0, 0.1);
    size: 6;
}
</style>
