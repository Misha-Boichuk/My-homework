const saveButton = document.querySelector('#save-button');
    const outputDiv = document.querySelector('#output');

    saveButton.addEventListener('click', () => {
      const firstName = document.querySelector('#first-name').value;
      const lastName = document.querySelector('#last-name').value;
      const birthdate = document.querySelector('#birthdate').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const city = document.querySelector('#city').value;
      const address = document.querySelector('#address').value;
      const languages = document.querySelectorAll('input[name="languages"]:checked');
      let languagesList = '';
      languages.forEach((language) => {
        languagesList += language.value + ', ';
      });
      languagesList = languagesList.slice(0, -2);

      const outputHtml = `
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Date of Birth: ${birthdate}</p>
        <p>Gender: ${gender}</p>
        <p>City: ${city}</p>
        <p>Address: ${address}</p>
        <p>Languages: ${languagesList}</p>
      `;

      outputDiv .innerHTML = outputHtml;
    });