<script lang="ts">
import NavMenu from '@/components/NavigationMenu/NavMenu.vue';
import AssignmentsService from '@/services/AssignmentsService';
import { defineComponent } from 'vue'

export default defineComponent({

    name: 'AssignmentsRegistry',
    components: {
        NavMenu
    },
    data () {
        return {
            title: 'Реестр задач',
            assignments: null,
            showDotMenu: false
        }
    },
    async mounted() {
        // backend request
        this.assignments = (await AssignmentsService.getAssignmentDetails()).data
    }
})

</script>

<template>
    <div class="projects-registry__page">
        <header>
            <img class="logo" src="../../assets/img/rc-logo-1920w.svg" alt="Управление загрузкой ресурсов">
            <div class="header-content__nav">
                <nav-menu></nav-menu>
            </div>
        </header>
        <main>
            <div class="page-title__block">
                <h1>{{ title }}</h1>
                <router-link :to="{ name: 'projects-registry-create' }">
                    <button class="button-default">Добавить проект</button>
                </router-link>
            </div>
            <div class="page-main__component">
                <h1>{{ assignments.name }}</h1>
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.dot-menu__block {
    position: relative;

    .dot-menu-icon {
        cursor: pointer;
    }

    .dot-menu-content {
        background-color: black;
        border: 1px solid #C7C6BE;
        border-radius: 5px;
        padding: 10px;
        width: 100%;

        button {
            background: transparent;
            border: none;
            cursor: pointer;
            width: 300px;

            .row {
                align-items: center;
                justify-content: space-between;
            }
        }
    }
}

.open-menu {
    display: block;
    padding: 4px 20px;
    position: absolute;
    left: 14px;
    top: 0px;
    z-index: 1;
}

.closed-menu {
    display: none;
    height: 0;
}
</style>