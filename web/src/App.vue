<template>
<div></div>
</template>
<script>
import axios from "axios";
export default {
  name: 'App',
  created() {
    // 去请求我们刚才启动的后端得服务的 getName 接口
    axios.get('/api/getName')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }
}
</script>

