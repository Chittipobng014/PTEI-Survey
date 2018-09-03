<template>
    <div>
    <Mchoice v-bind:surveys="this.q6"> </Mchoice>
    <QYesNo v-bind:surveys="this.q2"> </QYesNo>
    <Qimg v-bind:surveys="this.q7"> </Qimg>
    <Qtextinput v-bind:surveys="this.q1"> </Qtextinput>
    <Qexpect v-bind:surveys="this.q17"> </Qexpect>
    <Qagreement v-bind:surveys="this.q19"> </Qagreement>
    <Qsatisfaction v-bind:surveys="this.q18"> </Qsatisfaction>
    <Qhours v-bind:surveys="this.q16"> </Qhours> 
    </div>
</template>

<script>
import Mchoice from './Mchoice'
import QYesNo from './QYesNo'
import Qimg from './Qimg'
import Qtextinput from './Qtextinput'
import Qexpect from './Qexpect'
import Qagreement from './Qagreement'
import Qsatisfaction from './Qsatisfaction'
import Qexpend from './Qexpend'
import Qhours from './Qhours'
import {firestore} from '../firebase.js'

export default {
    name: 'surveyloader',
    components:{
        Mchoice,QYesNo,Qimg,Qtextinput,Qexpect,Qagreement,Qsatisfaction,Qexpend,Qhours
    },
    data(){
        return{    
            surveys:{
            }, 
        }
    },
    firestore (){
        return {
            q6 : firestore.collection('surveys').doc('q6'),
            q2 : firestore.collection('surveys').doc('q2'),
            q7 : firestore.collection('surveys').doc('q7'),
            q1 : firestore.collection('surveys').doc('q1'),
            q17 : firestore.collection('surveys').doc('q17'),
            q19 : firestore.collection('surveys').doc('q19'),
            q18 : firestore.collection('surveys').doc('q18'),
            q12 : firestore.collection('surveys').doc('q12'),
            q16 : firestore.collection('surveys').doc('q16')
                }
    }
    
}
</script>
