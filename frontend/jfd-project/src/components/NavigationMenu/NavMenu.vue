<script lang="ts">
import ResponsiveNavMenu from './ResponsiveNavMenu.vue';

export default {

   components: {
      ResponsiveNavMenu
   },
   data: () => ({
      navLinks: [
         {
            text: 'Календарь',
            path: '/calendar-resource-plan'
         },
         {
            text: 'Пул ресурсов',
            path: '/resource-registry'
         },
         {
            text: 'Реестр проектов',
            path: '/projects-registry'
         }
      ]
   })

}
</script>

<template>
   <div class="nav-menu">
      <div>
         <ResponsiveNavMenu :nav-links="navLinks" />
      </div>
   </div>
</template>


<style lang="scss" scoped>
@media (max-width: 1919px) {
   .nav-menu {
      background-color: transparent;
      border: none;
   }
}
</style>