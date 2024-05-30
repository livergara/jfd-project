<script lang="ts">
import NavMenu from '@/components/NavigationMenu/NavMenu.vue';
import ProjectsService from '@/services/ProjectsService';
import { defineComponent } from 'vue'

export default defineComponent({

    name: 'ProjectsRegistry',
    components: {
        NavMenu
    },
    data() {
        return {
            title: 'Реестр проектов',
            projects: null as null | { id: number; name: string; projectCode: number, description: string; manager: string; managerContacts: string; }[],
            showDotMenu: false
        }
    },
    methods: {
        // @ts-ignore
        navigateTo(route) {
            this.$router.push(route)
        },
        showDotsMenu() {
            this.showDotMenu = !this.showDotMenu;
        }
    },
    async mounted() {
        // backend request
        this.projects = (await ProjectsService.index()).data
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
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Название проекта</th>
                            <th>Код проекта</th>
                            <th>Краткое описание</th>
                            <th>Менеджер проекта</th>
                            <th>Контакты менеджера проекта</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="project in projects" :key="project.id">
                            <td>
                                <button class="button-view" @click="navigateTo({
                                    name: 'project-view',
                                    params: {
                                        projectId: project.id
                                    }
                                })">
                                        <img src="../../assets/icons/viewing.svg" alt="">
                                </button>
                            </td>
                            <td>{{ project.name }}</td>
                            <td>{{ project.projectCode }}</td>
                            <td>{{ project.description }}</td>
                            <td>{{ project.manager }}</td>
                            <td>{{ project.managerContacts }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.button-view {
    background: transparent;
    border: none;
    cursor: pointer;
}
</style>