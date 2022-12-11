<template>
    <PageComponent title="Test Cats API">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Breed</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody  class="divide-y divide-gray-200">
                <tr v-for="cat in listItems">
                    <td>{{cat.name}}</td>
                    <td>{{cat.age}}</td>
                    <td>{{cat.breed}}</td>
                    <td>{{cat.gender}}</td>
                </tr>
            </tbody>
        </table>
   </PageComponent>
</template>
<script setup>
    import PageComponent from '../components/PageComponent.vue';
    import axios from 'axios';
    import { ref } from 'vue';
    const baseURL="https://www.raymondcamden.com/.netlify/functions/get-cats";
    let listItems = ref([]);
    async function getData() {
        const res = await fetch(baseURL);
        const finalRes = await res.json();
        listItems.value = finalRes;
        axios.fetch(baseURL,res)
        }
    
    getData();
</script>  