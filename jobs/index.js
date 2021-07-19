
const JOBS = [
    {
        id: 'j1',
        title: "Sotware Engineer",
        description: 'Craft robust, beautiful, usable interfaces for our products and our client’s projects. Play an integral role in connecting and collaborating with strategy, design, and backend to create a cohesive and organized final experience. And enthusiastically own getting to the most optimal solution.',
        company: "Dream inc.",
        salaryRange: {
            from: 2000,
            to: 3000,
        },
        location: "Hyderabad",
        employmentType: "full-time", // full-time, part-time
        workingFrom: "remote", // office, remote
        createdDate: Date.now().toString(),
    },
]

const searchJob = (searchQuery) => {
 // Search by title
}

const createJob = (title, description, company, salaryFrom, salaryTo, location, employmentType, workingFrom) => {
    JOBS.push({
        id: `j${JOBS.length + 1}`,
        title: title, 
        description: description,
        company: company,
        salaryRange: {
            from: salaryFrom,
            to: salaryTo,
        },
        location: location,
        employmentType: employmentType,
        workingFrom:workingFrom,
        createdDate: Date.now().toString(),
    })
}


const renderOneJob = (job) => {
    const newJobElement = document.createElement('div');
    newJobElement.classList.add('job-item');
    newJobElement.innerHTML = `
        <h3>${job.title}</h3>
        <p>${job.description}</p>
        <p>${job.salaryRange.from}$ - ${job.salaryRange.to}$</p>
        <p>${job.createdDate}</p>
    `

    const container = document.getElementById('jobs-container');
    container.appendChild(newJobElement);
}

const renderJobs = () => {

    // Remove previously rendered job items, so that we can rerender the whole array again
    const container = document.getElementById('jobs-container');
    container.innerHTML = ''

    let i = 0;

    while (i < JOBS.length) {
        renderOneJob(JOBS[i])
        i++;
    }
}



renderJobs();

const postJobButton = document.getElementById('post-job-button');

postJobButton.addEventListener('click', () => {
    // Collect this data from user inputs
    const title = 'Sky pirate'
    const description = 'Fly away with us and youll be happy'
    const company = 'Fly Away inc.'
    const salaryFrom = 5000
    const salaryTo = 6000
    const location = 'Iceland'
    const employmentType = 'full-time'
    const workingFrom = 'home'

    createJob(title, description, company, salaryFrom, salaryTo, location, employmentType, workingFrom )
    
    renderJobs();
    console.log('JOBS =', JOBS)
})
