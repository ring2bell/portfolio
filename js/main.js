

$(function(){
    const progressBox=$('.progress-bar')
    // 스크롤 지정 하기 위해 상수 선언
    const progressOst=$('.animation').offset().top-600;
    
    // let isAni=false; 애니메이션 감시 하는 변수 \ 이게 true 일때 아래 작성
    let isAni=false;
    $(window).scroll(function(){
        if($(window).scrollTop()>=progressOst && !isAni){
            progressAni()
        }
    })
    // 아래 progressBox.each(function(){} 를 함수로 변경해서 호출
    // function progressAni(){} 해서 {} 안에 아래 progressBox.each(function(){} 를 넣는다.

    function progressAni(){
        progressBox.each(function(){
            let $this=$(this), //progress-bar 중에 해당 순번이 되는 애가 this가 된다. \ $는 변수명으로 사용 가능하다.
            progressBar=$this.find(".bar"),
            progressText=$this.find(".rate"),
            progressRate=progressText.attr('data-rate') //attr 은 대상의 속성을 가져올수있다.
            // console.log(progressRate);
            progressBar.animate({width:progressRate}, 2500)
            /**
             * progressBar.animate({width:progressRate+%}, 2500)
             * html에서 data-rate에 %를 안하면 이렇게 % 하면 된다.
             * */

            // =======================
            // 글자 변경
            // 변수 선언
            let text=function(){
                // 문자 애니메이트 \ 선언 후 익명함수 할당
                // $({rate:0}) -> 객체를 하나 만든다.
                $({rate:0}).animate({rate:progressRate},{duration:2000,
                    progress:function(){
                        console.log(this);
                        let now=this.rate; // rate를 위에서 만들었으니까 이걸 .rate로 쓰면 된다
                        progressText.text(Math.floor(now)+'%');
                        // progressText.text() 글자를 추가한다는 뜻
                        // Math.floor() : 소수점 버리기
                    },
                    // complete:function(){} 애니메이션이 끝나면 이거 호출 하려고 만듬 이거 해야 글자 스크롤 마다 안 변한다.
                    complete:function(){isAni=true}
                })
            }
            text();
        })
}
})

