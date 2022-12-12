const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        test: 'Ciao Vue!!!'
      }
    }
  }).mount('#app')