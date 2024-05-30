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
                },
                error: null,
                required: (value) => !!value || 'Required.'
            }
        },
        methods: {
            async create() {
                this.error = null
                const areAllFieldsFilledIn = Object.keys(this.resource).every(key => !!this.resource[key])
                if (!areAllFieldsFilledIn) {
                    this.error = 'Пожалуйста, заполните все поля'
                    return
                }
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
                            <input id="fio" required :rules="[required]" v-model="resource.fio" autocomplete="off" />
                        </div>
                        <div class="input-block">
                            <label for="personnelNumber">Табельный номер</label>
                            <input id="personnelNumber" required :rules="[required]"
                                v-model="resource.personnelNumber" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <label for="email">Почта</label>
                            <input id="email" required :rules="[required]" v-model="resource.email" autocomplete="off"/>
                        </div>
                        <div class="input-block">
                            <label for="position">Должность</label>
                            <input id="position" required :rules="[required]" v-model="resource.position" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <label for="role">Роль</label>
                            <input id="role" required :rules="[required]" v-model="resource.role" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <label for="busyness">Процент занятости</label>
                            <input id="busyness" required :rules="[required]" v-model="resource.busyness" autocomplete="off"/>
                        </div>
                        <div class="input-block">
                            <label for="resourceOwner">Владелец ресурса</label>
                            <input id="resourceOwner" required :rules="[required]" v-model="resource.resourceOwner" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <label for="projects">Проекты</label>
                            <input id="projects" required :rules="[required]" v-model="resource.projects" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="button-block">
                        <div class="row">
                            <p class="error" v-if="error" style="color: #fff;">{{ error }}</p>
                            <router-link :to="{ name: 'resource-registry' }">
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
        margin-top: 2rem;

        .row {
            align-items: center;
            justify-content: flex-end;
        }
    }
}
</style>