<template>
    <h5 class="text-center heading_text">Advice: {{ apiId }}</h5>
</template>

<script>
    export default  {
        name: "AdviceHeading",

        props: {
            apiId: {
                type: String,
                default: "0"
            }
        }
    }
</script>