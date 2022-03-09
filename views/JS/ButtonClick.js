$('#startProgram').on('click', function() {
    this.innerHTML = this.getAttribute("data-loading-text");
    const e = this;
    setTimeout(function() {
        e.innerText = "Submit Order";
    }, 8000);
});
