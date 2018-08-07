
//// RSSフィードを取得して表示する ////
function GetRSSAndShow() {
	
	//// アクセスするRSSをランダムに選択 ////
	var nIdxURL = Math.floor( Math.random() * arrURL.length);
	
	//// RSSから記事を取得 ////
	var nEntCount = 5;				// 取得する記事の数
	var feed = new google.feeds.Feed(arrURL[nIdxURL][0]);
	feed.setNumEntries(nEntCount);
	
	// Memo ---------------------------------------------------------------------------------
	// nEntCountの値は、実際にRSSに記載されているエントリーの数より大きな値でも良い。
	// 恐らくRSSを上から読んで行って、nEntCountに至るか最後まで行ったらbreakしている。
	// (nEntCount ≧ result.feed.entries.length という関係)
	// nEntCountは多くすると読み込みに時間がかかるが、小さいとランダム性が低くなってしまう。
	//---------------------------------------------------------------------------------------

	//// 記事のURLを取得して表示 ////
	feed.load(function (result){
		if (!result.error){
		
			// 今回表示するエントリーの番号を、ランダムに決定(0～記事数)
			var nEntCount = result.feed.entries.length;
			var nIdxEnt   = Math.floor( Math.random() * nEntCount);
			
			// 表示するエントリーの取得
			var entry = result.feed.entries[nIdxEnt];
			
			// デバッグ用
			//window.alert("Site: " + nIdxURL + " Entry: " + nIdxEnt + "/" + nEntry + "\nURL: " + entry.link);
			
			// 表示
			document.location.href = entry.link;
		}
	});

	// メモリ開放
	delete feed;
}


//// RSSフィードを取得して文字列表示する ////
function GetRSSAndWrite() {
	
	// URL配列を一つ一つ当たってゆく
	for (var i = 0; i < arrURL.length; i++) {
		
		// URLを一つ取得
		var feed = new google.feeds.Feed(arrURL[i][0]);
		var site = arrURL[i][1];
		
		// エントリー取得
		var nEntCount = 3;
		feed.setNumEntries(nEntCount);
		
		// エントリーを表示する
		feed.load(function (result){
			if (!result.error){

				// 実際に取得できたエントリー数
				nEntCount = result.feed.entries.length;
				
				// エントリーをHTML化してゆく
				for (var j = 0; j < nEntCount; j++) {
					var entry = result.feed.entries[j];
					//var title = '<li><h3><a href="' + entry.link + '">' + "["+  site + "]" + entry.title + '</a></h3></li>';
					var title = '<li><h3><a href="' + entry.link + '">' + entry.title + '</a></h3></li>';
					var conte = '<li>' + entry.contentSnippet + '</li>';
					var dates = '<li>' + entry.publishedDate + '</li>';
					$('#feed').append('<li class="post"><ul>' + title + conte + dates + '</ul></li>');
				}
			}
		});
	
		// メモリ開放
		delete feed;
	}
}


// window.alert(arrURL[i][0]);