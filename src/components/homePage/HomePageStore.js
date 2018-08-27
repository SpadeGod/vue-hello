let store = {
    state: {
        count: 0,
        name: 'zhy'
    },
    mutations: {
        _setState: (state, objs) => {
            Object.keys(objs).map(key => {
                state[key] = objs[key]
            })
        }
    },
    actions: {}
}

export default store
