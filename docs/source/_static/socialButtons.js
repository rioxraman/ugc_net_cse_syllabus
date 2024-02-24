document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".wy-footer");
  if (!footer) return;

  const socialLinks = [
    { icon: "fa-facebook", url: "https://facebook.com/YourPage" },
    { icon: "fa-instagram", url: "https://instagram.com/YourPage" },
    { icon: "fa-linkedin", url: "https://linkedin.com/in/YourPage" },
    { icon: "fa-whatsapp", url: "https://wa.me/YourPhoneNumber" },
    // Add more social links here
  ];

  const container = document.createElement("div");
  container.className = "social-buttons";
  socialLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.innerHTML = `<i class="fab ${link.icon}"></i>`;
    container.appendChild(a);
  });

  footer.appendChild(container);
});
