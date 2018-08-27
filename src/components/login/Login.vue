<template>
  <div class="hello">
    <input v-model="LoginStore.accountNo"/>
    <input v-model="LoginStore.password"/>
    <Button @click="login" type="primary"></Button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Login',
    created: function () {
        console.log('this is created')
    },
    mounted: function () {
        console.log(`this is mounted`, this)
        this.$store.commit('_setState', {
            name: 'abc',
            count: 1
        })
    },
    computed: {
        ...mapState(['LoginStore'])
    },
    methods: {
        login: function () {
            this.$store.commit('login')
        }
    },
    destroyed: function () {
        console.log(`this is destrory`)
    }
}
</script>

<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
