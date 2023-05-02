<template>
    <div class="container">
        <h1>Methods, computed and watchers</h1>

        <div class="col">
            <input type="text" v-model="input" @keyup="search" placeholder="Method search">

            <ul>
                <li v-for="(item, index) in methodFilterList" :key="index">{{ item }}</li>
            </ul>
        </div>

        <div class="col">
            <input type="text" v-model="input2" placeholder="Computed search">
            <ul>
                <li v-for="(item, index) in computedList" :key="index">{{ item }}</li>

            </ul>
        </div>

        <div class="col">
            <input type="text" v-model="input3" placeholder="Watcher search">
            <ul>
                <li v-for="(item, index) in watchList" :key="index">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">

export default {
    data() {
        return {
            frameworksList: [
                'React',
                'Vue',
                'Backbone',
                'Ember',
                'Knockout',
                'jQuery',
                'Angular',
            ],
            input: '',
            methodFilterList: [],
            input2: '',
            input3: '',
            watchList: []
        }
    },
    methods: {
        search(): void {
            this.methodFilterList = this.frameworksList.filter(item =>
                item.toLowerCase().includes(this.input.toLowerCase())
            )
        }
    },
    computed: {
        computedList(): Array<String> {
            return this.frameworksList.filter(item => {
                return item.toLowerCase().includes(this.input2.toLowerCase())
            })

        }
    },
    watch: {
        input3: {
            handler() {
                this.watchList = this.frameworksList.filter(item => 
                    item.toLowerCase().includes(this.input3.toLowerCase())
                )
            }, immediate: true
        }
    },
    created() {
        this.search();
    },
}
</script>
<style >
.container {
    margin: 0 auto;
    padding: 30px;
    max-width: 600px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.col {
    width: 33%;
    height: 100%;
    float: left;
}

input {
    padding: 10px 6px;
    margin: 20px 10px 10px 0;
}
</style>