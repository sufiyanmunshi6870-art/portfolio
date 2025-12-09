// Mobile Menu Toggle
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Dummy package data (used only on packages.html)
if (document.getElementById("packageList")) {

    const packages = [
        { title: "Romantic Paris Tour", price: "$899", img: "https://picsum.photos/300?random=4" },
        { title: "Dubai Luxury Trip", price: "$1099", img: "https://picsum.photos/300?random=5" },
        { title: "Maldives Beach Package", price: "$1199", img: "https://picsum.photos/300?random=6" }
    ];

    const packageList = document.getElementById("packageList");

    packages.forEach(pkg => {
        const div = document.createElement("div");
        div.className = "package";
        div.innerHTML = `
            <img src="${pkg.img}">
            <h3>${pkg.title}</h3>
            <p>Starting at <strong>${pkg.price}</strong></p>
            <a href="booking.html" class="btn">Book Now</a>
        `;
        packageList.appendChild(div);
    });
}
