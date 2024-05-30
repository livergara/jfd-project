<script lang="ts">
import NavMenu from '@/components/NavigationMenu/NavMenu.vue'
import ResourceService from '@/services/ResourceService';
export default {
    components: {
        NavMenu
    },
    data() {
        return {
            resource: {}
        }
    },
    methods: {
        // @ts-ignore
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    async mounted() {
        const resourceId = this.$route.params.resourceId
        this.resource = (await ResourceService.show(resourceId)).data
    },
}
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
            <div class="page-main__component page-main__card-component">
                <h1>{{ resource.fio }}</h1>
                <div class="resource-registry__card">
                    <div class="row">
                        <div class="input-block">
                            <h2>Табельный номер</h2>
                            <p>{{ resource.personnelNumber }}</p>
                        </div>
                        <div class="input-block">
                            <h2>Почта</h2>
                            <p>{{ resource.email }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <h2>Должность</h2>
                            <p>{{ resource.position }}</p>
                        </div>
                        <div class="input-block">
                            <h2>Процент занятости</h2>
                            <p>{{ resource.busyness }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <h2>Роль</h2>
                            <p>{{ resource.role }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <h2>Владелец ресурса</h2>
                            <p>{{ resource.resourceOwner }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <h2>Проекты</h2>
                            <p>{{ resource.projects }}</p>
                        </div>
                    </div>
                    <div class="button-block">
                        <div class="row">
                            <router-link :to="{ name: 'resource-registry' }">
                                <button class="button-cancel">Назад</button>
                            </router-link>
                            <button class="button-default" @click="navigateTo({
                                name: 'resource-edit',
                                params: {
                                    resourceId: resource.id
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
.resource-registry__card {
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