<!-- HomePage.vue -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
<!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️ -->
<script lang="ts">
import { defineComponent } from 'vue'
import EventCardComponent from '@/components/EventCard.component.vue'
import { EVENTS_MOCK_DATA } from "@/data/events.data"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
export default defineComponent({
  name: 'HomePage',
  components: {
    EventCardComponent,
  },
  // Component options data
  data: () => ({
    events: EVENTS_MOCK_DATA.events,
  })
})
</script>
<!-- 🌀🌀💻================================================= -->

// 🌀🌀💻 HTML 💻🌀🌀
<!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️ -->
<template>
  <!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️ -->
  <div class="homePageContainer">
    
    <!--⚫️ Event-Card-Component ⚫️-->
    <EventCardComponent
        v-for="event in events"
        :key="event.id"
        :event="event"
    />
    
  </div>
  <!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️ -->
</template>
<!-- 🌀🌀💻================================================ -->

// 🌀🌀💻 STYLES 💻🌀🌀
<!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️ -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.homePageContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  /// 🎵🔲🔲️◾️◾️◾️◾️◾  (|  nested styles  |)  ◾️◾️◾️◾️◾🔲🔲🎵
  
}

/// - END OF: homePageContainer
</style>
<!-- 🌀🌀💻================================================ -->

