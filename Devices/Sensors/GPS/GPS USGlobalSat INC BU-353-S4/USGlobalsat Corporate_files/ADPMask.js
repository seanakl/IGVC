//****** Advanced DHTML Popup Pro Modal Add-on Version 1.8 ******

// Copyright (c) Digital Flow Software 2005-2009
// The present javascript code is property of Digital Flow Software.
// This code can only be used inside Internet/Intranet web sites located on *web servers*, as the outcome of a licensed Advanced DHTML Popup application only. 
// This code *cannot* be used inside distributable implementations (such as demos, applications or CD-based webs), unless this implementation is licensed with an "Advanced DHTML Popup License for Distributed Applications". 
// Any unauthorized use, reverse-engineering, alteration, transmission, transformation, facsimile, or copying of any means (electronic or not) is strictly prohibited and will be prosecuted.
// ***Removal of the present copyright notice is strictly prohibited***

var df,rf=false,na=navigator.userAgent,dt=document,op=(na.indexOf('Opera')!=-1),dm=(dt.getElementById)?true:false,ie5x=(dt.all&&dm),mci=(na.indexOf('Mac')!=-1);df=((ie5x||op)&&mci);decide();function decide(){if(df){return;}else{rf=true;}}
if(rf){
var shtm=0,dshm,sltm=0,plam,cthm,ctwm,z_indexm=9000;var dmt=document,nbl='none',ibl='block',nvi='hidden',ivi='visible',sct,isScrim,isScri,na=navigator.userAgent;function de7(id){return dmt.getElementById(id)}var w37=(de7)?true:false, mie=(w37 && dmt.all)?true:false, ns=(w37 && !dmt.all)?true:false, op=(na.indexOf('Opera')!=-1);if(op){var otmp=na.indexOf("Opera")+6;opv=parseInt(na.charAt(otmp));var op9=(opv==9)?true:false;}if(mie){mtmp=na.split("MSIE");miv=parseFloat(mtmp[1]);var ieh=(miv>=5.5)?true:false;}window.onerror=function(){return false};var xposm=new Array(),yposm=new Array(),pwidthm=new Array,pheightm=new Array,cpadgm=new Array(),bwhgm=new Array(),tbwgm=new Array();var tInd = new Array(), tNames = new Array("a","BUTTON","TEXTAREA","INPUT","IFRAME");delXm=new Array(),delYm=new Array();function miebodym(){return (dmt.compatMode && dmt.compatMode=="CSS1Compat")? dmt.documentElement:dmt.body}if(dmt.compatMode=='CSS1Compat')sct=true;else sct=false;function tabdown(e) {if (e.keyCode == 9){return false;}}if (!document.all || op) {document.onkeypress = tabdown;}function sohm(id,bon,voh){de7(id+'_adpC').style.display=bon;de7(id+'_adpC').style.visibility=voh;}function adpHideMask(id){clearTimeout(dshm);sohm(id,nbl,nvi)}function adpShowMask(id){setTimeout("UpdatePositionm('"+id+"',xposm['"+id+"'],yposm['"+id+"'])",150);dshm=setTimeout("sohm('"+id+"',ibl,ivi)",250);if(mie || op)setTimeout("sbHide();tiHide();",100);}function gspm(){shtm=(mie)?miebody().scrollTop:window.pageYOffset;sltm=(mie)?miebody().scrollLeft:window.pageXOffset;return shtm,sltm;}function UpdatePositionm(id,x,y,m,evt){xposm[id]=x;yposm[id]=y;gspm();if(mie){x+=sltm;y+=shtm;}de7(id+'_adpC').style.left=x+'px';de7(id+'_adpC').style.top=y+'px';}function UpdateContentm(id,text){de7(id+'_adpC').innerHTML=text;}function UpdateSizem(id,w,h){if(w<mnw||h<mnh)return;de7(id+'_adpC').style.width=w-((!op9&&mie&&!sct)?0:2*cpadgm[id])+'px';de7(id+'_adpC').style.height=h-tspm-((!op9&&mie&&!sct)?0:2*cpadgm[id])+'px';}function ds8m(id,p){if(isScr)getScr(uid,xpos[uid],ypos[uid],pla);if(mie && !op){	addScrEv(function(){doscr(id,p);})	}}function doscr(id,p){    UpdateScrollm(id,xposm[id],yposm[id],p);}function UpdateScrollm(id,x,y,p){gspm();de7(id+'_adpC').style.top=(shtm+delYm[id])+'px';de7(id+'_adpC').style.left=(sltm+delXm[id])+'px';}function wh5m(){if(self.innerHeight){	pht=self.innerHeight;	pwh=self.innerWidth;}else if(dmt.documentElement && sct){	pht=dmt.documentElement.clientHeight;	pwh=dmt.documentElement.clientWidth;}else if(document.body){	pht=dmt.body.offsetHeight;	pwh=dmt.body.offsetWidth;}}function adpplamcem(id,p,fw){gspm();if(fw==2){ctwm=0;cthm=0;}rszm(id,p,fw);UpdatePositionm(id,ctwm,cthm);xposm[id]=ctwm;yposm[id]=cthm;}function rszm(id,p,fw,e){	if(fw!=0){	  wh5m();	  pwidthm[id]=pwh-((mie)?(sct)?0:21:17)-2*bwhgm[id]-2*tbwgm[id];		if(fw==2)pheightm[id]=pht-((mie)?(sct)?0:4:0)-2*bwhgm[id]-2*tbwgm[id];		UpdateSizem(id,pwidthm[id],pheightm[id]);	}	addRszEv(function(){dorsz(id,p,fw,e);})}function dorsz(id,p,fw,e){wh5m();gspm();delYm[id]=0;delXm[id]=0;if(fw!=0){  pwidthm[id]=pwh-((mie)?(sct)?0:21:17)-2*bwhgm[id]-2*tbwgm[id];if(fw==2)pheightm[id]=pht-((mie)?(sct)?0:4:0)-2*bwhgm[id]-2*tbwgm[id];  UpdateSizem(id,pwidthm[id],pheightm[id]);}UpdatePositionm(id,ctwm,cthm,0,e);}function adpNm(id,x,y,w,h,bgColour){var adiv=dmt.createElement('div');adiv.setAttribute('id',id);adiv.style.backgroundColor=bgColour;adiv.style.display='none';adiv.style.padding='0px 0px 0px 0px';if(!mie){  adiv.style.position='fixed';}else{  adiv.style.position='absolute';}adiv.style.left=x+'px';adiv.style.top=y+'px';adiv.style.width=w+'px';adiv.style.height=h+'px';return adiv;}function adpMask(adpid){mnh=50;mnw=50;mxp=15;mxb=15;x=0;y=0;w=1500;h=1500;ib8="";cpad=0;bwh=0;tbw=0;plam=1;fw7m=2;w=Math.max(w,mnw);h=Math.max(h,mnh);cpad=Math.min(cpad,mxp);bwhgm[adpid]=Math.min(bwh,mxb);cpadgm[adpid]=cpad;tbwgm[adpid]=tbw;xposm[adpid]=x;yposm[adpid]=y;pwidthm[adpid]=w;pheightm[adpid]=h;delXm[adpid]=0;delYm[adpid]=0;tspm=0;if(!w37)return;if(!de7(uid+'_adpB'))return;var adpC=new adpNm(adpid+'_adpC',bwhgm[adpid],bwhgm[adpid],w-((mie&&!sct&&!op9)?0:2*cpad),h-((mie&&!sct&&!op9)?0:2*cpad),ib8);adpC.style.zIndex=z_indexm;if(!op){text="<div id='ADPMask' style='width:100%; height:100%'></div>";}else{text="<div id='ADPMask_opera' style='width:100%; height:100%'></div>";}if(!mie)adpC.innerHTML=text;dmt.body.appendChild(adpC);if(mie)adpC.innerHTML=text;ds8m(adpid,plam);if(plam!=0)setTimeout("adpplamcem('"+ adpid +"',plam,fw7m);",250);document.getElementById(uid + '_close').onclick=function(){adpHideMask('adpMask');adpHide(uid);if(mie || op){sbShow();tiShow();}};}function adpRemoveMask(adpid){adpHideMask(adpid);adpHide(uid);if(mie || op){sbShow();tiShow();}}function sbHide(){for(var i = 0; i < document.forms.length; i++) {for(var j = 0; j < document.forms[i].length; j++){if(document.forms[i].elements[j].tagName == "SELECT") {document.forms[i].elements[j].style.visibility="hidden";}}}}function sbShow(){for(var i = 0; i < document.forms.length; i++) {for(var j = 0; j < document.forms[i].length; j++){if(document.forms[i].elements[j].tagName == "SELECT") {document.forms[i].elements[j].style.visibility="visible";}}}}function tiHide(){var i=0;for (var j=0;j<tNames.length;j++){var tElements = document.getElementsByTagName(tNames[j]);for (var k=0;k<tElements.length;k++){tInd[i]=tElements[k].tabIndex;tElements[k].tabIndex="-1";i++;}}}function tiShow(){var i=0;for (var j=0;j<tNames.length;j++){var tElements = document.getElementsByTagName(tNames[j]);for (var k=0;k<tElements.length;k++){tElements[k].tabIndex=tInd[i];tElements[k].tabEnabled=true;i++;}}}
}
