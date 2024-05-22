<script lang="ts">
import { defineComponent } from 'vue';
import AuthenticationService from '@/services/AuthenticationService';

export default defineComponent({
   data() {
      return {
         email: '',
         password: ''
      }

   },
   methods: {
      async register() {
         const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
         })
         console.log(response.data)
      }
   }
})
</script>

<template>
   <div class="register__page">
         <div class="auth__block">
            <div class="auth__block_row">
               <h1>Пожалуйста, авторизуйтесь</h1>
               <input type="email" name="email" v-model="email" placeholder="email">
               <br>
               <input type="password" name="password" v-model="password" placeholder="password">
               <br>
               <button class="button-default" @click="register">Войти</button>
               <div class="auth__block_trigger">
                  <p>я не робот, я человек</p>
                  <div class="auth__block_trigger__slider">
                  </div>
               </div>
            </div>
         </div>
   </div>
</template>

<style lang="scss" scoped>
h1 {
   margin-bottom: 3rem;
   text-transform: uppercase;
}

.button-default {
   margin-top: 1rem;
}

.auth__block_trigger {
   margin-top: 3rem;

   .auth__block_trigger__slider {
      background-color: white;
      border-radius: 5px;
      height: 8px;
      margin-top: 1.5rem;
      width: 230px;
   }
}

input {
   width: 350px;
}
</style>