const ctx = document.getElementById('reportChart').getContext('2d');
const reportChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
    datasets: [
      {
        label: 'Income',
        data: [2000, 500, 2000, 2000, 400, 2000],
        backgroundColor: ['#4C49ED'],
        borderRadius: 5,
        borderWidth: 0,
      },
      {
        label: 'Expenses',
        data: [600, 2000, 2000, 600, 2000, 500],
        backgroundColor: ['#AFAEFE'],
        borderRadius: 5,
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 2.72,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          stepSize: 250,
          callback: function (value, index, ticks) {
            if (value == 250 || value == 0) return value;
            let arr = [];
            for (const { label } of ticks) {
              arr.push(+label);
            }
            if (arr.includes(value / 2)) return value;
            return '';
          },
          font: {
            family: "'Inter', sans-serif",
            size: 12,
            weight: 700,
            lineHeight: 1.25,
          },
          color: '#CCCBD8',
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 12,
            weight: 700,
            lineHeight: 1.25,
          },
          color: '#CCCBD8',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const ctx2 = document.getElementById('spendingChart').getContext('2d');
const spendingChart = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Personal', 'Shopping', 'Phone', 'Other'],
    datasets: [
      {
        data: [20, 35, 40, 60],
        backgroundColor: ['#4C49ED', '#9D9BF4', '#4FD18B', '#141197'],
        borderWidth: 0,
        offset: 5,
        rotation: -40,
      },
    ],
  },
  options: {
    responsive: true,

    cutout: '76%',
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 37,
          boxHeight: 13,
          padding: 22,
          usePointStyle: true,
          pointStyle: 'rectRounded',
          font: {
            family: "'Mulish', sans-serif",
            weight: 700,
            color: '#938FA3',
            size: 16,
            lineHeight: 1.25,
          },
        },
      },
    },
  },
});
