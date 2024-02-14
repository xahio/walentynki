function odpowiedz(odpowiedz) {
    var invitationDiv = document.getElementById('invitation');
    var responseDiv = document.getElementById('response');

    if (odpowiedz === 'tak') {
        invitationDiv.style.display = 'none';
        responseDiv.style.display = 'flex';
    } else {
        alert('AHA obrażam się!');
    }
}
