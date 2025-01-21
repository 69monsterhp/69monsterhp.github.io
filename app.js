document.getElementById("fetchPasswords").addEventListener("click", async () => {
    try {
        const response = await fetch("http://your-backend.onion/api/passwords", {
            method: "GET",
            mode: "cors", // Enables communication with external domains
        });
        const data = await response.json();
        document.getElementById("output").innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Error fetching passwords:", error);
    }
});
