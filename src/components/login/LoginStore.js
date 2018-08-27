let store = {
    state: {
        accountNo: '1',
        password: '2'
    },
    mutations: {
        login: (state) => {
            console.log(`accountNo: ${state.accountNo}, password: ${state.password}`)
        }
    },
    actions: {}
}

export default store
