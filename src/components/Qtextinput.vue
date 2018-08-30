<template>

<div style="margin: auto; margin-left:7vh; margin-right:7vh; margin-top: 8vh">
    
    <h1>{{surveys.qid}}. {{surveys.qname}}
    Answer :
    </h1>
    <b-col sm="10">
    <b-form-input id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
    </b-col>
    
</div>
</template>
<script>
import CheckBox from './Checkbox'

export default {
    props:['surveys'],
    name: 'qtextinput',
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