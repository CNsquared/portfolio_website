const projects = [
    {
        title: "Creating Embedding Spaces of Short Form Messages for Authorship Verification",
        description: "The deep learning approach is a biBERT Siamese model that compares SVM-enhanced representations of each text via distance, and the statistical learning approach uses an SVM ensemble to predict the most likely author of each text, optionally comparing either the predicted label or the probability distribution. We find that the deep learning approach provides much better accuracy without a significant increase in prediction time, while the statistical learning approach takes significantly less time to train.",
        technologies: ["Python", "PyTorch", "Scikit-learn", "NumPy", "Pandas"],
        link: "assets/Creating Embedding Spaces of Short Form Messages for Authorship Verification.pdf",
        image: "assets/images/AV/embedding_spaces_preview.png"
    },
    {
        title: "Improving Authorship Attribution with Transformer Architectures",
        description: "This project explores the use of transformer-based models for authorship attribution tasks, achieving state-of-the-art results on short-form text datasets.",
        technologies: ["Python", "TensorFlow", "Transformers", "Hugging Face"],
        link: "assets/Online Messaging Authorship Analysis with Doc2Vec and TFIDF.pdf",
        image: "assets/images/AV/Doc2Vec_and_TFIDF.png"
    },
    {
        title: "Statistical Learning for Authorship Verification",
        description: "A statistical approach using SVM ensembles and dimensionality reduction techniques to verify authorship across large datasets.",
        technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
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

document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector('#recent-work-button').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#recent-work"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector('#recent-work-button').scrollIntoView({ behavior: 'smooth' });
});


const miscProjects = [
    {
        title: "Miscellaneous Research Project 1",
        description: "This project explores advanced statistical methods for data analysis.",
        technologies: ["Python", "R", "Matplotlib"],
        link: "#",
        image: "assets/images/misc/project1.png"
    },
    {
        title: "Miscellaneous Research Project 2",
        description: "A study on the application of machine learning in environmental science.",
        technologies: ["Python", "TensorFlow", "Pandas"],
        link: "#",
        image: "assets/images/misc/project2.png"
    }
];

const softwareProjects = [
    {
        title: "Software Development Project 1",
        description: "Developed a web application for task management using React and Node.js.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "#",
        image: "assets/images/software/project1.png"
    },
    {
        title: "Software Development Project 2",
        description: "Created a mobile app for fitness tracking using Flutter.",
        technologies: ["Flutter", "Dart", "Firebase"],
        link: "#",
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


const resumeLink  = document.getElementById('resume-link');
const resumeModal = document.getElementById('resume-modal');

resumeLink.addEventListener('click', e => {

  e.preventDefault();
  resumeModal.style.display = 'block';
});



// click outside content closes modal
window.addEventListener('click', e => {
  if (e.target === resumeModal) {
    resumeModal.style.display = 'none';
  }
});



