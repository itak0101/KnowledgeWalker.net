
// CSV�t�@�C����ǂݍ���ŁA�z��Ɋi�[����
function ReadCSV(filePath) { //csv�t�@�C���̑��΃p�Xor��΃p�X
	
	// �������ʂ�������
	var csvData = new Array();
	
	// �����ʐM�Ńt�@�C���ɐڑ�
	var data = new XMLHttpRequest();
	data.open("GET", filePath, false); // ��O����: true=�񓯊� false=����
	//data.overrideMimeType("text/plain; charset=shift_jis");		// IE�ɑΉ����Ă��Ȃ�
	data.send(null);

	// �S�f�[�^�擾
	var LF = String.fromCharCode(10); 			// ���s�R�[�h
	var lines = data.responseText.split(LF);	// ���s�R�[�h�ŋ�؂��Ď擾

	// 1�s���J���}�ŕ������Ċi�[���Ă䂭
	for (var i = 0; i < lines.length;++i) {
		
		// 1�s�̃f�[�^���J���}��؂�ŕ���
		var cells = lines[i].split(",");
		
		// �v�f����2�ł���Ίi�[����
		if( cells.length == 2 ){	
			csvData.push(cells);
		}
		else{
			// window.alert("CSV�t�@�C����" + i + "�s�ڂ̗v�f�����s���ł��B�C�����ĉ������B");
		}
	}
	
	return csvData;	
}


