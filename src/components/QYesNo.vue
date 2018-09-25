<template>
<div style="margin: 2vh 7vh 3vh; min-height: 0vh; max-height: 55vh;">
    <h1>{{surveys.qid}}. {{surveys.qname}}</h1>
    <div class="row">
        <div class="col-6" v-for="ans in surveys.ans" v-bind:key="ans.option">
            <div in surveys.ans v-on:click="clickans(ans.option)"><b-img  rounded="circle" :src="ans.url" class="img-body"></b-img></div>
        </div>
        <div class="col-6"></div>
        <div class="col-6" v-if="ansDefault[0] === 'no'">
            <b-form-input v-model="textinput" @change="edit(textinput)" id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
        </div>
        
    </div>
</div>
</template>
<script>

export default {
    props:['surveys','user'],
    name: 'qyesno',
    data (){
      return{     
          ansDefault: [],
          textinput:''
      }
    },
    methods: {
        clickans(ans){
            // this.$emit(ans, yesnoanswer);
            this.ansDefault = []
            this.ansDefault.push(ans)
            console.log(this.ansDefault)
        },
         edit: function(data){
            this.ansDefault.push(data)
            console.log(this.ansDefault)
        }
        
    },
    created() {    
    }
}
</script>

<style scoped>
.img-body{
    width:14vw; 
    height:15vh;
    box-shadow: 0 0 10px #000000;
    text-align: center;
}
.col-6{
    text-align: center;
}
.row{
    margin-top:8vh;
}
</style>



