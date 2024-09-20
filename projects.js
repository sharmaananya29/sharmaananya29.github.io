const projects = [
    {
        title: "NFT Exchange Platform",
        description: "A platform to exchange NFTs.",
        image: "/assets/img/crypto.jpg",
        date: "2022-08-30"
    },
    {
        title: "Mapify (Maps Project)",
        description: "A platform where you can view multiple maps with features and multiple points of interest.",
        image: "/assets/img/map.png",
        date: "2022-04-28"
    },
    {
        title: "Chatbot for GL codes",
        description: "A chatbot for employees to find GL codes.",
        image: "/assets/img/ibm-watson.webp",
        date: "2021-08-01"
    },
];

// Sort projects by date in descending order
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

let displayedProjects = 2; // Number of projects to display at once
let currentIndex = 0; // Current index for loading projects

function displayProjects() {
    const projectsContainer = document.getElementById('recent-projects');

    // Loop to display the next set of projects
    for (let i = currentIndex; i < currentIndex + displayedProjects; i++) {
        if (i < projects.length) {
            const project = projects[i];
            const projectDiv = document.createElement('div');
            projectDiv.className = "col s12 m6 l4"; // Adjust layout as needed
            projectDiv.innerHTML = `
                <div class="card medium">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img alt="${project.title}" src="${project.image}" style="height: 100%; width: 100%" class="activator" />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
                        <p>${project.description}</p>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectDiv);
        }
    }

    // Update button visibility
    if (currentIndex + displayedProjects >= projects.length) {
        document.getElementById('load-more').style.display = "none"; // Hide button if no more projects
    } else {
        document.getElementById('load-more').style.display = "block"; // Show button if more projects exist
    }

    // Update currentIndex for the next load
    currentIndex += displayedProjects;
}

// Load initial projects
displayProjects();

// Load more projects when the button is clicked
document.getElementById('load-more').addEventListener('click', displayProjects);


