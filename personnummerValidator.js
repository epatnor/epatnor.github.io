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

/*
// Funktion för att formatera personnummer
function formatPersonnummer(personnummer) {
    // Ta bort allt utom siffror och bindestreck
    personnummer = personnummer.replace(/[^\d-]/g, '');

    // Ta bort bindestreck om det finns för att normalisera input
    const normalizedNumber = personnummer.replace(/-/g, '');

    // Bestäm om vi behöver lägga till ett sekelprefix
    let prefix = '';
    if (normalizedNumber.length === 10) {
        const currentYear = new Date().getFullYear() % 100;
        const yearPart = parseInt(normalizedNumber.slice(0, 2), 10);
        prefix = yearPart <= currentYear ? "20" : "19";
    } else if (normalizedNumber.length === 12) {
        prefix = normalizedNumber.slice(0, 2);
    } else {
        return personnummer; // Returnerar originalinput om det har fel längd
    }

    // Bygg ihop personnumret med prefix
    const fullNumber = prefix + normalizedNumber.slice(prefix ? 2 : 0);

    // Formatera till önskat format
    return `${fullNumber.slice(0, 8)}-${fullNumber.slice(8)}`;
}

// Funktion för att validera personnummer
function isValidPersonnummer(personnummer) {
    // Ta bort allt utom siffror och bindestreck
    personnummer = personnummer.replace(/[^\d-]/g, '');
    
    // Ta bort bindestreck om det finns, för att normalisera input
    const normalizedNumber = personnummer.replace(/-/g, '');

    // Bestäm om vi behöver lägga till ett sekelprefix
    let prefix = '';
    if (normalizedNumber.length === 10) {
        const currentYear = new Date().getFullYear() % 100;
        const yearPart = parseInt(normalizedNumber.slice(0, 2), 10);
        prefix = yearPart <= currentYear ? "20" : "19";
    } else if (normalizedNumber.length === 12) {
        prefix = normalizedNumber.slice(0, 2);
    } else {
        return false; // Längden är fel, returnera false
    }

    // Skapa det fullständiga numret för validering
    const fullNumber = prefix + normalizedNumber.slice(prefix ? 2 : 0);

    // Kontrollera att det är 12 siffror för datumvalidering
    if (fullNumber.length !== 12) {
        return false;
    }

    // Datumvalidering
    const year = parseInt(fullNumber.slice(0, 4), 10);
    const month = parseInt(fullNumber.slice(4, 6), 10);
    const day = parseInt(fullNumber.slice(6, 8), 10);

    const date = new Date(year, month - 1, day);
    if (isNaN(date.getTime()) || date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        return false;
    }

    // Kontrollera de sista fyra siffrorna
    const lastFourDigits = fullNumber.slice(8);
    if (!/^\d{4}$/.test(lastFourDigits)) {
        return false;
    }

    return true; // Om inga tidigare kontroller misslyckades
}

// Gör funktionerna globala
window.formatPersonnummer = formatPersonnummer;
window.isValidPersonnummer = isValidPersonnummer;
*/
