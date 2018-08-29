<template>
    <div>   
        <b-form-checkbox stacked v-model="selected" :options="options">{{answer}}</b-form-checkbox>
    </div>
</template>
<script>
export default {
    name: 'checkboxAnswer',
    props: ["answer"],
    data(){
        return{
            selected: false
        }
    }
}
</script>

<style scoped>
.checkbox{

}
</style>
