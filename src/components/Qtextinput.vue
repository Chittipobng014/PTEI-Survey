<template>
    <div style="margin: 1% 1% 2% 4%; min-height: 5vh;  max-height: 60vh;">
        <h2>{{surveys.qid}}. {{surveys.qname}}</h2>
        <div class="row">  
            <h2>Answer :</h2> 
            <b-col sm="8">
                <b-form-input v-model="textinput" @change="edit(textinput)" id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
            </b-col>
        </div>
    </div>
</template>
<script>
export default {
  props: ["surveys"],
  name: "qtextinput",
  data() {
    return {
      textinput: ""
    };
  },
  created() {},
  methods: {
    edit: function(data) {
      console.log(data);
    }
  }
};
</script>

<style scoped>
.row {
  margin-top: 8vh;
}
</style>