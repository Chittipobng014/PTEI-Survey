<template>
    <div>
        <form-wizard title="" subtitle="">
            <!-- Loop through each question and create a tab-content -->
            <!-- Check the question type and load corresponding component -->            
                <tab-content title="" v-for="question in questions" :key="question.qid">
                    <!-- v-if="question.type == ???" -->
                    <mchoice v-if="question.type == 'mchoice'" :surveys="question"></mchoice>
                    <q-yes-no v-if="question.type == 'q-yes-no'" :surveys="question"></q-yes-no>
                    <qimg v-if="question.type == 'qimg'" :surveys="question"></qimg>
                    <qtextinput v-if="question.type == 'qtextinput'" :surveys="question"></qtextinput>                                            
                    <qexpect v-if="question.type == 'qexpect'" :surveys="question"></qexpect>
                    <qagreement v-if="question.type == 'qagreement'" :surveys="question"></qagreement>
                    <qsatisfaction v-if="question.type == 'qsatisfaction'" :surveys="question"></qsatisfaction>
                    <qexpend v-if="question.type == 'qexpend'" :surveys="question"></qexpend>
                    <qhours v-if="question.type == 'qhours'" :surveys="question"></qhours>
                </tab-content>     
        </form-wizard>
        <b-modal ref="modal" body-class="hhhh" centered hide-footer hide-header hide-header-close  title=" ">
            <circle8 size='72'></circle8>
        </b-modal>
    </div>
</template> 



<script>
import Mchoice from "./Mchoice";
import QYesNo from "./QYesNo";
import Qimg from "./Qimg";
import Qtextinput from "./Qtextinput";
import Qexpect from "./Qexpect";
import Qagreement from "./Qagreement";
import Qsatisfaction from "./Qsatisfaction";
import Qexpend from "./Qexpend";
import Qhours from "./Qhours";
import { firestore } from "../firebase.js";
import {Circle8} from "vue-loading-spinner";

export default {
  name: "surveyloader",
  components: {
    Circle8,
    Mchoice,
    QYesNo,
    Qimg,
    Qtextinput,
    Qexpect,
    Qagreement,
    Qsatisfaction,
    Qexpend,
    Qhours,
  },
  data() {
    return {
      questions: [],
      true: true
    };
  },
  firestore() {
    return {
      // Get all questions and render all at once
      surveys: firestore.collection("surveys").orderBy("qid")
    };
  },
  async mounted() {    
    this.questions = await this.surveys;
    this.$refs.modal.show();
    setTimeout(() => {
      this.$refs.modal.hide();
    }, 2400);
  }
};
</script>

<style>
.hhhh{
  max-height: 0px;
  padding: 0px
}
</style>
