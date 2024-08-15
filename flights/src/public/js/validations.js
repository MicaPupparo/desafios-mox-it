document.addEventListener("DOMContentLoaded", () => {
    const $form = document.querySelector("#modify-form");
    const $submitButton = document.querySelector("#modify-button");

    const $arrival = $form.arrival;
    const $flightNumber = $form.flightNumber;
    const $airline = $form.airline;
    const errorFeedbackFlightNumber = $flightNumber.nextElementSibling;

    $submitButton.addEventListener("click", event => {
        resetValidationStyle();

        validateNotEmpty($arrival, event);
        validateNotEmpty($flightNumber, event);
        validateNotEmpty($airline, event);

        validateFlightNumber(event);
    })

    function removeClassIsInvalid ($element) {
        if ($element.classList.contains("is-invalid")) {
            $element.classList.remove("is-invalid");
        }
    }
    
    function resetValidationStyle() {
        removeClassIsInvalid($arrival);
        removeClassIsInvalid($flightNumber);
        removeClassIsInvalid($airline);
    }

    function validateNotEmpty($element, event) {
        if (!$element.value) {
            event.preventDefault();
            $element.classList.add("is-invalid");
        }
    }

    function validateFlightNumber(event) {
        const isValidFlightNumber = /^[A-Z]{2,4} [0-9]{4}$/.test($flightNumber.value);

        if (!isValidFlightNumber) {
            event.preventDefault();
            if (errorFeedbackFlightNumber && errorFeedbackFlightNumber.classList.contains("invalid-feedback")) {
                $flightNumber.classList.add("is-invalid");
                errorFeedbackFlightNumber.textContent = "El número de vuelo debe tener 2 a 4 letras seguidas de 4 dígitos (por ejemplo, AB 1234).";
            }
        } 
    }
})

