<template>
<div style="margin: 0% 5% 1% 0%; min-height: 5vh;  max-height:70vh;">
    <h2>{{surveys.qid}}. {{surveys.qname}} </h2>
    <div class="row">
    <div class="col-6" v-for="ans in surveys.ans" v-bind:key="ans.option">
        <b-form-checkbox v-model="ans.selected" @change="getselected(ans.option,!ans.selected)">
                <h4>{{ans.option}}</h4>
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
  props: ["surveys"],
  name: "mchoice",
  data() {
    return {
      answers: []
    };
  },
  created() {},
  methods: {
    getselected: function(option, selected) {
      var answer = {option, selected};
      var index = this.surveys.ans.map(function(e) { return e.option; }).indexOf(option) // find index
      this.surveys.ans[index] = answer; // edit selected
      console.log(this.surveys.ans[index])
    }
  }
};
</script>

<style scoped>
.row {
  margin: 1% 0% 0% 5%;
}
</style>

