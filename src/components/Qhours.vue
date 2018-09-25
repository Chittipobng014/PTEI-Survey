<template>
<div style="margin: 1% 1% 2% 3%; min-height: 5vh;  max-height: 60vh;">
    <h3>{{surveys.qid}}. {{surveys.qname}}</h3>
    <hr>
    <div class="row">
    <b-col class="col-6" v-for="ans in surveys.ans.slice(0, 6)" v-bind:key="ans.ansname">
        <b-form-checkbox v-model="ans.selected" >
                <h4>{{ans.ansname}}</h4>
        </b-form-checkbox> 
        <div v-if="ans.selected">
        <b-col>
            <b-form-input v-model="surveys.ans[surveys.ans.length - 1].input"  type="text" placeholder="Enter your answer"></b-form-input>
        </b-col>
    </div>          
    </b-col>
     </div>
</div>
</template>
<script>
export default {
    props:['surveys'],
    name: 'qhours',
    data (){
      return{                
      }
    },
    created() {      
    },
    components: {

    }
}
</script>

<style scoped>
.col{
    margin-top:12px;
    
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
