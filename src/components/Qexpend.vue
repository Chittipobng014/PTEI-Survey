<template>
<div style="margin: 1% 0% 3% 5%; min-height: 5vh;  max-height: 60vh;">
    <h2>{{surveys.qid}}. {{surveys.qname}}</h2>
    <hr>
     <div class="col-sm-6" v-for="ans in surveys.ans" v-bind:key="ans.ansname"><h3>{{ans.ansname}}</h3></div>
    <hr>
    <div class="col-sm-6">    
    </div>
</div>
</template>
<script>

export default {
    props:['surveys'],
    name: 'qexpend',
    data (){
      return{                
      }
    },
    created() {      
    }
}
</script>

<style scoped>
.col{
    margin-top:12px;
    text-align: center;
    
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
