const carlistings = {
    "carListings": [
        {
            "name": "BYD Atto 3 Electric",
            "image": "images/car_8.jpg",
            "price": "$100.00",
            "luggageCapacity": 4,
            "numberOfDoors": 4,
            "passengerCapacity": 4,
            "description": "The BYD Atto 3 Electric offers comfort and space for your adventure. Book it now!"
        },
        {
            "name": "Lexus UX250h 2.0A",
            "image": "images/car_9.jpg",
            "price": "$125.00",
            "luggageCapacity": 4,
            "numberOfDoors": 4,
            "passengerCapacity": 4,
            "description": "Experience the Lexus UX250h's compact yet versatile design. Book it now for your daily adventures!"
        },
        {
            "name": "Toyota Noah Hybrid 1.8A",
            "image": "images/car_10.jpeg",
            "price": "$150.00",
            "luggageCapacity": 5,
            "numberOfDoors": 4,
            "passengerCapacity": 6,
            "description": "Explore the city with the Toyota Noah Hybrid 1.8A. Book it now for your daily adventures!"
        },
        {
            "name": "Honda Vezel 1.5A",
            "image": "images/car_11.jpg",
            "price": "$100.00",
            "luggageCapacity": 4,
            "numberOfDoors": 4,
            "passengerCapacity": 4,
            "description": "Travel in style with the Honda Vezel 1.5A. Book it now and enjoy a luxurious ride!"
        },
        {
            "name": "Toyota Sienta Hybrid 1.5A",
            "image": "images/car_12.jpg",
            "price": "$95.00",
            "luggageCapacity": 5,
            "numberOfDoors": 4,
            "passengerCapacity": 4,
            "description": "Experience the thrill of driving with the Toyota Sienta Hybrid 1.5A. Book it now!"
        },
        {
            "name": "Honda Freed Hybrid 1.5A",
            "image": "images/car_13.jpeg",
            "price": "$100.00",
            "luggageCapacity": 5,
            "numberOfDoors": 4,
            "passengerCapacity": 6,
            "description": "Discover the elegance of the Honda Freed Hybrid 1.5A. Book it now for a luxurious experience!"
        }
    ]
}

document.addEventListener("DOMContentLoaded", function () {
    const carListingsContainer = document.getElementById("car-listings");

    carlistings.carListings.forEach(function (car) {
        const carListingHTML = `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="listing d-block  align-items-stretch">
            <div class="listing-img h-100 mr-4">
              <img src="${car.image}" alt="Image" class="img-fluid">
            </div>
            <div class="listing-contents h-100">
              <h3>${car.name}</h3>
              <div class="rent-price">
                <strong>${car.price}</strong><span class="mx-1">/</span>day
              </div>
              <div class="d-block d-md-flex mb-3 border-bottom pb-3">
                <div class="listing-feature pr-4">
                  <span class="caption">Luggage:</span>
                  <span class="number">${car.luggageCapacity}</span>
                </div>
                <div class="listing-feature pr-4">
                  <span class="caption">Doors:</span>
                  <span class="number">${car.numberOfDoors}</span>
                </div>
                <div class="listing-feature pr-4">
                  <span class="caption">Passenger:</span>
                  <span class="number">${car.passengerCapacity}</span>
                </div>
              </div>
              <div>
                <p>${car.description}</p>
                <p><a href="#" class="btn btn-primary btn-sm">Rent Now</a></p>
              </div>
            </div>
          </div>
        </div>
      `;

        carListingsContainer.innerHTML += carListingHTML;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carListingsContainer = document.getElementById("car-listings");
    const carSearchInput = document.getElementById("carSearch");

    // Function to filter car listings based on search input
    function filterCarListings() {
        const searchTerm = carSearchInput.value.toLowerCase();

        const filteredCars = carlistings.carListings.filter((car) =>
            car.name.toLowerCase().includes(searchTerm)
        );

        // Clear the current listings
        carListingsContainer.innerHTML = "";

        // Add filtered car listings to the container
        filteredCars.forEach(function (car) {
            const carListingHTML = `
            <div class="col-md-6 col-lg-4 mb-4">
            <div class="listing d-block  align-items-stretch">
              <div class="listing-img h-100 mr-4">
                <img src="${car.image}" alt="Image" class="img-fluid">
              </div>
              <div class="listing-contents h-100">
                <h3>${car.name}</h3>
                <div class="rent-price">
                  <strong>${car.price}</strong><span class="mx-1">/</span>day
                </div>
                <div class="d-block d-md-flex mb-3 border-bottom pb-3">
                  <div class="listing-feature pr-4">
                    <span class="caption">Luggage:</span>
                    <span class="number">${car.luggageCapacity}</span>
                  </div>
                  <div class="listing-feature pr-4">
                    <span class="caption">Doors:</span>
                    <span class="number">${car.numberOfDoors}</span>
                  </div>
                  <div class="listing-feature pr-4">
                    <span class="caption">Passenger:</span>
                    <span class="number">${car.passengerCapacity}</span>
                  </div>
                </div>
                <div>
                  <p>${car.description}</p>
                  <p><a href="car.html" class="btn btn-primary btn-sm">Rent Now</a></p>
                </div>
              </div>
            </div>
          </div>
        `;

            carListingsContainer.innerHTML += carListingHTML;
        });
    }

    // Add event listener to the search input
    carSearchInput.addEventListener("input", filterCarListings);

    // Initially load all car listings
    filterCarListings();
});


