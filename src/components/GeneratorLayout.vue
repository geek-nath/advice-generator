<template>
    <div class="layout p-5 shadow position-relative">
        <AdivceHeading id="adviceId" />
        <AdviceFromApi id="adviceText" />
        <ComponentButton @generatedAdvice="getGeneratedAdviceFromApi" />
    </div>
</template>

<script> 
    import AdivceHeading from './Heading.vue'
    import AdviceFromApi from './AdviceText.vue'
    import ComponentButton from './Button.vue'

    window.onload = ()=> {
        fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(result => {
            console.log(result);

            const adviceText = document.getElementById('adviceText');
            const adviceId = document.getElementById('adviceId');

            adviceText.innerHTML = result.slip.advice;
            adviceId.innerHTML = `Advice ${result.slip.id}`;
        });
    }

    export default {
        name: 'GeneratorLayout',

        components: {
            AdivceHeading,
            AdviceFromApi,
            ComponentButton
        },

        methods: {
            getGeneratedAdviceFromApi() {
                fetch('https://api.adviceslip.com/advice')
                .then(res => res.json())
                .then(result => {
                    console.log(result);

                    const adviceText = document.getElementById('adviceText');
                    const adviceId = document.getElementById('adviceId');

                    adviceText.innerHTML = result.slip.advice;
                    adviceId.innerHTML = `Advice ${result.slip.id}`;
                });
            }
        }
    }
</script>