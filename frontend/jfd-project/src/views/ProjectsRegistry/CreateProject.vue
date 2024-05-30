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
                },
                error: null,
                required: (value) => !!value || 'Required.'
            }
        },
        methods: {
            async create() {
                this.error = null
                const areAllFieldsFilledIn = Object.keys(this.project).every(key => !!this.project[key])
                if (!areAllFieldsFilledIn) {
                    this.error = 'Пожалуйста, заполните все поля'
                    return
                }
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
                            <input id="name" required :rules="[required]" v-model="project.name" autocomplete="off"/>
                        </div>
                        <div class="input-block">
                            <label for="projectCode">Код проекта</label>
                            <input id="projectCode" required :rules="[required]" v-model="project.projectCode" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <label for="description">Краткое описание</label>
                            <input id="description" required :rules="[required]" v-model="project.description" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <label for="manager">Менеджер проекта</label>
                            <input id="manager" required :rules="[required]" v-model="project.manager" autocomplete="off"/>
                        </div>
                        <div class="input-block">
                            <label for="managerContacts">Контакты менеджера проекта</label>
                            <input id="managerContacts" required :rules="[required]"
                                v-model="project.managerContacts" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <label for="startDate">Начало проекта</label>
                            <input id="startDate" required :rules="[required]" v-model="project.startDate" autocomplete="off"/>
                        </div>
                        <div class="input-block">
                            <label for="endDate">Конец проекта</label>
                            <input id="endDate" required :rules="[required]" v-model="project.endDate" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <label for="members">Задействованные ресурсы</label>
                            <input id="members" required :rules="[required]" v-model="project.members" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="button-block">
                        <div class="row">
                            <p class="error" v-if="error" style="color: #fff;">{{ error }}</p>
                            <router-link :to="{ name: 'projects-registry' }">
                                <button class="button-cancel">Отменить</button>
                            </router-link>
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
        margin-top: 2rem;

        .row {
            align-items: center;
            justify-content: flex-end;
        }
    }
}
</style>