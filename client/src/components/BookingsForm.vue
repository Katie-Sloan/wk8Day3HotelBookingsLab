<template>
  <form id="bookings-form" v-on:submit.prevent="handleSubmit" method="post">
      <h2>Add a Booking</h2>
      <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required/>
      </div>
      <div>
          <label for="email">Email:</label>
          <input type="text" id="email" v-model="email" required/>
      </div>
      <div>
          <p>Checked in?</p>
          <input type="radio" id="true" name="checked-in" value="true" v-model="checkedIn">
          <label for="true">True</label><br>
          <input type="radio" id="false" name="checked-in" value="false" v-model="checkedIn">
          <label for="false">False</label>
      </div>

      <input type="submit" value="Save" id="save"/>
  </form>
</template>

<script>
import { eventBus } from "@/main.js";
import BookingService from "@/services/BookingService.js";

export default {
    name: "bookings-form",
    data(){
        return {
            name: "",
            email: "",
            checkedIn: null, 
        };
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            const booking = {
                name: this.name,
                email: this.email, 
                checkedIn: this.checkedIn,
            };
            BookingService.postBooking(booking).then((res) =>
                eventBus.$emit("booking-added", res)
            );
            this.name = this.email = '';
            this.checked_in = null;
        },
    },
};
</script>

<style>

</style>