import axiosClient from "../axios";
let actions = {
        createPost({commit}, post) {
            axios.post('/api/posts', post)
                .then(res => {
                    commit('CREATE_POST', res.data)
                }).catch(err => {
                console.log(err)
            })
          
        },
        fetchPosts({commit}) {
            axios.get('/api/posts')
                .then(res => {
                    commit('FETCH_POSTS', res.data)
                }).catch(err => {
                console.log(err)
            })
        },
        deletePost({commit}, post) {
            axios.delete(`/api/posts/${post.id}`)
                .then(res => {
                    if (res.data === 'ok')
                        commit('DELETE_POST', post)
                }).catch(err => {
                console.log(err)
            })
        },
        login({commit},user){
            return axiosClient.post('/login',user)
            .then(({data})=>{
                commit('setUser',data);
                return data;
            })
        },
        async register({commit},user){
            const data = await axiosClient.post('/register', user);
            commit('setUser', data);
            return data;
        },
        /* async login({commit},user){
            const data = await axiosClient.post('/login', user);
            commit('setUser', data);
            return data;
        } */
    }
    
    export default actions