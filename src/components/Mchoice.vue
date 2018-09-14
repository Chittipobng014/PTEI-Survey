<template>
<div style="margin: 1% 0% 3% 5%;        min-height: 65vh;       max-height: 65vh;">
    <h1>{{surveys.qid}}. {{surveys.qname}} </h1>
    <div class="line">
    <div v-for="ans in surveys.ans" v-bind:key="ans.option">
        <b-form-checkbox v-model="ans.selected" >
                <h2>{{ans.option}}</h2>
        </b-form-checkbox>        
    </div>
    <div v-if="surveys.ans[surveys.ans.length - 1].selected">
        <b-col sm="10">
            <b-form-input v-model="surveys.ans[surveys.ans.length - 1].input" id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
        </b-col>
    </div>  
    </div>  
</div>

</template>
<script>

export default {
    props:['surveys'],
    name: 'mchoice',
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
.line{
    margin: 3% 0% 0% 5%;
}
</style>

