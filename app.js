async function fetchPasswords() {
  try {
    const response = await fetch("http://127.0.0.1:5000/api/passwords"); // Replace with your backend URL
    const data = await response.json(); // Parse JSON response
    const passwords = data.passwords; // Access the "passwords" array

    // Display passwords in the browser (e.g., on a webpage)
    const outputElement = document.getElementById("passwords-output");
    outputElement.innerHTML = passwords.map((password) => `<li>${password}</li>`).join("");
  } catch (error) {
    console.error("Error fetching passwords:", error);
  }
}
