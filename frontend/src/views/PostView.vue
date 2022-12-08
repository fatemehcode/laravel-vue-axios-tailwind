<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

// reactive state
let posts = ref([]);
// mounted
onMounted(async () => {
  // get api from laravel backend
  await axios
    .get('/posts')
    .then((res) => {
      // assign state posts with response data
      posts.value = res.data.data;
    })
    .catch((error) => {
      console.log(error.res.data);
    });
});
</script>
<template>
  <main class="container flex items-center justify-center h-screen mx-auto">
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="p-1.5 w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    Slug
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                  >
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="post in posts" :key="post.id">
                  <td
                    class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                  >
                    {{ post.id }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {{ post.title }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {{ post.slug }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {{ post.description }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {{ post.created_at }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>