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
    personnummer = personnummer.replace(/-/g, ''); // Ta bort bindestreck för validering

    // Kontrollera om längden är korrekt
    if (personnummer.length !== 10 && personnummer.length !== 12) {
        return false;
    }

    // Dela upp personnumret för validering
    const fullNumber = personnummer.length === 10 ? formatPersonnummer(personnummer.replace(/-/g, '')) : personnummer;
    const year = parseInt(fullNumber.slice(0, 4), 10);
    const month = parseInt(fullNumber.slice(4, 6), 10) - 1; // Månad är 0-indexed i Date-objekt
    const day = parseInt(fullNumber.slice(6, 8), 10);
    
    // Kontrollera datumets giltighet
    const date = new Date(year, month, day);
    if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
        return false;
    }

    // Kontrollera att de sista fyra siffrorna är siffror och att personnumret har korrekt längd
    const lastFour = fullNumber.slice(-4);
    if (!/^\d{4}$/.test(lastFour) || fullNumber.length !== 12) {
        return false;
    }

    return true; // Om inga tidigare kontroller misslyckades
}

// Exportera funktionerna
module.exports = { formatPersonnummer, isValidPersonnummer };
