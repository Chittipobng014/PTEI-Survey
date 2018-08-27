<template>
<div style="margin: auto; margin-left:7vh; margin-right:7vh; margin-top: 10vh">
  
  <!-- <h3 v-for="question in surveys" v-bind:key="question.docid">
    {{ question.qid }}. {{ question.qname }} {{ question.type }} 
  </h3>  -->
  <h1>{{ surveys[0].qid }}. {{ surveys[0].qname }}
      
 
  <b-container fluid>
    <b-row class="ans" style="margin-top:10vh;">
    <b-col sm="2"><label for="input-large">Answer: </label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
    </b-col>
  </b-row>
  </b-container>
  
  </h1>
  
   
</div>
</template>
<style>
.form-control{
    text-align: center;
    width: 40vw;
    height: 7vh;
}
</style>

<script>

import {firestore} from '../firebase.js'

export default {

    data (){
      return{

        }
    },    
    firestore (){
        return {
            surveys : firestore.collection('surveys')
        }
    },
    mounted() {
        console.log(this.surveys);        
    }

}
</script>
