function formatAndSendPersonnummer(personnummer) {
    // 1. Ta emot personnumret

    // 2. Skala bort ev bindestreck eller andra tecken
    personnummer = personnummer.replace(/[^\d]/g, '');

    let formattedNumber;

    // 3. Kolla om numret är 10 eller 12 tecken
    if (personnummer.length === 12) {
        // 4. Om redan 12 tecken, spara undan
        formattedNumber = personnummer;
    } else if (personnummer.length === 10) {
        // 5. Om 10 tecken, lägg till prefix för lämpligt århundrade
        const yearPart = personnummer.slice(0, 2);
        const currentYear = new Date().getFullYear().toString().substr(2);
        const centuryPrefix = parseInt(yearPart, 10) <= parseInt(currentYear, 10) ? '20' : '19';
        formattedNumber = centuryPrefix + personnummer;
    } else {
        console.error('Felaktigt antal siffror i personnumret.');
        return;
    }

    // 6. Lägg till bindestreck före de sista 4 siffrorna
    formattedNumber = formattedNumber.slice(0, 8) + '-' + formattedNumber.slice(8);

    // 7. Skicka vidare det nu korrekt formaterade personnumret till angiven URL
    // Här antar vi att det finns en funktion sendToURL som skickar data
    // Ersätt denna med den faktiska logik du har för att skicka data
    sendToURL(formattedNumber);
}

// Exempel på en dummy-funktion för att skicka data
function sendToURL(data) {
    console.log("Skickar personnummer till URL: ", data);
    // Implementera din riktiga logik för att skicka data här, till exempel via fetch eller AJAX
}

// Gör funktionen global
window.formatAndSendPersonnummer = formatAndSendPersonnummer;
