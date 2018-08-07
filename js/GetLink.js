
// arXiv.org�ւ̃����N���擾����
function GetArXivLink()
{
	// �N�A���A�f�ڃi���o�[�𗐐��Ő���
	var nYear  = Math.floor( Math.random() * 6    ) + 8; // 8�`13�̐����𓾂�
	var nMonth = Math.floor( Math.random() * 12   ) + 1; // 1�`12�̐����𓾂�
	var nNumber= Math.floor( Math.random() * 5000 ) + 1; // 1�`5000�̐����𓾂�
	
	// �f�o�b�O�p(�������ꂽ�����̃`�F�b�N)
	//window.alert("GetArXivLink: nYear="   + nYear  );
	//window.alert("GetArXivLink: nMonth="  + nMonth );
	//window.alert("GetArXivLink: nNumber=" + nNumber);
	
	// �N��2���A����2���A�f�ڃi���o�[��4���ɂȂ�悤�Ƀ[�����߂���
	var sYear  = ZeroFill(nYear  ,2); // 08�`13�̕�����𓾂�
	var sMonth = ZeroFill(nMonth ,2); // 01�`12�̕�����𓾂�
	var sNumber= ZeroFill(nNumber,4); // 0001�`5000�̕�����𓾂�
	
	// �f�o�b�O�p(�[�����߂��ꂽ�����̃`�F�b�N)
	//window.alert("GetArXivLink: sYear="   + sYear  );
	//window.alert("GetArXivLink: sMonth="  + sMonth );
	//window.alert("GetArXivLink: sNumber=" + sNumber);
	
	// arXiv.org�ւ̃����N���쐬����(��: http://arxiv.org/abs/0801.1202)
	var sURL = "http://arxiv.org/abs/" + sYear + sMonth + "." + sNumber;
	
	// �f�o�b�O�p(�����N�A�h���X�̃`�F�b�N)
	//window.alert("GetArXivLink: sURL=" + sURL);
	
	// �����N�A�h���X��Ԃ�
	return sURL;
}

// tabelog.org�ւ̃����N���擾����
function GetTabelogLink()
{
	// �f�ڃi���o�[�𗐐��Ő���
	var nNumber= Math.floor( Math.random() * 150100 ) -100; // 100�`150000�̐����𓾂�
	
	// �f�o�b�O�p(�������ꂽ�����̃`�F�b�N)
	//window.alert("GetTabelogLink: nNumber="   + nNumber  );
	
	// �f�ڃi���o�[��6���ɂȂ�悤�Ƀ[�����߂���
	var sNumber= ZeroFill(nNumber,6); // 000100�`150000�̕�����𓾂�
	
	// �f�o�b�O�p(�[�����߂��ꂽ�����̃`�F�b�N)
	//window.alert("GetTabelogLink: sNumber=" + sNumber);
	
	// arXiv.org�ւ̃����N���쐬����(��: http://tabelog.com/tokyo/A1319/A131902/13150000)
	var sURL = "http://tabelog.com/tokyo/A1319/A131902/13" + sNumber + "/";
	
	// �f�o�b�O�p(�����N�A�h���X�̃`�F�b�N)
	//window.alert("GetTabelogLink: sURL=" + sURL);
	
	// �����N�A�h���X��Ԃ�
	return sURL;
}

// cockpad.com�ւ̃����N���擾����
function GetCockPadLink()
{
	// �f�ڃi���o�[�𗐐��Ő���
	var nNumber= Math.floor( Math.random() * 2101000 ) -1000; // 1000�`2100000�̐����𓾂�
	
	// �f�o�b�O�p(�������ꂽ�����̃`�F�b�N)
	//window.alert("GetCockPadLink: nNumber="   + nNumber  );
	
	// �f�ڃi���o�[��6���ɂȂ�悤�Ƀ[�����߂���
	var sNumber= ZeroFill(nNumber,7); // 000100�`2100000�̕�����𓾂�
	
	// �f�o�b�O�p(�[�����߂��ꂽ�����̃`�F�b�N)
	//window.alert("GetCockPadLink: sNumber=" + sNumber);
	
	// arXiv.org�ւ̃����N���쐬����(��: http://cookpad.com/recipe/2100000)
	var sURL = "http://cookpad.com/recipe/" + sNumber;
	
	// �f�o�b�O�p(�����N�A�h���X�̃`�F�b�N)
	//window.alert("GetCockPadLink: sURL=" + sURL);
	
	// �����N�A�h���X��Ԃ�
	return sURL;
}

// �w�茅���܂Ń[�����߂���
function ZeroFill(nTarget, nDigit)
{
	// �����̃`�F�b�N(���͂�������΃G���[�ɂ���)
	var option = nTarget || -1;
	var option = nDigit  || -1;
	if( (nTarget == -1) || (nDigit == -1) )
	{
		window.alert("Error: ZeroFill(nTarget=" + nTarget +  ", nDigit=" + nDigit + ")");
	}
	
	// �[�����߂��錅�����擾
	var nZeroFillDigit= nDigit - GetDigit(nTarget);
	
	// �f�o�b�O�p(�[�����ߌ����ƑS�����̏o��)
	//window.alert("ZeroFill: nZeroFillDigit=" + nZeroFillDigit + ", nDigit=" + nDigit);
	
	// �[�����ߏ���
	var nResult = "";
	for (i = 0; i < nZeroFillDigit; i = i + 1)
	{
    	nResult = "0" + nResult;
    }
    nResult = nResult + nTarget;
    
    // �f�o�b�O�p(�߂�l�̏o��)
	//window.alert("ZeroFill: nResult=" + nResult);
    
    // �[�����߂��ꂽ���l��Ԃ�
	return nResult;
}

// �������擾����
function GetDigit(nTarget)
{
	// �����̃`�F�b�N(���͂�������΃G���[�ɂ���)
	var option = nTarget || -1;
	if(nTarget == -1)
	{
		window.alert("Error: GetDigit(nTarget=" + nTarget + ")");
	}
	
	// �����̎擾
	var nDigit = Math.floor( Math.log(nTarget) / Math.log(10.0)) + 1;
	
	// �f�o�b�O�p(�����̏o��)
	//window.alert("GetDigit: nTarget=" + nTarget + ",nDigit=" + nDigit);
	
	// ������Ԃ�
	return nDigit;
}