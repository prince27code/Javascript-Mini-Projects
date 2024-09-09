const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removePanels();
        panel.classList.add('active');
    });

    function removePanels() {
        panels.forEach(panel => {
            panel.classList.remove('active');
        });
    }
});