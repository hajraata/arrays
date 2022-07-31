document.addEventListener("DOMContentLoaded", function () {
  let arr = {};
  let optionInputVal = "";
  let result = 0;
  let arrLength = 0;
  const btnSubmit = document.getElementById("btn-array-submit");
  const btnRemoveFirst = document.getElementById("btn-remove-first");
  const btnRemoveLast = document.getElementById("btn-remove-last");
  const btnFindIndex = document.getElementById("btn-find-index");
  const btnContains = document.getElementById("btn-contains");
  const btnArrayLength = document.getElementById("btn-array-length");
  const btnRemoveValue = document.getElementById("btn-remove-value");
  const btnMultiply = document.getElementById("btn-multiply");
  const btnOptionSubmit = document.getElementById("btn-option-submit");

  const arrays = document.getElementById("arrays");
  const arrInput = document.querySelector("#array-input");
  const optionForm = document.getElementById("option-form");
  const optionInput = document.getElementById("option-input");
  const displayArray = document.getElementById("array-display");
  const displayLength = document.getElementById("length-display");
  const resultDisplay = document.getElementById("result-display");

  const displayOptionsForm = (placeholderVal) => {
    optionForm.removeAttribute("hidden");
    arrays.removeAttribute("hidden");
    optionInput.setAttribute("placeholder", placeholderVal);
  };

  arrInput.addEventListener("click", (e) => {
    e.preventDefault();
    optionForm.setAttribute("hidden", true);
    arrays.setAttribute("hidden", true);
    displayArray.innerText = "";
    displayLength.innerText = "";
    resultDisplay.innerText = "";
    optionInput.value = "";
  });

  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    arrays.removeAttribute("hidden");
    arr = document.querySelector("#array-input").value.split(",");
    displayArray.innerText = arr;
  });

  btnRemoveFirst.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(arr.length);
    if (arr.length != 0) {
      arr.splice(0, 1);
      displayArray.innerText = arr;
    } else {
      displayArray.innerText = "Array is empty. Try with a new array";
    }
  });

  btnRemoveLast.addEventListener("click", (e) => {
    e.preventDefault();
    if (arr.length != 0) {
      arr.splice(arr.length - 1, 1);
      displayArray.innerText = arr;
    } else {
      displayArray.innerText = "Array is empty. Try with a new array";
    }
  });

  btnFindIndex.addEventListener("click", (e) => {
    e.preventDefault();
    if (arr.length != 0) {
      displayOptionsForm("Enter the value you want to find the index of");
      btnOptionSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log("Im here");
        optionInputVal = optionInput.value;
        result = arr.indexOf(optionInputVal);
        resultDisplay.innerText = `Index of ${optionInputVal} is ${result}`;
      });
    } else {
      displayArray.innerText = "Array is empty. Try with a new array";
    }
  });

  btnContains.addEventListener("click", (e) => {
    e.preventDefault();
    if (arr.length != 0) {
      displayOptionsForm("Enter the value you want to find");
      btnOptionSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log("Im here");
        optionInputVal = optionInput.value;
        result = arr.includes(optionInputVal);
        resultDisplay.innerText = result
          ? `Array contains ${optionInputVal}`
          : `Array does not contain ${optionInputVal}`;
      });
    } else {
      displayArray.innerText = "Array is empty. Try with a new array";
    }
  });

  btnArrayLength.addEventListener("click", (e) => {
    e.preventDefault();
    arrLength = arr.length;
    console.log(arrLength);
    displayLength.innerText = `Array length is ${arrLength}`;
  });

  btnRemoveValue.addEventListener("click", (e) => {
    e.preventDefault();
    if (arr.length != 0) {
      displayOptionsForm("Enter the value you want to remove");
      btnOptionSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        const filterArr = arr.filter((val) => val !== optionInput.value);
        resultDisplay.innerText = `${filterArr}`;
      });
    }
  });

  btnMultiply.addEventListener("click", (e) => {
    e.preventDefault();
    if (arr.length != 0) {
      displayOptionsForm("Enter the value you want to multiply with");
      btnOptionSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        const mapArr = arr.map((val) => val * optionInput.value);
        resultDisplay.innerText = `${mapArr}`;
      });
    }
  });
});
