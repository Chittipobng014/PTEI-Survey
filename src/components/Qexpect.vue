<template>
<div style="margin: 1% 1% 1% 1%; min-height: 5vh;  max-height:70vh;">
       <h5>{{surveys.qid}}. {{surveys.qname}}</h5>
       <div class="h3" v-for="ans in surveys.ans" v-bind:key="ans.ansname"><h4>{{ans.ansname}}</h4></div>
       <h5>{{ surveys.titleE }}</h5>
        <div class="row">
            <div class="col" v-for="imgExpect in surveys.imgExpect" v-bind:key="imgExpect.optionE"><b-img rounded="circle" :src="imgExpect.urlE" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col" v-for="imgExpect in surveys.imgExpect" v-bind:key="imgExpect.optionE"><p>{{imgExpect.optionE}}</p></div>
        </div>
        <h5>{{ surveys.titleS }}</h5>
        <div class="row">
            <div class="col" v-for="imgSatis in surveys.imgSatis" v-bind:key="imgSatis.optionS"><b-img rounded="circle" :src="imgSatis.urlS" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col" v-for="imgSatis in surveys.imgSatis" v-bind:key="imgSatis.optionS"><p>{{imgSatis.optionS}}</p></div>
        </div>

</div>
</template>
<script>
export default {
  props: ["surveys"],
  name: "qexpect",
  data() {
    return {};
  },
  created() {}
};
</script>

<style scoped>
.img-body {
  width: 10vw;
  height: 11vh;
  box-shadow: 0 0 10px #000000;
}
.col {
  margin-top: 12px;
  text-align: center;
}
.h3 {
  color: rgb(85, 53, 4);
  margin-top: 3vh;
  text-align: justify;
  text-indent: 45px;
}
.hr {
  border-top: 10px solid rgba(0, 0, 0, 0.1);
  size: 6;
}
</style>
