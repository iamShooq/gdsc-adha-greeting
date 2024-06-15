function addNameToImage() {
    var nameInput = document.getElementById('nameInput');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var image = new Image();
    image.src = 'card.png';  // Ensure this is in the same directory or adjust the path accordingly

    image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Ensure the Tajawal font is loaded before using it
        document.fonts.load('500 40px "Tajawal"').then(function() {
            // Adjust font properties here
            ctx.font = '500 40px Tajawal'; // Tajawal font
            ctx.fillStyle = 'white';       // Text color

            var textWidth = ctx.measureText(nameInput.value).width;
            var textX = canvas.width - textWidth - 70; 
            var textY = canvas.height  -320; // Y coordinate (50 pixels from the bottom)

            ctx.fillText(nameInput.value, textX, textY);

        });
    };

    image.onerror = function() {
        alert('Error loading image. Please ensure the image path is correct.');
    };
}
