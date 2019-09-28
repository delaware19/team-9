/***************************************
* @preserve
* ForeSee Web SDK: Trigger
* Built March 29, 18 15:53:29
* Code version: 19.6.4
* Template version: 19.6.4
***************************************/
_fsDefine(["require","fs",_fsNormalizeUrl("$fs.utils.js"),"triggerconfig"],function(e,t,i,config){var n={loadedEmitter:new i.FSEvent,initializedEmitter:new i.FSEvent,inviteShownEmitter:new i.FSEvent,inviteAcceptedEmitter:new i.FSEvent,inviteAbandonedEmitter:new i.FSEvent,inviteDeclinedEmitter:new i.FSEvent,trackerShownEmitter:new i.FSEvent,customInvitationRequested:new i.FSEvent,CPPS:null,_triggerResetLock:null,state:{didInvite:!1},inviteSetup:null},r={INVITE_SHOWN:"fs_inviteShown",INVITE_ACCEPTED:"fs_inviteAccepted",INVITE_DECLINED:"fs_inviteDeclined",INVITE_ABANDONED:"fs_inviteAbandoned",LINKS_CANCEL:"fs_linksCancel",TRACKER_SHOWN:"fs_trackerShown",TRACKER_CLICKED:"fs_trackerClicked",QUALIFIER_ACCEPTED:"fs_qualifierAccepted",QUALIFIER_DECLINED:"fs_qualifierDeclined",QUALIFIER_SHOWN:"fs_qualifierShown",REMINDER_SHOWN:"fs_reminderShown",REMINDER_ACCEPTED:"fs_reminderAccepted"};if(config&&config.surveydefs)for(var s=0;s<config.surveydefs.length;s++)t.isString(config.surveydefs[s])&&(config.surveydefs[s]=i.compile(i.b64DecodeUnicode(config.surveydefs[s])));var o=window,a=new i.Cookie({path:"/",secure:!1,encode:!0}),c=i.Compress;if(t.fsCmd("fstest"))return void e([t.makeURI("$fs.svadmin.js")],function(e){});if(t.fsCmd("fsoptout"))return void e([t.makeURI("$fs.optout.js")],function(e){});var f=function(e,i,n,r,s,a){var c={width:700,height:350,left:50,top:50,resizable:"no",scrollbar:"1",scrollbars:"1",toolbar:"no",menubar:"no",location:"0",directories:"no",status:"no"},f=a?u(n.width||c.width,n.height||c.height):{},l=t.ext(c,n,f),d="";for(var g in l)d+=g+"="+l[g]+",";var p=this._win=o.open(e,i,d);if(p&&s)if(p.blur(),p.opener.window.focus(),o.focus(),"Firefox"==r.browser.name){var h=o.open("about:blank");h.focus(),h.close()}else r.isIE&&setTimeout(function(){p.blur(),p.opener.window.focus(),o.focus()},1e3);return p},u=function(e,t){var i=void 0!==window.screenLeft?window.screenLeft:screen.left,n=void 0!==window.screenTop?window.screenTop:screen.top,r=window.innerWidth;window.innerWidth||(r=document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width);var s=window.innerHeight;return window.innerHeight||(s=document.documentElement.clientHeight?document.documentElement.clientHeight:screen.Height),{left:r/2-e/2+i,top:s/2-t/2+n}},l=config.config.surveyAsyncCurl,d={SERVICE_TYPES:{mobileOnExitInitialize:{host:l,path:"/e",url:"/initialize"},mobileOnExitHeartbeat:{host:l,path:"/e",url:"/recordHeartbeat"}}};d.ping=function(e,t,n,r){var s=new i.ImageTransport,o="https://"+e.host+e.path+(e.url||"");s.send({url:o,success:n||function(){},failure:r||function(){},data:t})};var g=function(e,t,i,r,s,o,a){return n.inviteSetup?a.call(n.inviteSetup):n.inviteSetup=new p(e,t,i,r,s,o,a),n.inviteSetup},p=function(r,s,o,a,c,f,u){if(this.trig=r,this.browser=s,this.stg=o,this.cpps=a,this.displayoverride=c,this.jrny=f,this.resourcesready=new i.FSEvent,t.isDefined(this.trig.surveydef.inviteExclude)&&t.isDefined(this.trig.crit)&&this.trig.crit.runAllTests(this.trig.surveydef.inviteExclude,this.browser,!1,!0))return!1;var l=this;fsReady(function(){var i;if(r.invite&&r.invite.dispose(),s.isMobile&&r.cfg.config.pagesInviteAvailable)if(null===(i=o.get("pia")))o.set("pia",--r.cfg.config.pagesInviteAvailable);else if(i>0)o.set("pia",--i);else if(0===i)return;e([t.makeURI("$fs.invite.js")],function(e){var t=l.invite=r.invite=new e(config,r.surveydef,s,c,a,n);o.set("dn",t.display.displayname),a.set("dn",t.display.displayname),u&&u.call(l)}.bind(this))})},h=function(e,t,i){var n=new T(i,config,e.surveydef,e.cpps,e.stg.get("rid"),e.locale);e.stg.get("mhbi")?n.beginHeartbeat():n.init(t,function(){n.beginHeartbeat()})};p.prototype.initialize=function(){var e=this.trig,s=(this.browser,this.stg),o=this.cpps,a=(this.displayoverride,this.invite),c=this.jrny;this.didInitialize||(this.didInitialize=!0,c.addEventsDefault("properties",{fs_defName:[e.surveydef.name],fs_section:[e.surveydef.section],fs_displayName:[a.display.displayname],fs_pvInvited:[e.pageViewCount],fs_language:[a.locale],fs_samplePercentage:[e.surveydef.criteria.sp.reg],fs_loyaltyFactor:[e.surveydef.criteria.lf],fs_environment:[t.isProduction?"production":"staging"],fs_deployType:[t.isSelfHosted?"on-prem":"cloud"],fs_inviteType:["intercept"]}),a.loadResources(this.resourcesready),a.declined.subscribe(function(i){var a=t.isDefined(config.active_surveydef)&&t.isDefined(config.active_surveydef.repeatDays)?config.active_surveydef.repeatDays:config.config.repeatDays;s.set("i","d"),s.setMaxKeyExpiration(24*a.decline*60*60*1e3),c.addEventObj({name:r.INVITE_DECLINED,properties:{action:[i]}}),n.inviteDeclinedEmitter.fire(e.surveydef,s,config,o),e.surveydef.cxRecord&&n.rec&&"y"!=s.get("fbr")&&(n.rec.cancelRecord(),e.recordController=n.rec=null),n.state.inviteSituation="DECLINED"}),a.abandoned.subscribe(function(){c.addEventString(r.INVITE_ABANDONED),s.set("i","a"),n.state.inviteSituation="ABANDONED",n.inviteAbandonedEmitter.fire(e.surveydef,s,config,o),s.set("rw",i.now()+config.config.reinviteDelayAfterInviteAbandon)}),a.accepted.subscribe(function(f,u){var l=t.isDefined(config.active_surveydef)&&t.isDefined(config.active_surveydef.repeatDays)?config.active_surveydef.repeatDays:config.config.repeatDays;switch(s.setMaxKeyExpiration(24*l.accept*60*60*1e3),n.inviteAcceptedEmitter.fire(e.surveydef,s,config,o),e.surveydef.cxRecord&&n.rec&&n.rec.recorder&&n.rec.beginTransmitting(),c.addEventString(r.INVITE_ACCEPTED),s.set("i","x"),n.state.inviteSituation="ACCEPTED",s.set("ixw",i.now()),f){case"TRACKER":e.popTracker(a);break;case"INSESSION":e.popSurvey();break;case"SMS":case"EMAIL":case"SMSEMAIL":h(e,u,f),e.stg.set("mhbi",{ui:u,it:f})}}))},p.prototype.present=function(){var e=(this.invite,this.stg),s=this.jrny,o=this.trig,a=this.cpps;n.state.didInvite||(n.state.didInvite=!0,this.resourcesready.subscribe(function(){setTimeout(function(){this.invite.present(),"p"!==e.get("i")&&s.addEvent(r.INVITE_SHOWN),e.set("i","p"),n.state.inviteSituation="PRESENTED",n.inviteShownEmitter.fire(o.surveydef,e,config,a)}.bind(this),Math.max(0,config.config.inviteDelay-(i.now()-t.startTS)))}.bind(this),!0,!0))};var v=function(e,r,s,a,c,f,u){n.tracker&&(n.tracker.dispose(),n.tracker=null),n.tracker=this,t.ext(this,{template:e,def:r,cfg:s,disp:f,_fcBindings:[]}),this.cpps=c,this.br=u,this.stg=a,this.forceLong=!1,e&&n.trackerShownEmitter.fire(r,a,s,c);var l=t.proxy(function(e){this.stg.set("page_hb",i.now(),this.forceLong?s.config.trackerHeartbeatLongTimeout:s.config.trackerHeartbeatTimeout,!e)},this);this._heartbeat=setInterval(l,Math.round(.5*s.config.trackerHeartbeatTimeout)),l(!0),i.Bind(o,"unload",t.proxy(function(){this.forceLong=!0,this.stg.set("page_hb",i.now(),s.config.trackerHeartbeatLongTimeout,!0)},this));var d=t.enc;this._url=t.makeURI("$fs.tracker.html?uid="+d(a.uid||"")+"&sitekey="+d(t.config.siteKey)+"&domain="+d(i.getRootDomain())+"&gw="+d(t.makeURI("trigger/__gwtest__"))+"&brain_url="+d(t.config.brainUrl)+"&fsrlocale="+d(c.get("locale")||"en")+"&_svu_="+d(t.config.surveyUrl)+"&_cv_="+d(t.config.codeVer)+"&_issh_="+d(t.isSelfHosted)+"&_vt_="+d(t.tagVersion)+"&_au_="+d(t.config.analyticsUrl)+"&_pa_="+d(t.assetLocation)),this.cpps.onSet.subscribe(t.proxy(function(e,t){var i={};i[e]=t,this.stg.set("ckcpps",i,2e5,!1)},this)),this.stg.set("ckcpps",this.cpps.all(),2e5,!1),this._sendDefinition()};v.prototype._sendDefinition=function(){var e={method:"init",cfg:t.ext({},this.cfg,{globalConfig:t.config})};this.disp&&(e.display=this.disp),this.template&&(e.template=this.template),e.hb_i=this.cfg.config.trackerHeartbeatTimeout,e.cpps=this.cpps.all(),this.stg.set("page_hb",i.now(),this.cfg.config.trackerHeartbeatTimeout,!1),this.stg.set("trackerinfo",e,6e4,!1),this.stg.set("ckcpps",this.cpps.all(),2e5,!1)},v.prototype.show=function(e){this.wref=f(this._url,"fsTracker",{width:700,height:450},e,!0,this.cfg.config.centerTrackerPopup)},v.prototype.applyExisting=function(e,t){this.wref=t,t.location=this._url},v.prototype.dispose=function(){for(var e=0;e<this._fcBindings.length;e++)this._fcBindings[e].unsubscribe();this.stg=null,clearInterval(this._heartbeat)};var y=function(config,e,i,n){this.cfg=config,this.globalConfig=config.globalConfig||t.config,this.cpps=e,this.def=i,this.locale=e.get("locale")||"en",this.qual=n},m=function(e,t){var i,n,r=t.name||"";r+="-"+(t.section||""),r+="-"+(t.site||"");for(var s=0;s<e.defs.length;s++)if(n=e.defs[s],i=n.name||"",i+="-"+(n.section||""),(i+="-"+(n.site||""))===r)return{legacyChosen:n.modernPercentage<Math.floor(100*Math.random()),modernPercentage:n.modernPercentage};return{legacyChosen:!0,modernPercentage:0}};y.prototype.getUrl=function(){var e,n,r=this.def,s=i.now()+"_"+Math.round(1e13*Math.random()),o=r.name+"-"+(t.isDefined(r.site)?r.site+"-":"")+(t.isDefined(r.section)?this.def.section+"-":"")+this.locale,a=this.cfg.config.abSurveyType,c=a&&a.shouldTest&&this.globalConfig.modernSurveyUrl;this.qual&&(o+="-"+this.qual.qualifiesValue);var f={sid:o,cid:this.cfg.config.id,pattern:this.cpps.get(r.pattern)||r.pattern,a:s,b:i.hash(s),c:864e5};this.cfg.config.onlyModernSurvey?e=this.globalConfig.modernSurveyUrl:c?(n=m(a,this.cfg.active_surveydef),f.mp=n.modernPercentage,e=n.legacyChosen?this.globalConfig.surveyUrl:this.globalConfig.modernSurveyUrl):e=this.globalConfig.surveyUrl,e+="?";for(var u in f)e+=t.enc(u)+"="+t.enc(f[u])+"&";return e+=this.cpps.toQueryString()};var b=function(e,config){this.stg=e,this.cfg=config};b.prototype.calcReplayPoolStatus=function(e){var n,r,s,a=this.cfg.config,c=a.replay_pools,f=o.location.toString();if(c&&0!==c.length&&!0!==this.pooloverride){if(r=this.stg.get("pl"),!t.isDefined(r))for(n=0;n<c.length;n++)i.testAgainstSearch(c[n].path,f)&&(r=100*Math.random()<c[n].sp?1:0,this.stg.set("pl",r,144e5));if(s=a.replay_repools,0===r&&s&&s.length>0)for(n=0;n<s.length;n++)i.testAgainstSearch(s[n].path,f)&&(r=100*Math.random()<s[n].sp?1:0,this.stg.set("pl",r,144e5));e(!!r)}else e(!0)},b.prototype.optoutCheck=function(e,i){this.stg.ready.subscribe(t.proxy(function(){!0===this.stg.get("optout")?i():e()},this),!0,!0)},b.prototype.browserCheck=function(e,t){return!(!e.isMobile&&t.config.browser_cutoff[e.browser.name]&&e.browser.actualVersion<t.config.browser_cutoff[e.browser.name])},b.prototype.featureCheck=function(e,t){return!(t.config.persistence==i.storageTypes.DS&&!e.supportsLocalStorage)},b.prototype.platformCheck=function(e,t){return!(t.config.platform_cutoff[e.os.name]&&e.os.version<t.config.platform_cutoff[e.os.name])},b.prototype.checkDeviceBlacklist=function(e,i){for(var n=0;n<i.config.device_blacklist.length;n++)if(t.toLowerCase(e.agent).indexOf(t.toLowerCase(i.config.device_blacklist[n]))>-1)return!1;return!0},b.prototype._match=function(e,t,i){var n=e.include,r=e[i||"globalExclude"];if(e.criteria){if(!e.criteria.supportsSmartPhones&&!t.isTablet&&t.isMobile)return!1;if(!e.criteria.supportsTablets&&t.isTablet)return!1;if(!e.criteria.supportsDesktop&&!t.isMobile)return!1}if(r){if(this.runAllTests(r,t,!1,!0))return!1}return!n||this.runAllTests(n,t,!1,!0)},b.prototype.runAllTests=function(e,n,r,s){var a,c=new i.Cookie({}),f=o.location.href.toString(),u=document.referrer.toString(),l={urls:f,referrers:u,userAgents:o.navigator.userAgent};for(var d in e){var g=e[d];if(g.length>0){if(a=!1,l[d])a=function(e,t){Array.isArray(t)||(t=[t]);for(var n=0,r=t.length;n<r;n++)if("string"==typeof t[n]&&(t[n]=t[n].replace(/-_DS_-/gi,"$")),i.testAgainstSearch(t[n],e))return!0;return!1}(l[d],g);else if("browsers"==d)for(var p=n.browser.name,h=n.browser.actualVersion,v=0;v<g.length;v++)t.toLowerCase(p).indexOf(t.toLowerCase(g[v].name))>-1&&(g[v].comparison?"lt"==g[v].comparison&&h<g[v].version?a=!0:"eq"==g[v].comparison&&h==g[v].version?a=!0:"gt"==g[v].comparison&&h>g[v].version&&(a=!0):a=!0);else if("cookies"==d)for(var y=0;y<g.length;y++){var m=g[y],b=c.get(m.name);t.isDefined(m.value)&&b==m.value?a=!0:!t.isDefined(m.value)&&b&&(a=!0)}else if("variables"==d)for(var w=0;w<g.length;w++){var S=[].constructor.constructor;delete[].constructor.constructor;var _,E=g[w],I=new[].constructor.constructor("var v1 = '';try { v1 = "+E.name+";}catch(err) {}return v1;"),k=I.call(o);[].constructor.constructor=S,k||(k="boolean"!=typeof k&&""),_=t.isDefined(E.value),_&&k===E.value?a=!0:_&&i.testAgainstSearch(E.value,k)?a=!0:!_&&k&&(a=!0)}if(!a&&r)return!0;if(a&&s)return!0}}return!1};var w=function(e){this.cfg=e};w.prototype._bindToLink=function(e,n){for(var r=document.querySelectorAll(e.selector),s=0;s<r.length;s++){var o,a=r[s],c=!0;if(e.attribute&&(o=a.getAttribute(e.attribute),c=!1,o&&(c=!0,e.patterns&&e.patterns.length>0))){c=!1;for(var f=0;f<e.patterns.length;f++)if(t.toLowerCase(o).indexOf(t.toLowerCase(e.patterns[f]))>-1){c=!0;break}}c&&i.Bind(a,"trigger:click",function(e,t,n){return function(r){t.preventDefault&&i.preventDefault(r),n.call(e,t)}}(this,e,n))}},w.prototype.performBindings=function(e){if(e&&this.cfg){var t,i=this.cfg;if(i.cancel&&i.cancel.length>0){var n=function(){e.cancelTracker(),e.jrny.addEventString(r.LINKS_CANCEL)};for(t=0;t<i.cancel.length;t++)this._bindToLink(i.cancel[t],n)}if(i.survey&&i.survey.length>0){var s=function(){e.popSurvey()};for(t=0;t<i.survey.length;t++)this._bindToLink(i.survey[t],s)}if(!e.browser.isMobile&&i.tracker&&i.tracker.length>0){var o=function(){e.popTracker()};for(t=0;t<i.tracker.length;t++)this._bindToLink(i.tracker[t],o)}}};var S,_=new i.FSEvent;t.API.expose("CPPS",{set:function(){_.subscribe(function(e){return function(){n.CPPS.set.apply(n.CPPS,e)}}(arguments),!0,!0)},get:function(e,t){t=t||function(){},_.subscribe(function(e){return function(){t(n.CPPS.get.apply(n.CPPS,e[0]))}}([arguments]),!0,!0)},all:function(e){e=e||function(){},_.subscribe(function(t){return function(){e(n.CPPS.all.apply(n.CPPS))}}(),!0,!0)}}),t.API.expose("clearState",function(){_.subscribe(function(){n.tracker&&n.tracker._heartbeat&&clearInterval(n.tracker._heartbeat),n.stg.reset(),t.supportsDomStorage&&sessionStorage.removeItem("acsFeedbackSubmitted"),n.rec&&n.rec.recorder&&n.rec.recorder.clearState()},!0,!0)}),t.API.expose("dispose",function(){_.subscribe(function(){n.trig&&n.trig.dispose()},!0,!0)}),t.API.expose("getState",function(e){_.subscribe(function(){e(n.state)},!0,!0)}),t.API.expose("getConfig",function(){return t.ext({},config,{global:t.config})}),t.API.expose("getConfigFormatted",function(){if(console&&console.info&&(console.info("************************** Trigger Configuration **************************"),console.info("Config: ",config.config),config.surveydefs&&config.surveydefs.length)){console.info("************************** Surveydefs Configuration **************************");for(var e=0;e<config.surveydefs.length;e++)console.info("************************** Surveydef "+(e+1)+" **************************"),console.info("Config: ",config.surveydefs[e])}}),t.API.expose("optOut",function(){var e=o.location.toString();o.location=e.indexOf("#")?e.substr(0,e.indexOf("#")-1)+"#fscommand=fsoptout":e+"#fscommand=fsoptout",o.location.reload()}),t.API.expose("test",function(){var e=o.location.toString();o.location=e.indexOf("#")?e.substr(0,e.indexOf("#")-1)+"#fscommand=fstest":e+"#fscommand=fstest",o.location.reload()});var E=function(){_.subscribe(function(){S&&(clearTimeout(S),S=null),S=setTimeout(function(){if(S=null,!n._triggerResetLock){n._triggerResetLock=!0;var e=n.trig;e&&(e.dispose(),n.trig=null),t.startTS=i.now(),t.nextTick(function(){R()})}},250)},!0,!0)};t.API.expose("run",E),t.API.expose("pageReset",E),t.API.expose("showInvite",function(e){_.subscribe(function(){var t=n.trig||D(n.stg,config,n.browser,n.crit,n.CPPS);if(t.init()&&t.doesPassCriteria()&&t.surveydef){g(t,n.browser,n.stg,n.CPPS,e,n.jrny,function(){this.initialize(),this.present()})}},!0,!0)}),t.API.expose("onLoaded",n.loadedEmitter),t.API.expose("onInitialized",n.initializedEmitter),t.API.expose("onInviteShown",n.inviteShownEmitter),t.API.expose("onInviteAccepted",n.inviteAcceptedEmitter),t.API.expose("onInviteAbandoned",n.inviteAbandonedEmitter),t.API.expose("onInviteDeclined",n.inviteDeclinedEmitter),t.API.expose("onTrackerShown",n.trackerShownEmitter),t.API.expose("customInvitationRequested",n.customInvitationRequested),t.API.expose("Journey",{addEvent:function(){_.subscribe(function(e){return function(){n.jrny.addEvent.apply(n.jrny,e)}}(arguments),!0,!0)},addEventObj:function(){_.subscribe(function(e){return function(){n.jrny.addEventObj.apply(n.jrny,e)}}(arguments),!0,!0)},addEventString:function(){_.subscribe(function(e){return function(){n.jrny.addEventString.apply(n.jrny,e)}}(arguments),!0,!0)}}),t.API.expose("Storage",{get:function(e,t){t=t||function(){},_.subscribe(function(e){return function(){t(n.stg.get.apply(n.stg,e[0]))}}([arguments]),!0,!0)},all:function(e){e=e||function(){},_.subscribe(function(t){return function(){var t=n.stg.all();e(t)}}(),!0,!0)}}),t.API.expose("Cookie",{get:function(e,t){t=t||console.log||function(){},_.subscribe(function(e){return function(){try{t("_4c_"===e[0]?JSON.parse(c.decompress(decodeURIComponent(a.get(e[0])))):a.get(e[0]))}catch(t){console.error("trigger: couldn't read cookie",e[0])}}}(arguments),!0,!0)}});var I=function(e,i,r,s,o){t.ext(n,{CPPS:r,crit:i,stg:e,jrny:s,browser:o},!1),_.fire()},k=function(i,r,s,a,c,f){r&&a&&(t.isDefined(t.config.products.record)&&!1===t.config.products.record&&t.productConfig.record||e([t.makeURI("$fs.record.js")],function(e){s.set("rc","true");var t={id:config.config.id};n.RecordController=e,n.rec=e.getInstance(i,o,s,t,c),f&&(f.recordController=rec)}))},D=function(e,config,t,i,n,r){return new C(e,config,t,i,n,r)},C=function(e,n,r,s,o,a){this.stg=e,this.cfg=n,this.browser=r,this.crit=s,this.cpps=o,this.jrny=a;var c,f,u=t.config.adobeRsid;if(!e.get("pv")){c={browser:r.browser.name+" "+r.browser.version,fp:r.fp,os:r.os.name,referrer:document.referrer.toString(),site:i.getRootDomain(),sitekey:n.config.site_key||""};for(f in c)c.hasOwnProperty(f)&&o.set(f,c[f]);i.INT.GA.has()&&setTimeout(t.proxy(function(){i.INT.GA.uid(function(e){e&&o.set("GA_UID",e)})},this),2e3);var l=function(e){o.set(e.name,e.value)};u&&(i.INT.OM.uid(u,l),i.INT.OM.mcid(u,l));var d=i.INT.OM.beacon();d&&o.set("OMTR_BEACON",d)}this.heartbeatExpired=new i.FSEvent};C.prototype.doesPassCriteria=function(){var e=this.crit,t=this.cfg,i=n.state,r="DIDNOTPASSCRITERIA";if(e.platformCheck(this.browser,t))if(e.browserCheck(this.browser,t))if(e.checkDeviceBlacklist(this.browser,t)){if(e.featureCheck(this.browser,t))return!0;i.inviteStatus=r,i.reason="BROWSER"}else i.inviteStatus=r,i.reason="DEVICE";else i.inviteStatus=r,i.reason="BROWSER";else i.inviteStatus=r,i.reason="PLATFORM";return!1},C.prototype.popTracker=function(e){var t=this;if(this.stg.set("i","x"),n.state.inviteSituation="ACCEPTED",this.didPopTrackerAlready="y"==this.stg.get("dt"),n.state.didInvite=!0,!this.didPopTrackerAlready){this.stg.set("dt","y");if(e)!function(){t.tracker=new v(e.template,t.surveydef,config,i.getBrainStorage(t.browser,t.stg.uid),t.cpps,e.display,t.browser),t.tracker.show(t.browser)}();else{var r=f("about:blank","fsTracker",{width:700,height:400},this.browser,!0,this.cfg.config.centerTrackerPopup);g(this,t.browser,t.stg,t.cpps,!1,t.jrny,function(){t.tracker=new v(this.invite.template,t.surveydef,config,i.getBrainStorage(t.browser,t.stg.uid),t.cpps,this.invite.display,t.browser),t.tracker.applyExisting(t.browser,r),t.surveydef.cxRecord&&n.rec&&n.rec.recorder&&n.rec.beginTransmitting()})}}},C.prototype.canDisplayInvitation=function(){return this.crit._match(this.cfg.config,this.browser,"inviteExclude")},C.prototype.popSurvey=function(e){if(this.stg.set("i","x"),n.state.inviteSituation="ACCEPTED",this.didPopTrackerAlready="y"==this.stg.get("dt"),n.state.didInvite=!0,this.didPopTrackerAlready)this.stg&&i.getBrainStorage(this.browser,this.stg.uid).set("trackercmd",{method:"survey"},6e4,!0);else{this.stg.set("dt","y");var t=new y(config,this.cpps,this.surveydef,null,e),r=t.getUrl();f(r,"acsSurvey",{width:700,height:400},this.browser,!1,this.cfg.config.centerTrackerPopup)}},C.prototype.init=function(){var e,i,n,r=this.cfg.surveydefs,s=this.stg.get("def");for(e=0;e<r.length;e++)n=r[e],i&&(n=t.ext(i,n),!r[e].site&&i.site&&delete n.site,!r[e].section&&i.section&&delete n.section,r[e]=n),i=t.ext({},n);if(t.isDefined(s)&&parseInt(s)>r.length-1&&(s=void 0),t.isDefined(s)&&"default"!=r[parseInt(s)].selectMode&&"pin"!=r[parseInt(s)].selectMode){if(t.isDefined(s)||"lock"==r[parseInt(s)].selectMode)return n=r[parseInt(s)],this.cfg.active_surveydef=n,this.surveydef=n,this._setupTrueConversionIfRequired(),this.locale=this._initLocale(),this.cpps.set("locale",this.locale),n.section&&this.cpps.set("section",n.section),n}else for(e=0;e<(t.isDefined(s)&&"default"!=r[parseInt(s)].selectMode?parseInt(s)+1:r.length);e++)if(n=r[e],t.isDefined(s)&&s==e&&"default"!=r[parseInt(s)].selectMode||this.crit._match(n,this.browser))return"x"===this.stg.get("i")&&this.stg.set("def",e,this.cfg.config.surveyDefResetTimeout||864e5),n.index=e,this.cfg.active_surveydef=n,this.surveydef=n,this._setupTrueConversionIfRequired(),this.locale=this._initLocale(),this.cpps.set("locale",this.locale),n.section&&this.cpps.set("section",n.section),this.inviteIndex=e,n;return!1},C.prototype._initLocale=function(){var e,n=this.surveydef,r=n.language;if(t.isDefined(r.src)&&t.isDefined(r.locales)){switch(r.src){case"variable":t.isDefined(r.name)&&(e=i.retrieveNestedVariable(window,r.name));break;case"cookie":if(t.isDefined(r.name)){e=new i.Cookie({}).get(r.name)}break;case"url":var s=r.locales;if(t.isDefined(s))for(var o=0,a=s.length;o<a;o++)if(t.isDefined(s[o].locale)&&t.isDefined(s[o].match)&&location.href.match(s[o].match))return this.locale=s[o].locale,s[o].criteria&&t.ext(this.surveydef.criteria,s[o].criteria),this.locale!==n.language.locale&&(n.language.locale=this.locale),s[o].locale}if(e)for(var c=0;c<r.locales.length;c++)if(r.locales[c].match==e)return r.locale=r.locales[c].locale,r.locales[c].criteria&&t.ext(this.surveydef.criteria,r.locales[c].criteria),r.locale}return r.locale||"en"},C.prototype.cancelTracker=function(){i.getBrainStorage(this.browser,this.stg.uid).set("trackercmd",{method:"close"},6e4,!0),this.stg.set("i","a"),n.state.inviteSituation="ABANDONED",t.isDefined(this.tracker)&&clearInterval(this.tracker._heartbeat)},C.prototype._setupTrueConversionIfRequired=function(){var i=(this.surveydef,this.cfg.config);i.trueconversion&&i.trueconversion.enabled&&e([t.makeURI("$fs.trueconversion.js")],t.proxy(function(e){this.trueconversion=new e(this)},this))},C.prototype.logState=function(){this.pageViewCount=(this.stg.get("pv")||0)+1,this.stg.set("pv",this.pageViewCount,config.config.pageViewsResetTimeout||864e5)},C.prototype.logDefState=function(){if(this.surveydef){var e=this.surveydef.name;e+=this.surveydef.section||"",e+=this.surveydef.site||"",this.defPageViewCount=(this.stg.get(e+"pv")||0)+1,this.stg.set(e+"pv",this.defPageViewCount,config.config.pageViewsResetTimeout||864e5)}},C.prototype.evalLoyaltySampling=function(e){var i=this.surveydef,n=i[e]||i.criteria,r=this.stg.get("pl"),s=t.isDefined(r)&&1!=r?n.sp.outreplaypool||0:n.sp.reg||0,o=100*Math.random();return this.defPageViewCount>=n.lf&&o<=s},C.prototype.dispose=function(){this.disposed||(this.stg.save(!0),this.disposed=!0,this.trueconversion&&this.trueconversion.dispose(),this.invite&&this.invite.dispose(),delete n.inviteSetup,this.mouseoff&&this.mouseoff.dispose(),n.rec&&(n.RecordController.disposeInstance(),n.RecordController=null,n.rec=null),i.Unbind("trigger:*"))};var T=function(e,i,n,r,s,o){this.itype=e,this.cfg=i,this.def=n,this.cpps=r,this.rid=s,this._measureName=this.def.name+"-"+(t.isDefined(this.def.site)?this.def.site+"-":"")+(t.isDefined(this.def.section)?this.def.section+"-":"")+(o||this.def.language.locale)};T.prototype.init=function(e,t){t=t||function(){};var n=i.now()+"_"+Math.round(1e13*Math.random());d.ping(d.SERVICE_TYPES.mobileOnExitInitialize,{a:n,notify:e,b:i.hash(n),c:864e5,cid:this.cfg.config.id,sid:this._measureName,rid:this.rid,uid:i.now(),support:"SMSEMAIL"==this.itype?"b":"EMAIL"==this.itype?"e":"s",cpps:"version="+encodeURIComponent(this.cfg.config.version)+"&"+this.cpps.toQueryString()},t,t)},T.prototype.beginHeartbeat=function(){this._timer&&(clearTimeout(this._timer),this._timer=null);var e=t.proxy(function(){d.ping(d.SERVICE_TYPES.mobileOnExitHeartbeat,{cid:this.cfg.config.id,sid:this._measureName,rid:this.rid,uid:i.now()},function(){},function(){})},this);this._timer=setInterval(e,config.config.onExitMobileHeartbeatInterval),e()},i.registerProduct("foresee",config);var A=window!=o.top;if(n.loadedEmitter.fire(),("dontRunOtherIframes"!==config.config.workInIframes&&config.config.workInIframes||!A)&&!(o.__fsrtracker||o.location.toString().indexOf("survey.foreseeresults.com")>-1)){var x={hash:o.location.hash,href:o.location.href,pathname:o.location.pathname},R=function(){if(n._triggerResetLock=!0,x.href.indexOf("fs.tracker.html")>-1)return void(n._triggerResetLock=!1);var r=new i.Browser;r.ready.subscribe(function(){var s,c=i.getGeneralStorage(r),f=new b(c,config),u=new i.CPPS(c,config.config.cppsResetTimeout);u.addToBlacklist(config.config.disable_default_cpps||config.config.disable_cpps||[]),c.ready.subscribe(t.proxy(function(){c.upgradeOldStorage(function(){var l=t.config.customerId||config.config.id||i.getRootDomain(),d=n._journey=new i.Journey(l,i.APPID.TRIGGER,c.uid,r,100);d.addEventsDefault("properties",{fs_site:[i.getRootDomain()],fs_repeatDaysAccept:[config.config.repeatDays.accept],fs_repeatDaysDecline:[config.config.repeatDays.decline],fs_reinviteDelayAfterInviteAbandon:[config.config.reinviteDelayAfterInviteAbandon]}),I(c,f,u,d,r);var p=c.get("i");setTimeout(t.proxy(function(){if(u.set("url",o.location.toString()),u.set("code",t.config.codeVer),u.set("tz",-(new Date).getTimezoneOffset()),u.set("product_type","web sdk"),config.config.cpps){var l,y,m=config.config.cpps;for(var b in m){var S=m[b];if(t.isObject(S))switch(S.source){case"param":var _=t.getParam(S.val)||S.init||null;if(t.isDefined(S.mode)&&"append"==S.mode){var E,I=S.delimiter||",",C=u.get(b),T=C?C.split(I):[];_=_||"",T[T.length-1]!==_&&(T.push(_),E=T.join(I),u.set(b,E))}else t.isDefined(_)&&null!==_?u.set(b,_):u.get(b)||u.set(b,"");break;case"variable":if(t.isDefined(S.name)){var x;l=S.exists,x=i.retrieveNestedVariable(o,S.name),t.isDefined(l)?u.get(b)!==l.success&&u.set(b,x?l.success:l.init):x?u.set(b,x):u.get(b)||u.set(b,S.init||"")}break;case"cookie":var R=a.get(S.val),P=t.isDefined(R);l=S.exists,t.isDefined(l)?u.get(b)!==l.success&&u.set(b,P?l.success:l.init):t.isDefined(R)&&null!==R?u.set(b,R):u.get(b)||u.set(b,S.init||"");break;case"url":for(var L=0,N=S.patterns.length;L<N;L++){var O=S.patterns[L].regex||S.patterns[L].match;y=S.patterns[L].value,t.isString(location.href)&&i.testAgainstSearch(O,location.href)?u.set(b,y):u.get(b)||u.set(b,S.init||"")}break;case"function":if(t.isFunction(S.value))try{y=S.value.call(o),u.set(b,y)}catch(e){}}else u.set(b,S)}}var M;if(c.get("ovr")&&(M=JSON.parse(c.get("ovr"))),M){for(var V=0;V<config.surveydefs.length;V++){var j=config.surveydefs[V].name;M.sp[j]&&(config.surveydefs[V].criteria.sp=M.sp[j]),M.lf[j]&&(config.surveydefs[V].criteria.lf=M.lf[j])}!0===M.pooloverride&&(f.pooloverride=!0)}if(n.state.codeVer=t.config.codeVer,n.state.siteKey=config.config.site_id,n.state.didInvite="xda".indexOf(p)>-1,n.state.inviteSituation={x:"ACCEPTED",d:"DECLINED",a:"ABANDONED",p:"PRESENTED"}[p],"a"==p){parseInt(c.get("rw"))<i.now()&&(c.erase("i"),c.erase("rw"),p=null)}if("runRecordOnly"===config.config.workInIframes&&A){for(var U=!1,H=0;H<config.surveydefs.length;H++){if(config.surveydefs[H].cxRecord){U=!0;break}}return k(r,U,c,!0,u),void(n._triggerResetLock=!1)}if("d"!=p&&"a"!=p)f.calcReplayPoolStatus(function(o){o&&(n.state.isinpool=o),f.optoutCheck(t.proxy(function(){if(f._match(config.config,r,"globalExclude")&&"y"!=c.get("gx"))if(null===c.selectCookieDomain(t.config.cookieDomain,window.location.toString()))n._triggerResetLock=!1;else{var a=n.trig=D(c,config,r,f,u,d);if(a.logState(),u.set("pv",a.pageViewCount,config.config.pageViewsResetTimeout||864e5),a.init())if(n.initializedEmitter.fire(),a.doesPassCriteria())if(a.surveydef){if(a.logDefState(),k(r,a.surveydef.cxRecord,c,o,u),"x"!=p)if(r.isMobile||r.isTablet||!a.surveydef.mouseoff||"off"===a.surveydef.mouseoff.mode||1!=c.get("pv")||c.set("sst",i.now()),a.canDisplayInvitation())if(a.evalLoyaltySampling("criteria")){c.set("def",a.inviteIndex,a.cfg.config.surveyDefResetTimeout||864e5);g(a,r,c,u,!1,d,function(){this.initialize(),this.present()})}else c.get("sst")&&a.evalLoyaltySampling("mouseoff")?(c.set("def",a.inviteIndex,a.cfg.config.surveyDefResetTimeout||864e5),e([t.makeURI("$fs.mouseoff.js")],function(e){var t=a.mouseoff=new e(a,a.surveydef,r,c,d);t.initialize(),t.startListening(function(){this.inviteSetup=g(a,r,c,u,!1,d,function(){this.initialize()})},function(){this.inviteSetup.present()})}.bind(this))):n._triggerResetLock=!1;else n._triggerResetLock=!1;else{var l=a.stg.get("mhbi");l?h(a,l.ui,l.it):g(a,a.browser,a.stg,a.cpps,!1,a.jrny,function(){this.invite&&this.invite.display&&this.invite.template&&(a.tracker=new v(this.invite.template,a.surveydef,config,i.getBrainStorage(r,c.uid),u,this.invite.display,r))}),n._triggerResetLock=!1}a.surveydef.links&&(s=new w(a.surveydef.links),s.performBindings(a))}else n._triggerResetLock=!1;else n._triggerResetLock=!1;else n._triggerResetLock=!1}else c.set("gx","y"),n._triggerResetLock=!1},this),function(){n._triggerResetLock=!1})});else{if("a"==p){var B="true"==c.get("rc")||!0===c.get("rc");k(r,B,c,B,u)}n._triggerResetLock=!1}},this),Math.max(0,config.config.triggerDelay-(i.now()-t.startTS)))})},this),!0,!0)},!0,!0)};t.domReady(R);var P;config.config.ignoreNavigationEvents||i.pageNavEvent.subscribe(function(){var e=o,t=e.location,i=e[config.config.publicApiName||"FSR"],n=function(e){var t=e.split("#");return t.length>2?t[0]+t[1]:e.replace(/#/gi,"")},r=n(x.hash),s=n(t.hash);(i&&r!=s||x.pathname!=t.pathname)&&fsReady(function(){clearTimeout(P),P=setTimeout(function(){x={hash:o.location.hash,href:o.location.href,pathname:o.location.pathname},i.pageReset()},1e3)})},!1,!1)}});