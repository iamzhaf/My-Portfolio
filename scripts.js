// Radar chart configuration and rendering
const ctx = document.getElementById('radarChart').getContext('2d');

const data = {
  labels: ['Python','JavaScript','SQL/PostgreSQL',
    'Power BI (Including DAX)', 'Tableau','Excel','Data Visualization',
    'Machine Learning (Including ML Deployment)','Building ETL Data Pipelines','PySpark (Big Data Processing)','Statistics/Econometrics'],
  datasets: [{
    label: 'My Data Analytics Skills Proficiency',
    data: [8.5, 1.5, 8.5, 8,
         7.5,8,9,4.5,7.5,6,7.5],
    backgroundColor: 'rgba(168, 169, 175, 0.3)',
    borderColor: 'rgba(0, 0, 0, 1)', // Colour for the line
    borderWidth: 2,
    pointBackgroundColor: 'rgba(255, 255, 255, 255)',
    fill: true, // Make the fill colour visible
    tension:0.2,
  }]
};

const options = {
  scales: {
    r: {
      beginAtZero: true,
      max: 10,
      pointLabels: {
        font: {
          size: 13, // Larger font size
          family: 'Verdana', // Custom font family
          weight: 'bold', // Bold text
        },
        color: 'black', // Blue labels
      },
    },
  },
  title: {
    display: true, // Display the title
    text: 'My Radar Chart Title', // Title text
    font: {
        size: 24 // Increase the font size here
    }
    },
};

new Chart(ctx, {
  type: 'radar',
  data: data,
  options: options
});