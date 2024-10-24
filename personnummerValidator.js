function formatPersonnummer(personnummer) {
    // Ta bort allt utom siffror
    personnummer = personnummer.replace(/\D/g, '');
    
    let prefix = '';
    if (personnummer.length === 10) {
        const yearPart = parseInt(personnummer.slice(0, 2), 10);
        const currentYear = new Date().getFullYear() % 100;
        prefix = yearPart >= currentYear ? "19" : "20";
        personnummer = prefix + personnummer;
    } else if (personnummer.length === 12) {
        prefix = personnummer.slice(0, 2);
        // Ingen ny prefix behöver läggas till, men vi behåller logiken för att hålla strukturen
    } else {
        // Om längden är felaktig returnera som det är
        return personnummer;
    }

    // Lägg till bindestreck om det är 12 siffror
    return personnummer.slice(0, 8) + '-' + personnummer.slice(8);
}

function isValidPersonnummer(personnummer) {
    // Tar bort bindestreck för validering
    personnummer = personnummer.replace(/-/g, '');

    // Kontrollera längd (ska vara 10 eller 12 siffror)
    if (personnummer.length !== 10 && personnummer.length !== 12) {
        return false;
    }

    // Om det är 10 siffror, formatera till 12 siffror för validering
    if (personnummer.length === 10) {
        personnummer = formatPersonnummer(personnummer.replace(/-/g, ''));
        if (personnummer.length !== 13) return false; // Om formateringen misslyckades
    }

    // Dela upp i datumdelar
    const year = parseInt(personnummer.slice(0, 4), 10);
    const month = parseInt(personnummer.slice(4, 6), 10);
    const day = parseInt(personnummer.slice(6, 8), 10);

    // Kontrollera månad och dag
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        return false;
    }

    // Kontrollera giltigt datum
    const date = new Date(year, month - 1, day);
    if (isNaN(date.getTime()) || date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        return false;
    }

    // Kontrollera att de sista fyra siffrorna är fyra stycken
    const lastFourDigits = personnummer.slice(8, 12);
    if (lastFourDigits.length !== 4 || isNaN(lastFourDigits)) {
        return false;
    }

    // Om inga tidigare kontroller misslyckades, är personnumret giltigt
    return true;
}

// Exportera funktionerna om detta är ett modul
module.exports = { formatPersonnummer, isValidPersonnummer };
