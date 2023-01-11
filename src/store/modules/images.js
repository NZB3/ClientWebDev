export default{
    actions: {
        async fetchImages(context){
            const res = await fetch("/api/images.json");
            const images = await res.json();
            context.commit("updateImage", images)
        }
    },
    mutations: {
        updateImage(state, images){
            state.images = images
        }
    },
    state:{
        images:[]
    },
    getters:{
        allImages(state){
            return state.images;
        }
    }
}