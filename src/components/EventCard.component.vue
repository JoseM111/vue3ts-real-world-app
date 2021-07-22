<!-- EventCardComponent.vue -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
<!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️ -->
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { EventType } from "@/types/Event.type"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
export default defineComponent({
  name: 'EventCardComponent',
  props: {
    event: {
      type: Object as PropType<EventType>,
      required: true
    }
  }
})
</script>
<!-- 🌀🌀💻================================================= -->

// 🌀🌀💻 HTML 💻🌀🌀
<!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️ -->
<template>
  <!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️ -->
  <div class="eventCardContainer">
    
    <span>
      <b>@ {{ event.time }} on {{ event.date }}</b>
    </span>
    
    <h1><b>{{ event.title }}</b></h1>
  </div>
  <!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️ -->
</template>
<!-- 🌀🌀💻================================================ -->

// 🌀🌀💻 STYLES 💻🌀🌀
<!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️ -->
<style scoped lang="scss">
.eventCardContainer {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  /// 🎵🔲🔲️◾️◾️◾️◾️◾  (|  nested styles  |)  ◾️◾️◾️◾️◾🔲🔲🎵
  
}
/// - END OF: CONTAINER_NAMEContainer
</style>
<!-- 🌀🌀💻================================================ -->

