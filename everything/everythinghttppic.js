// ==UserScript==
// @name        everythinghttpcustomize
// @namespace   www.woyayoyin.com.everythinghttpcustomize
// @description dsfjshdflkjshfksjdf
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @include     http://okcomputer/*
// @include     okcomputer/*
// @version     1
// @grant       none
// ==/UserScript==
(function () {
    function init() {
      //  console.log('start');
        //$("table").addClass("tb");
        //$('center') .prepend($("div"));
       
        $("tr[class^='trdata']") .hover(
            function(){
            
            var imgfilename = $(this) .find('a') .attr('href');
            var isajpg = /.*jpg$/
            if (imgfilename.indexOf('jpg') != - 1 && imgfilename.match(isajpg) != null) {
               
                console.log('OK',imgfilename);
                var olda= $(this) .find('a');
                var imgurl = "http://okcomputer" + imgfilename;
                olda.after($("img").addClass("previmg").attr("src",imgurl).css("width","50%").css("height","50%"));
                
                //$(this) .find('a').remove();
                
            }
            
           },
           // hover out
           function (){
                    $("img.previmg").remove();
                
           });
       
        //console.log('hover');
        /*
        $("a").each(function(index, self){
            
            var filename = $(self).attr("href");
            var isajpg = /.*jpg$/
            if (filename.indexOf('jpg') != -1 && filename.match(isajpg)!=null){
                console.log(filename);   
            }
            
        })
        */
        //var showimgHtml = "<img src='" + "" + "'/>";
        //$("div.preview").html(showimgHtml);
        //console.log('it is working');
    }
    init();
}) ()
