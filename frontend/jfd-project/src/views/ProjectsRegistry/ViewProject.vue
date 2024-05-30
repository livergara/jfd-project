<script lang="ts">
import NavMenu from '@/components/NavigationMenu/NavMenu.vue'
import ProjectsService from '@/services/ProjectsService';
export default {
    components: {
        NavMenu
    },
    data() {
        return {
            project: {}
        }
    },
    methods: {
        // @ts-ignore
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    async mounted() {
        const projectId = this.$route.params.projectId
        this.project = (await ProjectsService.show(projectId)).data
    },
}
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
                <h1>{{ project.name }}</h1>
                <div class="projects-registry__card">
                    <div class="row">
                        <div class="input-block-100">
                            <h2>Код проекта</h2>
                            <p>{{ project.projectCode }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <h2>Краткое описание</h2>
                            <p>{{ project.description }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <h2>Менеджер проекта</h2>
                            <p>{{ project.manager }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <h2>Контакты менеджера проекта</h2>
                            <p>{{ project.managerContacts }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <h2>Начало проекта</h2>
                            <p>{{ project.startDate }}</p>
                        </div>
                        <div class="input-block">
                            <h2>Конец проекта</h2>
                            <p>{{ project.endDate }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <h2>Задействованные ресурсы</h2>
                            <p>{{ project.members }}</p>
                        </div>
                    </div>
                    <div class="button-block">
                        <div class="row">
                            <router-link :to="{ name: 'projects-registry' }">
                                <button class="button-cancel">Назад</button>
                            </router-link>
                            <button class="button-default" @click="navigateTo({
                                name: 'project-edit',
                                params: {
                                    projectId: project.id
                                }
                            })">
                                Редактировать
                            </button>
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
    }

    .input-block {
        width: 50%;

        h2 {
            padding: 20px 20px 10px 20px;
        }

        p {
            background-color: rgba(255, 255, 255, 0.05);
            line-height: 2rem;
            padding: 10px 20px;
        }
    }

    .input-block-100 {
        width: 100%;

        h2 {
            padding: 20px 20px 10px 20px;
        }

        p {
            background-color: rgba(255, 255, 255, 0.05);
            line-height: 2rem;
            padding: 10px 20px;
        }
    }

    .button-block {
        margin-top: 2rem;

        .row {
            justify-content: flex-end;
        }
    }

}
</style>