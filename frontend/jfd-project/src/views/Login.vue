<script lang="ts">
import { defineComponent } from 'vue';
import AuthenticationService from '@/services/AuthenticationService';

export default defineComponent({
    data() {
      return {
         email: '',
         password: '',
         error: null
      }

   },
   methods: {
      async login() {
         try {
            const response = await AuthenticationService.login({
               email: this.email,
               password: this.password
            })
            this.$router.push({
               name: 'projects-registry'
            })
         } catch (error) {
            //   @ts-ignore
            this.error = error.response.data.error
         }
      }
   }
})
</script>

<template>
    <div class="login__page">
      <div class="auth__block">
         <div class="auth__block_row">
            <h1>Пожалуйста, авторизуйтесь</h1>
            <input type="email" 
            name="email" 
            v-model="email" 
            placeholder="email">

            <input type="password" 
            name="password" 
            v-model="password" 
            placeholder="password">

            <div class="login__page_error" v-html="error"></div>

            <button class="button-default" 
            @click="login"
            >Войти</button>
            <div class="auth__block_trigger">
               <p>Как славно жить в мире бюрократии</p>
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
   margin-top: 2rem;
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
   margin-top: 1rem;
   width: 350px;
}

.login__page_error{
   color: #C7C6BE;
   letter-spacing: 4.8px;
   line-height: 2rem;
   margin-top: 1rem;
}

@media (max-width: 768px) {

}

@media (min-width: 768px) {
   .auth__block {
        max-width: 600px;
    }

    h1{
      margin-bottom: 1.5rem;
      text-align: center;
   }
}

@media (min-width: 1024px) {
   .auth__block {
        max-width: 1340px;
    }

    h1{
      font-size: 30px;
      margin-bottom: 3rem;
   }
}

@media (min-width: 1280px) {
   h1{
      font-size: 36px;
   }
}

@media (min-width: 1440px) {
}

@media (min-width: 1920px) {
    .login__page .auth__block {
        margin-top: 8%;
    }
}
</style>