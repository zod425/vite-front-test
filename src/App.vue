<template>

  <h1>Kafka 테스트</h1>
  <input type="text" v-model="params.message">
  <button @click="testKafka">테스트</button>
  <p> kafka 결과 : {{kafkaResult}}</p>

  <h1>Feign 테스트</h1>
  <input type="text" v-model="params.feignMessage">
  <button @click="testFiegn">테스트</button>
  <p> feign 결과 : {{feignResult}}</p>
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
      kafkaResult: {},
      feignResult: {},
      params: {},
    }
  },

  methods: {

    testKafka() {
      exampleService.kafka(this.params).then(res => {
        this.kafkaResult = res;
      });
    },
    testFiegn() {
      exampleService.getFeign(this.params).then(res => {
        this.feignResult = res;
      });
    }
  }
}
</script>
