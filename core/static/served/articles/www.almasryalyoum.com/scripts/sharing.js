var uri = window.location;
var fCount = 0;
function loadFBShares(url) {
	$.get('https://graph.facebook.com/v2.10/?id=' + url + '&fields=engagement&access_token=151171224975227%7C-wLad4rXewTqHzHeqbIVHlqlm1g', function (data) {
		fCount = data["engagement"]["share_count"];
		$('.share_buttons_container .facebook .count').text(fCount);
	});
}
loadFBShares(uri);
if (!fCount) fCount = 0;

var gCount = 0;
function loadGoogleShares(url) {
	$.ajax({
		type: 'POST',
		url: 'https://clients6.google.com/rpc',
		processData: true,
		contentType: 'application/json',
		data: JSON.stringify({
			'method': 'pos.plusones.get',
			'id': url,
			'params': {
				'nolog': true,
				'id': url,
				'source': 'widget',
				'userId': '@viewer',
				'groupId': '@self'
			},
			'jsonrpc': '2.0',
			'key': 'p',
			'apiVersion': 'v1'
		}),
		success: function (response) {
			if (response.result) {
				gCount = response.result.metadata.globalCounts.count;
				$('.share_buttons_container .google .count').text(fCount);
			}
		}
	});
}
//loadGoogleShares(uri);
if (!gCount) gCount = 0;

function addTwitterButton(content, url, title) {
	content.find('.share_buttons_container .twitter').addClass('shr_btn').append('<a class="box" href="https://twitter.com/share?url='
	+ url + '&text=' + title + '" target="popup" onclick="window.open(this.href, \'name\', \'width=600,height=400\'); return false;" title="Twitter"><div class="share"><i></i><span>Tweet</span></div></a>');
}

function addFBButon(content, url) {
	var fCount = loadFBShares(url);
	if (!fCount) fCount = 0;
	content.find('.share_buttons_container .facebook').addClass('shr_btn').append('<a class="box" href="https://www.facebook.com/sharer/sharer.php?u='
		+ url + '"target="popup" onclick="window.open(this.href, \'name\', \'width=600,height=400\'); return false;"><div class="count">' +
		fCount + '</div><div class="share"><i></i><span>Like</span></div></a>');
}

function addGoogleButton(content, url) {
	//var gCount = loadGoogleShares(url);
	//if (!gCount) gCount = 0;
	content.find('.share_buttons_container .google').addClass('shr_btn').append('<a class="box" href="https://plus.google.com/share?url='
		+ url + '"target="popup" onclick="window.open(this.href, \'name\', \'width=600,height=400\'); return false;"><div class="count">' +
		/*gCount + */'</div><div class="share"><i></i><span>gPlus</span></div></a>');
}
$(function () {
	$('.share_buttons_container .twitter').addClass('shr_btn').append('<a class="box" href="https://twitter.com/share?url='
	+ uri + '" target="popup" onclick="window.open(this.href, \'name\', \'width=600,height=400\'); return false;" title="Twitter"><div class="share"><i></i><span>Tweet</span></div></a>');

	$('.share_buttons_container .facebook').addClass('shr_btn').append('<a class="box" href="https://www.facebook.com/sharer/sharer.php?u='
		+ uri +'"target="popup" onclick="window.open(this.href, \'name\', \'width=600,height=400\'); return false;"><div class="count">' +
		fCount + '</div><div class="share"><i></i><span>Like</span></div></a>');
	/*$('.share_buttons_container .facebook').sharrre({
		share: { facebook: true },
		enableHover: false,
		className: 'shr_btn',
		enableTracking: true,
		template: '<a class="box" href="#"><div class="count">' + fCount + '</div><div class="share"><i></i><span>Like</span></div></a>',
		click: function (api, options) {
			api.simulateClick();
			api.openPopup('facebook');
		}
	});*/

	$('.share_buttons_container .google').addClass('shr_btn').append('<a class="box" href="https://plus.google.com/share?url='
		+ uri +'"target="popup" onclick="window.open(this.href, \'name\', \'width=600,height=400\'); return false;"><div class="count">' +
		/*gCount + */'</div><div class="share"><i></i><span>gPlus</span></div></a>');
	/*$('.share_buttons_container .google').sharrre({
		share: { googlePlus: true },
		urlCurl: '',
		enableHover: false,
		className: 'shr_btn',
		enableTracking: true,
		template: '<a class="box" href="#"><div class="share"><i></i><span>gPlus</span></div></a>',
		click: function (api, options) {
			api.simulateClick();
			api.openPopup('googlePlus');
		}
	});*/

	/*$('.share_buttons_container .pinterest').sharrre({
		share: { pinterest: true },
		enableHover: false,
		className: 'shr_btn',
		enableTracking: true,
		template: '<a class="box" href="#"><div class="count">{total}</div><div class="share"><i></i><span>pin</span></div></a>',
		click: function (api, options) {
			api.simulateClick();
			api.openPopup('pinterest');
		}
	});*/

	/*$('.share_buttons_container .total').sharrre({
		share: {
			googlePlus: true,
			facebook: true,
			twitter: true
		},
		template: '<div class="count">{total} <span>مشاركة</span></div>',
		enableHover: false
	});*/
});