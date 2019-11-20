<template>
    <input name="search" :value="value" @input="handleChange" />
</template>

<script>
export default {
    name: 'SearchInput',
    props: {
        value: {
            type: String,
            required: true
        }
    },
    methods: {
        handleChange(e) {
            this.$emit('input', e.target.value);
        }
    }
};
</script>

<style lang="scss" scoped>
input {
    width: 300px;
    display: flex;
    flex-flow: wrap column;
    align-items: center;
    color: white;
    text-align: center;
    font-size: 20px;
    height: 30px;
    border: 0;
    border-bottom: 1px solid white;
    background: none;
    transition: box-shadow 0.5s;
    @media (min-width: 768px) {
        margin-top: 2rem;
        font-size: 25px;
    }
}

input:focus {
    outline: none;
    box-shadow: 0 10px 20px -8px rgba($color: white, $alpha: 0.3);
}
</style>
