import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const booksJSON = `[{"id": "0001","title": "The Aeneid","author": "Virgil","description": "An epic poem narrating the legendary story of Aeneas, a Trojan hero who, after the fall of Troy, undertakes a perilous journey across the Mediterranean. His adventures and trials culminate in the foundation of Rome, a city destined to become a world power. The poem explores profound themes of duty, fate, and the divine will in shaping the course of human events.","publication": "c. 19 BCE","image": "/photos/The-Aeneid.jpg"},{"id": "0002","title": "Metamorphoses","author": "Ovid","description": "A narrative poem that weaves together an extensive mythological history of the world, beginning with the creation and extending to the deification of Julius Caesar. The work is renowned for its rich tapestry of transformations, featuring gods, heroes, and mythical beings whose stories illustrate the nature of change and the divine influence over human affairs.","publication": "c. 8 CE","image": "/photos/Metamorphoses.jpg"},{"id": "0003","title": "The History of Rome","author": "Livy","description": "A monumental and comprehensive history of Rome that chronicles the city's development from its legendary founding by Romulus and Remus through to Livy's own time. This extensive work provides a detailed narrative of Rome's political, social, and military evolution, offering insights into the values and struggles of early Rome.","publication": "c. 27 BCE – 9 CE","image": "/photos/TheHistoryofRome.jpg"},{"id": "0004","title": "On the Republic", "author": "Cicero","description": "A philosophical dialogue that delves into Roman political theory, exploring the concept of the ideal state, the nature of justice, and the role of law in governance. Cicero's work reflects his views on political philosophy, offering a vision of how a just and well-ordered society should function according to Roman principles.","publication": "c. 54 BCE","image": "/photos/OntheRepublicbyCicero.png"},{"id": "0005","title": "The Twelve Caesars","author": "Suetonius","description": "A set of biographies detailing the lives and reigns of the first twelve Roman emperors, from Julius Caesar to Domitian. Suetonius provides vivid and often dramatic accounts of their personal lives, political intrigues, and significant events during their rule, offering a window into the personalities and politics of early imperial Rome.","publication": "c. 121 CE","image": "/photos/The Twelve Caesars.jpg"},{"id":"0006","title": "Histories","author": "Herodotus","description":"Often regarded as the 'Father of History,' Herodotus presents a detailed and engaging account of the Greco-Persian Wars. His work not only chronicles the conflicts between Greece and Persia but also offers rich descriptions of the customs, traditions, and societies of various peoples across the ancient world.","publication": "c. 430 BCE","image": "/photos/Histories.jpg"},{"id": "0007","title": "History of the Peloponnesian War","author": "Thucydides","description": "A critical and thorough account of the prolonged conflict between Athens and Sparta, known as the Peloponnesian War. Thucydides' work examines the causes, key events, and consequences of the war, providing a detailed analysis of the political and military dynamics that shaped this pivotal period in Greek history.","publication": "c. 400 BCE","image": "/photos/HistoryofthePeloponnesianWar.jpg"},{"id": "0008","title": "The Republic","author": "Plato","description": "A philosophical dialogue that investigates the nature of justice and the concept of the ideal state. Plato discusses the role of the philosopher-king, the theory of forms, and the structure of a just society, while also exploring the nature of the human soul and the pursuit of knowledge and virtue.","publication": "c. 380 BCE","image": "/photos/TheRepublic.jpg"},{"id": "0009","title": "Nicomachean Ethics","author": "Aristotle","description": "A foundational text in moral philosophy that explores the nature of virtue, the pursuit of happiness, and the concept of a flourishing life. Aristotle examines various aspects of ethical behavior and personal character, aiming to define the path to achieving a balanced and virtuous existence.","publication": "c. 340 BCE","image": "/photos/NicomacheanEthics.jpg"},{"id": "0010","title": "Works and Days","author": "Hesiod","description": "A didactic poem that provides practical advice on various aspects of farming, labor, and ethical behavior. Hesiod also weaves in mythological narratives that explore the origins of the gods and human labor, offering a blend of practical wisdom and mythical storytelling.","publication": "c. 700 BCE","image": "/photos/WorksandDays.jpg"}]`;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;
let backgroundClass = "defaultBackground"; 

app.get("/", (req, res) => {
  res.render("index.ejs", { books: data, backgroundClass: backgroundClass });
});

app.post("/recipe", (req, res) => {
  const choice = req.body.choice;
  backgroundClass = choice.startsWith("roman") ? "romanBackground" : "greekBackground";

  switch (choice) {
    case "roman1": data = JSON.parse(booksJSON)[0]; break;
    case "roman2": data = JSON.parse(booksJSON)[1]; break;
    case "roman3": data = JSON.parse(booksJSON)[2]; break;
    case "roman4": data = JSON.parse(booksJSON)[3]; break;
    case "roman5": data = JSON.parse(booksJSON)[4]; break;
    case "greek1": data = JSON.parse(booksJSON)[5]; break;
    case "greek2": data = JSON.parse(booksJSON)[6]; break;
    case "greek3": data = JSON.parse(booksJSON)[7]; break;
    case "greek4": data = JSON.parse(booksJSON)[8]; break;
    case "greek5": data = JSON.parse(booksJSON)[9]; break;
    default: data = null; break;
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
