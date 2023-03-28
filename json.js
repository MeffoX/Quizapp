let questions = [{
        "question": "Wer hat HTML Erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Welches HTML-Attribut wird verwendet, um den Text in einem Textfeld vorzugeben?",
        "answer_1": "value",
        "answer_2": "type",
        "answer_3": "name",
        "answer_4": "placeholder",
        "right_answer": 4
    },

    {
        "question": "Was ist CSS??",
        "answer_1": "Eine Server-Software",
        "answer_2": "Ein Grafik-Editor",
        "answer_3": "Eine Formatierungssprache",
        "answer_4": "Ein Texteditor",
        "right_answer": 3
    },

    {
        "question": "Was ist JavaScript?",
        "answer_1": "Eine Datenbank-Software",
        "answer_2": "Ein Betriebssystem",
        "answer_3": "Eine Skriptsprache",
        "answer_4": "Eine Tabellenkalkulationssoftware",
        "right_answer": 3
    },

    {
        "question": "Welche Funktion hat CSS?",
        "answer_1": "Es ermöglicht die interaktive Programmierung von Websites",
        "answer_2": "Es dient zur Strukturierung von Texten auf einer Webseite",
        "answer_3": "Es ermöglicht die Formatierung von HTML-Elementen",
        "answer_4": "Es ermöglicht die Speicherung von Daten auf einem Server",
        "right_answer": 3
    },

    {
        "question": "Was ist der Zweck von JavaScript?",
        "answer_1": "Die Strukturierung von Texten auf einer Webseite",
        "answer_2": "Die Programmierung von Serveranwendungen",
        "answer_3": "Die Erstellung interaktiver Webseiten",
        "answer_4": "Die Verwaltung von Datenbanken",
        "right_answer": 3
    },

    {
        "question": "Was sind HTML-Tags?",
        "answer_1": "Begriffe, die in CSS-Dateien verwendet werden",
        "answer_2": "Begriffe, die in JavaScript-Code verwendet werden",
        "answer_3": "Markierungen, die die Struktur von HTML-Elementen beschreiben",
        "answer_4": "Markierungen, die die Formatierung von Texten auf einer Webseite beschreiben",
        "right_answer": 3
    },

    {
        "question": "Wie kann man eine externe CSS-Datei in eine HTML-Datei einbinden?",
        "answer_1": " Mit dem HTML-Tag <script>",
        "answer_2": "Mit dem HTML-Tag <link>",
        "answer_3": "Mit dem HTML-Tag <style>",
        "answer_4": "Mit dem HTML-Tag <head>",
        "right_answer": 2
    },

    {
        "question": "Welche Funktion haben Variablen in JavaScript?",
        "answer_1": "Sie speichern Werte, die in der Programmierung verwendet werden können",
        "answer_2": "Sie dienen zur Strukturierung von HTML-Elementen",
        "answer_3": "Sie ermöglichen die Formatierung von Texten auf einer Webseite",
        "answer_4": "Sie ermöglichen die interaktive Programmierung von Websites",
        "right_answer": 1
    },

    {
        "question": "Welche Dateiendung haben HTML-Dateien?",
        "answer_1": ".php",
        "answer_2": ".html",
        "answer_3": ".css",
        "answer_4": ".js",
        "right_answer": 2
    }
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('media/success.mp3');
let AUDIO_FAIL = new Audio('media/wrong.mp3');