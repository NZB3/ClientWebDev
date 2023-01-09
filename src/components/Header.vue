<template>
    <div class="root">
        <v-app-bar class="align-center">
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
            <div class="d-inline-flex align-items-center text-white" color="secondary">
                <span><i class="fa fa-phone-alt mr-2" color="secondary"></i>+012 345 6789</span>
                <span class="px-3">|</span>
                <span><i class="fa fa-envelope mr-2" color="secondary"></i>info@example.com</span>
            </div>
            <v-spacer/>
            <router-link to="/sign_in">
                <v-btn
                    class="mr-3"
                    color="primary"
                    depressed
                    elevation="2"
                    large
                    outlined
                >Sign in</v-btn>
            </router-link>
            <router-link to="/sign_up">
                <v-btn 
                    color="primary"
                    elevation="2"
                    large
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
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
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
            contacts: {
                phone: '+012 345 6789',
                email: 'info@example.com'
            }
        }),
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
