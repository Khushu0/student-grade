document.querySelector("#submit").addEventListener("click", function () {
    const StudentName = document.querySelector("#StudentName").value;
    const StudentID = document.querySelector("#StudentID").value;
    let x = 0;

    const ids = [
        "Linearquiz1", "Linearquiz2", "Linearquiz3", "Linearminor1", "Linearminor2", "Linearmajor",
        "oopsquiz1", "oopsquiz2", "oopsquiz3", "oopsminor1", "oopsminor2", "oopsmajor",
        "NTquiz1", "NTquiz2", "NTquiz3", "NTminor1", "NTminor2", "NTmajor",
        "DSquiz1", "DSquiz2", "DSquiz3", "DSminor1", "DSminor2", "DSmajor",
        "COAquiz1", "COAquiz2", "COAquiz3", "COAminor1", "COAminor2", "COAmajor"
    ];

    ids.forEach(id => {
        const val = parseInt(document.getElementById(id).value) || 0;
        x += val;
    });

    console.log("Total marks:", x);
    let y;
    if (x > 450) {
        y = "AAA";
    } else if (x <= 450 && x > 400) {
        y = "AA";
    } else if (x <= 400 && x > 350) {
        y = "A";
    } else if (x <= 350 && x > 300) {
        y = "B+";
    } else if (x <= 300 && x > 250) {
        y = "B";
    } else if (x <= 250 && x > 200) {
        y = "C";
    } else if (x == 200) {
        y = "D";
    } else {
        y = "F"
    }
    
    const resultBox = document.querySelector(".results");
    resultBox.innerHTML = `
      <p><strong>${StudentName.toUpperCase()} (ID: ${StudentID})</strong></p>
      <p>Total Marks: <strong>${x}</strong></p>
      <p>Grade: <strong>${y}</strong></p>
    `;
    resultBox.style.display="block";
});