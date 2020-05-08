<template>
    <div>
        <h2> {{ titre }}</h2>
        <p> {{ contenu }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Article',
        props : ["titre", "contenu"]
    }
</script>

<style scoped>

</style>