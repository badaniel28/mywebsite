document.addEventListener('DOMContentLoaded', (event) => {
    const ctx2 = document.getElementById('chart2').getContext('2d');
    const chart2 = new Chart(ctx2, {
        type: 'bar', // Use 'bar' to create horizontal bars
        data: {
            labels: ['0-4', '5-9', '10-14','15-19', '20-24', '25-29','30-34','35-39','40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80+'].reverse(),
            datasets: [
                {
                    label: 'Male',
                    backgroundColor: 'rgb(54, 162, 235)',
                    data: [-1397, -2229,-3006, -3100, -2960, -2829, -2480, -2046, -1761,-1661,  -1400, -1173,-969, -667, -440, -261,  -256].reverse()  // Use negative values for left side
                  
                },
                {
                    label: 'Female',
                    backgroundColor: 'rgb(255, 99, 132)',
                    data: [  1331, 2183, 2824, 3050, 2893, 2805,  2321, 1790, 1723, 1531, 1310, 1191, 955, 817,  580, 369,558].reverse() // Positive values for right side
                }
            ]
        },
        options: {
            indexAxis: 'y', // Horizontal bars
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        callback: function(value, index, values) {
                            return Math.abs(value);
                        }
                    }
                },
                y: {
                    stacked: true
                }
            }
        }
    });
    var ctx1 = document.getElementById('chart1').getContext('2d');
    var chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['2021','2022', "2023"],
            datasets: [{
                label: 'Total Population',
                data: [ 55130, 56394, 56866],
                backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(218, 65, 56, 1)','rgba(77, 56, 218, 1)'],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Modal functionality
    const modal = document.getElementById('inputModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementsByClassName('closeBtn')[0];
    const submitDataBtn = document.getElementById('submitDataBtn');

    openModalBtn.onclick = function() {
        modal.style.display = 'flex';
    }

    closeModalBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    submitDataBtn.onclick = function() {
        const ageGroup = document.getElementById('ageGroup').value;
        const maleData = -Math.abs(document.getElementById('maleData').value); // Ensure value is negative
        const femaleData = Math.abs(document.getElementById('femaleData').value); // Ensure value is positive

        if (ageGroup && maleData && femaleData) {
            // Add new data to the chart
            populationPyramid.data.labels.push(ageGroup);
            populationPyramid.data.datasets[0].data.push(maleData);
            populationPyramid.data.datasets[1].data.push(femaleData);
            populationPyramid.update();

            // Clear the form
            document.getElementById('populationForm').reset();
            modal.style.display = 'none';
        } else {
            alert('Please fill in all fields.');
        }
    }
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
