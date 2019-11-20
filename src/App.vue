<template>
    <div class="wrapper">
        <hero-image />
        <Claim />
        <search-input v-model="searchValue" @input="handleInput" />
    </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';
import HeroImage from '@/components/HeroImage.vue';

const API = 'https://images-api.nasa.gov';

export default {
    name: 'App',
    components: {
        Claim,
        SearchInput,
        HeroImage
    },
    data() {
        return {
            searchValue: '',
            results: []
        };
    },
    methods: {
        handleInput: debounce(function() {
            axios
                .get(`${API}/search?q=${this.searchValue}&media_type=image`)
                .then(response => {
                    this.results = response.data.collection.items;
                })
                .catch(error => {
                    console.log(error);
                });
        }, 500)
    }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800&display=swap');

.wrapper {
    color: white;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
}
</style>
