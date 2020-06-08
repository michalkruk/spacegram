<template>
    <div :class="[{ flexStart: step === 1 }, 'wrapper']">
        <transition name="slide">
            <h4 class="logo" v-if="step === 1">Spacegram</h4>
        </transition>
        <transition name="fade">
            <hero-image v-if="step === 0" />
        </transition>
        <Claim v-if="step === 0" />
        <search-input
            v-model="searchValue"
            @input="handleInput"
            :dark="step === 1"
        />

        <div class="results" v-if="results && !loading && step === 1">
            <Item
                v-for="item in results"
                :item="item"
                :key="item.data[0].nasa_id"
                @click.native="handleModalOpen(item)"
            />
        </div>
        <div v-if="error" class="error">
            <h1>
                Unknown error
            </h1>
        </div>
        <Modal
            v-if="modalOpen"
            :item="modalItem"
            @closeModal="modalOpen = false"
        />
    </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';
import HeroImage from '@/components/HeroImage.vue';
import Item from '@/components/Item.vue';
import Modal from '@/components/Modal.vue';
const API = 'https://images-api.nasa.gov';

export default {
    name: 'App',
    components: {
        Claim,
        SearchInput,
        HeroImage,
        Item,
        Modal
    },
    data() {
        return {
            loading: false,
            step: 0,
            searchValue: '',
            results: [],
            modalOpen: false,
            modalItem: null,
            error: false
        };
    },
    methods: {
        handleModalOpen(item) {
            this.modalOpen = true;
            this.modalItem = item;
        },
        handleInput: debounce(function() {
            this.loading = true;
            axios
                .get(`${API}/search?q=${this.searchValue}&media_type=image`)
                .then(response => {
                    this.results = response.data.collection.items;
                    this.loading = false;
                    this.step = 1;
                })
                .catch(error => {
                    this.error = error;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    position: relative;

    &.flexStart {
        justify-content: flex-start;
    }
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: margin-top 0.3s ease;
}

.slide-enter,
.slide-leave-to {
    margin-top: -2rem;
}

.logo {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: #1f1f1f;
}

.results {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-top: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>
