<template>
  <div class="hello">
    <h1>{{name}}  {{ count }}</h1>
    <h2>这是首页 {{ reversedMsg }}</h2>
    <button @click="changeValue"></button>
  </div>
</template>

<script>
export default {
    name: 'HomePage',
    data () {
        return {...this.$store.state.HomePageStore}
    },
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
        reversedMsg: function () {
            return this.$store.state.HomePageStore.name.split('').reverse().join('')
        }
    },
    methods: {
        changeValue: function (el) {
            console.log(el)
            this.$store.commit('_setState', {
                name: 'bbb',
                count: 1
            })
            this.$router.push('Login')
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
