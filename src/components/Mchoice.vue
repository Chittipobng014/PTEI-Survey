<template>
<div style="margin: auto; margin-left:7vh; margin-right:7vh; margin-top: 8vh">
     <h1>{{surveys[5].qid}}. {{surveys[5].qname}}</h1>
     <b-form-group style="margin-top: 7vh; margin-left:8vw; "  >
        <div v-for="option in options" v-bind:key="option.text">
            <b-form-checkbox v-model="option.selected" v-bind:name="option.text" :options="options">
                <h2>{{option.text}}</h2>
            </b-form-checkbox>
        </div>
        <div v-if="options[options.length - 1].selected">
            <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
    </b-col>
        </div> 
    </b-form-group>
</div>
</template>
<script>

import {firestore} from '../firebase.js'
import CheckBox from './Checkbox'

export default {
    name: 'mchoice',
    data (){
      return{          
        options: [
            {text: 'Holiday/Leisure', selected:false},
            {text: 'Meeting/Seminar/Business/Professional', selected:false},
            {text: 'Visit friends and relatives ', selected:false},
            {text: 'Pre-wedding/Wedding/Honeymoon ', selected:false},
            {text: 'Education (Study/Teaching)', selected:false},
            {text: 'Health treatment', selected:false},
            {text: 'Others (please specify) ……………', selected:false, input: ""}        
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
    },
    components: {
        CheckBox
    },
    watch: {

    }
}
</script>


