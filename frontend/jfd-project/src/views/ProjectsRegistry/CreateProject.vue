<script lang="ts">
import { defineComponent } from 'vue';
import NavMenu from '@/components/NavigationMenu/NavMenu.vue';
import ProjectsService from '@/services/ProjectsService';
export default defineComponent(
    {
        name: 'CreateProject',
        components: {
            NavMenu
        },
        data() {
            return {
                project: {
                    name: null,
                    projectCode: null,
                    description: null,
                    manager: null,
                    managerContacts: null,
                    startDate: null,
                    endDate: null,
                    members: null
                }
            }
        },
        methods: {
            async create() {
                try {
                    await ProjectsService.post(this.project)
                    this.$router.push({
                        name: 'projects-registry'
                    })
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }
)

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
            <div class="page-main__component page-main__card-component">
                <h1>Создание карточки проекта</h1>
                <div class="projects-registry__card">
                    <div class="row">
                        <div class="input-block">
                            <label for="name">Название проекта</label>
                            <input id="name" v-model="project.name" />
                        </div>
                        <div class="input-block">
                            <label for="projectCode">Код проекта</label>
                            <input id="projectCode" v-model="project.projectCode" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <label for="description">Краткое описание</label>
                            <input id="description" v-model="project.description" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <label for="manager">Менеджер проекта</label>
                            <input id="manager" v-model="project.manager" />
                        </div>
                        <div class="input-block">
                            <label for="managerContacts">Контакты менеджера проекта</label>
                            <input id="managerContacts" v-model="project.managerContacts" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <label for="startDate">Начало проекта</label>
                            <input id="startDate" v-model="project.startDate" />
                        </div>
                        <div class="input-block">
                            <label for="endDate">Конец проекта</label>
                            <input id="endDate" v-model="project.endDate" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <label for="members">Задействованные ресурсы</label>
                            <input id="members" v-model="project.members" />
                        </div>
                    </div>
                    <div class="button-block">
                        <div class="row">
                            <button class="button-default" @click="create">Создать</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.projects-registry__card {
    width: 70%;

    .row {
        gap: 30px;
        margin-bottom: 2rem;
    }


    .input-block-100 {
        width: 100%;
    }

    .input-block {
        width: 50%;
    }

    .button-block {

        .row {
            justify-content: flex-end;

            .button-default {
                margin-top: 2rem;
            }
        }
    }
}
</style>