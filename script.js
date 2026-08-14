/* Step 3: Function to update the image preview when hovering */
function upDate(previewPic) {
  // Step 3a: Check that the event is triggering
  console.log("Event triggered: mouseover");

  // Step 3b: Print out information about previewPic (alt and src)
  console.log("Image Alt Text:", previewPic.alt);
  console.log("Image Source URL:", previewPic.src);

  // Step 3c: Change the text of the element with id="image" to the alt text
  document.getElementById("image").innerHTML = previewPic.alt;

  // Step 3e: Change the background image of the element with id="image"
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Step 4: Function to reset the preview back to original state */
function undo() {
  // Step 4a: Reset background image back to url('')
  document.getElementById("image").style.backgroundImage = "url('')";

  // Step 4b: Reset text back to original text
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
