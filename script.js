
// --- COUPON SYSTEM ---
const validCoupons = {
  "viral50": 50,
  "sale60": 60,
  "summer80": 80,
  "live60": 60,
  "akn80": 80,
  "kart30": 30,
};

function applyCoupon() {
  const code = document.getElementById("couponInput").value.trim().toLowerCase();
  const basePrice = 1199;
  if (validCoupons.hasOwnProperty(code)) {
    const discount = validCoupons[code];
    const newPrice = Math.round(basePrice - (basePrice * discount / 100));
    document.getElementById("finalPrice").textContent = `₹${newPrice}`;
    document.getElementById("orderPrice").value = newPrice;
    alert(`Coupon Applied! You got ${discount}% OFF.`);
  } else {
    alert("Invalid Coupon!");
  }
}

// --- EMAILJS ORDER FORM SUBMIT ---
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_d4d98l3", "template_xxxxx", this)
    .then(() => {
      alert("Order placed successfully!");
      this.reset();
      document.getElementById("finalPrice").textContent = "₹1199";
    })
    .catch(() => {
      alert("Failed to place order. Try again.");
    });
});
