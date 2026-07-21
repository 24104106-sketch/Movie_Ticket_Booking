// ==========================
// Seat Selection
// ==========================

const seats = document.querySelectorAll(".seat");

seats.forEach((seat) => {

    seat.addEventListener("click", () => {

        seat.classList.toggle("selected");

    });

});

// ==========================
// Booking Form Validation
// ==========================

const bookingForm = document.querySelector(".booking form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        const movie = document.querySelector("select").value;

        if (movie === "") {

            alert("Please select a movie.");

            e.preventDefault();

        }

    });

}

// ==========================
// Payment Form Validation
// ==========================

const paymentForm = document.querySelector(".payment form");

if (paymentForm) {

    paymentForm.addEventListener("submit", function (e) {

        const cardNumber = paymentForm.querySelectorAll("input")[4].value;

        const cvv = paymentForm.querySelectorAll("input")[6].value;

        if (cardNumber.length !== 16) {

            alert("Card Number must contain 16 digits.");

            e.preventDefault();

            return;

        }

        if (cvv.length !== 3) {

            alert("CVV must contain 3 digits.");

            e.preventDefault();

            return;

        }

        alert("Payment Successful!");

    });

}