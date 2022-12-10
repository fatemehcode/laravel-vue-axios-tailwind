<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
        <RouterView/>
    </div>
  </div>
</template>

<script >
import { LockClosedIcon } from '@heroicons/vue/20/solid'
export default {
  name:'AuthLayout',
  /* data(){
    return{
      email:'',
      password:''
    }
    },
    methods: {
      handleSubmit(){
      const data={email:this.email,password:this.password}
      console.log(data);
    } 
  }*/
}
</script>