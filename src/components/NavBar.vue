<template>
    <div class="root">
        <nav> 
            <a 
                class="ml-3"
                v-for="(page, index) in pages"
                :key="index"
                @click="routeTo(page)"
            >
                <v-btn color="primary"
                    depressed
                    large
                    text
                >{{ page.name }}</v-btn>
            </a>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data: () => ({
        pages: [
                {
                    name: 'Home',
                    route: 'home'
                },
                {
                    name: 'About',
                    route: 'about'
                },
            ],
    }),
    methods: {
            routeTo(page){
                this.$router.push({
                    name: page.route
                })
 
            }
        }
}
</script>

<style>

</style>