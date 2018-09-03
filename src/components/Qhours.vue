<template>
<div style="margin: auto; margin-left:7vh; margin-right:7vh; margin-top: 8vh">
    <h2>{{surveys.qid}}. {{surveys.qname}}</h2>
    <hr>
    <b-col v-for="ans in surveys.ans.slice(0, 3)" v-bind:key="ans.ansname">
        <b-form-checkbox v-model="ans.selected" :options="options">
                <h3>{{ans.ansname}}</h3>
        </b-form-checkbox> 
        <div v-if="ans.selected">
        <b-col>
            <b-form-input v-model="surveys.ans[surveys.ans.length - 1].input"  type="text" placeholder="Enter your answer"></b-form-input>
        </b-col>
    </div>          
    </b-col>
     
</div>
</template>
<script>
import CheckBox from './Checkbox'
export default {
    props:['surveys'],
    name: 'qhours',
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
