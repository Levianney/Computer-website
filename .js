document.addEventListener("DOMContentLoaded", function () {
    // Fetch and display latest technologies
    fetchLatestTechnologies();
});

function fetchLatestTechnologies() {
    // Mock data for demonstration purposes
    const technologies = [
        { name: "Quantum Computing", description: "Exploring the power of quantum mechanics." },
        { name: "Artificial Intelligence", description: "Mimicking human intelligence in machines." },
        { name: "Blockchain", description: "Securing transactions with decentralized ledgers." },
    ];

    const technologyList = document.getElementById("technology-list");

    technologies.forEach((tech) => {
        const techItem = document.createElement("div");
        techItem.classList.add("technology-item");
        techItem.innerHTML = `<h3>${tech.name}</h3><p>${tech.description}</p>`;
        technologyList.appendChild(techItem);
    });
}
