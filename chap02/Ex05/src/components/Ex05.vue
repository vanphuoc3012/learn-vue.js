<template >
    <div class="cotainer">
        <h1>Async fetch</h1>
        <button @click="fetchAdvice()">{{ loading ? 'Loading...' : 'Learning somthing profound' }}</button>

        <ul>
            <li v-for="(item, index) in outputData" :key="index">
                <blockquote>{{ item.slip.advice }}</blockquote>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import axios from 'axios'
export default {
    data() {
        return {
            outputData: [],
            loading: false,
        }
    },
    methods: {
        async fetchAdvice() {
            this.loading = true;
            try {
                const delay = (ms) => new Promise(res => setTimeout(res, ms));
                for (let i = 0; i < 10; i++) {
                    await delay(2500);
                    axios.get('https://api.adviceslip.com/advice').
                        then((res) => {
                            console.log(res);
                            this.asiosRes = res.data;
                            this.outputData.push(res.data);
                            console.log(this.outputData)
                        })
                }
            } catch(error) {
                console.log(error);
            } finally {
                setTimeout(() => {
                    this.loading = false;
            });
                
            }
        }
    }
}
</script>
<style scoped>
.container {
    margin: 0 auto;
    padding: 30px;
    max-width: 600px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

blockquote {
    position: relative;
    width: 100%;
    margin: 50px auto;
    padding: 1.2em 30px 1.2em 30px;
    background: #ededed;
    border-left: 8px solid #78c0a8;
    font-size: 24px;
    color: #555555;
    line-height: 1.6;
}
</style>