<template>
<div>
    <Mchoice v-bind:surveys="this.q6"> </Mchoice>
    <QYesNo v-bind:surveys="this.q2"> </QYesNo>
    <Qimg v-bind:surveys="this.q7"> </Qimg>
    <Qtextinput v-bind:surveys="this.q1"> </Qtextinput>
</div>
</template>
<script>
import Mchoice from './Mchoice'
import QYesNo from './QYesNo'
import Qimg from './Qimg'
import Qtextinput from './Qtextinput'

import {firestore} from '../firebase.js'
export default {
    name: 'surveyloader',
    components:{
        Mchoice,QYesNo,Qimg,Qtextinput
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
            q1 : firestore.collection('surveys').doc('q1')
        }
    }
    
}
</script>
