<template>
<div class="linear-gradient h-screen flex items-center justify-center p-2">
  <div class="container w-full md:w-1/2 lg:w-1/4">
    <h1 class="font-hairline text-white font-sans pb-4 text-center">TODO's</h1>
    <div class="rounded border shadow bg-white overflow-hidden">
      <div>
        <label v-for="(item, key) in items" :key="key" :for="key" class="py-4 px-8 bg-grey-lighter border-b flex items-center" :class="{'bg-green-lighter': item.checked}">
          <input class="mr-8" :id="key" type="checkbox" :name="key" :value="item.checked" v-model="item.checked">
          {{item.title}}
        </label>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {title: 'Du beurre', checked: true},
        {title: 'Du fromage', checked: false},
        {title: 'Du vin', checked: false},
        {title: 'Du pain', checked: false},
      ]
    }
  }
}
</script>
