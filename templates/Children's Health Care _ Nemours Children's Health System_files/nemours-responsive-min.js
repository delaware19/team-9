function callFloodlight_new(a){var d="https://fls.doubleclick.net/activityi;src=4165749;type=nemou370;cat="+a+";ord=1;num="+Math.floor(Math.random()*999999)+"?";var c=null;if(document.getElementById("DCLK_FLDiv")){c=document.getElementById("DCLK_FLDiv")}else{c=document.body.appendChild(document.createElement("div"));c.id="DCLK_FLDiv";c.style.display="none"}var b=document.createElement("iframe");b.id="DCLK_FLIframe_"+Math.floor(Math.random()*999999);b.src=d;c.appendChild(b)}var latitude=0;var longitude=0;var paramseters="";function showMoreSpecs(b){var a=$("#fadspecchecks");$(a).removeClass("fadmorespecs");$(a).addClass("fadlessspecs");$("#fadmorespecslink").remove();$(".fadspeccbdiv").each(function(){$(this).removeClass("hidden")});var c=$("<a />",{id:"fadlessspecslink",text:"Show Fewer Specialties..."});c.bind("click",showLessSpecs);$(a).after($(c))}function showLessSpecs(b){var a=$("#fadspecchecks");$(a).removeClass("fadlessspecs");$(a).addClass("fadmorespecs");$("#fadlessspecslink").remove();$(".fadspeccbdiv").each(function(d){if(d>4){$(this).addClass("hidden")}});var c=$("<a />",{id:"fadmorespecslink",text:"Show More Specialties..."});c.bind("click",showMoreSpecs);$(a).after($(c))}function showNextPage(b){var c=false;$(".providerpage").each(function(){if($(this).hasClass("hidden")&&!c){$(this).removeClass("hidden");c=true}});var a=false;$(".providerpage").each(function(){if($(this).hasClass("hidden")&&!a){a=true}});if(!a){$("#nextProvidersLinkJS").addClass("hidden")}}function swapImg(c,b,d,a){if((c.type=="mouseout"&&!$(b).hasClass("active"))||(c.type=="mouseover"&&!$(b).hasClass("active"))){b.children[0].src=d}else{if(c.type=="click"&&!$(b).hasClass("active")){b.children[0].src=d;if(a!=undefined&&c.type=="click"){$(".tab.active").each(function(){$(this).removeClass("active");$(this).mouseout()});$(b).addClass("active");$(".tabpane").each(function(){$(this).removeClass("active")});$("#tabpane"+a).addClass("active")}}}}function getLatLong(a){if(a==""||a==undefined){document.location.href="http://findaprovider.nemours.org?"+paramseters}else{$.ajax({url:"https://"+location.host+"/content/nemours/wwwv2/welcome/jcr:content/center-column-parsys/hp_callout/finddoc_search_input.getLatLong?zipCode="+a,method:"GET"}).done(function(d){try{var b=JSON.parse(d);if(b.results.length>0&&b.results[0].geometry.location){latitude=b.results[0].geometry.location.lat;longitude=b.results[0].geometry.location.lng;document.location.href="http://findaprovider.nemours.org?"+paramseters+"&latlng="+latitude+","+longitude+"&sortDirection=asc"}}catch(c){document.location.href="http://findaprovider.nemours.org?"+paramseters+"&sortDirection=asc"}})}}$(document).ready(function(){$(".page-nav-mobile-menu").click(function(){if($(".page-nav div.page-nav-mobile-menu.mobile-only span").hasClass("open")){$(".page-nav div.page-nav-mobile-menu.mobile-only span").removeClass("open")}else{$(".page-nav div.page-nav-mobile-menu.mobile-only span").addClass("open")}if($(".page-nav ul").css("display")=="none"){$(".page-nav ul").css("display","block")}else{$(".page-nav ul").css("display","none")}});$(window).resize(function(){if($(".page-nav ul").css("display")=="inline-block"){if($(document).width()<801){$(".page-nav ul").css("display","none");$(".page-nav div.page-nav-mobile-menu.mobile-only span").removeClass("open")}else{}}else{if($(".page-nav ul").css("display")=="block"){if($(document).width()>801){$(".page-nav ul").css("display","inline-block");$(".page-nav div.page-nav-mobile-menu.mobile-only span").removeClass("open")}else{$(".page-nav ul").css("display","none");$(".page-nav div.page-nav-mobile-menu.mobile-only span").removeClass("open")}}else{if($(".page-nav ul").css("display")=="none"){if($(document).width()==810){}else{if($(document).width()>801){$(".page-nav ul").css("display","inline-block");$(".page-nav div.page-nav-mobile-menu.mobile-only span").removeClass("open")}else{}}}}}});$("#ProviderSearch").submit(function(){paramseters="";theForm=document.forms.ProviderSearch;specZipInput=theForm.elements.searchSpecialtyZip;if((/^ENTER ZIP CODE/).test(specZipInput.value)){specZipInput.value=""}searchPediatricianZipInput=theForm.elements.searchPediatricianZip;if((/^ENTER ZIP CODE/).test(searchPediatricianZipInput.value)){searchPediatricianZipInput.value=""}lnameInput=theForm.elements.lastName;if((/^ENTER DOCTOR'S LAST NAME/).test(lnameInput.value)){lnameInput.value=""}distinaceInput=theForm.elements.pediatricianDistance;specialtyDistinaceInput=theForm.elements.specialtyDistance;var j=[];$("#fadspecchecks :checked").each(function(){j.push($(this).val())});var k="Specialties="+j.join(",");var i=(lnameInput.value!="")?"FreeText:Doctors name="+lnameInput.value:"";var l=(distinaceInput.value!="")?"Distance="+distinaceInput.value:"";var h=(specialtyDistinaceInput.value!="")?"Distance="+specialtyDistinaceInput.value:"";var g=(searchPediatricianZipInput.value!="")?"Address="+searchPediatricianZipInput.value:"";var d=(specZipInput.value!="")?"Address="+specZipInput.value:"";var b=$("#pediatricianSelection").prop("checked");var c=$("#specialtySelection").prop("checked");var f=$("#doctorSelection").prop("checked");if(f){if(i!=""){if(paramseters!=""){paramseters=paramseters+"&"+i}else{paramseters=i}}document.location.href="http://findaprovider.nemours.org?"+paramseters+"&latlng="+latitude+","+longitude+"&sortDirection=asc"}if(b){if(l!=""){if(paramseters!=""){paramseters=paramseters+"&"+l}else{paramseters=l}}if(g!=""){if(paramseters!=""){paramseters=paramseters+"&"+g}else{paramseters=g}}paramseters=paramseters+"&CustomField=20%3bYes"}if(c){if(k!=""){if(paramseters!=""){paramseters=paramseters+"&"+k}else{paramseters=k}}if(d!=""){if(paramseters!=""){paramseters=paramseters+"&"+d}else{paramseters=d}}if(d!=""&&h!=""){if(paramseters!=""){paramseters=paramseters+"&"+h}else{paramseters=h}}paramseters=paramseters+"&CustomField=21%3bYes"}if(c){getLatLong(specZipInput.value)}if(b){getLatLong(searchPediatricianZipInput.value)}if(!f&&!c&&!b){document.location.href="http://findaprovider.nemours.org"}return false});if($("#pediatricianSelection")){$("#pediatricianSelection").prop("checked",false)}if($("#specialtySelection")){$("#specialtySelection").prop("checked",false)}if($("#doctorSelection")){$("#doctorSelection").prop("checked",false)}if($("#searchSpecialtyZip")){$("#searchSpecialtyZip").val("ENTER ZIP CODE")}if($("#searchSpecialtyZip")){$("#lastName").val("ENTER DOCTOR'S LAST NAME")}if($("#searchSpecialtyZip")){$("#pediatricianDistance").val("25")}if($("#searchSpecialtyZip")){$("#searchPediatricianZip").val("ENTER ZIP CODE")}var a=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.whitespace,queryTokenizer:Bloodhound.tokenizers.whitespace,prefetch:"/etc/designs/nemoursv2/www/data/onsitethesaurus.json"});$("#document").click(function(b){if($("span.hamburger").hasClass("active")&&(b.target.parentNode.className.indexOf("menu-mobile-menu")==-1&&b.target.parentNode.className.indexOf("site-nav")==-1&&b.target.parentNode.className.indexOf("btn-group")&&b.target.parentNode.className.indexOf("nav-btn-group")==-1&&b.target.parentNode.className.indexOf("dropdown-toggle")==-1&&b.target.parentNode.className.indexOf("dropdown-menu")&&b.target.parentNode.className.indexOf("dropdown-submenu")==-1)&&b.target.parentNode.parentNode.className.indexOf("dropdown-submenu")==-1){$("#mobile-menu-btn").click();$("div.menu-mobile-menu").removeClass("showmenu");$("#mobile-menu-btn").removeClass("menuon");$("li.dropdown-submenu").removeClass("showsubmenu");$("ul.dropdown-menu").removeClass("showsubmenu");$(".nav-btn-group").each(function(){$(this).removeClass("open")});$("ul.dropdown-menu").removeClass("showmenu")}if($("#jump-to.pushmenu.pushmenu-left").hasClass("pushmenu-open")&&(b.target.parentNode.className.indexOf("pushmenu")==-1&&b.target.className.indexOf("pushmenu")==-1)){$("#nav_list").click()}});$("#mobile-menu-btn").click(function(b){if($("#jump-to.pushmenu.pushmenu-left").hasClass("pushmenu-open")){$("#nav_list").click()}$("span.hamburger").toggleClass("active");if($("span.hamburger").hasClass("active")&&$(document).width()<=801){$("html,body").animate({scrollTop:0},800)}if($("div.menu-mobile-menu").hasClass("showmenu")){$("div.menu-mobile-menu").removeClass("showmenu");$(this).removeClass("menuon")}else{$("div.menu-mobile-menu").removeClass("showmenu");$("div.menu-mobile-menu").addClass("showmenu");$(this).addClass("menuon")}b.preventDefault();b.stopPropagation()});$("li.dropdown-submenu").each(function(b){$(this).click(function(d){var c=$(this).hasClass("showsubmenu");$("li.dropdown-submenu").removeClass("showsubmenu");$("ul.dropdown-menu").removeClass("showsubmenu");if(!c){$(this).addClass("showsubmenu");$(this).find("ul.dropdown-menu").addClass("showsubmenu")}b.preventDefault();b.stopPropagation()})});$("a.btn.dropdown-toggle").each(function(b){$(this).click(function(){var c=$(this).parent().hasClass("open");$(".nav-btn-group").each(function(){$(this).removeClass("open")});if(c){$(this).parent().removeClass("open")}else{$(this).parent().addClass("open")}if($(this).next().hasClass("showmenu")){$(this).next().removeClass("showmenu")}else{$("ul.dropdown-menu.showmenu").each(function(){$(this).removeClass("showmenu")});$(this).next().addClass("showmenu")}b.preventDefault();b.stopPropagation()})});$(".tag-aggregator-az .panel-heading").click(function(){$(this).find(".accordion-toggle").click()});$(".accordion-toggle").click(function(c){c.stopPropagation();var b=$(this);var d=$(this).hasClass("collapsed");$(".accordion-toggle").each(function(){if(b[0]!=$(this)&&!$(this).hasClass("collapsed")){$(this).addClass("collapsed");$(this).parent().next(".panel-collapse").removeClass("in")}});if(d){$(this).removeClass("collapsed");$(this).parent().next(".panel-collapse").addClass("in")}else{$(this).addClass("collapsed");$(this).parent().next(".panel-collapse").removeClass("in")}});$("#patientFamilyResourceFooter").click(function(){$(this).toggleClass("active");$(this).next().toggleClass("active")});$("#aboutNemoursFooter").click(function(){$(this).toggleClass("active");$(this).next().toggleClass("active")});$("#informationForFooter").click(function(){$(this).toggleClass("active");$(this).next().toggleClass("active")});$("#findDoc a").each(function(){$(this).click(function(){$("#findDoc").toggleClass("active")})});$("#pediatricianSelection").each(function(){$(this).click(function(){$("#specialtySelection").prop("checked",false);$("#doctorSelection").prop("checked",false);$(".form-row").each(function(){if(!$(this).hasClass("hidden")){$(this).addClass("hidden")}});if($(this).prop("checked")){$(".form-row.pediatrician").removeClass("hidden")}})});$("#specialtySelection").each(function(){$(this).click(function(){$("#pediatricianSelection").prop("checked",false);$("#doctorSelection").prop("checked",false);$(".form-row").each(function(){if(!$(this).hasClass("hidden")){$(this).addClass("hidden")}});if($(this).prop("checked")){$(".form-row.specialty").removeClass("hidden")}})});$("#doctorSelection").each(function(){$(this).click(function(){$("#specialtySelection").prop("checked",false);$("#pediatricianSelection").prop("checked",false);$(".form-row").each(function(){if(!$(this).hasClass("hidden")){$(this).addClass("hidden")}});if($(this).prop("checked")){$(".form-row.doctor").removeClass("hidden")}})});$("#lastName").autocomplete({serviceUrl:"https://"+location.host+"/content/nemours/wwwv2/welcome/jcr:content/center-column-parsys/hp_callout/finddoc_search_input.drlookup",paramName:"lookup",dataType:"json"});$("#specialtySelection").click(function(){if($("#specialtyfieldset").hasClass("hidden")==false&&$("#fadspecchecks").children().length==0){$.ajax({url:"https://"+location.host+"/content/nemours/wwwv2/welcome/jcr:content/center-column-parsys/hp_callout/finddoc_search_input.speclisting",dataType:"json"}).done(function(c){var b=$("#fadspecchecks");$(b).empty();$(b).removeClass("fadlessspecs");$(b).addClass("fadmorespecs");$("#fadmorespecslink").remove();$("#fadlessspecslink").remove();$.each(c.fadspecs,function(f,g){$(b).append($("<div />",{"class":(f<5?"fadspeccbdiv":"fadspeccbdiv hidden")}).append($("<label />",{"class":"fadspeclabel"}).append($("<input />",{type:"checkbox","class":"fadspeccb",value:g.datum2})).append(g.datum1)))});var d=$("<a />",{id:"fadmorespecslink",text:"Show More Specialties..."});d.bind("click",showMoreSpecs);$(b).after($(d))})}});if($(".slider")){$(".slider").slick({dots:false,slidesToShow:2,speed:500,slidesToScroll:1,infinite:true,variableWidth:true,responsive:[{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,}}]})}$("#back-top").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>100&&$(document).width()<=768){$("#back-top").fadeIn()}else{$("#back-top").fadeOut()}});$("#back-top").click(function(){$("body,html").animate({scrollTop:0},800);return false})});$("#nav_list").click(function(b){if($("span.hamburger").hasClass("active")){$("#mobile-menu-btn").click()}$(".pushmenu-left").toggleClass("pushmenu-open");$(".mask").toggleClass("active");b.preventDefault();b.stopPropagation()});$(".contact-us-tab").click(function(b){if($("span.hamburger").hasClass("active")){$("#mobile-menu-btn").click()}$(".pushmenu-left").toggleClass("pushmenu-open");$(".mask").toggleClass("active");$("body").toggleClass("disable-scroll");b.preventDefault();b.stopPropagation()});$("#close-menu").click(function(b){$(".pushmenu-left").toggleClass("pushmenu-open");$(".mask").toggleClass("active");$("body").removeClass("disable-scroll");b.preventDefault();b.stopPropagation()});$("body").click(function(){if($(".mask").hasClass("active")){$(".pushmenu-left").toggleClass("pushmenu-open");$(".mask").toggleClass("active");$("body").removeClass("disable-scroll");e.preventDefault();e.stopPropagation()}});$("#contact-us-slideout").click(function(b){b.stopPropagation()});$("#jump-to a").each(function(b){$(this).click(function(){$("#close-menu").click()})});$("#prefetch .typeahead").typeahead(null,{name:"suggs",source:a}).on("typeahead:selected",function(b){b.target.form.submit()});$("#alphabetlist a[href^='#']").on("click",function(c){if(c.currentTarget.hash!="#alphaviewAll"){$("#alphabetlist ul").children("li").removeClass("active");$(".tab-content .tab-pane").removeClass("active");if($(this.hash).offset()===undefined){}}else{$("#alphabetlist ul").children("li").addClass("active");$(".tab-content .tab-pane").addClass("active")}var b=(c.currentTarget.hash).substr(6);if(b=="viewAll"){$("#selectedOption h6").text("All Results")}else{$("#selectedOption h6").text(b)}});$("#carelocselect").change(function(){var g=$(this);var f=$("#caretypeselect");var d=$("#inslist1");var b=$("#inslist2");if(g.val()=="selectone"){f.empty();f.append('<option value="selectone">Select One</option>');$(".accepttext").remove();d.empty();b.empty();return}var c="";if(document.documentURI){c=document.documentURI.substring(0,document.documentURI.lastIndexOf("."))}else{c=location.href.substring(0,location.href.lastIndexOf("."))}$.ajax({url:c+"/jcr:content/center-column-top-iparsys-bottom/insurance_listing.getcare",data:{state:g.val()},dataType:"json"}).done(function(h){f.empty();f.append('<option value="selectone">Select One</option>');if(h.entityDTO.totalCount==1){if(h.entityDTO.resultList.careType=="SPEC"){f.append('<option value="'+h.entityDTO.resultList.careType+'">Specialty Care</option>')}else{if(h.entityDTO.resultList.careType=="PCP"){f.append('<option value="'+h.entityDTO.resultList.careType+'">Primary Care</option>')}else{if(h.entityDTO.resultList.careType=="PCP & SPEC"){}else{if(h.entityDTO.resultList.careType=="UC"){f.append('<option value="'+h.entityDTO.resultList.careType+'">Urgent Care</option>')}else{f.append('<option value="'+h.entityDTO.resultList.careType+'">'+result[1]+"</option>")}}}}}else{$.each(h.entityDTO.resultList,function(j,i){if(i.careType=="SPEC"){if(0==$('#caretypeselect option[value="'+i.careType+'"]').length){f.append('<option value="'+i.careType+'">Specialty Care</option>')}}else{if(i.careType=="PCP"){if(0==$('#caretypeselect option[value="'+i.careType+'"]').length){f.append('<option value="'+i.careType+'">Primary Care</option>')}}else{if(i.careType=="PCP & SPEC"){}else{if(i.careType=="UC"){if(0==$('#caretypeselect option[value="'+i.careType+'"]').length){f.append('<option value="'+i.careType+'">Urgent Care</option>')}}else{if(0==$('#caretypeselect option[value="'+i.careType+'"]').length){f.append('<option value="'+i.careType+'">'+i.careType+"</option>")}}}}}})}if($("#carelocselect").val()=="florida"||$("#carelocselect").val()=="delaware"){f.append('<option value="HER">Hospital/ER Care</option>')}})});$("#caretypeselect").change(function(){var h=$("#carelocselect");var g=$(this);var d=$("#inslist1");var b=$("#inslist2");if(g.val()=="selectone"){$(".accepttext").remove();d.empty();b.empty();return}var c="";if(document.documentURI){c=document.documentURI.substring(0,document.documentURI.lastIndexOf("."))}else{c=location.href.substring(0,location.href.lastIndexOf("."))}if(g.val()=="SPEC"||g.val()=="PCP"||g.val()=="HER"){var f=g.val();if(f=="HER"){f="SPEC"}$.ajax({url:c+"/jcr:content/center-column-top-iparsys-bottom/insurance_listing.getnetworks",data:{state:h.val(),careType:f},dataType:"json"}).done(function(j){var i=[];if(j.entityDTO.totalCount==1){i.push({networkName:j.entityDTO.resultList.networkName.trim(),networkURL:((typeof j.entityDTO.resultList.networkURL!="undefined")?j.entityDTO.resultList.networkURL.trim():"")})}else{$.each(j.entityDTO.resultList,function(k,l){var m={networkName:l.networkName.trim(),networkURL:((typeof l.networkURL!="undefined")?l.networkURL.trim():"")};if(!isNetworkInResults(m,i)){i.push(m)}})}$.ajax({url:c+"/jcr:content/center-column-top-iparsys-bottom/insurance_listing.getnetworks",data:{state:h.val(),careType:"PCP & SPEC"},dataType:"json"}).done(function(k){if(k.entityDTO.totalCount==1){var m={networkName:k.entityDTO.resultList.networkName.trim(),networkURL:((typeof k.entityDTO.resultList.networkURL!="undefined")?k.entityDTO.resultList.networkURL.trim():"")};if(!isNetworkInResults(m,i)){i.push(m)}}else{$.each(k.entityDTO.resultList,function(n,o){var p={networkName:o.networkName.trim(),networkURL:((typeof o.networkURL!="undefined")?o.networkURL.trim():"")};if(!isNetworkInResults(p,i)){i.push(p)}})}i=bubbleSortInsurances(i);$(".accepttext").remove();d.empty();b.empty();$('<p class="accepttext">Health insurance we accept in '+$("#carelocselect option:selected").text()+" for "+$("#caretypeselect option:selected").text()+".</p>").insertBefore(d);var l=[];if(i.length>1){l=i.splice(0,Math.ceil(i.length/2))}$.each(l,function(n,o){if(h.val()=="florida"){d.append('<p class="networkname-l"><a href="'+o.networkURL+'" target="_blank">'+o.networkName+"</a></p>")}else{d.append('<p class="networkname-l">'+o.networkName+"</p>")}});$.each(i,function(n,o){if(h.val()=="florida"){b.append('<p class="networkname-r"><a href="'+o.networkURL+'" target="_blank">'+o.networkName+"</a></p>")}else{b.append('<p class="networkname-r">'+o.networkName+"</p>")}})})})}else{$.ajax({url:c+"/jcr:content/center-column-top-iparsys-bottom/insurance_listing.getnetworks",data:{state:h.val(),careType:g.val()},dataType:"json"}).done(function(j){$(".accepttext").remove();d.empty();b.empty();$('<p class="accepttext">Health insurance we accept in '+$("#carelocselect option:selected").text()+" for "+$("#caretypeselect option:selected").text()+".</p>").insertBefore(d);if(j.entityDTO.totalCount==1){if(h.val()=="florida"){d.append('<p class="networkname-l"><a href="'+j.entityDTO.resultList.networkURL+'" target="_blank">'+j.entityDTO.resultList.networkName+"</a></p>")}else{d.append('<p class="networkname-l">'+j.entityDTO.resultList.networkName+"</p>")}}else{var i=[];$.each(j.entityDTO.resultList,function(l,m){var n={networkName:m.networkName.trim(),networkURL:((typeof m.networkURL!="undefined")?m.networkURL.trim():"")};if(!isNetworkInResults(n,i)){i.push(n)}});i=bubbleSortInsurances(i);var k=[];if(i.length>1){k=i.splice(0,Math.ceil(i.length/2))}$.each(k,function(l,m){if(h.val()=="florida"){d.append('<p class="networkname-l"><a href="'+m.networkURL+'" target="_blank">'+m.networkName+"</a></p>")}else{d.append('<p class="networkname-l">'+m.networkName+"</p>")}});$.each(i,function(l,m){if(h.val()=="florida"){b.append('<p class="networkname-r"><a href="'+m.networkURL+'" target="_blank">'+m.networkName+"</a></p>")}else{b.append('<p class="networkname-r">'+m.networkName+"</p>")}})}})}});if($("div.onlinedocvisit").length){if(navigator.userAgent.toLowerCase().indexOf("android")>-1||navigator.userAgent.toLowerCase().indexOf("linux")>-1){$("div.onlinedocvisit").html('<a href="https://play.google.com/store/apps/details?id=com.nemours.android.careconnect&hl=en"><img src="/etc/designs/nemoursv2/www/image/googleplay.svg"></a>')}else{if(navigator.userAgent.toLowerCase().indexOf("iphone")>-1||navigator.userAgent.toLowerCase().indexOf("ipad")>-1){$("div.onlinedocvisit").html('<a href="https://itunes.apple.com/us/app/nemours-careconnect/id1049916706?mt=8"><img src="/etc/designs/nemoursv2/www/image/appstore.svg"></a>')}else{$("div.onlinedocvisit").wrap('<div class="media button white middle"></div>');$("div.onlinedocvisit").html("<h4>Get Started</h4>");$(".button.white, .button.blue").css({"padding-top":"15px","padding-bottom":"15px"})}}}});function swap(d,c,b){var a=d[c];d[c]=d[b];d[b]=a}function bubbleSortInsurances(c){var b;do{b=false;for(var a=0;a<c.length;a++){if(c[a]&&c[a+1]&&c[a].networkName>c[a+1].networkName){swap(c,a,a+1);b=true}}}while(b);return c}function isNetworkInResults(a,b){var c=false;$.each(b,function(d,f){if(a.networkName==f.networkName){if($("#carelocselect").val()=="florida"){if(!a.networkURL||a.networkURL==f.networkURL){c=true;return false}}else{c=true;return false}}});return c};