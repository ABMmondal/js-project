console.log("hii");
const imgbox = document.querySelector(".imgbox");
const whiteboxes = document.getElementsByClassName("whitebox");

imgbox.addEventListener("dragstart", (e) => {
  console.log("drag");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className += " hide";
  }, 0);
});

imgbox.addEventListener("dragend", (e) => {
  console.log("dragend");
  e.target.className = "imgbox";
});

for (whitebox of whiteboxes) {
  whitebox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("DragOver has been triggered");
  });
  whitebox.addEventListener("dragenter", (e) => {
    console.log("dragenter");
    e.target.className += ' dashed'
  });
  whitebox.addEventListener("dragleave", (e) => {
    console.log("dragleave");
    e.target.className='whitebox'
  });
  whitebox.addEventListener("drop", (e) => {
    console.log("drop");
    e.target.append(imgbox);
  });
}
