<template>
    <div style="margin: auto; margin-top: 32vh">
        <div>
            <router-link to="/home">
                <button class="buttonCSS">Start new questionare</button>
            </router-link>            
        </div>
        <div class="marginTop">
            <button class="buttonCSS">Manage Responses</button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.marginTop{
    margin-top: 5vh
}

.buttonCSS{
    background-color: aqua;
    border-radius: 10px;
    width: 30vw;
    height: 10vh;
}
</style>
