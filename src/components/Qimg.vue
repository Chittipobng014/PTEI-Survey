<template>
<div style="margin: auto; margin-left:7vh; margin-right:7vh; margin-top: 8vh">
       <h1>{{surveys.qid}}. {{surveys.qname}}</h1>
        <div class="row">
            <div class="col-6" v-for="ans in surveys.ans" v-bind:key="ans.option"><b-img rounded :src="ans.url" class="img-body"></b-img></div>
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
    width:17vw; 
    height:18vh;
}
.col-6{
    margin-top:20px;
    text-align: center;
}
.row{
    margin-top:8vh;
}
</style>
