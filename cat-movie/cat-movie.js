(function(){
    $.ajax({
        url:'https://www.easy-mock.com/mock/5d2ed7bb7f168b5e40d35f3d/movie/xia_movie',
        type:'get',
        success:function(res) {
            console.log(res);
            $('#moviePic').attr('src',res.data.moviePic);
            $('.movie-name span').html(res.data.name);
            $('.movie-ename span').html(res.data.nameEnglish);
            $('.rating-score').html(res.data.grade);
            $('.scote-num span').html(res.data.people);
            star(res.data.star);
            $('.movie-type').html(res.data.type);
            $('.address').html(res.data.where);
            $('.time').html(res.data.time);
            $('.date').html(res.data.date);
        }
    })

    function star(starNum) {
        let num =Math.floor(starNum);
        let white=Math.floor(5-starNum);
        for (let i = 0; i < white; i++) {
            $('#rating').prepend('<img class="img" src="./images/star2.png"></img>');
        }
        if (starNum>num) {
            $('#rating').prepend('<img class="img" src="./images/star-h.png"></img>');
        }
        for (let i = 0; i < num; i++) {
            $('#rating').prepend('<img class="img" src="./images/star.png"></img>');
        }
    }
})()

// const watch=document.getElementById('movie-watch');
// const toast=document.getElementById('toast');
// watch.addEventListener('click',function(){
//     toast.classList.add('active');
//     setTimeout(function(){
//         toast.classList.remove('active');
//     },2000)
// })
$('#movie-watch').click(function(){
    $('#toast').addClass('active');
    if ($(this).hasClass('show')) {
        $(this).removeClass('show');
        $('#movie-watch img').attr('src','./images/heart.png');
        $('.weui-toast__content').html('已取消想看');
    }else{
        $('.weui-toast__content').html('已标记为想看');
        $(this).addClass('show');
        $('#movie-watch img').attr('src','./images/heart1.png');
    }
    setTimeout(() => {
        $('#toast').removeClass('active');
    }, 2000);
})