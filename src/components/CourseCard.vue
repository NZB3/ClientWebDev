<template>
  <div class="root">
    <v-card variant="outlined"
    >
      <v-card-title><h2><b>{{ this.course.title }}</b></h2></v-card-title>
      <v-card-text><p>{{ this.course.description }}</p></v-card-text>
      <v-card-actions>
        <router-link
              class="no-underline cursor-pointer"
              :to="{ name: 'course', params: { courseId: this.course.id } }"
          ><v-btn>Перейти к курсу</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
  </template>

<script>
export default {
  name:'CourseCard',
  props: {
    course: Object,
  }
}
</script>

<style>
  .root{
    
  }
</style>