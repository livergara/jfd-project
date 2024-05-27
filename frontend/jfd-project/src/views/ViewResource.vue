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
    async mounted() {
        const resourceId = this.$route.params.resourceId
        this.resource = (await ResourceService.show(resourceId)).data
    },
}
</script>

<template>
    <div class="resource-registry__page">
        <header>
            <img class="logo" src="../assets/img/rc-logo-1920w.svg" alt="Управление загрузкой ресурсов">
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

                        </div>
                        <div class="input-block">
                            <p></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">

                        </div>
                        <div class="input-block">

                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">

                        </div>
                    </div>
                    <div class="row">
                        <div class="resource-registry__card__input-block">

                        </div>
                        <div class="input-block">

                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">

                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style></style>