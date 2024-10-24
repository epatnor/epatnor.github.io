Webbplatsen tar emot ett personnummer via URL och formaterar det genom att lägga till ett streck före de sista fyra siffrorna om numret är giltigt. Sidan visar en logg över alla inkommande förfrågningar med både ursprungliga och formaterade personnummer samt om de är giltiga eller ogiltiga.

Användargränssnittet är en enkel HTML-sida med JavaScript som dynamiskt uppdaterar loggen på samma sida. Detta gör det möjligt för användare att se hur deras input hanterats, oavsett om det är korrekt eller felaktigt formaterat.

Genom att ange ett personnummer som en frågeparameter i webbadressen (till exempel https://epatnor.github.io/?personnummer=198507045678), kan du testa olika nummer. Funktionen logEntry loggar varje bearbetning av personnumret och visar giltiga nummer i grönt och ogiltiga i rött.

Syftet med sidan är att fungera som en omdirigeringsmekanism; den tar emot ett personnummer, reformaterar det till ett korrekt svenskt format och skickar sedan vidare det formaterade numret som ett argument i URL:en till en annan valfri sida. Detta gör att hela projektets mål är att underlätta integrationen mellan system som hanterar personnummer genom att säkerställa ett standardiserat format innan vidarebefordran.
