
// arXiv.orgへのリンクを取得する
function GetArXivLink()
{
	// 年、月、掲載ナンバーを乱数で生成
	var nYear  = Math.floor( Math.random() * 6    ) + 8; // 8～13の整数を得る
	var nMonth = Math.floor( Math.random() * 12   ) + 1; // 1～12の整数を得る
	var nNumber= Math.floor( Math.random() * 5000 ) + 1; // 1～5000の整数を得る
	
	// デバッグ用(生成された乱数のチェック)
	//window.alert("GetArXivLink: nYear="   + nYear  );
	//window.alert("GetArXivLink: nMonth="  + nMonth );
	//window.alert("GetArXivLink: nNumber=" + nNumber);
	
	// 年は2桁、月は2桁、掲載ナンバーは4桁になるようにゼロ埋めする
	var sYear  = ZeroFill(nYear  ,2); // 08～13の文字列を得る
	var sMonth = ZeroFill(nMonth ,2); // 01～12の文字列を得る
	var sNumber= ZeroFill(nNumber,4); // 0001～5000の文字列を得る
	
	// デバッグ用(ゼロ埋めされた乱数のチェック)
	//window.alert("GetArXivLink: sYear="   + sYear  );
	//window.alert("GetArXivLink: sMonth="  + sMonth );
	//window.alert("GetArXivLink: sNumber=" + sNumber);
	
	// arXiv.orgへのリンクを作成する(例: http://arxiv.org/abs/0801.1202)
	var sURL = "http://arxiv.org/abs/" + sYear + sMonth + "." + sNumber;
	
	// デバッグ用(リンクアドレスのチェック)
	//window.alert("GetArXivLink: sURL=" + sURL);
	
	// リンクアドレスを返す
	return sURL;
}

// tabelog.orgへのリンクを取得する
function GetTabelogLink()
{
	// 掲載ナンバーを乱数で生成
	var nNumber= Math.floor( Math.random() * 150100 ) -100; // 100～150000の整数を得る
	
	// デバッグ用(生成された乱数のチェック)
	//window.alert("GetTabelogLink: nNumber="   + nNumber  );
	
	// 掲載ナンバーは6桁になるようにゼロ埋めする
	var sNumber= ZeroFill(nNumber,6); // 000100～150000の文字列を得る
	
	// デバッグ用(ゼロ埋めされた乱数のチェック)
	//window.alert("GetTabelogLink: sNumber=" + sNumber);
	
	// arXiv.orgへのリンクを作成する(例: http://tabelog.com/tokyo/A1319/A131902/13150000)
	var sURL = "http://tabelog.com/tokyo/A1319/A131902/13" + sNumber + "/";
	
	// デバッグ用(リンクアドレスのチェック)
	//window.alert("GetTabelogLink: sURL=" + sURL);
	
	// リンクアドレスを返す
	return sURL;
}

// cockpad.comへのリンクを取得する
function GetCockPadLink()
{
	// 掲載ナンバーを乱数で生成
	var nNumber= Math.floor( Math.random() * 2101000 ) -1000; // 1000～2100000の整数を得る
	
	// デバッグ用(生成された乱数のチェック)
	//window.alert("GetCockPadLink: nNumber="   + nNumber  );
	
	// 掲載ナンバーは6桁になるようにゼロ埋めする
	var sNumber= ZeroFill(nNumber,7); // 000100～2100000の文字列を得る
	
	// デバッグ用(ゼロ埋めされた乱数のチェック)
	//window.alert("GetCockPadLink: sNumber=" + sNumber);
	
	// arXiv.orgへのリンクを作成する(例: http://cookpad.com/recipe/2100000)
	var sURL = "http://cookpad.com/recipe/" + sNumber;
	
	// デバッグ用(リンクアドレスのチェック)
	//window.alert("GetCockPadLink: sURL=" + sURL);
	
	// リンクアドレスを返す
	return sURL;
}

// 指定桁数までゼロ埋めする
function ZeroFill(nTarget, nDigit)
{
	// 引数のチェック(入力が無ければエラーにする)
	var option = nTarget || -1;
	var option = nDigit  || -1;
	if( (nTarget == -1) || (nDigit == -1) )
	{
		window.alert("Error: ZeroFill(nTarget=" + nTarget +  ", nDigit=" + nDigit + ")");
	}
	
	// ゼロ埋めする桁数を取得
	var nZeroFillDigit= nDigit - GetDigit(nTarget);
	
	// デバッグ用(ゼロ埋め桁数と全桁数の出力)
	//window.alert("ZeroFill: nZeroFillDigit=" + nZeroFillDigit + ", nDigit=" + nDigit);
	
	// ゼロ埋め処理
	var nResult = "";
	for (i = 0; i < nZeroFillDigit; i = i + 1)
	{
    	nResult = "0" + nResult;
    }
    nResult = nResult + nTarget;
    
    // デバッグ用(戻り値の出力)
	//window.alert("ZeroFill: nResult=" + nResult);
    
    // ゼロ埋めされた数値を返す
	return nResult;
}

// 桁数を取得する
function GetDigit(nTarget)
{
	// 引数のチェック(入力が無ければエラーにする)
	var option = nTarget || -1;
	if(nTarget == -1)
	{
		window.alert("Error: GetDigit(nTarget=" + nTarget + ")");
	}
	
	// 桁数の取得
	var nDigit = Math.floor( Math.log(nTarget) / Math.log(10.0)) + 1;
	
	// デバッグ用(桁数の出力)
	//window.alert("GetDigit: nTarget=" + nTarget + ",nDigit=" + nDigit);
	
	// 桁数を返す
	return nDigit;
}