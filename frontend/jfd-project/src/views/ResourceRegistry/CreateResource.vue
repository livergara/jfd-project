<script lang="ts">
import { defineComponent } from 'vue';
import NavMenu from '@/components/NavigationMenu/NavMenu.vue';
import ResourceService from '@/services/ResourceService';
export default defineComponent(
    {
        name: 'CreateResource',
        components: {
            NavMenu
        },
        data() {
            return {
                resource: {
                    fio: null,
                    personnelNumber: null,
                    email: null,
                    position: null,
                    role: null,
                    busyness: null,
                    resourceOwner: null,
                    projects: null,
                }
            }
        },
        methods: {
            async create() {
                try {
                    await ResourceService.post(this.resource)
                    this.$router.push({
                        name: 'resource-registry'
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
    <div class="resource-registry__page">
        <header>
            <img class="logo" src="../../assets/img/rc-logo-1920w.svg" alt="Управление загрузкой ресурсов">
            <div class="header-content__nav">
                <nav-menu></nav-menu>
            </div>
        </header>
        <main>
            <div class="page-main__component page-main__card-component">
                <h1>Создание карточки ресурса</h1>
                <div class="resource-registry__card">
                    <div class="row">
                        <div class="input-block">
                            <label for="fio">ФИО сотрудника</label>
                            <input id="fio" v-model="resource.fio" />
                        </div>
                        <div class="input-block">
                            <label for="personnelNumber">Табельный номер</label>
                            <input id="personnelNumber" v-model="resource.personnelNumber" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <label for="email">Почта</label>
                            <input id="email" v-model="resource.email" />
                        </div>
                        <div class="input-block">
                            <label for="position">Должность</label>
                            <input id="position" v-model="resource.position" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <label for="role">Роль</label>
                            <input id="role" v-model="resource.role" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <label for="busyness">Процент занятости</label>
                            <input id="busyness" v-model="resource.busyness" />
                        </div>
                        <div class="input-block">
                            <label for="resourceOwner">Владелец ресурса</label>
                            <input id="resourceOwner" v-model="resource.resourceOwner" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <label for="projects">Проекты</label>
                            <input id="projects" v-model="resource.projects" />
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
.resource-registry__card {
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