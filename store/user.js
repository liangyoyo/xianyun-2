export const state=()=>({
    //采用接口返回的数据结构
    userInfo:{
      token:'',
      user:{},
    }
})
export const mutations={
    setUserInfo(state,data){
      state.userInfo=data
    },
     // 清除用户数据
    cleanUserInfo(state, info){
        if(process.browser){
            localStorage.removeItem("userInfo");
        }
        state.userInfo = {};
    }
}
export const actions={
    //登录
    login({commit},data){
        return this.$axios({
         url:'/accounts/login',
         method:'post',
         data:data
        }).then(res=>{
            const data =res.data
            // 保存到state
            commit('setUserInfo',data)
            return data
        })
    },
    //注册
    register({commit}, data){
        return this.$axios({
            url: "/accounts/register",
            method: "POST",
            data:data
        }).then(res=>{
            const data =res.data
            // 保存到state
            commit('setUserInfo',data)
            return data
        })
    }
}
