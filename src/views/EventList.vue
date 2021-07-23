<!-- HomePage.vue -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
<!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️ -->
<script lang="ts">
import { defineComponent } from 'vue'
import EventCardComponent from '@/components/EventCard.component.vue'
// import { EVENTS_MOCK_DATA } from "@/data/events.data"
import EventsService from '@/services/Events.service.ts'
import { IEventAPI } from "@/types/Event.type"
import { AxiosResponse } from 'axios'
import { EventDTO } from "@/dto/Event.dto"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
export default defineComponent({
  name: 'EventListPage',
  components: {
    EventCardComponent,
  },
  // Component options data
  data: (): IEventAPI => ({
    events: [] as EventDTO["events"],
    // events: EVENTS_MOCK_DATA.events,
  }),
  // Component options created
  created() {
    //..........
    const axiosResCallback = (res: AxiosResponse) => {
      //..........
      console.log('GET request response:', res.data)
      this.events = res.data
    }
    
    return (
        EventsService.getEvent()
        .then(axiosResCallback)
        .catch((err: Error) => console.log('[ERROR]', err))
    )
  },
})
</script>
<!-- 🌀🌀💻================================================= -->

// 🌀🌀💻 HTML 💻🌀🌀
<!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️ -->
<template>
  <!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️ -->
  <div class="homePageContainer">
    
    <!--⚫️ Event-Header ⚫️-->
    <h1>Events For Goods</h1>

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

