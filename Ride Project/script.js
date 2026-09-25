// =========================
// SELECT RIDE
// =========================

const rideCards = document.querySelectorAll(".ride-card");

let selectedRide = "Car";


rideCards.forEach(function(card) {

    card.addEventListener("click", function() {

        // Remove active from all cards
        rideCards.forEach(function(item) {
            item.classList.remove("active");
        });

        // Add active to clicked card
        card.classList.add("active");

        // Get selected ride
        selectedRide = card.dataset.ride;

        console.log("Selected Ride:", selectedRide);

    });

});


// =========================
// BOOKING FORM
// =========================

const bookingForm = document.querySelector("#booking-form");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const pickup = document.querySelector("#pickup").value;

    const destination =
        document.querySelector("#destination").value;


    alert(
        "Ride booked!\n\n" +
        "Ride: " + selectedRide + "\n" +
        "Pickup: " + pickup + "\n" +
        "Destination: " + destination
    );


    bookingForm.reset();

});