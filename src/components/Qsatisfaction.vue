<template>
<div style="margin: 1% 1% 1% 1%; min-height: 5vh;  max-height:65vh;">
       <h5>{{surveys.qid}}. {{surveys.qname}}</h5>
       <div class="h3"><h3>{{surveys.ans[0].ansname}}</h3></div>
       <hr>
       <h5>{{ surveys.titleBe }}</h5>
        <div class="row">
            <div class="col" v-for="img in surveys.img" v-bind:key="img.url"><b-img rounded="circle" :src="img.url" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col" v-for="img in surveys.img" v-bind:key="img.option"><p>{{img.option}}</p></div>
        </div>
        <hr>
        <h5>{{ surveys.titleAf }}</h5>
        <div class="row">
            <div class="col" v-for="img in surveys.img" v-bind:key="img.url"><b-img rounded="circle" :src="img.url" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col" v-for="img in surveys.img" v-bind:key="img.option"><p>{{img.option}}</p></div>
        </div>

</div>
</template>
<script>

export default {
    props:['surveys'],
    name: 'qsatisfaction',
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
    width:10vw; 
    height:11vh;
    box-shadow: 0 0 10px #000000;
}
.col{
    margin-top:5px;
    text-align: center;
    
}
.h3{
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
