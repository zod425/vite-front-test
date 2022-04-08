<template>

  <h1>공통 파라미터</h1>
  <div>
    <span>ID : </span>
    <input type="text" v-model="params.id">
  </div>

  <div>
    <span>이름 : </span>
    <input type="text" v-model="params.name">
  </div>

  <div>
    <span>전화 : </span>
    <input type="text" v-model="params.tel">
  </div>

<h2>params</h2>
<p>{{params}}</p>

  <h2>Kafka 테스트</h2>
  <button @click="testKafka">Kafka 테스트</button>
  <p> kafka 결과 : {{kafkaResult}}</p>

  <h2>Feign 테스트</h2>
  <button @click="testFiegn" :disabled="!feignResult">Feign 테스트 (10초 후 응답)</button>
  <p> feign 결과 : {{feignResult}}</p>

  <h2>Feign 오류 테스트</h2>
  <button @click="testFiegnFail">Feign 테스트</button>
  <p> feign 결과 : {{feignFailResult}}</p>
</template>

<script>
import exampleService from "@/api/modules/example";

export default {
  name: 'App',
  components: {
  },

  data() {
    return {
      kafkaResult: {},
      feignResult: {},
      feignFailResult: {},
      params: {id:"", name:"", tel: ""},
    }
  },

  methods: {

    testKafka() {
      this.kafkaResult = null;
      exampleService.kafka(this.params).then(res => {
        this.kafkaResult = res.data;
      });
    },
    testFiegn() {
      this.feignResult = null;
      exampleService.testFeign(this.params).then(res => {
        this.feignResult = res.data;
      });
    },

    testFiegnFail() {
      this.feignFailResult = null;
      exampleService.testFeignError(this.params).then(res => {
        this.feignFailResult = res.data;
      });
    }
  }
}
</script>
