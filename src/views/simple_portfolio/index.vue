<script setup>
    import Layout from "../../layouts/index.vue";
    import PortfolioItems from '../../components/portfolioItem/index.vue';
</script>

<template>
    <Layout>
        <template #title>
            Portafolio
        </template>
        <template #content>
            <PortfolioItems/>
        </template>
    </Layout>
</template>