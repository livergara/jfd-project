<script lang="ts">
import NavMenu from '@/components/NavigationMenu/NavMenu.vue';

export default {

    name: 'CalendarResourcePlan',
    components: {
        NavMenu
    },
    data () {
        return {
            title: 'Календарно-ресурсный план'
        }
    }
}

</script>


<template>
    <div class="calendar-resource-plan__page">
        <header>
            <img class="logo" src="../assets/img/rc-logo-1920w.svg" alt="Управление загрузкой ресурсов">
            <div class="header-content__nav">
                <nav-menu></nav-menu>
            </div>
        </header>
        <main>
            <h1>{{ title }}</h1>
        </main>
    </div>
</template>

<style scoped></style>