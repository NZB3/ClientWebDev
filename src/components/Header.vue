<template>
<div class="root">
    <v-system-bar color="secondary">
        <a href="https://github.com/NZB3/ClientWebDev2/blob/main/src/components/Header.vue">https://github.com/NZB3</a>
        <a href=""></a>
    </v-system-bar>
        <v-app-bar tag="header">
            <router-link to="/">
                    <div class="display-inline primary" rounded>
                        <h1 class="m-0 text-uppercase white--text">
                            Edukate
                        </h1>
                    </div>
            </router-link>

            <v-spacer/>

            <nav-bar/>

            <v-spacer/>

            <div class="cal">   
                    <router-link to="/accaunt" class="ml-3">{{ login }}</router-link>
                <v-btn 
                    color="primary"
                    elevation="2"        
                    class="ml-3"
                >Выйти
                </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
    export default {
        name: 'HeaderComponent',
        components:{
            NavBar
        },
        data() {
            return {
                login:'nikoLove'
            }
        },
        watch: {
            
        },
        computed:{
            getContacts(contact) {
                return `${contact} + |`
            }
        },
    }
</script>
<style>
    .cal{
        display:flex;
        flex-wrap: wrap;
        flex-direction: row;
    }
</style>