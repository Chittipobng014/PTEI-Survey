<template>
<div style="margin: 2vh 7vh 3vh; min-height: 65vh; max-height: 65vh;">
    <h1>{{surveys.qid}}. {{surveys.qname}}</h1>
    <div class="row">
        <div class="col-6" v-for="ans in surveys.ans" v-bind:key="ans.option">
            <div in surveys.ans v-bind:key="ans.option"><b-img  rounded="circle" :src="ans.url" class="img-body"></b-img></div>
        </div>
    </div>
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



