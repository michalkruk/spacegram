<template>
    <div class="searchWrapper">
        <input name="search" v-model="searchValue" @input="handleInput" />
    </div>
</template>

<script>
export default {
    name: 'SearchInput'
};
</script>

<style lang="scss" scoped>
.searchWrapper {
    width: 300px;
    display: flex;
    flex-flow: wrap column;
    align-items: center;

    input {
        height: 30px;
        border: 0;
        border-bottom: 1px solid white;
        background: none;
    }
}
</style>
