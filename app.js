

var btn = document.getElementById('btn');
var content = document.getElementById('content');




//音声認識APIの使用
var speech = new webkitSpeechRecognition();


//言語を日本語に設定
speech.lang = "ja";




btn.addEventListener( 'click' , function() {


    // ➀ボタンをクリックした時の処理
    // 音声認識をスタート
    speech.start();


} );




speech.addEventListener( 'result' , function( e ) {


    // ➁音声認識した結果を得る処理
        var text = e.results[0][0].transcript;

    // 認識された「言葉(text)」を、表示用のdivタグに代入する
    content.textContent = text;

        // 「ビデオ」と認識されたら指定の関数を実行
    if( text === "バルス" ) getVideo();
  
} );

function getVideo() {


    // YouTube動画の表示処理

var URL = '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=aGRiXUdN9IE;controls=0&amp;showinfo=0;autoplay=1" frameborder="0" allowfullscreen></iframe>';


    
    content.innerHTML = URL;
}

