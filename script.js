function redirectToUrl() {
    const signedRequest = document.getElementById('signedRequest').value.trim(); // Trim whitespace
    if (signedRequest === "") {
        alert(" Please enter the signed request."); // Alert if empty
        return; // Exit the function
    }
    const url = `https://farm-us.centurygames.com/ar/?signed_request=${signedRequest}#`;
    window.location.href = url; // Redirect to the URL
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}
