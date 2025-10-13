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
                    data: [-1238, -2078,-2943, -3037, -3029, -2905, -2565, -2126, -1787, -1724, -1373, -1223, -1027, -706, -483, -278, -285].reverse()  // Use negative values for left side
                  
                },
                {
                    label: 'Female',
                    backgroundColor: 'rgb(255, 99, 132)',
                    data: [1189, 2046, 2771, 2935, 2967, 2870, 2434, 1851, 1750, 1574, 1290, 1229, 1027, 804, 627, 407, 584].reverse() // Positive values for right side
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
    var ctx3 = document.getElementById('births').getContext('2d');
    var chart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['2021','2022', "2023", "2024" ],
            datasets: [{
                label: 'Total Births (2021-2024)',
                data: [ 507, 405, 401, 401],
                backgroundColor: ['#92C5F9', '#439E5','rgba(77, 56, 218, 1)','rgb(61, 8, 110)'],
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
                },
                title: {
                    display: true,
                    text: "Total Births (2021-2024)",
                    font: { 
                        size: 24 
                    }       
                }     
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Years'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of Births'
                    }
                }
            }
        }
    });
    var ctx1 = document.getElementById('chart1').getContext('2d');
    var chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['2021','2022', '2023','2024'],
            datasets: [{
                label: 'Total Population',
                data: [ 55130, 56394, 56866, 57162],
                backgroundColor: ['rgb(75, 87, 95)', 'rgba(218, 65, 56, 1)','rgba(77, 56, 218, 1)', 'rgb(218, 94, 56)'],
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

    var ctx4 = document.getElementById('deaths').getContext('2d');
    var chart4 = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ['2021','2022', "2023", "2024"],
            datasets: [{
                label: 'Total Deaths (2021-2024)',
                data: [ 239, 223, 58, 213],
                backgroundColor: ['#968800', '#968800','#880096', '#880099'],
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
                },
                title: {
                    display: true,
                    text: "Total Deaths (2021-2024)",
                    font: { 
                        size: 24 
                    }       
                }     
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Years'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of Deaths'
                    }
                }
            }
        }
    });
    var ctx5 = document.getElementById('InMig').getContext('2d');
    var chart5 = new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: ['2021','2022', "2023","2024"],
            datasets: [{
                label: 'Total In-Migration (2021-2024)',
                data: [ 1649, 945, 140, 752],
                backgroundColor: ['#3d0096', '#8a66c0','#d0c1e5', '#d0c1b9'],
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
                },
                title: {
                    display: true,
                    text: "Total In-Migration (2021-2024)",
                    font: { 
                        size: 24 
                    }       
                }     
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Years'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of In-Migration'
                    }
                }
            }
        }
    });
    var ctx6 = document.getElementById('OutMig').getContext('2d');
    var chart6 = new Chart(ctx6, {
        type: 'bar',
        data: {
            labels: ['2021','2022', "2023","2024"],
            datasets: [{
                label: 'Total Out-Migration (2021-2024)',
                data: [ 991, 941, 40, 364],
                backgroundColor: ['#b73a4c', '#3a8ab7','#191919', '#3a8ae4'],
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
                },
                title: {
                    display: true,
                    text: "Total Out-Migration (2021-2024)",
                    font: { 
                        size: 24 
                    }       
                }     
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Years'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of Out-Migration'
                    }
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
