<template>
  <ul>
    <li v-bind:key='message' v-for="message in messages">
      {{ message }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  props: ['messages']
}
</script>