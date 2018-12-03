<template>
    <div class="container">
        <h1>Hello skeleton</h1>

        <h3>Following elements are included:</h3>
        <ul v-for="element in elements" class="list-unstyled">
            <li> {{element}} </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: 'myVue',
        data(){
            return {
                elements: [
                    "Symfony",
                    "Vue",
                    "axios",
                    "vue-translate"
                ]
            }
        }
    }
</script>