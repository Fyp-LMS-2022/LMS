google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Ahmed',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);

  var options = {
    title: 'My Daily Activities'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

function drawChart1() {

    var data1 = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Ahmed',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);
  
    var options1 = {
      title: 'My Daily Activities'
    };
  
    var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
  
    chart1.draw(data1, options1);
  }

  
  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Ahmed',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);
  
    var options = {
      title: 'My Daily Activities'
    };
  
    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
  
    chart.draw(data, options);
  }
  
