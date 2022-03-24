<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />

  <button @click="testKafka">result: {{ result }}</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import exampleService from "@/api/modules/example";

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  data() {
    return {
      result: {},
    }
  },

  methods: {

    testKafka() {

      exampleService.kafka().then(res => {
        this.result = res.data;
      });
    }
  }
}
</script>
