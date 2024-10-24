function isValidPersonnummer(personnummer) {
    // Ta bort allt utom siffror
    personnummer = personnummer.replace(/\D/g, '');

    // Kontrollera längd
    if (personnummer.length !== 10 && personnummer.length !== 12) {
        return false;
    }

    // Om det är 10 siffror, lägg till 19 som prefix för att få 12 siffror
    if (personnummer.length === 10) {
        personnummer = "19" + personnummer;
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

    // Kontrollera kontrollsiffror
    return isValidControlDigits(personnummer); // Anropa kontrollsifferkontroll
}

function isValidControlDigits(personnummer) {
    let sum = 0;
    for (let i = 0; i < personnummer.length - 1; i++) { // Exkludera sista siffran
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
    return (sum + parseInt(personnummer[11])) % 10 === 0; // Inkludera kontrollsiffran
}
