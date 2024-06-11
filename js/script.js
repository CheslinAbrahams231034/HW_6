function changeText() {
    var textInputValue = document.getElementById('textInput').value;
    var radioValue;
    var checkboxValues = [];
    var selectValue = document.getElementById('exampleSelect').value;

    // Get selected radio button value
    var radios = document.getElementsByName('radioGroup');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioValue = radios[i].value;
            break;
        }
    }

    // Get selected checkbox values
    if (document.getElementById('checkbox1').checked) {
        checkboxValues.push('Option 1');
    }
    if (document.getElementById('checkbox2').checked) {
        checkboxValues.push('Option 2');
    }

    // Build output HTML
    var outputHTML = '<p>Text Input Value: ' + textInputValue + '</p>';
    outputHTML += '<p>Selected Radio Value: ' + radioValue + '</p>';
    outputHTML += '<p>Selected Checkboxes: ' + checkboxValues.join(', ') + '</p>';
    outputHTML += '<p>Selected Option from Select Menu: ' + selectValue + '</p>';

    // Update the output area
    document.getElementById('output').innerHTML = outputHTML;
}

function toggleOutput() {
    var outputDiv = document.getElementById('output');
    if (outputDiv.style.display === 'none') {
        outputDiv.style.display = 'block';
    } else {
        outputDiv.style.display = 'none';
    }
}