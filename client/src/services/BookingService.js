const baseUrl = "http://localhost:3000/api/bookings/";

export default {
    getBookings() {
        return fetch(baseUrl).then((res) => res.json());
    },
    // postBooking(payload) {
    //     return fetch(baseUrl, {
    //         method: "POST",
    //         body: JSON.stringify(payload),
    //         headers: { "Content-Type": "application/json"},
    //     }).then((res) => res.json());
    // },
    deleteBooking(id) {
        return fetch(baseUrl + id, {
          method: "DELETE",
        });
    },
    prePostBooking(payload) {
            return fetch(baseUrl, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "Content-Type": "application/json"},
            }).then((res) => res.json());
        },
    
    postBooking(payload) {
    // for (item in payload) {
        if (payload["name"] === null || payload["email"] === null) {
            return "Error - please add a name and/or email address";
        }
        else {  
            prePostBooking(payload)
        }
    }
    //const isEmpty = !Object.values(object).some(x => (x !== null && x !== ''));
// },

}