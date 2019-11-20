<template>
    <div class="wrapper">
        <Claim />
        <search-input />
    </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';

const API = 'https://images-api.nasa.gov';

export default {
    name: 'Search',
    components: {
        Claim,
        SearchInput
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

<style lang="scss" scoped>
.wrapper {
    color: white;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-image: url('../assets/heroimage.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 0%;
}
</style>
