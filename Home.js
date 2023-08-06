function changeImage(click_id) {
    var image = document.getElementById('myImage');
    var img1 = document.getElementById('1');
    var img2 = document.getElementById('2');
    var img3 = document.getElementById('3');
    var img3 = document.getElementById('4');
    var img3 = document.getElementById('5');

    if (click_id == 1) {
        image.src = "https://mobirise.com/extensions/boldm5/tech-blog/assets/images/image1.jpg";
    }
    else if (click_id == 2) {
        image.src = "https://mobirise.com/extensions/boldm5/tech-blog/assets/images/image2.jpg";
    }
    else if (click_id == 3) {
        image.src = "https://mobirise.com/extensions/boldm5/tech-blog/assets/images/image14.jpg";
    }
    else if(click_id == 4){
        image.src = "https://mobirise.com/extensions/boldm5/tech-blog/assets/images/image6.jpg";
    }
    else if(click_id == 5){
        image.src = "https://mobirise.com/extensions/boldm5/tech-blog/assets/images/image9.jpg";
    }
    else {
        image.src = "img/5.jpg";
    }

    event.preventDefault();
}