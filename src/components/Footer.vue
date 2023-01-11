<template>
        <v-footer
        tag="footer"
        color="primary"
        absolute
      >
        <v-card
          flat
          tile
          width="100%"
          color="primary"
          class="text-center"
        >
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sem enim
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
</template>

<script>
    export default {
        name: 'FooterComponent',
        components: {
        },
        data: () => ({
        }),
    }
</script>

<style scoped>

</style>