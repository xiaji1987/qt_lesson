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
            $('.text-expander-content p').html(res.data.desc);
            celebrity(res.data.person);
            booking(res.data.booking);
            photo_list(res.data.pictures);
            comment_item(res.data.commentNum); 
            comment(res.data.comment);         
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
    //演员表
    function celebrity(actors){
        for (let actor of actors) {
            $('.movie-celebrities').append(
                ` <li>
                    <a href="#" class="link">
                        <div class="movie-celebrities-pic">
                            <img src="${actor.avatal}" alt="">
                        </div>
                        <span class="movie-celebrities-nick">${actor.name}</span>
                        <span class="movie-celebrities-roles">${actor.sort}</span>
                    </a>
                </li>`
            )
        }
    }
    function booking(booking){
        $('#ranking').html(booking.ranking);
        $('#bookingWeek').html(booking.bookingWeek);
        $('#bookingTotal').html(booking.bookingTotal);  
    }
    //剧照
    function photo_list(photos) {
        for(let photo of photos){
            $('.movie-photo-lists').append(
                `<li class="stage-img-container">
                    <a href="#" class="link"></a>
                        <div class="movie-celebrities-pic">
                            <img src="${photo}" alt="">
                        </div>
                </li>`
            )
        }
    }
    function comment_item(items){
        const comment_item=document.querySelectorAll('.comment-item-num');
        $(comment_item[1]).html(items.good);
        $(comment_item[2]).html(items.bad);
        $(comment_item[3]).html(items.dy);
        $(comment_item[4]).html(items.bought);
        $(comment_item[5]).html(items.author);
        $(comment_item[6]).html(items.sameCity);
    }
    function comment(comments){
        for(let comment of comments){
            $('.chosen-comment').append(
                `<li class="chosen-comment-item">
                    <div class="item-avatal">
                        <img src="${comment.avatal}" alt="">
                    </div>
                    <div class="item-detail">
                        <div class="item-detail-hd">
                            <div>
                                <span class="nick-name">${comment.nickName}</span>
                                <span class="level">
                                    <img src="${comment.lever}" alt="">
                                </span>
                            </div>
                            <p class="item-score-desc">给这部电影打了<span>${comment.grade}</span>分</p>
                        </div>
                    </div>
                    <div class="item-context">
                        <p class="item-context-p">${comment.detail}</p>
                    </div>
                    <div class="item-infor">
                        <div class="item-data">${comment.date}</div>
                        <div class="item-like-reply">
                            <div class="item-like">
                                <img src="./images/dianzan.png" alt="">
                                <span class="comment-item-num">${comment.like}</span>
                            </div>
                            <div class="item-like">
                                <img src="./images/icon-test.png" alt="">
                                <span class="comment-item-num">${comment.reply}</span>
                            </div>
                        </div>
                    </div>
                </li>`
            )
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
$('#text-expander-button').click(function(){
    if ($('.text-expander-content').hasClass('close')) {
        $('.icon-chevron-down').addClass('up');
        $('.text-expander-content').removeClass('close');
    }else{
        $('.icon-chevron-down').removeClass('up');
        $('.text-expander-content').addClass('close');
    }   
})