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
    return `${fullNumber.slice(0, 4)}${fullNumber.slice(4, 6)}${fullNumber.slice(6, 8)}-${fullNumber.slice(8)}`;
}

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

    // Kontrollera att det är 12 siffror
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
