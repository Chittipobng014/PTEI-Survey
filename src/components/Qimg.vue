<template>
<div style="margin: 1% 1% 1% 1%; min-height: 5vh;  max-height: 60vh;">
       <h2>{{surveys.qid}}. {{surveys.qname}}</h2>
        <div class="row">
            <div class="col-6" v-for="ans in surveys.ans" v-bind:key="ans.option"><b-img rounded :src="ans.url" class="img-body"></b-img><h5>{{ans.option}}</h5></div>
        </div>

</div>
</template>
<script>

export default {
    props:['surveys'],
    name: 'qimg',
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
    width:13vw; 
    height:14vh;
}
.col-6{
    margin-top:5px;
    text-align: center;
}
.row{
    margin-top:4vh;
}
</style>
