<template>
<div style="margin: 0% 5% 1% 0%; min-height: 5vh;  max-height:70vh;">
    <h2>{{surveys.qid}}. {{surveys.qname}} </h2>
    <div class="row">
    <div class="col-6" v-for="ans in surveys.ans" v-bind:key="ans.option">
        <b-form-checkbox v-model="ans.selected" @change="getselected(ans.option,ans.selected)">
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
      mchoice: [],
    };
  },
  created() {},
  methods: {
    getselected: function(value, boolean) {
        var data = [value, boolean];
        this.mchoice.push(data);
        for (var i = 0; i < this.mchoice.length; i++) {
          if (this.mchoice[i][1] === true ) {
            this.mchoice.splice(this.mchoice.indexOf(this.mchoice[i][0]), 1);
      }}// incorrect logic
      console.log(this.mchoice);
      console.log(this.mchoice.length)
    }
  },
  components: {}
};
</script>

<style scoped>
.row {
  margin: 1% 0% 0% 5%;                                                       
}
</style>

