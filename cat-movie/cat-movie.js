(function(){
    $.ajax({
        url:'https://www.easy-mock.com/mock/5d2ed7bb7f168b5e40d35f3d/movie/xia_movie',
        type:'get',
        success:function(res) {
            console.log(res);
            $('#moviePic').attr('src',res.data.moviePic);
            $('.movie-name span').html(res.data.name);
            $('.movie-ename span').html(res.data.nameEnglish);
            $('.scote-num span').html(res.data.people);
        }
    })
})()