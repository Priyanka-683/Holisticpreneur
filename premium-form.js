document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ultraForm');
    const bentoItems = document.querySelectorAll('.bento-item');
    const selectedInput = document.getElementById('selectedAreasInput');
    const overlay = document.getElementById('successOverlay');
    const submitBtn = document.getElementById('submitBtn');

    // Handle Selection
    bentoItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected');
            const values = Array.from(document.querySelectorAll('.bento-item.selected'))
                                .map(el => el.getAttribute('data-value'));
            selectedInput.value = values.join(', ');
        });
    });

    // Handle Formspree Submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitBtn.innerHTML = "Booking Session... ✨";
        submitBtn.style.pointerEvents = "none";

        try {
            const response = await fetch("https://formspree.io/f/xanpwdjb", {
                method: "POST",
                body: new FormData(e.target),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                overlay.style.display = 'flex'; // Show Pop-up
                form.reset();
                document.querySelectorAll('.bento-item').forEach(i => i.classList.remove('selected'));
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            alert("Connection error.");
        } finally {
            submitBtn.innerHTML = "Confirm My Discovery Session <span>→</span>";
            submitBtn.style.pointerEvents = "all";
        }
    });
});

function closePopup() {
    document.getElementById('successOverlay').style.display = 'none';
}