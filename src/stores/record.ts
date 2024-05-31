import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRecordStore = defineStore('record', () => {
  const record = ref(0)
  const doubleRecord = computed(() => record.value * 2)
  function increment() {
    record.value++
  }

  return { record, doubleRecord, increment }
})
