/**
 * @author mac_hou;
 * @date 2011,3,20;
 * @Copyright (c) 2011 AUTHORS.txt;
 * @Email blacksheep.hou@gmail.com; 
 **/
//Begin jQuery
$(function(){
	 //append img to LI
	$("#nav-shadow li").append('<img class="shadow" src="img/icons-shadow.jpg" width="128" height="32"  alt="" />');
	//append hover event
	$("#nav-shadow li").hover(function(){
	//define e for tihs
		var $e = this;
		$($e).find("a").stop().animate({marginTop:'-14px'},250,function(){
			$($e).find("a").animate({marginTop:'-10px'},250);
	    	
		});
		$($e).find("img.shadow").stop().animate({width:"80%",opacity:"0.3",marginLeft:"8px"},250);				
		
	},function(){
		var $e = this;
		$($e).find("a").stop().animate({marginTop:"4px"},250,function(){
			$($e).find("a").animate({marginTop:"0px"},250);
		});	 
		$($e).find("img.shadow").stop().animate({width:"100%",opacity:"1",marginLeft:"0px"},250);			
		}
		)
	})
//end jQuery
						

