import React from "react";

function Fullcontact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const url =
      "https://script.google.com/macros/s/AKfycbw4izCciAr4c_7eWWC6awt_FW6Lp7JLBBwkl9MJpCyV2Y00uLYc4opDuCGXZr2nuK5zRw/exec";

    // Prepare form data
    const formData = new URLSearchParams({
      Name: e.target.name.value,
      Phone: e.target.phone.value,
      Comments: e.target.comments.value,
    });

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(), // Convert form data to query string
    })
      .then((res) => res.text()) // Parse the response as text
      .then((data) => {
        alert(data); // Show the response in an alert box
      })
      .catch((error) => console.log(error)); // Log any errors
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Submit Your Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <textarea
            name="comments"
            placeholder="Comments"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Fullcontact;
