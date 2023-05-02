<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Card from '@/components/Card.vue'
import TextEditorWithCount from '@/components/TextEditorWithCount.vue'
import MessageEditor from "@/components/MessageEditor.vue";
export default {
  components: {
    RouterLink,
    RouterView,
    HelloWorld,
    Card,
    TextEditorWithCount
    ,MessageEditor
  },
  data() {
    return {
      parentMessage: null
    }
  },
  methods: {
    updateParentMessage(newMessage) {
      this.parentMessage = newMessage;
    }
  }

}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <Card>
        <template v-slot:image>
          <img alt="img test" src="https://picsum.photos/id/1015/300" />
        </template>
        <template #title>
          <h2>Holiday picture</h2>
        </template>
        <template #description>
          <p>Here I can describe the contents of the picture</p>
          <p>For example what we can see in the photo is a nice landscape</p>
        </template>
      </Card>

      <TextEditorWithCount />

      <h1>Emit Section</h1>

      <p>Message: {{parentMessage}}</p>
      <MessageEditor @send="updateParentMessage"/>
      <button type="button" @click="parentMessage = null">Reset</button>
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