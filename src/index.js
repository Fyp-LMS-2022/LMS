// google.charts.load('current', { 'packages': ['corechart'] });
// google.charts.setOnLoadCallback(drawChart);


// /////////////////////////////////////////////////////////////////////////////////////////



// ////////////////////////////////////////////////
// //////////// AdminDashboard top-Counters


// // const counter = document.querySelectorAll('.counter')
// // counter.forEach(counter = () {
// //     const target = counter.getAttribute('data-target')

// // })





// ////////////////////////////////////////////////
// //////////// AdminDashboard graphs

// function drawChart() {

//     var data = google.visualization.arrayToDataTable([
//         ['Task', 'Hours per Day'],
//         ['Ahmed', 11],
//         ['Eat', 2],
//         ['Commute', 2],
//         ['Watch TV', 2],
//         ['Sleep', 7]
//     ]);

//     var options = {
//         title: 'My Daily Activities'
//     };

//     var chart = new google.visualization.PieChart(document.getElementById('piechart'));

//     chart.draw(data, options);
// }

// function drawChart1() {

//     var data1 = google.visualization.arrayToDataTable([
//         ['Task', 'Hours per Day'],
//         ['Ahmed', 11],
//         ['Eat', 2],
//         ['Commute', 2],
//         ['Watch TV', 2],
//         ['Sleep', 7]
//     ]);

//     var options1 = {
//         title: 'My Daily Activities'
//     };

//     var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));

//     chart1.draw(data1, options1);
// }


// function drawChart() {

//     var data = google.visualization.arrayToDataTable([
//         ['Task', 'Hours per Day'],
//         ['Ahmed', 11],
//         ['Eat', 2],
//         ['Commute', 2],
//         ['Watch TV', 2],
//         ['Sleep', 7]
//     ]);

//     var options = {
//         title: 'My Daily Activities'
//     };

//     var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

//     chart.draw(data, options);
// }


////////////////////////////////////////
///////// Add teacher CRUD Function


// var form = document.getElementById('teacherSubmitBUtton');
// form.addEventListener()

function onNewTeacherFormSubmit() {

    var retreivedFormData = retreiveNewTeacherData();
    newTeacherRecord(retreivedFormData);
}

function retreiveNewTeacherData() {
    var newTeacherData = {};
    newTeacherData["newTeacherName"] = document.getElementById("newTeacherName").value;
    newTeacherData["newteacherUsername"] = document.getElementById("newteacherUsername").value;
    newTeacherData["newteacherPassword"] = document.getElementById("newteacherPassword").value;
    newTeacherData["newteacherProgram"] = document.getElementById("newteacherProgram").value;
    newTeacherData["newteacherCourseCode"] = document.getElementById("newteacherCourseCode").value;


    return newTeacherData;

}


function newTeacherRecord(data) {
    var table = document.getElementById("teachersList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    // cell0 = newRow.insertCell(0);
    // cell0.innerHTML = data.newTeacherName;
    // cell1 = newRow.insertCell(1);
    // cell1.innerHTML = data.newteacherUsername;
    // cell2 = newRow.insertCell(2);
    // cell2.innerHTML = data.newteacherPassword;
    // cell3 = newRow.insertCell(3);
    // cell3.innerHTML = data.newteacherProgram;
    // cell4 = newRow.insertCell(4);
    // cell4.innerHTML = data.newteacherCourseCode;
    // cell5 = newRow.insertCell(5);
    // cell5.innerHTML = `<a>Del</a>`


    table.innerHTML += `
    <tr>
    <td>${data.newTeacherName}</td>
    <td><button class="btn btn-success ">Assign Course</button></td>
    </tr>`;


    // cell1 = newRow.insertCell(6);
    // cell1.innerHTML = `<a>del</a>`;
}




////////////////////////////////////////////
/////////// FOR STUDENT COURSES--- Changing the values of dropdown list reflecting the checked radio buttons in HTML



function onNewStudentFormSubmit() {

    var retreivedStudentFormData = retreiveNewStudentData();
    newStudentRecord(retreivedStudentFormData);
}

function retreiveNewStudentData() {
    var newStudentData = {};
    newStudentData["newStudentName"] = document.getElementById("addStudent-Name").value;
    newStudentData["newStudentEmail"] = document.getElementById("addStudent-email").value;
    newStudentData["newStudentEnrollment"] = document.getElementById("addStudent-enrollment").value;
    newStudentData["newStudentPassword"] = document.getElementById("addStudent-Password").value;
    newStudentData["newStudentSemester"] = document.getElementById("addStudent-semester").value;
    newStudentData["newStudentProgram"] = document.getElementById("addStudent-program").value;


    return newStudentData;

}


function newStudentRecord(data) {
    var table = document.getElementById("adminStudentsTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = data.newStudentName;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.newStudentEmail;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.newStudentEnrollment;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.newStudentPassword;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.newStudentSemester;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.newStudentProgram;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<button class="btn btn-success" data-bs-target="#exampleModal" data-bs-toggle="modal" onClick="assignStudentCourse(this)">Edit</button> `;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<button class="btn btn-success" >Delete</button> `;




    // table.innerHTML += `
    // <tr>
    // <td>${data.newStudentName}</td>
    // <td>${data.newStudentEmail}</td>
    // <td>${data.newStudentEnrollment}</td>
    // <td>${data.newStudentPassword}</td>
    // <td>${data.newStudentSemester}</td>
    // <td>${data.newStudentProgram}</td>
    // <td><button  class="btn btn-success " data-bs-target="#courseAssignModal" data-bs-toggle="modal" onclick="assignStudentCourse(this)">Assign Course</button></td>
    // </tr>`;


    // cell1 = newRow.insertCell(6);
    // cell1.innerHTML = `<a>del</a>`;
}


////////////////////////////////////////////////////////////////////
//////////////// assignStudentCourse



function assignStudentCourse(td) {
    selectRow = td.parentElement.parentElement;
    console.log(selectRow);





    document.getElementById("addStudent-Name").value = selectRow.getElementsByTagName('td')[0].innerHTML;

    document.getElementById("addStudent-email").value = selectRow.getElementsByTagName('td')[1].innerHTML;

    document.getElementById("addStudent-enrollment").value = selectRow.getElementsByTagName('td')[2].innerHTML;

    document.getElementById("addStudent-Password").value = selectRow.getElementsByTagName('td')[3].innerHTML;

    document.getElementById("addStudent-semester").value = selectRow.getElementsByTagName('td')[4].innerHTML;

    document.getElementById("addStudent-program").value = selectRow.getElementsByTagName('td')[5].innerHTML;



}