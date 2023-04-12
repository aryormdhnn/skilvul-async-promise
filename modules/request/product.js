export function getProduct() {
    const result = document.querySelector('#xhr-2-result');
    let responseJSON = []; // Menyimpan data JSON agar dapat diakses pada fungsi pengurutan
  
    document.querySelector('#xhr-2').addEventListener('click', () => {
      result.textContent = '';
  
      const xhr = new XMLHttpRequest();
  
      xhr.addEventListener('loadend', () => {
        let responseText = xhr.responseText
        responseJSON = JSON.parse(responseText)
        let addedHTML = ""
        for (let i=0; i<responseJSON.length; i++) {
          addedHTML =  addedHTML + `<li>${responseJSON[i].name}</li>`
        }
        result.innerHTML = `<ul>${addedHTML}</ul>`
      });
  
      xhr.open('GET', 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
      xhr.send();
      result.textContent = `${result.textContent}Started XHR request\n`;
    });
  
    // Menambahkan button untuk mengurutkan secara ascending (A-Z)
    document.querySelector('#sort-asc').addEventListener('click', () => {
      responseJSON.sort((a, b) => a.name.localeCompare(b.name))
      let addedHTML = ""
      for (let i=0; i<responseJSON.length; i++) {
        addedHTML =  addedHTML + `<li>${responseJSON[i].name}</li>`
      }
      result.innerHTML = `<ul>${addedHTML}</ul>`
    });
  
    // Menambahkan button untuk mengurutkan secara descending (Z-A)
    document.querySelector('#sort-desc').addEventListener('click', () => {
      responseJSON.sort((a, b) => b.name.localeCompare(a.name))
      let addedHTML = ""
      for (let i=0; i<responseJSON.length; i++) {
        addedHTML =  addedHTML + `<li>${responseJSON[i].name}</li>`
      }
      result.innerHTML = `<ul>${addedHTML}</ul>`
    });
  
    document.querySelector('#reload-2').addEventListener('click', () => {
      result.textContent = '';
      document.location.reload();
    });
  }
  