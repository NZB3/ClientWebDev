export default{
   actions: {
    async fetchCourses(ctx) {
         const res = await fetch("/api/courses.json");
         const courses = await res.json();
         ctx.commit('updateCourses', courses)
    },
   },
   mutations: {
    updateCourses(state, courses){
        state.courses = courses
    }
   },
   state: {
    courses: []
   },
   getters: {
    allCourses(state){
        return state.courses;
    }
   }
}