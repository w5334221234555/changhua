var pic_url = '';
var a='';
$(function(){	  
	  var postdata={
	  'nType':'3',
	  'pri':'2'
	  };
      var req = {url: 'changhua/changhua/news/list',post:postdata, hasCA: true};
    __.api(req, function(data) {
      if (data.errCode === 0) {	  
	  
		data.value.list.forEach(function(item) {
		var date = item.mdTime;
		date = date.substring(0,10)+" "+date.substring(11,16);
			get_pic(item.ngID,item.title,date,item.summary,item.iconURI);
		})	
				
      } else {
	  alert(data.message);
      }
    });
	
});
function get_pic(ngID,title,mdTime,summary,icon){
	  var postdata={
	  'pic':'1'
	  };
      var req = {url: 'changhua/changhua/news/view/'+ngID,post:postdata, hasCA: true};
    __.api(req, function(data) {
      if (data.errCode === 0) {	
		
		a='';
		a+="<div class='item'><div class='item_cata'>"+summary+"</div><div class='item_content'><div class='item_pic'><img src='/images/"+ngID+"?path=";
		a+=icon;
		a+="&maxw=500'></div><div class='item_time'>"+mdTime+"</div><div class='item_title'>";
		a+=title;
		a+="</div>"
		a+="<div>"+data.value.body;
		a+="</div></div>";
		document.getElementById('content').innerHTML+=a;
      } else {
		alert(data.message);
      }
    });
	
};