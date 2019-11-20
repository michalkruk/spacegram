<template>
    <div class="claimWrapper">
        <h1 class="claim">Spacegram</h1>
        <p class="subclaim">
            Discover photos and informations about objects in galaxy, and watch
            places in space.
        </p>
        <p class="subclaim">
            Type anything realted to space to start your journey.
        </p>
    </div>
</template>

<script>
export default {
    name: 'Claim'
};
</script>

<style lang="scss" scoped>
.claimWrapper {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
}

.claim {
    font-size: 50px;
    margin: 0;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
        font-size: 85px;
    }
    @media (min-width: 1024px) {
        font-size: 110px;
    }
}

.subclaim {
    font-size: 15px;
    text-align: center;
    font-weight: 400;

    @media (min-width: 768px) {
        font-size: 20px;
    }
}
</style>
