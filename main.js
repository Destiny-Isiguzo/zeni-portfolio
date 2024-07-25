document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.menu-list');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            // Remove active class from all items
            navItems.forEach(item => item.classList.remove('active'));

            // Add active class to the clicked item
            this.classList.add('active');
        });
    });
});
