<script lang="ts">
import NavMenu from '@/components/NavigationMenu/NavMenu.vue'
import ResourceService from '@/services/ResourceService';
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ResourceRegistry',
    components: {
        NavMenu,

    },
    data() {
        return {
            title: 'Матрица компетенций',
            resources: null as null | { id: number; fio: string; email: string, position: string; role: string; busyness: string; projects: string[] }[],
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
        this.resources = (await ResourceService.index()).data
    }
})

</script>

<template>
    <div class="resource-registry__page">
        <header>
            <img class="logo" src="../../assets/img/rc-logo-1920w.svg" alt="Управление загрузкой ресурсов">
            <div class="header-content__nav">
                <nav-menu></nav-menu>
            </div>
        </header>
        <main>
            <div class="page-title__block">
                <h1>{{ title }}</h1>
                <router-link :to="{ name: 'resource-registry-create' }">
                    <button class="button-default">Добавить ресурс</button>
                </router-link>
            </div>
            <div class="page-main__component">
                <table>
                    <thead>
                        <tr>
                            <th> </th>
                            <th>ФИО</th>
                            <th>Почта</th>
                            <th>Должность</th>
                            <th>Роль</th>
                            <th>% занятости</th>
                            <th>Проекты</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="resource in resources" :key="resource.id">
                            <td>
                                <button class="button-view" @click="navigateTo({
                                    name: 'resource-view',
                                    params: {
                                        resourceId: resource.id
                                    }
                                })"><img src="../../assets/icons/viewing.svg" alt="">
                                </button>
                            </td>
                            <td> {{ resource.fio }}</td>
                            <td> {{ resource.email }}</td>
                            <td> {{ resource.position }}</td>
                            <td> {{ resource.role }}</td>
                            <td> {{ resource.busyness }}</td>
                            <td> {{ resource.projects }}</td>
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