// Radar chart configuration and rendering
const ctx = document.getElementById('radarChart').getContext('2d');

const data = {
  labels: ['Python','JavaScript','SQL/PostgreSQL','Git','Plotly Dash (Web-based Dashboard)',
    'Power BI (Including DAX)', 'Tableau','Excel','Data Visualization',
    'Machine Learning (Including ML Deployment)','GenAI','Building ETL Data Pipelines','PySpark (Big Data Processing)','Statistics/Econometrics'],
  datasets: [{
    label: 'My Data Analytics Skills Proficiency',
    data: [8.5, 1.5, 8.5,5,7,8,
         7.5,8,9,5.5,4,7.5,6,7.5],
    backgroundColor: 'rgba(168, 169, 175, 0.3)',
    borderColor: 'rgba(0, 0, 0, 1)', // Colour for the line
    borderWidth: 2,
    pointBackgroundColor: 'rgba(255, 255, 255, 255)',
    fill: true, // Make the fill colour visible
    tension:0.2,
  }]
};

const options = {
  responsive: true,
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


window.addEventListener('resize', () => {
  const newFontSize = getResponsiveFontSize();
  myRadarChart.options.scales.r.ticks.font.size = newFontSize;
  myRadarChart.options.scales.r.pointLabels.font.size = newFontSize;
  myRadarChart.options.plugins.legend.labels.font.size = newFontSize;
  myRadarChart.update(); // Re-render the chart with updated font size
});