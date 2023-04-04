<template>
    <button v-on:click="() => created()" class="btn btn-primary">
        <fa icon="shuffle"/>
    </button>
</template>

<script>
    export default {
        name: "ComponentButton",

        methods: {
            created() {
                this.$emit('generatedAdvice');
            }
        }
    }
</script>