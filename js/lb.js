 var mySwiper = new Swiper ('#lba', {
    loop: true,
    pagination: '.swiper-pagination',
    });

 var zthd = new Swiper ('#lbb', {
     resistanceRatio : 0,
 })



// 搜索框
 $('#ssk').on('input',function () {
     var str = $(this).val();
     $.ajax({
         type:'GET',
         url:"http://api.dagoogle.cn/music/music-and-lrc",
         data:{count:8,keyword:str},
         dataType:'jsonp',
         jsonp:'callback',
         jsonpCallback:'fn',
         success:function (res) {
             let data = res.data;
             let txt = "";
             $.each(data,function (index,itme) {
                 txt += `<li><p>${itme.filename}</p></li>`;
                 $('.recUl').html(txt)
             })
         }
     })
 })