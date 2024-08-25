const categoryPhoto = document.getElementById("category-photo");
const memberCards = document.getElementById("member-cards");
const filterDropdown = document.getElementById("team-filter");

const members = [
    {
      name: "Lavenia Sherlifany",
      dob: "18 Okt 2008",
      instagram: "laveniash_",
      categories: ["event", "lineup-cleanliness"]
    },
    {
      name: "Muhammad Rafie Khalaf Faith",
      dob: "9 September 2008",
      instagram: "ravvie._",
      categories: ["event", "security"]
    },
    {
      name: "Frizzy Alnaufal Lenggana",
      dob: "4 Februari 2009",
      instagram: "7rizzyall",
      categories: ["documentation"]
    },
    {
      name: "DL. Milka Lim",
      dob: "18 Desember 2009",
      instagram: "dmilkal",
      categories: ["event", "lineup-cleanliness"]
    },
    {
      name: "Winson",
      dob: "20-8-2008",
      instagram: "winson.liee",
      categories: ["multimedia"]
    },
    {
      name: "Abdul Atha Mori",
      dob: "28 juni 2009",
      instagram: "thawrld__",
      categories: ["shoe-guards"]
    },
    {
      name: "Kelly Louis alpendo",
      dob: "27 april 2008",
      instagram: "louissss_ssss",
      categories: ["event", "lineup-cleanliness"]
    },
    {
      name: "fatiyyah alphahasanah deka",
      dob: "31 mei 2008",
      instagram: "fatiyyahd",
      categories: ["documentation"]
    },
    {
      name: "Muhammad Athallah Rasya",
      dob: "05 Desember 2008",
      instagram: "athallah_rasya12",
      categories: ["security"]
    },
    {
      name: "Calysta Setiawan",
      dob: "15-05-2008",
      instagram: "clystaww",
      categories: ["art-appreciation", "security"]
    },
    {
      name: "catherine novia hartanto",
      dob: "11-11-2009",
      instagram: "nviaa_cath",
      categories: ["documentation", "treasurer"]
    },
    {
      name: "Syiezha Naiyra Qanieta Rasyid",
      dob: "5 maret 2009",
      instagram: "not_zizi_",
      categories: ["design", "shoe-guards"]
    },
    {
      name: "Rumaysha Jasmine Aurelia Juraijin",
      dob: "19 Juni 2009",
      instagram: "_.jasmine.tea._",
      categories: ["design"]
    },
    {
      name: "Cheryl Vincentia",
      dob: "3 Desember 2009",
      instagram: "chervinn_",
      categories: ["design", "languages"]
    },
    {
      name: "Kayyisah Putri Khairani",
      dob: "13 Januari 2010",
      instagram: "ky.khair",
      categories: ["documentation"]
    },
    {
      name: "Nadhifa Hilaliyah",
      dob: "19 Agustus 2009",
      instagram: "alnadhist",
      categories: ["shoe-guards"]
    },
    {
      name: "Adeline",
      dob: "19 Juni 2009",
      instagram: "adelineeau",
      categories: ["languages"]
    },
    {
      name: "Felicia Monica Christine",
      dob: "1 mei 2008",
      instagram: "feliciiamonica",
      categories: ["documentation", "languages"]
    },
    {
      name: "Kheisya Mona Maharani",
      dob: "9 April 2008",
      instagram: "kheisyamaharani_",
      categories: ["communication", "secretary"]
    },
    {
      name: "mishel maretha sunardi",
      dob: "29 maret 2009",
      instagram: "mishells.z",
      categories: ["shoe-guards"]
    },
    {
      name: "Kellen Nataline",
      dob: "07 des 2008",
      instagram: "klln.ntlne",
      categories: ["chairperson"]
    }
  ];

const createMemberCard = ({ name, dob, instagram }) => `
  <div class="member-card">
    <h2>${name}</h2>
    <p>Date of Birth: ${dob}</p>
    <a class="instagram-link" href="https://www.instagram.com/${instagram}" target="_blank">
      <i class="fab fa-instagram"></i>${instagram}
    </a>
  </div>
`;

const updateContent = (category) => {
  let filteredMembers = category === "all" ? members : members.filter(member => member.categories.includes(category));
  
  memberCards.innerHTML = filteredMembers.map(createMemberCard).join("");

  switch (category) {
    case "chairperson":
      categoryPhoto.src = "chairperson.jpg";
      break;
    case "secretary":
      categoryPhoto.src = "secretary.jpg";
      break;
    case "event":
      categoryPhoto.src = "event.jpg";
      break;
    case "communication":
      categoryPhoto.src = "communication.jpg";
      break;
    case "multimedia":
      categoryPhoto.src = "multimedia.jpg";
      break;
    case "design":
      categoryPhoto.src = "design.jpg";
      break;
    case "documentation":
      categoryPhoto.src = "documentation.jpg";
      break;
    case "art-appreciation":
      categoryPhoto.src = "art-appreciation.jpg";
      break;
    case "languages":
      categoryPhoto.src = "languages.jpg";
      break;
    case "lineup-cleanliness":
      categoryPhoto.src = "lineup-cleanliness.jpg";
      break;
    case "shoe-guards":
      categoryPhoto.src = "shoe-guards.jpg";
      break;
    case "security":
      categoryPhoto.src = "security.jpg";
      break;
    case "catering":
      categoryPhoto.src = "catering.jpg";
      break;
    default:
      categoryPhoto.src = "default.jpg";
      break;
  }
};

updateContent("all");

filterDropdown.addEventListener("change", (e) => {
  updateContent(e.target.value);
});
