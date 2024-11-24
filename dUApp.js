const mishnayot = [
    "1:1 Moshe received the Torah from Sinai and gave it over to Yehoshua. Yehoshua gave it over to the Elders, the Elders to the Prophets, and the Prophets gave it over to the Men of the Great Assembly. They [the Men of the Great Assembly] would always say these three things: Be cautious in judgement. Establish many pupils. And make a safety fence around the Torah.",
    "1:2 Shimon the Righteous was among the last surviving members of the Great assembly. He would say: The world stands on three things: Torah, the service of G‑d, and deeds of kindness.",
    "1:3 Antignos of Socho received the tradition from Shimon the Righteous. He would say: Do not be as slaves, who serve their master for the sake of reward. Rather, be as slaves who serve their master not for the sake of reward. And the fear of Heaven should be upon you",
    "1:4 Yosse the son of Yoezer of Tzreidah, and Yosse the son of Yochanan of Jerusalem, received the tradition from them. Yosse the son of Yoezer of Tzreidah would say: Let your home be a meeting place for the wise; dust yourself in the soil of their feet, and drink thirstily of their words.",
    "1:5 Yosse the son of Yochanan of Jerusalem would say: Let your home be wide open, and let the poor be members of your household. And do not engage in excessive conversation with a woman. This is said even regarding one's own wife—how much more so regarding the wife of another. Hence, the sages said: One who excessively converses with a woman causes evil to himself, neglects the study of Torah, and, in the end, inherits Gehinom (hell).",
    "1:6 Joshua the son of Perachia and Nitai the Arbelite received from them. Joshua the son of Perachia would say: Make for yourself a Rabbi, buy for yourself a friend, and judge every man favorably.",    
    "1:7 Nitai the Arbelite would say: Distance yourself from a bad neighbor, do not become friends with a wicked person, and do not despair (some say: because) of retribution.",
    "1:8 Judah the son of Tabbai and Shimon the son of Shatah received from them. Judah the son of Tabbai would say: When serving as judge, do not act as a lawyer. When the litigants stand before you, consider them both wicked; and when they leave your courtroom, having accepted the judgement, regard them both as righteous.",
    "1:9 Shimon the son of Shatah would say: Increasingly cross-examine the witnesses. Be careful with your words, lest from them they learn how to lie.",
    "1:10 Shma'yah and Avtalyon received from them. Shma'yah would say: Love work, hate a position of power, and do not become overly familiar with the government.",
    "1:11 Avtalyon would say: Scholars, be careful with your words. Lest you incur the penalty of exile and be exiled to a place of evil waters (heresy). The disciples who come after you will then drink of these evil waters and die, and the Name of Heaven will be desecrated.",
    "1:12 Hillel and Shammai received from them. Hillel would say: Be of the disciples of Aaron—a lover of peace, a pursuer of peace, one who loves the creatures and draws them close to Torah.",
    "1:13 He would also say: One who seeks renown, destroys his reputation. One who does not increase, diminishes. One who refuses to teach Torah is deserving of death. And one who makes personal use of the crown of Torah shall perish.",
    "1:14 He would also say: If I am not for myself, who is for me? And if I am only for myself, what am I? And if not now, when?",
    "1:15 Shammai would say: Make your Torah study a permanent fixture of your life. Say little and do much. And receive every man with a pleasant countenance.",
    "1:16 Rabban Gamliel would say: Make for yourself a Rabbi and stay away from doubt; and do not accustom yourself to tithe by estimation.",
    "1:17 His son, Shimon, would say: All my life I have been raised among the Sages, and I have found nothing better for the body than silence. The essential thing is not study, but deed. And one who speaks excessively brings on sin.",
    "1:18 Rabban Shimon the son of Gamliel would say: By three things is the world sustained: judgement, truth and peace. As it is stated (Zachariah 8:16): Truth, and a judgement of peace, you should administer at your [city] gates."

];  
  
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  
  const mishnahIndex = dayOfYear % mishnayot.length; // Loop over if the year is longer than the array
  const mishnahOfTheDay = mishnayot[mishnahIndex];
  document.getElementById("mishnah").innerText = mishnahOfTheDay;

 // Array of parashot starting with Hayye Sara
 const parshiyot = [
    "Hayye Sara", "Toledot", "Vayetze", "Vayishlah", "Vayeshev", 
    "Miketz", "Vayigash", "Vayehi", "Shemot", "Vaera", "Bo", 
    "Beshalah", "Yitro", "Mishpatim", "Terumah", "Tetzaveh", 
    "Ki Tisa", "Vayak'hel", "Pekudei", "Vayikra", "Tzav", 
    "Shemini", "Tazria", "Metzora", "Aharei Mot", "Kedoshim", 
    "Emor", "Behar", "Behukotai", "Bamidbar", "Nasso", "Beha'alotekha", 
    "Shelah", "Korah", "Hukat", "Balak", "Pinhas", "Matot", 
    "Masei", "Devarim", "Vaetchanan", "Ekev", "Re'eh", 
    "Shoftim", "Ki Tetze", "Ki Tavo", "Nitzavim", "Vayelekh", 
    "Haazinu", "Vezot Haberakha", "Beresheet", "Noah", "Lekh Lekha", "Vayera"
];

// Calculate the index of the current parasha
function getCurrentParasha() {
    const baseDate = new Date("2024-11-17"); // Sunday of Hayye Sara week
    const today = new Date();
    const daysSinceBase = Math.floor((today - baseDate) / (1000 * 60 * 60 * 24));
    const weeksSinceBase = Math.floor(daysSinceBase / 7);
    const currentParashaIndex = weeksSinceBase % parshiyot.length;

    return parshiyot[currentParashaIndex];
}

// Update the displayed parasha
document.getElementById("parasha").textContent = `This week's parasha is: ${getCurrentParasha()}`;

const API_KEY = "AIzaSyBTTWyNO1f67JWiwvjAsy5ZnMoEZwY53qk"; // Replace with your API key
const PLAYLIST_ID = "PLfeqUDL5aojazwxOuNPEytvKOp2VJUwAs"; // Replace with the playlist ID

// Fetch videos from the playlist
async function fetchPlaylistVideos() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}`);
    const data = await response.json();
    return data.items; // Returns an array of videos
}

// Get a random video and display it
//update to call one time and put a random video everyday
async function displayRandomVideo() {
    const videos = await fetchPlaylistVideos();
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    const videoId = randomVideo.snippet.resourceId.videoId;

    // Embed the video
    document.getElementById("video").innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" 
        frameborder="0" allowfullscreen></iframe>
    `;
}

displayRandomVideo();
