<template>
  <div class="root">
      <course-card :course="this.course"/>
    
  </div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';
export default {
  components:{
    CourseCard
  },
    promise:{
        course: Object
    }
}
</script>

<style>

</style>