{
    "schema": {
        "properties": {
            "text3": {
                "required": false,
                "type": "object"
            },
            "text4": {
                "required": false,
                "type": "object"
            },
            "text1": {
                "required": false,
                "type": "object"
            },
            "text2": {
                "required": false,
                "type": "object"
            },
            "text7": {
                "required": false,
                "type": "object"
            },
            "text8": {
                "required": false,
                "type": "object"
            },
            "text5": {
                "required": false,
                "type": "object"
            },
            "text6": {
                "required": false,
                "type": "object"
            },
            "tien_chu": {
                "required": false,
                "type": "object"
            },
            "initEvent": {
                "required": false,
                "type": "object"
            }
        },
        "type": "object",
        "required": false
    },
    "options": {
        "legendStyle": "",
        "type": "object",
        "fields": {
            "text3": {
                "id": "text3",
                "fieldClass": "form-input-100",
                "placeholder": "",
                "name": "text3",
                "dateFormat": "DD/MM/YYYY",
                "label": "",
                "picker": {
                    "locale": "vi_VN",
                    "useCurrent": false,
                    "dayViewHeaderFormat": "MMMM YYYY",
                    "format": "DD/MM/YYYY",
                    "extraFormats": []
                },
                "type": "date"
            },
            "text4": {
                "id": "text4",
                "fieldClass": "form-input-100",
                "placeholder": "",
                "name": "text4",
                "label": "",
                "type": "text"
            },
            "text1": {
                "id": "text1",
                "fieldClass": "form-input-100",
                "placeholder": "",
                "name": "text1",
                "label": "",
                "type": "text"
            },
            "text2": {
                "id": "text2",
                "fieldClass": "form-input-100",
                "placeholder": "",
                "name": "text2",
                "label": "",
                "type": "text"
            },
            "text7": {
                "id": "text7",
                "fieldClass": "form-input-100",
                "placeholder": "",
                "name": "text7",
                "dateFormat": "DD/MM/YYYY",
                "label": "",
                "picker": {
                    "locale": "vi_VN",
                    "useCurrent": false,
                    "dayViewHeaderFormat": "MMMM YYYY",
                    "format": "DD/MM/YYYY",
                    "extraFormats": []
                },
                "events": { 
                    "ready": function(){
                        var n = new Date();
                        $('#text7').val(n.getDate()+'/'+(n.getMonth()+1)+'/'+n.getFullYear());
                    }
                },
                "type": "date"
            },
            "text8": {
                "id": "text8",
                "fieldClass": "form-input-100",
                "placeholder": "",
                "name": "text8",
                "label": "",
                "type": "text"
            },
            "text5": {
                "id": "text5",
                "fieldClass": "form-input-100",
                "placeholder": "",
                "name": "text5",
                "label": "",
                "type": "text"
            },
            "text6": {
                "id": "text6",
                "fieldClass": "form-input-100",
                "placeholder": "",
                "name": "text6",
                "label": "",
                "type": "text"
            },
            "tien_chu": {
                "id": "tien_chu",
                "fieldClass": "form-input-100",
                "placeholder": "",
                "name": "tien_chu",
                "label": "",
                "type": "text"
            },
            "initEvent": {
                "id": "initEvent",
                "fieldClass": "form-input-100",
                "placeholder": "",
                "name": "initEvent",
                "label": "",
                "type": "hidden",
                "events": {
                "ready": function(){
                    $('#text6').keyup(function(){
                        var tg = $('#text6').val();
                        if(tg != '' ){
                            var gt = numberic_to_string(tg);
                            $('#tien_chu').val(gt);
                            $('#view-tien-chu').html(gt);
                        }
                    });
                    
function numberic_to_string(so){
    
    var i;
    var j;
    var kq = "";
    var l;
    var dk;
    var tmp = "";
    var check = false;
    var a = new Array(32);
     //Loai het so 0 o dau
     while (so.length > 0 && so.charAt(0) == "0"){
        so = so.substring(1,so.length);
     }
     //alert(so);
     l = so.length;
     if (l > 28){
        return "So khong hop le";
     }
///////
         for (var i=1;i<=l;i++){
          so = so.replace(',','');
        }
        l = so.length;
/////////      
     //Load cac chu so cua so can doc
     //vao mang a
     for (var i=1;i<=l;i++){
      a[i] = parseInt(so.charAt(i-1));
    }
     //Bat dau doc tu trai sang phai
      for (var i=1;i<=l;i++){
    
      if((l - i) % 3 == 2 && a[i] == 0 && (l - i >= 2)) {
        if (a[i + 1] != 0 || a[i + 2] != 0) {
          kq = kq + "không ";
        }
      }
  
      if (a[i] == 2){  kq = kq + "hai ";}
      if (a[i] == 3){  kq = kq + "ba ";}
      if (a[i] == 6){  kq = kq + "sáu ";}
      if (a[i] == 7){  kq = kq + "bảy ";}
      if (a[i] == 8){  kq = kq + "tám ";}
      if (a[i] == 9){  kq = kq + "chín ";}
      
  
        //Xu ly cach doc so 4
        if (a[i] == 4) {
        if (i > 1 && (l - i) % 3 == 0){
          if (a[i - 1] > 1){
              kq = kq + "tư ";
          }else{
             kq = kq + "bốn ";
          }
         }else{
          kq = kq + "bốn ";
         }
      } //a(i)=4
  
        //Xu ly cach doc so 5
        if (a[i] == 5){
         if (i > 1 && (l - i)% 3 == 0){
          if (a[i - 1] != 0 ){
              kq = kq + "lăm ";
          }else{
             kq = kq + "năm ";
          }
         }else{
          kq = kq + "năm ";
         }
       } //a(i)=5
     
        //Xu ly cach doc so 1
        if (a[i] == 1) {
           //doc la muoi neu no la hang chuc
          if ((l - i) % 3 == 1) {
          kq = kq + "mười ";  //doc la mot neu la hang don vi  //va hang chuc >1
           }else{
          if ((l - i) % 3 == 0 && (i > 1)){
            if (a[i - 1] > 1){
              kq = kq + "mốt ";
            }else{
              kq = kq + "một ";
            }
          }else{
            kq = kq + "một ";
          }
        }
        } //a(i)=1
  
  
      //Doc tiep la muoi neu
        //No la so hang chuc va
        //Khac 1 va 0
       if ((l - i) % 3 == 1 && a[i] != 0 && a[i] != 1){
         kq = kq + "mươi ";
        }
        
      if ((l - i) % 3 == 1 && a[i] == 0 && a[i + 1] != 0){
         kq = kq + "linh ";
        }
        
      if ((l - i) % 3 == 2 && (a[i + 1] != 0 || a[i + 2] != 0)){
         kq = kq + "trăm ";
        }
        
      if ((i + 2) <= l) {
        if (a[i] != 0 && (l - i) % 3 == 2){
           if (a[i + 1] == 0 && a[i + 2] == 0){
              kq = kq + "trăm ";
           }
        }
        }
      
        if ((l - i) == 3){ kq = kq + "nghìn ";}
        if ((l - i) == 6){ kq = kq + "triệu ";}
        if ((l - i) == 9){ kq = kq + "tỷ ";}
        
      if ((l - i) == 12){
        check = true;
        for (j=i+1;i<l;i++){
             if (a[i + 1] != 0){ 
               check = false;
          }
        }
        if (check == false) {
            kq = kq + "nghìn ";
        }else{
           kq = kq + "nghìn tỷ ";
        }
        }


if ((l - i) == 15){ kq = kq + "triệu tỷ ";}
        if ((l - i) == 18){ kq = kq + "tỷ tỷ ";}
        if ((l - i) == 21){ kq = kq + "nghìn tỷ tỷ ";}
        if ((l - i) == 24){ kq = kq + "triệu tỷ tỷ ";}
        if ((l - i) == 27){ kq = kq + "tỷ tỷ tỷ ";}
        if ((l - i) == 30){ kq = kq + "nghìn tỷ tỷ ";}
    
      //Xu ly bo 3 so khong
        if (((l - i) % 3 == 2) && (a[i] == 0) && (a[i + 1] == 0) && (a[i + 2] == 0)){
        i = i + 2;
        }
    
      //Xu ly tat ca so khong con lai
        if ((l - i) % 3 == 0){
        dk = 1;
        for (j=i+1;j<=l;j++){
          if (a[j] != 0){
            dk = 0;
          }
        }
        }
        if (dk == 1){
        break;
      }
      
    }
   
                //Viet hoa chu cai dau tien
                if (kq == "") kq = "không "
                while (kq.charAt(kq.length) == ","){
                        kq = kq.substring(0,kq.length-1);
                }
                kq = kq.charAt(0).toUpperCase() + kq.substring(1,kq.length);
  if (kq!="So khong hop le")
  {
    kq = kq +"đồng chẵn";
  }else{
    kq = kq ;
  }
  return kq;
}

            }
            }
            }
        }
    },
    "view": {
        "layout": {
            "template": "<center></center><div class='row-fluid'><div class='row-fluid' style='font-family: Times New Roman, Times, serif;text-rendering: optimizeLegibility;width: 65%;position: relative;left: 50%;transform: translateX(-50%);-webkit-transform: translateX(-50%);'><style type='text/css'>#tien_chu{width: 500px!important}#text8{ text-align: center; } .has-error.alpaca-field-text:before{content:'';position:absolute;bottom:3px;left:0;width:100%;height:1px;background-color:red}.alpaca-container-item input{border-bottom: 0px !important; font-size: 14px} input:focus{outline:none}.alpaca-field-text,.alpaca-field-date,.alpaca-field-datetime{position:relative;}.alpaca-field-text:before, .alpaca-field-date:before, .alpaca-field-datetime:before{content:'';position:absolute;bottom:3px;left:0;width:100%;height:1px;background-color:#ccc} .notBBAT .alpaca-field-text:before, .notBBAT .alpaca-field-date:before, .notBBAT .alpaca-field-date:before, .notBBAT .alpaca-field-datetime:before, .notBBAT.alpaca-field-text:before, .notBBAT.alpaca-field-date:before, .notBBAT.alpaca-field-datetime:before{content:'';position:absolute;bottom:3px;left:0;width:100%;height:0px;background-color:#ccc} .alpaca-layout-binding-holder{margin-bottom: -15px !important;} p .form-group, p .control-group{margin-bottom: 1px !important;}p{text-indent: 0pt !important;}ul{list-style: none;}.alpaca-field li .form-group, .alpaca-field li .control-group{margin-bottom: 0px !important;} .alpaca-field .row-fluid table td{padding: 5px 10px 0px 10px !important;}</style><table align='center' border='0' cellpadding='0' cellspacing='0' style='width:100%;' width='0'><tbody><tr style='height:58px;'><td style='width:40%;padding:0in 5.4pt 0in 5.4pt;height:58px;vertical-align:top;'><p align='center' style='margin-bottom:0in;margin-bottom:.0001pt;text-align:center;line-height:normal;page-break-after:avoid;'><span style='letter-spacing:-.8pt;'><span style='font-family:times new roman,serif;'><span style='font-size:13.0pt;'>BỘ VĂN HOÁ, THỂ THAO VÀ DU LỊCH</span></span></span></p><p align='center' style='margin-bottom:0in;margin-bottom:.0001pt;text-align:center;line-height:normal;'><strong><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>CỤC NGHỆ THUẬT BIỂU DIỄN</span></span></strong></p><p align='center' style='margin-bottom:0in;margin-bottom:.0001pt;text-align:center;line-height:normal;'><strong><span style='font-family:times new roman,serif;'><span style='font-size:12.0pt;'>&nbsp;_________________</span></span></strong></p></td><td style='width:40%;padding:0in 5.4pt 0in 5.4pt;height:58px;vertical-align:top;'><p align='center' style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:15.85pt;margin-bottom:.0001pt;text-align:center;line-height:normal;'><strong><span style='letter-spacing:-1.0pt;'><span style='font-family:times new roman bold,serif;'><span style='font-size:13.0pt;'>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</span></span></span></strong></p><p align='center' style='margin-bottom:0in;margin-bottom:.0001pt;text-align:center;line-height:normal;'><strong><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>Độc lập - Tự do - Hạnh phúc</span></span></strong></p><p align='center' style='margin-bottom:0in;margin-bottom:.0001pt;text-align:center;line-height:normal;'><strong><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>_________________</span></span></strong></p></td></tr><tr><td style='width:291px;padding:0in 5.4pt 0in 5.4pt;vertical-align:top;'><p style='margin-bottom:0in;margin-bottom:.0001pt;line-height:normal;'>&nbsp;</p></td><td style='width:340px;padding:0in 5.4pt 0in 5.4pt;vertical-align:top;'><p style='margin-bottom:0in;margin-bottom:.0001pt;line-height:normal;'>&nbsp;</p></td></tr></tbody></table><div style='clear:both;'>&nbsp;</div><p align='center' style='margin-bottom:0in;margin-bottom:.0001pt;text-align:center;line-height:normal;'>&nbsp;</p><p align='center' style='margin-bottom:0in;margin-bottom:.0001pt;text-align:center;line-height:normal;'><strong><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>PHIẾU ĐỀ XUẤT THU PHÍ THẨM ĐỊNH</span></span></strong></p><p align='center' style='margin-bottom:0in;margin-bottom:.0001pt;text-align:center;line-height:normal;'><strong><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>_________________</span></span></strong></p><p align='center' style='margin-bottom:0in;margin-bottom:.0001pt;text-align:center;line-height:normal;'>&nbsp;</p><table align='left' cellpadding='0' cellspacing='0'><tbody><tr><td height='2'>&nbsp;</td></tr></tbody></table>&nbsp;&nbsp;<p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;text-align:justify;text-indent:.5in;line-height:130%;'><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>1. Đơn vị nộp phí:</span></span> <span style='display: inline-table;' id='column-text1' ></span></p><p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;text-align:justify;text-indent:.5in;line-height:130%;'><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>2. Số Giấy phép: &nbsp;&nbsp;</span></span><span style='display: inline-table;' id='column-text2' ></span><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>&nbsp;&nbsp;&nbsp;&nbsp; /GP-NTBD ngày </span></span><span style='display: inline-table;' id='column-text3' ></span><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'> của Cục Nghệ thuật biểu diễn.&nbsp; </span></span></p><p style='margin-bottom:0in;margin-bottom:.0001pt;text-align:justify;text-indent:.5in;line-height:normal;'><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>3. Nội dung: <span style='letter-spacing:-.5pt;'>Thu phí thẩm định chương trình </span></span></span><span style='display: inline-table;' id='column-text4' ></span></p><p style='margin-top:6.0pt;margin-right:0in;margin-bottom:0in;margin-left:0in;margin-bottom:.0001pt;text-align:justify;text-indent:.5in;line-height:130%;'><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>4. Thời gian: </span></span><span style='display: inline-table;' id='column-text5' ></span><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'> phút.</span></span>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;text-align:justify;text-indent:.5in;line-height:130%;'><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>5. Số tiền:</span></span><span style='display: inline-table;' id='column-text6' ></span><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>  (Bằng chữ: <span style='display: inline-table;' id='column-tien_chu' ></span>  ).</span></span></p><p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;text-align:justify;text-indent:.5in;line-height:130%;'><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>(Theo Thông tư số 288/2016/TT-BTC ngày 15 tháng 11 năm 2016 của Bộ trưởng Bộ Tài chính).</span></span></p><p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;text-align:justify;text-indent:.5in;line-height:130%;'><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>Đề nghị Văn phòng Cục căn cứ các quy định pháp luật về phí, lệ phí để làm thủ tục thu phí.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p><p align='center' style='margin-bottom:0in;margin-bottom:.0001pt;text-align:center;line-height:normal;'><em><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hà Nội, ngày&nbsp;&nbsp; </span></span></em><span style='display: inline-table;' id='column-text7' ></span></p><p align='center' style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:2.5in;margin-bottom:.0001pt;text-align:center;line-height:normal;'><strong><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>LÃNH ĐẠO PHÒNG</span></span></strong></p><p align='center' style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:2.5in;margin-bottom:.0001pt;text-align:center;line-height:normal;'><em><span style='font-family:times new roman,serif;'><span style='font-size:14.0pt;'>(Ký, ghi rõ họ tên)</span></span></em><br><br><span style='display: inline-table;' id='column-text8' ></span></p><p align='center' style='margin-bottom:0in;margin-bottom:.0001pt;text-align:center;line-height:normal;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p align='center' style='margin-bottom:0in;margin-bottom:.0001pt;text-align:center;line-height:normal;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p align='center' style='margin-bottom:0in;margin-bottom:.0001pt;text-align:center;line-height:normal;'>&nbsp;</p><p style='margin-bottom:0in;margin-bottom:.0001pt;line-height:normal;'>&nbsp;</p><p style='margin-bottom:0in;margin-bottom:.0001pt;text-align:justify;text-indent:28.35pt;'><br />&nbsp;</p><p style='margin-bottom:0in;margin-bottom:.0001pt;text-align:justify;text-indent:28.35pt;'>&nbsp;</p><p style='margin-bottom:0in;margin-bottom:.0001pt;text-align:justify;text-indent:28.35pt;'>&nbsp;</p><p style='margin-bottom:0in;margin-bottom:.0001pt;text-align:justify;text-indent:28.35pt;'>&nbsp;</p><p style='margin-bottom:0in;margin-bottom:.0001pt;text-align:justify;'>&nbsp;</p></div><div id='column-initEvent'></div></div></center>",
            "bindings": {
                "text3": "column-text3",
                "text4": "column-text4",
                "text1": "column-text1",
                "text2": "column-text2",
                "text7": "column-text7",
                "text8": "column-text8",
                "text5": "column-text5",
                "tien_chu": "column-tien_chu",
                "text6": "column-text6",
                "initEvent": "column-initEvent"
            }
        },
        "parent": "bootstrap-edit",
        "fields": {}
    }
}