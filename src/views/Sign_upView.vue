<template>
    <v-container fluid fill-height tag="main">
      <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" class="white--text">
                <v-toolbar-title>Регистрация</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-form>
                    <v-text-field
                      name="login"
                      label="Login"
                      type="text"
                      v-model.trim="this.login"
                     
                    ></v-text-field>
                    <v-text-field
                      
                      name="email"
                      label="Email"
                      type="email"
                      v-model.trim="this.email"
                      
                    ></v-text-field>
                    <v-text-field
                     
                      name="password"
                      label="Password"
                      type="password"
                      v-model.trim="this.password"
                     
                    ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <router-link to="/sign_in" :person="regForm()">
                <v-btn color="accent">Зарегистрироваться</v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </template>
    
  
<script>
  export default {
    
    data: () => ({
      login: '',
      email: '',
      password: '',
    }),
    methods: {
      regForm() {
        return {
          login: this.login,
          email: this.email,
          password: this.password
        }
      },
    }
    
  }
</script>
  
<style scoped>

.is-invalid {
  -webkit-box-shadow: 0px 1px 5px rgba(255, 0, 0, 0.21);
  -moz-box-shadow: 0px 1px 5px rgba(255, 0, 0, 0.21);
  box-shadow: 0px 1px 5px rgba(255, 0, 0, 0.21);
  border-radius: 2%;
}

</style>