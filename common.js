$().ready(function () {
	
	/* アクティブclass 20210515 */
	var className,tgimg,src;
	className = $("body").attr("class");
	if (className == "csr") { tgimg = $('li.csr > a > img'); src = tgimg.attr('src').replace('_off.', '_on.'); tgimg.attr('src', src); tgimg.removeClass(); }
	else if (className == "ir") { tgimg = $('li.ir > a > img'); src = tgimg.attr('src').replace('_off.', '_on.'); tgimg.attr('src', src); tgimg.removeClass(); }
	else if (className == "com") { tgimg = $('li.com > a > img'); src = tgimg.attr('src').replace('_off.', '_on.'); tgimg.attr('src', src); tgimg.removeClass(); }
	
//console.log(className);
	
	/* 初期フォントサイズ */
    $.fn._fontsize($.cookies.get('fontsize'));

    /* ロールオーバー画像 */
    $('img.rollover').hover(
        function () {
            this.src = this.src.replace('_off.', '_on.');
        },
        function () {
            this.src = this.src.replace('_on.', '_off.');
        }
    );
				
    /* ロールオーバー画像のロード */
				$('img.rollover').each(function () {
        new Image().src
            = this.src.replace('_off.', '_on.');
				});

    //$('a[href$=pdf] img[src$=ic_pdf.gif]').css('vertical-align','baseline');

    /* ページトップへ戻るボタン */
				$('div.go_pagetop a').click(
				    function () {
            window.scrollTo(0, 0);
								}
				);

    /* フォントサイズ変更ボタン */				
				$('div.fontsize a[class^=fs_]').click(
					   function () {
													$.fn._fontsize($(this).attr('class').replace('fs_', ''));
				    }
				);


	/* アクティブ画像20210515 */
				$('img.active').each(function () {
					this.src = this.src.replace('_off.', '_on.');
				});

	
	
	
});


/* フォントサイズ変更 */
$.fn._fontsize = function (size) {
    size = size || 'middle';
    $.cookies.set('fontsize', size);

    var _size = {
        small:  '11px',
								middle: '12px',
								big:    '14px'
				};

				$('#container').css('fontSize', _size[size]);

    for (var _key in _size) {
        $('div.fontsize a[class^=fs_' + _key + ']').attr('class', 'fs_' + _key);
				}
				
    $('div.fontsize a[class=fs_' + size + ']').addClass('fs_' + size + '_on')
};
