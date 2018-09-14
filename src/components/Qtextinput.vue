<template>
    <div style="margin: auto; margin-left:7vh; margin-right:7vh; margin-top:8vh">
        <h1>{{surveys.qid}}. {{surveys.qname}}</h1>
        <div class="row">  
            <h2>Answer :</h2> 
            <b-col sm="8">
                <b-form-input id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
            </b-col>
        </div>
    </div>
</template>
<script>

export default {
    props:['surveys'],
    name: 'qtextinput',
    data (){
      return{                
      }
    },
    created() {       
    }
}
</script>

<style scoped>
.row{
  margin-top:8vh;
}
</style>