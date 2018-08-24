<template>
<div>
    <h1>{{ $route.params.username }}</h1>
    <b-form-input type="text" v-model="count"></b-form-input>
    <b-button v-on:click="count++">Add Count</b-button>
    <b-button v-on:click="count--">Remove Count</b-button>
</div>
</template>
<script>
    export default{
        data: function(){
            return{
                count:0
            };
        }
    };
</script>