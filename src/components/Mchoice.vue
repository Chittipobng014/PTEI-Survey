<template>
<div style="margin: auto; margin-left:7vh; margin-right:7vh; margin-top: 8vh">
    <h1>{{surveys.qid}}. {{surveys.qname}}</h1>
    <div class="line">
    <div v-for="ans in surveys.ans" v-bind:key="ans.option">
        <b-form-checkbox v-model="ans.selected" :options="options">
                <h2>{{ans.option}}</h2>
        </b-form-checkbox>        
    </div>
    <div v-if="surveys.ans[surveys.ans.length - 1].selected">
        <b-col sm="10">
            <b-form-input v-model="surveys.ans[surveys.ans.length - 1].input" id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
        </b-col>
    </div>  </div>  
</div>
</template>
<script>
import CheckBox from './Checkbox'

export default {
    props:['surveys'],
    name: 'mchoice',
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
.line{
    margin-top:8vh;
}
</style>

