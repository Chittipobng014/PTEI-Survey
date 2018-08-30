<template>
<div style="margin: auto; margin-left:7vh; margin-right:7vh; margin-top: 8vh">
       <h3>{{surveys.qid}}. {{surveys.qname}}</h3>
       <div class="h2"><h2>{{surveys.qnsecond}}</h2></div>
       <hr>
       <h3>{{ surveys.titleE }}</h3>
        <div class="row">
            <div class="col" v-for="ans in surveys.ans" v-bind:key="ans.optionE"><b-img rounded="circle" :src="ans.urlE" class="img-body"></b-img></div>
        </div>
        <hr>
        <h3>{{ surveys.titleS }}</h3>
        <div class="row">
            <div class="col" v-for="ans in surveys.ans" v-bind:key="ans.optionS"><b-img rounded="circle" :src="ans.urlS" class="img-body"></b-img></div>
        </div>

</div>
</template>
<script>

export default {
    props:['surveys'],
    name: 'qecpect',
    data (){
      return{                
      }
    },
    created() {
        console.log(this.surveys);        
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
    color: rgb(85, 53, 4);
    margin-top:3vh;
    text-align: justify;
    text-indent: 45px;
}
.hr{
    border-top: 10px solid rgba(0, 0, 0, 0.1);
    size: 6;
}
</style>
