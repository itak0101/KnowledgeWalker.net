
// CSVファイルを読み込んで、配列に格納する
function ReadCSV(filePath) { //csvファイルの相対パスor絶対パス
	
	// 処理結果を初期化
	var csvData = new Array();
	
	// 同期通信でファイルに接続
	var data = new XMLHttpRequest();
	data.open("GET", filePath, false); // 第三引数: true=非同期 false=同期
	//data.overrideMimeType("text/plain; charset=shift_jis");		// IEに対応していない
	data.send(null);

	// 全データ取得
	var LF = String.fromCharCode(10); 			// 改行コード
	var lines = data.responseText.split(LF);	// 改行コードで区切って取得

	// 1行ずつカンマで分割して格納してゆく
	for (var i = 0; i < lines.length;++i) {
		
		// 1行のデータをカンマ区切りで分割
		var cells = lines[i].split(",");
		
		// 要素数が2であれば格納する
		if( cells.length == 2 ){	
			csvData.push(cells);
		}
		else{
			// window.alert("CSVファイルの" + i + "行目の要素数が不正です。修正して下さい。");
		}
	}
	
	return csvData;	
}


