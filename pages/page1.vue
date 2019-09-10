<template>
  <div id="page1-id" class="bar">
    <MessageList :messages="messages"/>
  </div>
</template>

<script>
import MessageList from '@/components/MessageList'

export default {
  name: 'app',
  data: () => ({ messages: ['Hey John', 'Howdy Paco'] }),
  components: {
    MessageList
  }
}
</script>