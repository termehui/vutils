<template>
    <section>
        <h1>Media Query</h1>
        <p v-if="isMobile">Mobile</p>
        <p v-if="isDesktop">Desktop</p>
    </section>
</template>

<script lang="ts" setup>
import { useMedia } from "../src/index";

const isMobile = useMedia("(max-width: 767px)");
const isDesktop = useMedia("(min-width: 768px)");
</script>
