<template>
<div class="container">
  <h1>Firestore</h1> 
  <h3 v-for="question in surveys" v-bind:key="question">
  {{ question.qid }} {{ question.qname }} {{ question.type }}    
  </h3> 
</div>
</template>
<script>

import {firestore} from '../firebase.js'

export default {

    data (){
        return{
            surveys: []
        }
    },
    
    firestore (){
        return {
            surveys : firestore.collection('surveys')
        }
    }

}
</script>
