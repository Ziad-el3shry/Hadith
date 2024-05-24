let currentIndex = 0;
const texts = [
    {
        heading: "Hadith on Sickness",
        content: "Abu Umamah reported: The Messenger of Allah, peace and blessings be upon him, said, \"Verily, when the Muslim falls ill, Allah Almighty inspires the angels, saying: O angels, I have detained My servant with My confinement. If I take his soul, he will be forgiven. If I heal his body, he will be forgiven as if he had no sins.\"",
        source: "al-Mu'jam al-Kabīr lil-Ṭabarānī 7701"
    },
    {
        heading: "Hadith on Tawhid",
        content: "‘Iyad al-Ansari reported: The Messenger of Allah, peace and blessings be upon him, said, “Verily, the declaration, ‘There is no God but Allah,’ has a noble status with Allah. It is a word that whoever says it honestly, Allah will admit him into Paradise. Whoever says it falsely, his life is protected and his property is safeguarded, but He will meet Allah tomorrow to be held accountable.”",
        source: "Kashf al-Astār 4"
    },
    {
        heading: "Hadith on Shirk",
        content: "Aisha reported: The Messenger of Allah, peace and blessings be upon him, said, “Idolatry is more hidden in my nation than an ant crawling over a smooth rock in the dark of night, the least of which is to love something unjust or to hate something just. Is the religion not but to love for the sake of Allah and hate for the sake of Allah? Allah said, ‘Say: If you love Allah, follow me and He will love you’ (3:31).”",
        source: "Source: Ḥilyat al-Awliyā’ 8/368"
    },
    {
        heading: "Salaf on Moderation",
        content: "Sa’id ibn Dawud reported: Makhlad ibn al-Husyan, may Allah have mercy on him, said, “Allah never recommends something to His servants but that Satan interferes with it in one of two ways. He does not care which of them succeeds. Either he makes them exaggerate in it, or he makes them belittle it.”",
        source: "Ḥilyat al-Awliyā’ 8/266"
    }
];

function get() {
    const text = texts[currentIndex];
    document.getElementById("demo").innerHTML = `
        <h2>${text.heading}</h2>
        <p>${text.content}</p>
        <p>Source: ${text.source}</p>
        <button onclick="get()">Get More</button>
    `;
    currentIndex = (currentIndex + 1) % texts.length;  // Cycle through the texts
}

