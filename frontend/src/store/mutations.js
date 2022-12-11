    let mutations = {
        CREATE_POST(state, post) {
            state.posts.unshift(post)
        },
        FETCH_POSTS(state, posts) {
            return state.posts = posts
        },
        DELETE_POST(state, post) {
            let index = state.posts.findIndex(item => item.id === post.id)
            state.posts.splice(index, 1)
        },
        logout:(state)=>{
            state.user.data={};
            state.user.token=null;
        },
        setUser:(state,userData)=>{
            state.user.data=userData.user;
            state.user.token=userData.token;
            sessionStorage.setItem('TOKEN',userData.token);
        },
        
    }
    export default mutations