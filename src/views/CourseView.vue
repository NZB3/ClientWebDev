<template>
    <div class="root">
        <v-container>
        <header>
          <h1>Vue Online Course Site</h1>
          <CourseCard></CourseCard>
        </header>
          <CourseSummary v-for="course in courses" :key="course.id" :course="course" />
    </v-container>
        
    </div>
</template>

<script>
    import { useRoute } from 'vue-router'
    
    const route = useRoute()
    const courseId = route.params.courseId
    const course = courses.find(course => course.id === parseInt(courseId))
    const { title, lessons } = course

    export default {
        name: 'CoursesView',
        comments:{
            
        },
        data: () => ({
            text: 'Courses'
        })
    }
</script>