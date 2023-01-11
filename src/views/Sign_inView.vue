<template>
    <v-container fluid fill-height tag="main">
      <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar color="primary" class="white--text">
                  <v-toolbar-title>Вход</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                      <v-text-field
                        name="login"
                        label="Login"
                        type="text"
                        :value="this.login"
                        v-model="login"
                      ></v-text-field>
                      <v-text-field
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        :value="this.password"
                        v-model="password"
                      ></v-text-field>
                      <div class="reg__link mt-4">
                      <router-link to="/sign_up">
                        <v-btn color="accent"
                               elevation="2"
                        >Регистрация</v-btn>
                      </router-link> 
                      </div>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  
                  <router-link to="/" :isLogined="true"
                                      :login="login"
                  >
                    <v-btn color="primary">Войти</v-btn>
                  </router-link>
                </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </template>
  
  <script>
  export default {
    props:{
      person: {
        Object,
        default: ['','','']
      }
    },
    data: () => ({
      login: `${this.person.login}`,
      password: `${this.person.password}`,
      isLogined: false
    }),
    methods: {
      loginForm() {
        return {
          login: this.login,
          password: this.password,
        }  
      }
    },
  }
  </script>
  
  <style scoped>
  .reg__link{
    font: 2em sans-serif;
    margin: 0 auto;
    max-width: 170px;
  }
  #link {
    color: rgb(59, 59, 59);
  }
  </style>