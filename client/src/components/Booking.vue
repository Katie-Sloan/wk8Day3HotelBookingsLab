<template>
  <div>
      <h2>{{ booking.name }}</h2>
      <p>{{booking.email}}</p>
      <p>Checked in? {{booking.checkedIn}}</p>

      <button v-on:click="handleDelete">Delete Booking</button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import BookingService from '../services/BookingService.js'

export default {
    name: 'booking',
    props: ['booking'],

    methods: {
        handleDelete() {
            BookingService.deleteBooking(this.booking._id).then(() => 
            eventBus.$emit('booking-deleted', this.booking._id))
        }
    }
}
</script>

<style>

</style>