<template>
  <div id="bookingsGrid">
      <booking v-for="(booking, index) in bookings" :key="index" :booking="booking"/>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import BookingService from "@/services/BookingService.js";
import Booking from "./Booking";

export default {
    name: "bookings-grid",
    components: {
        booking: Booking,
    },
    props: ["bookings"],
};
</script>

<style>

</style>