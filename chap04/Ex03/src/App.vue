<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Repeat from "@/components/Repeat.vue";
import Box from "@/components/Box.vue";
import Article from "@/components/Article.vue";
export default {
  components: {
    Article,
    RouterLink,
    RouterView,
    HelloWorld,
    Repeat,
    Box
  },
  data() {
    return {
      count: 1,
    }
  }
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Repeat :config="{times: 3, content: 'Contenttt'}" />
      <button type="button" @click="count++">Count++</button>
      <Box><h3>Chiem slot of box {{count}}</h3></Box>
      <Article>
        <template v-slot:title>
          <h1>Chiem slot title</h1>
          <h1>Chiem slot title</h1>
        </template>
        <template v-slot:excerpt>
          <p>chiem slot excerpt</p>
          <p>chiem slot excerpt</p>
        </template>
      </Article>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
