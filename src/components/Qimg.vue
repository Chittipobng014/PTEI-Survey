<template>
<div style="margin: auto; margin-left:7vh; margin-right:7vh; margin-top: 8vh">
     <h1>{{surveys[4].qid}}. {{surveys[4].qname}}</h1>
     <div style="margin-top: 7vh; margin-left:8vw; "  >
        
        <div v-for="img in imgs"  v-bind:key="img.url">
            <b-img v-bind:src="img.url"/>
        </div>
     </div>
</div>
</template>
<script>

import {firestore} from '../firebase.js'

export default {

    data (){
      return{
          imgs:[
              {url:'https://image.flaticon.com/icons/png/512/1068/1068580.png',},
              {url:'../photo/2.png'},
              {url:'../photo/3.png'},
              {url:'../photo/4.png'}
          ]
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
