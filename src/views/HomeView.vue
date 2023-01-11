<template>
  <div class="home">
      <v-container>
        <h1>Vue Online Course Site</h1>
        <div class="wrapper">
          <CourseCard class="course-cards" v-for="course in allCourses" 
                      :key="course.id" 
                      :course="course" 
          />
        </div>
      </v-container>
  </div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    CourseCard
  },
  methods: mapActions(["fetchCourses"]),
  async mounted() {
    this.fetchCourses();
  },
  computed: mapGetters(["allCourses"]),
}
</script>

<style >
  .wrapper{
    display: flex;
    flex-wrap: wrap;
  }
  .course-cards{
    /* width: 30%; */
    max-width: 30%;
    margin: 1%;
  }
</style>