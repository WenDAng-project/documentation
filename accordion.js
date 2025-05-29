

// Ontology accordion

document.addEventListener("DOMContentLoaded", function () {
    const classCards = document.querySelectorAll(".class-card");
  
    classCards.forEach((card) => {
      card.addEventListener("click", function () {
        // Close any expanded cards
        classCards.forEach((c) => c.classList.remove("expanded"));
  
        // Expand the clicked card
        this.classList.add("expanded");
      });
    });
  });