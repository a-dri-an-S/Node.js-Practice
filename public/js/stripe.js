require('dotenv').config();

var stripe = Stripe(process.env.STRIPE_KEY);
var orderBtn = document.getElementById('order-btn');
orderBtn.addEventListener('click', function() {
    stripe.redirectToCheckout({
        sessionId: '<%= sessionId %>'
    })
})