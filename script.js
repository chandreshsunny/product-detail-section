const sliderMainImage = document.getElementById("product-main-image");
const sliderImageList = document.getElementsByClassName("image-list");
console.log(sliderImageList);

sliderImageList[0].onclick = function(){
    sliderMainImage.src = sliderImageList[0].src;
    console.log(sliderMainImage.src);
};

sliderImageList[1].onclick = function(){
    sliderMainImage.src = sliderImageList[1].src;
    console.log(sliderMainImage.src);
};

sliderImageList[2].onclick = function(){
    sliderMainImage.src = sliderImageList[2].src;
    console.log(sliderMainImage.src);
};

sliderImageList[3].onclick = function(){
    sliderMainImage.src = sliderImageList[3].src;
    console.log(sliderMainImage.src);
};
document.addEventListener("DOMContentLoaded", function() {
    const minusBtn = document.querySelector(".minus");
    const plusBtn = document.querySelector(".plus");
    const countDisplay = document.querySelector(".count");

    let count = 0;

    // Function to update count display
    const updateCountDisplay = () => {
        countDisplay.textContent = count;
    };

    // Function to handle plus button click
    const handlePlusClick = () => {
        count++;
        updateCountDisplay();
    };

    // Function to handle minus button click
    const handleMinusClick = () => {
        if (count > 0) {
            count--;
            updateCountDisplay();
        }
    };

    // Attach event listeners
    plusBtn.addEventListener("click", handlePlusClick);
    minusBtn.addEventListener("click", handleMinusClick);

    // Update count display initially
    updateCountDisplay();
});