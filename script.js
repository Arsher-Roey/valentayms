let noClickCount = 0;
const maxNoClicks = 10;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const hintText = document.getElementById('hintText');
const invitationPage = document.getElementById('invitationPage');
const thankYouPage = document.getElementById('thankYouPage');

// Handle YES button click
yesBtn.addEventListener('click', function() {
    invitationPage.classList.add('hidden');
    thankYouPage.classList.remove('hidden');
});

// Handle NO button click
noBtn.addEventListener('click', function(e) {
    noClickCount++;
    
    if (noClickCount >= maxNoClicks) {
        // Show the forced message
        alert("YOU HAVE NO CHOICE, I'LL BE YOUR DATE ON SATURDAY. I LOVE YOU, SEE YOU");
        invitationPage.classList.add('hidden');
        thankYouPage.classList.remove('hidden');
        return;
    }
    
    // Move the NO button to a random position
    moveNoButton();
    
    // Update hint text based on click count
    updateHintText();
});

function moveNoButton() {
    const container = document.querySelector('.button-container');
    const containerRect = container.getBoundingClientRect();
    
    // Get button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // Calculate maximum positions to keep button within container
    const maxX = containerRect.width - btnWidth;
    const maxY = containerRect.height - btnHeight;
    
    // Generate random position
    let randomX = Math.random() * maxX - (maxX / 2);
    let randomY = Math.random() * maxY - (maxY / 2);
    
    // Apply the new position
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function updateHintText() {
    const remainingClicks = maxNoClicks - noClickCount;
    
    if (remainingClicks === 9) {
        hintText.textContent = "LUHHH PLEASE NA SIGE NA";
    } else if (remainingClicks === 7) {
        hintText.textContent = "Ayaw mo talaga? 🥺";
    } else if (remainingClicks === 5) {
        hintText.textContent = "DALI NA JUSQUE PO!"
    } else if (remainingClicks === 3) {
        hintText.textContent = "UMAYYY SOWSSS! 😤";
    } else if (remainingClicks === 1) {
        hintText.textContent = "BALA KA, SIGE KA.😈";
    }
}

// Initialize button position
window.addEventListener('load', function() {
    // Set initial position for NO button
    noBtn.style.position = 'relative';
    noBtn.style.left = '0';
    noBtn.style.top = '0';
});
