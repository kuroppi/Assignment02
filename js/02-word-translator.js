let languageCode = prompt('Enter the language code \("es", "de", "en", "fr"\)');

if (languageCode === "es") {
    language = "Spanish";
    translation = "Hola mundo";
} else if (languageCode === "de") {
    language = "German";
    translation = "Hallo welt";
} else if (languageCode === "en") {
    language = "English";
    translation = "Hello world";
} else if (languageCode === "fr") {
    language = "French";
    translation = "Bonjour le monde";
} else {
    language = "English";
    translation = "Hello world";
}

document.write(`Hello World translated in ${language} is: ${translation}`);
