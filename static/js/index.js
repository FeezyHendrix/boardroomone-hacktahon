
window.onload = () => {
  document.querySelector("#customButton").addEventListener('click', selectImage);
};


const selectImage = async () => {
  const imageSelectorInput = document.querySelector("#imageSelector");
  imageSelectorInput.click();

  uploadImage();
};

const uploadImage = async () => {
  const image = document.querySelector("#imageSelector");

  if(image.files.length === 0) {
    return alert('Select an image');
  }
  const formdata = new FormData();
  formdata.append('avatar', image.files[0]);
  const response = await fetch('/upload', {
    method: "POST",
    body: formdata
  });

  const json = await response.json();
  console.log(json);
};

const hideSelect = () => {
  const selectCard = document.querySelector('#selectCard');
  const showResult = document.querySelector('#showResult');
  selectCard.style.display = 'none';
  showResult.style.display = 'block';
}