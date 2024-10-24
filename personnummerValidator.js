function formatPersonnummer(personnummer) {
    // Ta bort allt utom siffror
    personnummer = personnummer.replace(/\D/g, '');
    
    // Lägg till århundradeprefix om det behövs
    if (personnummer.length === 10) {
        const yearPart = parseInt(personnummer.slice(0, 2), 10);
        const currentYear = new Date().getFullYear() % 100;
        const prefix = yearPart >= currentYear ? "19" : "20";
        personnummer = prefix + personnummer;
    }
    
    // Se till att personnumret är formaterat med streck
    if (personnummer.length === 12) {
        return personnummer.slice(0, 8) + '-' + personnummer.slice(8);
    } else {
        // Om personnumret inte är 12 siffror långt efter formatering, returnera det som det är
        return personnummer;
    }
}

function isValidPersonnummer(personnummer) {
    // Ta bort allt utom siffror
    personnummer = personnummer.replace(/\D/g, '');

    // Kontrollera längd (ska vara 10 eller 12 siffror)
    if (personnummer.length !== 10 && personnummer.length !== 12) {
        return false;
    }

    // Om det är 10 siffror, lägg till 19 eller 20 som prefix för att få 12 siffror
    if (personnummer.length === 10) {
        const yearPart = parseInt(personnummer.slice(0, 2), 10);
        const currentYear = new Date().getFullYear();
        const prefix = yearPart >= (currentYear % 100) ? "19" : "20"; // Välj prefix baserat på året
        personnummer = prefix + personnummer; // Lägger till prefix
    }

    // Dela upp i datumdelar
    const year = parseInt(personnummer.slice(0, 4), 10);
    const month = parseInt(personnummer.slice(4, 6), 10);
    const day = parseInt(personnummer.slice(6, 8), 10);

    // Kontrollera månad och dag
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        return false; // Ogiltig månad eller dag
    }

    // Kontrollera giltigt datum
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        return false; // Ogiltigt datum
    }

    // Kontrollera att de sista fyra siffrorna är fyra stycken (ingen kontrollsifferberäkning)
    const lastFourDigits = personnummer.slice(8);
    if (lastFourDigits.length !== 4 || isNaN(lastFourDigits)) {
        return false; // Ogiltigt format på de sista fyra siffrorna
    }

    // Tidigare kontrollsifferfunktion är bortkommenterad
    // return isValidControlDigits(personnummer);

    return true; // Om alla kontroller är godkända
}

/*
function isValidControlDigits(personnummer) {
    let sum = 0;
    const length = personnummer.length;

    for (let i = 0; i < length - 1; i++) { // Exkludera sista siffran
        let digit = parseInt(personnummer[i]);
        if (i % 2 === 1) { // Dubbel varje andra siffra
            digit *= 2;
            if (digit > 9) {
                digit -= 9; // Subtrahera 9 om resultatet är större än 9
            }
        }
        sum += digit;
    }
    
    // Kontrollera om summan är delbar med 10
    return (sum + parseInt(personnummer[length - 1])) % 10 === 0; // Inkludera kontrollsiffran
}
*/

