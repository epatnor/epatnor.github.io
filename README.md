A simple site that takes an argument from the URL. The argument is a sedish personal number, and this site cleans it up (if valid) and changes the output to include a dash before the last 4 digits.

It includes a GUI that displays a log of all incoming requests, including the original and formatted personnummer, as well as whether they were valid or invalid. This log will update each time a new personnummer is processed.

It's a basic HTML page with JavaScript that displays the logs on the same page. This way, users can see both the input they provided and how it was processed, whether valid or invalid.

Förklaring av URL-komponenterna:
Bas-URL: https://epatnor.github.io/index.html

Detta är den grundläggande adressen till din webbplats. Eftersom GitHub Pages använder index.html som standardfil, måste du inkludera det i URL
om det inte finns någon standardinställning för filnamn.
Frågeparameter: ?personnummer=

Frågetecknet (?) indikerar början av en frågeparameter i URL
. Det följs av nyckeln personnummer, som är den parameter du kommer att använda i din kod för att hämta värdet.
Värde: 1234567890

Detta är det faktiska personnumret som du vill skicka till din webbplats. Du kan ersätta 1234567890 med det personnummer som du vill testa. Se till att det är i korrekt format (till exempel 10 eller 12 siffror).
Exempel på olika format:
Korrekt format:
https://epatnor.github.io/index.html?personnummer=1980123456 (12 siffror)
https://epatnor.github.io/index.html?personnummer=8012345678 (10 siffror, utan århundrade)
Felaktigt format:
https://epatnor.github.io/index.html?personnummer=abcde (innehar bokstäver)
https://epatnor.github.io/index.html?personnummer=12345 (för få siffror)
Testa URL:en:
Du kan klistra in URL
direkt i webbläsarens adressfält och trycka på Enter. Den ska då omdirigera dig till loggsidan där du kan se resultatet av personnummerkonverteringen, oavsett om det är korrekt eller felaktigt.

Förklaring:
Log Entry Function (logEntry):

This function is called each time a personnummer is processed, whether it is valid or not.
The log keeps both the original input and the formatted output (or a message indicating it was invalid).
It appends this information to the log area on the page.
Window onLoad:

When the page loads, it checks the URL for a personnummer parameter.
If no personnummer is provided, a log entry is made stating "Tomt värde".
If an incorrect personnummer is entered, it logs the invalid input and shows "Ogiltigt personnummer" in the log.
Valid vs Invalid:

If the personnummer is valid, it is formatted with a dash before the last four digits and logged.
If the personnummer is invalid (wrong length), it is logged as invalid, and the red text shows that it’s incorrect.
Logging Visuals:

Valid entries are displayed in green.
Invalid entries are shown in red.
Even an empty or malformed input gets logged, so users can see everything that happens.
Example Log:
For example, if a user enters 7510101234, the log might show:

Original: 7510101234
Formatted: 19751010-1234
For an invalid input like 750101, the log would show:

Original: 750101
Formatted: Ogiltigt personnummer
Deployment and Testing:
Use one of the free hosting services like GitHub Pages, Netlify, or Vercel from the previous suggestions to deploy this page.
Make sure to update the targetUrl to the desired receiving endpoint for further processing once the personnummer has been validated.
This should give a clear view of what's happening with each request!

How to Implement:
Create the CSS file: Save the style.css code in a new file called style.css in the same directory as your index.html.
Link to the CSS file: Make sure you have the <link rel="stylesheet" href="style.css"> in the <head> of your HTML file to ensure the styles are applied.

Advantages:
Cleaner HTML: The HTML now only contains the structure and minimal inline styling.
Easier Updates: If you want to update or expand the design, you can simply modify the style.css file without touching the HTML.
Scalability: If your project grows or you add more pages, you can easily apply the same styles by linking the style.css file across multiple pages.
