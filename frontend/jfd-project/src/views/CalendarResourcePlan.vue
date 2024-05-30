<script lang="ts">
import NavMenu from '@/components/NavigationMenu/NavMenu.vue';
import ProjectsService from '@/services/ProjectsService';
import ResourceService from '@/services/ResourceService';
import { defineComponent, ref } from 'vue'


export default defineComponent({

    name: 'CaldendarResourcePlan',
    components: {
        NavMenu
    },
    data() {
        return {
            title: 'Календарно-ресурсный план',
            projects: null as null | { id: number; name: string; projectCode: number, description: string; manager: string; managerContacts: string; }[],
            resources: null as null | { id: number; fio: string; email: string, position: string; role: string; busyness: string; projects: string[] }[],
        }
    },
    methods: {
        // @ts-ignore
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    async mounted() {
        // backend request
        this.projects = (await ProjectsService.index()).data,
            this.resources = (await ResourceService.index()).data
    },
})

</script>

<template>
    <div class="projects-registry__page">
        <header>
            <img class="logo" src="../assets/img/rc-logo-1920w.svg" alt="Управление загрузкой ресурсов">
            <div class="header-content__nav">
                <nav-menu></nav-menu>
            </div>
        </header>
        <main>
            <div class="page-title__block">
                <h1>{{ title }}</h1>
            </div>
            <div class="page-main__component">
                <g-gantt-chart chart-start="2024-01-01 12:00" chart-end="2024-12-31 12:00" precision="month"
                    bar-start="myBeginDate" bar-end="myEndDate" color-scheme="dark">
                    <g-gantt-row :bars="MiDeBelyakova" label="Белякова Милана Денисовна" />
                    <g-gantt-row :bars="NVOrlov" label="Орлов Никита Владимирович" />
                    <g-gantt-row :bars="ElMLeonov" label="Леонов Эльдар Михайлович" />
                    <g-gantt-row :bars="EVPonomareva" label="Пономарева Екатерина Викторовна" />
                </g-gantt-chart>
            </div>
        </main>
    </div>
</template>

<style lang="scss">
.g-gantt-row-label, .g-upper-timeunit{
    color: #C7C6BE;
    font-size: 15px;
    letter-spacing: 4.8px;
}

.g-gantt-row{
    background-color: rgba(0, 0, 0, 0.75);
}

.g-gantt-row-label{
    min-height: 32px;
}

</style>

<script lang="ts" setup>

const MiDeBelyakova = ref([
    {
        myBeginDate: "2024-01-17 09:00",
        myEndDate: "2024-10-17 18:00",
        ganttBarConfig: {
            id: "1",
            label: "Atom.Space",
            style: {
                background: '#F4D16A'
            }
        }
    }
])
const NVOrlov = ref([
    {
        myBeginDate: "2024-03-15 09:00",
        myEndDate: "2024-05-27 18:00",
        ganttBarConfig: {
            id: "2", 
            label: "Геймификация",
            style: {
                background: '#F4D16A'
            }
        }
    }
])
const ElMLeonov = ref([
    {
        myBeginDate: "2024-08-05 09:00",
        myEndDate: "2024-11-17 18:00",
        ganttBarConfig: {
            id: "3", 
            label: "Геймификация",
            style: {
                background: '#F4D16A'
            }
        }
    }
])
const EVPonomareva = ref([
    {
        myBeginDate: "2024-03-22 09:00",
        myEndDate: "2024-12-03 18:00",
        ganttBarConfig: {
            id: "4", 
            label: "Портал ГА",
            style: {
                background: '#F4D16A'
            }
        }
    }
])


</script>