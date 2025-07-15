document.getElementById("studentForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;

    const student = { name, email, dob };

    try {
        const response = await fetch("http://localhost:5000/students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student),
        });

        if (response.ok) {
            alert("Student added successfully!");
            document.getElementById("studentForm").reset();
        } else {
            alert("Failed to add student.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error connecting to server.");
    }
});
