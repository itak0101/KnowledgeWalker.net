
//// RSS�t�B�[�h���擾���ĕ\������ ////
function GetRSSAndShow() {
	
	//// �A�N�Z�X����RSS�������_���ɑI�� ////
	var nIdxURL = Math.floor( Math.random() * arrURL.length);
	
	//// RSS����L�����擾 ////
	var nEntCount = 5;				// �擾����L���̐�
	var feed = new google.feeds.Feed(arrURL[nIdxURL][0]);
	feed.setNumEntries(nEntCount);
	
	// Memo ---------------------------------------------------------------------------------
	// nEntCount�̒l�́A���ۂ�RSS�ɋL�ڂ���Ă���G���g���[�̐����傫�Ȓl�ł��ǂ��B
	// ���炭RSS���ォ��ǂ�ōs���āAnEntCount�Ɏ��邩�Ō�܂ōs������break���Ă���B
	// (nEntCount �� result.feed.entries.length �Ƃ����֌W)
	// nEntCount�͑�������Ɠǂݍ��݂Ɏ��Ԃ������邪�A�������ƃ����_�������Ⴍ�Ȃ��Ă��܂��B
	//---------------------------------------------------------------------------------------

	//// �L����URL���擾���ĕ\�� ////
	feed.load(function (result){
		if (!result.error){
		
			// ����\������G���g���[�̔ԍ����A�����_���Ɍ���(0�`�L����)
			var nEntCount = result.feed.entries.length;
			var nIdxEnt   = Math.floor( Math.random() * nEntCount);
			
			// �\������G���g���[�̎擾
			var entry = result.feed.entries[nIdxEnt];
			
			// �f�o�b�O�p
			//window.alert("Site: " + nIdxURL + " Entry: " + nIdxEnt + "/" + nEntry + "\nURL: " + entry.link);
			
			// �\��
			document.location.href = entry.link;
		}
	});

	// �������J��
	delete feed;
}


//// RSS�t�B�[�h���擾���ĕ�����\������ ////
function GetRSSAndWrite() {
	
	// URL�z������������Ă䂭
	for (var i = 0; i < arrURL.length; i++) {
		
		// URL����擾
		var feed = new google.feeds.Feed(arrURL[i][0]);
		var site = arrURL[i][1];
		
		// �G���g���[�擾
		var nEntCount = 3;
		feed.setNumEntries(nEntCount);
		
		// �G���g���[��\������
		feed.load(function (result){
			if (!result.error){

				// ���ۂɎ擾�ł����G���g���[��
				nEntCount = result.feed.entries.length;
				
				// �G���g���[��HTML�����Ă䂭
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
	
		// �������J��
		delete feed;
	}
}


// window.alert(arrURL[i][0]);