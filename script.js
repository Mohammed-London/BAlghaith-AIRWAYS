// Open and close sidebar menu
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
  }
  
  function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
  }
  
  // Handle booking form submission
  function handleBooking() {
    const date = document.getElementById("travel-date").value;
    const passengers = document.getElementById("passengers").value;
    const category = document.getElementById("category").value;
  
    if (!date || !passengers || !category) {
      alert("Please complete all booking fields before continuing.");
      return;
    }
  
    const bookingUrl = new URL("booking.html", window.location.origin);
    bookingUrl.searchParams.set("date", date);
    bookingUrl.searchParams.set("passengers", passengers);
    bookingUrl.searchParams.set("category", category);
    window.location.href = bookingUrl.href;
  }
  
  // Add dynamic effects (like airplane icon or animations) if needed
  // Placeholder for future interactive features