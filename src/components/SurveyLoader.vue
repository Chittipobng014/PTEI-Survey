<template>
    <div>
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
