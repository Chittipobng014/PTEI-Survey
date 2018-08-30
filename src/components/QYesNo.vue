<template>
<div style="margin: auto; margin-left:7vh; margin-right:7vh; margin-top: 8vh">
    <h1>{{surveys.qid}}. {{surveys.qname}}</h1>
    <div class="row">
        <div  class="col-6" v-for="ans in surveys.ans" v-bind:key="ans.option">
            <div in surveys.ans v-bind:key="ans.option"><b-img rounded :src="ans.url" class="img-body"></b-img></div>
        </div>
    </div>
    <!-- <div v-if="surveys.ans[surveys.ans.length - 1].selected">
        <b-col sm="10">
            <b-form-input v-model="surveys.ans[surveys.ans.length - 1].input" id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
        </b-col>
    </div>     -->
</div>
</template>
<script>

export default {
    props:['surveys'],
    name: 'qyesno',
    data (){
      return{                
      }
    },
    methods: {
        clickans(ans){
            // this.$emit(ans, yesnoanswer);
            console.log(ans)
        }
    },
    created() {
        console.log(this.surveys);        
    }
}
</script>

<style>
.img-body{
    width:15vw; 
    height:15vh;
    box-shadow: 0 0 10px #000000;
    text-align: center;
}
</style>



