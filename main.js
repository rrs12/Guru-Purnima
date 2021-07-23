var select = document.getElementById("teachers").value

function message() {
    select = document.getElementById("teachers").value
    if (select == "Purna") {
        document.getElementById("message").innerHTML = "Thank You Ma'am for teaching me SS with perfection."
    }
    if (select == "Kajal") {
        document.getElementById("message").innerHTML = "Thank You Ma'am for teaching me Maths with perfection."
    }
    if (select == "Viraj") {
        document.getElementById("message").innerHTML = "Thank You Ma'am for teaching me English with perfection."
    }
    if (select == "Shailly") {
        document.getElementById("message").innerHTML = "मुझे पूर्णता के साथ हिंदी सिखाने के लिए धन्यवाद। "
    }
    if (select == "Sweety") {
        document.getElementById("message").innerHTML = "Thank You Ma'am for teaching me Science with perfection."
    }
    if (select == "Ami") {
        document.getElementById("message").innerHTML = "Thank You Ma'am for teaching me Vocal with perfection."
    }
    if (select == "Kamal") {
        document.getElementById("message").innerHTML = "Thank You Ma'am for teaching me WE with perfection."
    }
    if (select == "Maulik") {
        document.getElementById("message").innerHTML = "अहम् तव संस्कृत शिक्षायै बहवः धन्यवाद करोति। "
    }
    if (select == "Hetal") {
        document.getElementById("message").innerHTML = "Thank You Sir for teaching me Computer Science with perfection."
    }
    if (select == "Prashant") {
        document.getElementById("message").innerHTML = "Thank You Sir for teaching me Art & Craft with perfection."
    }

}