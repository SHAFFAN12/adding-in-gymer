// function validate() {
// 	var username = document.getElementById("username").value;
// 	var password = document.getElementById("password").value;

// 	if (username == "" || password == "") {
// 		alert("Please enter your username and password.");
// 		return false;
// 	}

	// Here, you can implement your authentication logic
	// If the user is authenticated successfully, redirect them to the dashboard page
	// Otherwise, display an error message and ask the user to try again
// }










function addToCart() {
    const cart = document.getElementsByClassName("cart")[0].innerText
    const updatedCart = Number(cart) + 1
    document.getElementsByClassName("cart")[0].innerText = updatedCart
    alert("Article added to cart")
}
