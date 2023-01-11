<template>
    <div class="root">
        <v-app-bar class="align-center">
            <router-link to="/">
                    <div class="display-inline primary" rounded>
                        <h1 class="m-0 text-uppercase white--text">
                            Edukate
                        </h1>
                    </div>
                </router-link>
                <v-spacer/>
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
            <v-spacer/>
            <router-link to="/sign_in">
                <v-btn
                    class="mr-3"
                    color="primary"
                    depressed
                    elevation="2"
                    
                    outlined
                >Sign in</v-btn>
            </router-link>
            <router-link to="/sign_up">
                <v-btn 
                    color="primary"
                    elevation="2"
                   
                    class="mr-2"
                >Sign up</v-btn>
            </router-link>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent',
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
                {
                    name: 'Courses',
                    route: 'courses'
                },
                {
                    name: 'Contact',
                    route: 'contact'
                } 
            ],
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
            
            contacts: {
                phone: '+012 345 6789',
                email: 'info@example.com'
            }
        }),
        watch: {
            
        },
        computed:{
            getContacts(contact) {
                return `${contact} + |`
            }
        },
        methods: {
            routeTo(page){
                this.$router.push({
                    name: page.route
                })
 
            }
        }
    }
</script>
