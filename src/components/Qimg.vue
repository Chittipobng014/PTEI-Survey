<template>
<div style="margin: auto; margin-left:7vh; margin-right:7vh; margin-top: 8vh">
       <h1>{{surveys.qid}}. {{surveys.qname}}</h1>
        <div class="row">
            <div class="col-6" v-for="ans in surveys.ans" v-bind:key="ans.option"><b-img rounded :src="ans.url" class="img-body"></b-img></div>
        </div>

</div>
</template>
<script>
import CheckBox from './Checkbox'

export default {
    props:['surveys'],
    name: 'qimg',
    data (){
      return{                
      }
    },
    created() {
        console.log(this.surveys);        
    },
    components: {
        CheckBox
    }
}
</script>

<style>
.img-body{
    width:20vw; 
    height:20vh;
}
.col-6{
    margin-top:20px;
    text-align: center;
}
</style>
