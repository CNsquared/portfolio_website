const projects = [
    {
        title: "Creating Embedding Spaces of Short Form Messages for Authorship Verification",
        description: "The deep learning approach is a biBERT Siamese model that compares SVM-enhanced representations of each text via distance, and the statistical learning approach uses an SVM ensemble to predict the most likely author of each text, optionally comparing either the predicted label or the probability distribution. We find that the deep learning approach provides much better accuracy without a significant increase in prediction time, while the statistical learning approach takes significantly less time to train.",
        technologies: ["BERT", "Siamese Networks", "SVM", "Embedding Spaces"],
        link: "assets/Creating Embedding Spaces of Short Form Messages for Authorship Verification.pdf",
        image: "assets/images/AV/embedding_spaces_preview.png"
    },
    {
        title: "Online Messaging Authorship Analysis with Doc2Vec and TFIDF",
        description: "‘lol,’ ‘LOL,’ ‘Lol,’ or opting for ‘haha’—the internet and the screens that separate us strip away many social cues that humans have evolved to pick up on. Consequently, individuals try to convey their messages through alternative means, whether it's through capitalization, emojis, or even strings like ‘jkflasjdfl.’ This paper aims to explore these tendencies, examining just how unique our texting styles truly are. The objective is to investigate whether these differences can be leveraged to classify the author of a particular message. Using Doc2Vec, we strive to capture both the potential syntax and meaning of messages. Additionally, TF-IDF is employed to identify the rarity of certain words, helping us pinpoint unique vocabularies of individuals. Furthermore, we gather additional heuristic features from the messages. Finally, an SVM is utilized to combine all these features and classify the messages.",
        technologies: ["Doc2Vec", "TF-IDF", "SVM", "Feature Selection"],
        link: "assets/Online Messaging Authorship Analysis with Doc2Vec and TFIDF.pdf",
        image: "assets/images/AV/Doc2Vec_and_TFIDF.png"
    },
    {
        title: "Who This? Authorship Classification of Short Form Text Messages",
        description: "In this paper, we attempt to use a combination of transformers, a GRU model, and an LDA model to classify short text messages from different users. By analyzing the content, syntax, and topics of messages, we hope to be able to successfully predict which user sent which message from a pool of 10 potential authors. After fine-tuning the models and pre-processing data in different ways, we achieved a suitable performance compared to other research in the field. This paper best helps us understand trends in instant messaging and how people communicate with each other using the internet.",
        technologies: ["Transformers", "GRU", "LDA", "Text Classification"],
        link: "assets/Who This Authorship Classification of Short Form Text Messages.pdf",
        image: "assets/images/AV/ensemble.png"
    }
];

let currentProjectIndex = 0;

function updateProject() {
    const project = projects[currentProjectIndex];
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").textContent = project.description;
    const technologiesList = document.getElementById("project-technologies");
    technologiesList.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join("");
    document.getElementById("project-link").href = project.link;
    document.getElementById("project-image").src = project.image;
    document.getElementById("project-image").alt = project.title;
}

document.getElementById("prev-project").addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProject();
});

document.getElementById("next-project").addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProject();
});

// Initialize the first project
updateProject();

document.querySelector('a[href="#recent-work"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#recent-work').scrollIntoView({ behavior: 'smooth' });
});

const miscProjects = [
    {
        title: "Miscellaneous Research Project 1",
        description: "This project explores advanced statistical methods for data analysis.",
        technologies: ["Python", "R", "Matplotlib"],
        link: "assets/misc-project1.pdf",
        image: "assets/images/misc/project1.png"
    },
    {
        title: "Miscellaneous Research Project 2",
        description: "A study on the application of machine learning in environmental science.",
        technologies: ["Python", "TensorFlow", "Pandas"],
        link: "assets/misc-project2.pdf",
        image: "assets/images/misc/project2.png"
    }
];

const softwareProjects = [
    {
        title: "Software Development Project 1",
        description: "Developed a web application for task management using React and Node.js.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "assets/software-project1.pdf",
        image: "assets/images/software/project1.png"
    },
    {
        title: "Software Development Project 2",
        description: "Created a mobile app for fitness tracking using Flutter.",
        technologies: ["Flutter", "Dart", "Firebase"],
        link: "assets/software-project2.pdf",
        image: "assets/images/software/project2.png"
    }
];

let currentMiscIndex = 0;
let currentSoftwareIndex = 0;

function updateMiscProject() {
    const project = miscProjects[currentMiscIndex];
    document.getElementById("misc-title").textContent = project.title;
    document.getElementById("misc-description").textContent = project.description;
    const technologiesList = document.getElementById("misc-technologies");
    technologiesList.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join("");
    document.getElementById("misc-link").href = project.link;
    document.getElementById("misc-image").src = project.image;
    document.getElementById("misc-image").alt = project.title;
}

function updateSoftwareProject() {
    const project = softwareProjects[currentSoftwareIndex];
    document.getElementById("software-title").textContent = project.title;
    document.getElementById("software-description").textContent = project.description;
    const technologiesList = document.getElementById("software-technologies");
    technologiesList.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join("");
    document.getElementById("software-link").href = project.link;
    document.getElementById("software-image").src = project.image;
    document.getElementById("software-image").alt = project.title;
}

document.getElementById("prev-misc").addEventListener("click", () => {
    currentMiscIndex = (currentMiscIndex - 1 + miscProjects.length) % miscProjects.length;
    updateMiscProject();
});

document.getElementById("next-misc").addEventListener("click", () => {
    currentMiscIndex = (currentMiscIndex + 1) % miscProjects.length;
    updateMiscProject();
});

document.getElementById("prev-software").addEventListener("click", () => {
    currentSoftwareIndex = (currentSoftwareIndex - 1 + softwareProjects.length) % softwareProjects.length;
    updateSoftwareProject();
});

document.getElementById("next-software").addEventListener("click", () => {
    currentSoftwareIndex = (currentSoftwareIndex + 1) % softwareProjects.length;
    updateSoftwareProject();
});

// Initialize the first projects
updateMiscProject();
updateSoftwareProject();

// UPDATED MODAL FUNCTIONALITY - Handle all PDF links
const resumeModal = document.getElementById('resume-modal');
const resumeClose = document.getElementById('resume-close');
const modalIframe = resumeModal.querySelector('iframe');

// Function to open any PDF in the modal
function openPDFInModal(pdfUrl) {
    modalIframe.src = pdfUrl + "#zoom=100";
    resumeModal.style.display = 'block';
}

// Handle resume link
const resumeLink = document.getElementById('resume-link');
resumeLink.addEventListener('click', e => {
    e.preventDefault();
    openPDFInModal("assets/Alex Oshima's Resume.pdf");
});

// Handle all project PDF links
document.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (target && target.href && target.href.endsWith('.pdf')) {
        e.preventDefault();
        const pdfUrl = target.getAttribute('href');
        openPDFInModal(pdfUrl);
    }
});

// Close modal functionality
resumeClose.addEventListener('click', () => {
    resumeModal.style.display = 'none';
    modalIframe.src = ''; // Clear the iframe when closing
});

// Click outside content closes modal
window.addEventListener('click', e => {
    if (e.target === resumeModal) {
        resumeModal.style.display = 'none';
        modalIframe.src = ''; // Clear the iframe when closing
    }
});

// Bio profile switcher
const bioData = [
    {
        title: "Hi, I'm Alex. A climber and grappler!",
        description: "Outside of work, I have a passion for rock climbing and brazilian jiu-jitsu. While these sports may seem very different, to me, they are both just physical version of problem solving. Wether its determining the right route up the rock or the right path to a submission, I love a good puzzle and figuring it out."
    },
    {
        title: "Hi, I'm Alex. A motivated and problem-solving oriented machine learning engineer!",
        description: "I have been programming and working on projects since 2018. I have experience in both app development and data science. But my main passion and work is in data science and machine learning. I have worked on various projects including image classification, natural language processing, and time series forecasting. "
    },
    {
        title: "Hi, I'm Alex. Forever a student and always learning!",
        description: "I got my formal education and the University of California at San Diego, where I earned a B.S. in Computer Engineering. I also recieved engineering honors. UCSD is also where I got my M.S. in electrical engineering with a spec. in machine learning and data science. Even though my acadmeic education may be over for now, I always am trying to learn and expand my skillset. People say that I am a fast learner so I might as well learn as much as I can!"
    }
];

let currentBioIndex = 1; // Start with middle profile

// Apply bio data to all faces
function updateAllBios(index) {
    const bioTitles = document.querySelectorAll('#bio-title');
    const bioDescriptions = document.querySelectorAll('#bio-description');
    const bioTexts = document.querySelectorAll('.bio-text');
    
    // Add changing class for fade effect
    bioTexts.forEach(text => text.classList.add('changing'));
    
    setTimeout(() => {
        bioTitles.forEach(title => {
            title.textContent = bioData[index].title;
        });
        bioDescriptions.forEach(desc => {
            desc.textContent = bioData[index].description;
        });
        
        // Remove changing class
        bioTexts.forEach(text => text.classList.remove('changing'));
    }, 150);
}

// Handle profile switching on all faces
function initProfileSwitchers() {
    const switchers = document.querySelectorAll('.pfp-switcher');
    
    switchers.forEach(switcher => {
        const profiles = switcher.querySelectorAll('.pfp');
        
        profiles.forEach((profile, index) => {
            profile.addEventListener('click', () => {
                if (index === currentBioIndex) return; // Already selected
                
                // Update all switchers
                switchers.forEach(otherSwitcher => {
                    const otherProfiles = otherSwitcher.querySelectorAll('.pfp');
                    
                    // Remove current classes
                    otherProfiles.forEach(p => {
                        p.classList.remove('pfp-main', 'pfp-left', 'pfp-right');
                    });
                    
                    // Apply new classes based on selected index
                    otherProfiles.forEach((p, i) => {
                        const dataIndex = parseInt(p.dataset.index);
                        if (dataIndex === index) {
                            p.classList.add('pfp-main');
                        } else if ((dataIndex < index && dataIndex === index - 1) || 
                                 (index === 0 && dataIndex === 2)) {
                            p.classList.add('pfp-left');
                        } else {
                            p.classList.add('pfp-right');
                        }
                    });
                });
                
                currentBioIndex = index;
                updateAllBios(index);
            });
        });
    });
}

// Initialize after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    initProfileSwitchers();
    updateAllBios(currentBioIndex); // Set initial bio
});