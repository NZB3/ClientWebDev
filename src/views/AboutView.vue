<template>
    <div class="root">
        <v-container >
            <h1>{{ text }}</h1>
            <v-carousel v-model="model" extends v-img >
                <v-carousel-item
                    v-for="(image, i) in allImages"
                    :key="image.id"
                >
                    <v-sheet  
                    tile
                    height="100%"
                    >
                    <img :src="image.src">
                    <v-row
                        align="center"
                        justify="center"
                        class="fill-height"
                    >
                        <div class="text-h2">
                        Slide {{ i + 1 }}
                        </div>
                    </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-container>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'AboutView',
        data: () => ({
            text: 'About',
            model: 0,
        }),
        methods: mapActions(['fetchImages']),
        async mounted() {
            this.fetchImages();
        },
        computed: mapGetters(['allImages'])
    }
</script>

<style>
    v-carousel{
        background-size: contain;
    }
</style>