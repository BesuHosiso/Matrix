// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) =>  {
//         if(entry.isIntersecting) {
//           entry.target.classList.add("show")
//         } else {
//           entry.target.classList.remove("show")
//         }
//     })
// }, {});

//   const items = document.querySelectorAll(".hide");
//   items.forEach(el => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // Watch the whole viewport
        threshold: 0.15, // Increase threshold so more of the element is visible before triggering
        rootMargin: '0px 0px -50px 0px' // Offset the trigger point by 50px for a more intentional feel
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the 'show' class to trigger the smooth CSS transition
                entry.target.classList.add("show");
                
                // Once an element is shown, we stop observing it for better performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Find all elements with the 'hide' class and start watching them
    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((el) => observer.observe(el));
});
