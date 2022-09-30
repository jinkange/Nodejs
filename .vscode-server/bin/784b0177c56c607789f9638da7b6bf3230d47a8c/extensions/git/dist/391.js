exports.id=391,exports.ids=[391],exports.modules={3391:(e,n,t)=>{"use strict";t.r(n),t.d(n,{BE_PROFILE:()=>y,NRT_PROFILE:()=>p,PostChannel:()=>ie,RT_PROFILE:()=>h});var i=t(7421),r=t(9141),a=t(1782),o=t(7954),s=t(7624),u=t(5705),c=t(4869),l=t(9251),f=t(8452),d=t(9339),v=t(7951),h="REAL_TIME",p="NEAR_REAL_TIME",y="BEST_EFFORT",g="POST",m="drop",b="requeue",S="application/x-json-stream",T="cache-control",x="content-type",w="time-delta-millis",E="client-version",R="client-id",k="time-delta-to-apply-millis",_="upload-time",K="apikey",C="AuthMsaDeviceTicket",P="AuthXToken";function O(e){var n=(e.ext||{}).intweb;return n&&(0,u.Sn)(n.msfpc)?n.msfpc:null}function M(e){for(var n=null,t=0;null===n&&t<e.length;t++)n=O(e[t]);return n}var L=function(){function e(n,t){var i=t?[].concat(t):[],r=this,a=M(i);r.iKey=function(){return n},r.Msfpc=function(){return a||""},r.count=function(){return i.length},r.events=function(){return i},r.addEvent=function(e){return!!e&&(i.push(e),a||(a=O(e)),!0)},r.split=function(t,r){var o;if(t<i.length){var s=i.length-t;(0,c.le)(r)||(s=r<s?r:s),o=i.splice(t,s),a=M(i)}return new e(n,o)}}return e.create=function(n,t){return new e(n,t)},e}(),B=t(1550),A=2e6,H=Math.min(A,65e3),U=/\./,q=function e(n,t,i,o){var s="baseData",l=!!o,f=t,d={};(0,r.Z)(e,this,(function(e){function t(e,n,r,a,o,s,v){(0,c.rW)(e,(function(e,h){var p=null;if(h||(0,u.Sn)(h)){var y=r,g=e,m=o,b=n;if(l&&!a&&U.test(e)){var S=e.split("."),T=S.length;if(T>1){m&&(m=m.slice());for(var x=0;x<T-1;x++){var w=S[x];b=b[w]=b[w]||{},y+="."+w,m&&m.push(w)}g=S[T-1]}}if(p=a&&function(e,n){var t=d[e];return void 0===t&&(e.length>=7&&(t=(0,c.xe)(e,"ext.metadata")||(0,c.xe)(e,"ext.web")),d[e]=t),t}(y)||!f||!f.handleField(y,g)?(0,u.yj)(g,h,i):f.value(y,g,h,i)){var E=p.value;if(b[g]=E,s&&s(m,g,p),v&&"object"==typeof E&&!(0,c.kJ)(E)){var R=m;R&&(R=R.slice()).push(g),t(h,E,y+"."+g,a,R,s,v)}}}}))}e.createPayload=function(e,n,t,i,r,a){return{apiKeys:[],payloadBlob:"",overflow:null,sizeExceed:[],failedEvts:[],batches:[],numEvents:0,retryCnt:e,isTeardown:n,isSync:t,isBeacon:i,sendType:a,sendReason:r}},e.appendPayload=function(t,i,r){var o=t&&i&&!t.overflow;return o&&(0,a.Lm)(n,(function(){return"Serializer:appendPayload"}),(function(){for(var n=i.events(),a=t.payloadBlob,o=t.numEvents,s=!1,u=[],l=[],f=t.isBeacon,d=f?65e3:3984588,v=f?H:A,h=0,p=0;h<n.length;){var y=n[h];if(y){if(o>=r){t.overflow=i.split(h);break}var g=e.getEventBlob(y);if(g&&g.length<=v){var m=g.length;if(a.length+m>d){t.overflow=i.split(h);break}a&&(a+="\n"),a+=g,++p>20&&(a.substr(0,1),p=0),s=!0,o++}else g?u.push(y):l.push(y),n.splice(h,1),h--}h++}if(u&&u.length>0&&t.sizeExceed.push(L.create(i.iKey(),u)),l&&l.length>0&&t.failedEvts.push(L.create(i.iKey(),l)),s){t.batches.push(i),t.payloadBlob=a,t.numEvents=o;var b=i.iKey();-1===(0,c.UA)(t.apiKeys,b)&&t.apiKeys.push(b)}}),(function(){return{payload:t,theBatch:{iKey:i.iKey(),evts:i.events()},max:r}})),o},e.getEventBlob=function(e){try{return(0,a.Lm)(n,(function(){return"Serializer.getEventBlob"}),(function(){var n={};n.name=e.name,n.time=e.time,n.ver=e.ver,n.iKey="o:"+(0,u.jM)(e.iKey);var i={},r=e.ext;r&&(n.ext=i,(0,c.rW)(r,(function(e,n){t(n,i[e]={},"ext."+e,!0,null,null,!0)})));var a=n.data={};a.baseType=e.baseType;var o=a.baseData={};return t(e.baseData,o,s,!1,[s],(function(e,n,t){F(i,e,n,t)}),!0),t(e.data,a,"data",!1,[],(function(e,n,t){F(i,e,n,t)}),!0),JSON.stringify(n)}),(function(){return{item:e}}))}catch(e){return null}}}))};function F(e,n,t,i){if(i&&e){var r=(0,u.Vv)(i.value,i.kind,i.propertyType);if(r>-1){var a=e.metadata;a||(a=e.metadata={f:{}});var o=a.f;if(o||(o=a.f={}),n)for(var s=0;s<n.length;s++){var l=n[s];o[l]||(o[l]={f:{}});var f=o[l].f;f||(f=o[l].f={}),o=f}o=o[t]={},(0,c.kJ)(i.value)?o.a={t:r}:o.t=r}}}function I(e){var n,t=Math.floor(1200*Math.random())+2400;return n=Math.pow(2,e)*t,Math.min(n,6e5)}const z=function e(){var n={};(0,r.Z)(e,this,(function(e){e.setKillSwitchTenants=function(e,t){if(e&&t)try{var i=(o=e.split(","),s=[],o&&(0,c.tO)(o,(function(e){s.push((0,c.nd)(e))})),s);if("this-request-only"===t)return i;for(var r=1e3*parseInt(t,10),a=0;a<i.length;++a)n[i[a]]=(0,c.m6)()+r}catch(e){return[]}var o,s;return[]},e.isTenantKilled=function(e){var t=n,i=(0,c.nd)(e);return void 0!==t[i]&&t[i]>(0,c.m6)()||(delete t[i],!1)}}))},N=function e(){var n=!0,t=!0,i=!0,a="use-collector-delta",o=!1;(0,r.Z)(e,this,(function(e){e.allowRequestSending=function(){return n},e.firstRequestSent=function(){i&&(i=!1,o||(n=!1))},e.shouldAddClockSkewHeaders=function(){return t},e.getClockSkewHeaderValue=function(){return a},e.setClockSkew=function(e){o||(e?(a=e,t=!0,o=!0):t=!1,n=!0)}}))};var j,D="&NoResponseBody=true",X=((j={})[1]=b,j[100]=b,j[200]="sent",j[8004]=m,j[8003]=m,j),J={},Q={};function W(e,n,t){J[e]=n,!1!==t&&(Q[n]=e)}function Z(e){try{return e.responseText}catch(e){}return""}function Y(e,n){var t=!1;if(e&&n){var i=(0,c.FY)(e);if(i&&i.length>0)for(var r=n.toLowerCase(),a=0;a<i.length;a++){var o=i[a];if(o&&(0,c.nr)(n,o)&&o.toLowerCase()===r){t=!0;break}}}return t}function V(e,n,t,i){n&&t&&t.length>0&&(i&&J[n]?(e.hdrs[J[n]]=t,e.useHdrs=!0):e.url+="&"+n+"="+t)}W(C,C,!1),W(E,E),W(R,"Client-Id"),W(K,K),W(k,k),W(_,_),W(P,P);var $=function e(n,t,i,o,s){this._responseHandlers=[];var f,v,h,p,y,b,C="?cors=true&"+x.toLowerCase()+"="+S,P=new z,O=!1,M=new N,L=!1,A=0,H=!0,U=[],F={},j=[],J=null,W=!1,$=!1,G=!1;(0,r.Z)(e,this,(function(e){var r=!0;function z(e,n){for(var t=0,i=null,r=0;null==i&&r<e.length;)1===(t=e[r])?(0,l.cp)()?i=N:(0,l.Z3)()&&(i=ne):2===t&&(0,l.JO)(n)?i=ee:L&&3===t&&(0,l.MF)()&&(i=ie),r++;return i?{_transport:t,_isSync:n,sendPOST:i}:null}function N(e,n,t){var i=new XDomainRequest;i.open(g,e.urlString),e.timeout&&(i.timeout=e.timeout),i.onload=function(){var e=Z(i);te(n,200,{},e),he(e)},i.onerror=function(){te(n,400,{})},i.ontimeout=function(){te(n,500,{})},i.onprogress=function(){},t?i.send(e.data):s.set((function(){i.send(e.data)}),0)}function ee(e,n,t){var i,a=e.urlString,o=!1,u=!1,l=((i={body:e.data,method:g}).Microsoft_ApplicationInsights_BypassAjaxInstrumentation=!0,i);t&&(l.keepalive=!0,2===e._sendReason&&(o=!0,a+=D)),r&&(l.credentials="include"),e.headers&&(0,c.FY)(e.headers).length>0&&(l.headers=e.headers),fetch(a,l).then((function(e){var t={},i="";e.headers&&e.headers.forEach((function(e,n){t[n]=e})),e.body&&e.text().then((function(e){i=e})),u||(u=!0,te(n,e.status,t,i),he(i))})).catch((function(e){u||(u=!0,te(n,0,{}))})),o&&!u&&(u=!0,te(n,200,{})),!u&&e.timeout>0&&s.set((function(){u||(u=!0,te(n,500,{}))}),e.timeout)}function ne(e,n,t){var i=e.urlString;function a(e,n,t){if(!e[t]&&n&&n.getResponseHeader){var i=n.getResponseHeader(t);i&&(e[t]=(0,c.nd)(i))}return e}function o(e,t){te(n,e.status,function(e){var n={};return e.getAllResponseHeaders?n=function(e){var n={};if((0,c.HD)(e)){var t=(0,c.nd)(e).split(/[\r\n]+/);(0,c.tO)(t,(function(e){if(e){var t=e.indexOf(": ");if(-1!==t){var i=(0,c.nd)(e.substring(0,t)).toLowerCase(),r=(0,c.nd)(e.substring(t+1));n[i]=r}else n[(0,c.nd)(e)]=1}}))}return n}(e.getAllResponseHeaders()):(n=a(n,e,w),n=a(n,e,"kill-duration"),n=a(n,e,"kill-duration-seconds")),n}(e),t)}t&&e.disableXhrSync&&(t=!1);var s=(0,u.ot)(g,i,r,!0,t,e.timeout);(0,c.rW)(e.headers,(function(e,n){s.setRequestHeader(e,n)})),s.onload=function(){var e=Z(s);o(s,e),he(e)},s.onerror=function(){o(s)},s.ontimeout=function(){o(s)},s.send(e.data)}function te(e,n,t,i){try{e(n,t,i)}catch(e){(0,d.kP)(f.diagLog(),2,518,(0,l.eU)(e))}}function ie(e,n,t){var i=200,r=e._thePayload,a=e.urlString+D;try{var o=(0,l.jW)();if(!o.sendBeacon(a,e.data))if(r){var s=[];(0,c.tO)(r.batches,(function(e){if(s&&e&&e.count()>0){for(var n=e.events(),t=0;t<n.length;t++)if(!o.sendBeacon(a,J.getEventBlob(n[t]))){s.push(e.split(t));break}}else s.push(e.split(0))})),pe(s,8003,r.sendType,!0)}else i=0}catch(e){f.diagLog().warnToConsole("Failed to send telemetry using sendBeacon API. Ex:"+(0,l.eU)(e)),i=0}finally{te(n,i,{},"")}}function re(e){return 2===e||3===e}function ae(e){return $&&re(e)&&(e=2),e}function oe(){return!O&&A<t}function se(){var e=j;return j=[],e}function ue(e,n,t){var i=!1;return e&&e.length>0&&!O&&v[n]&&J&&(i=0!==n||oe()&&(t>0||M.allowRequestSending())),i}function ce(e){var n={};return e&&(0,c.tO)(e,(function(e,t){n[t]={iKey:e.iKey(),evts:e.events()}})),n}function le(e,t,i,r,o){if(e&&0!==e.length)if(O)pe(e,1,r);else{r=ae(r);try{var s=e,c=0!==r;(0,a.Lm)(h,(function(){return"HttpManager:_sendBatches"}),(function(a){a&&(e=e.slice(0));for(var s=[],f=null,d=(0,u.hK)(),h=v[r]||(c?v[1]:v[0]),p=($||re(r)||h&&3===h._transport)&&!H&&L&&(0,l.MF)();ue(e,r,t);){var y=e.shift();y&&y.count()>0&&(P.isTenantKilled(y.iKey())?s.push(y):(f=f||J.createPayload(t,i,c,p,o,r),J.appendPayload(f,y,n)?null!==f.overflow&&(e=[f.overflow].concat(e),f.overflow=null,de(f,d,(0,u.hK)(),o),d=(0,u.hK)(),f=null):(de(f,d,(0,u.hK)(),o),d=(0,u.hK)(),e=[y].concat(e),f=null)))}f&&de(f,d,(0,u.hK)(),o),e.length>0&&(j=e.concat(j)),pe(s,8004,r)}),(function(){return{batches:ce(s),retryCount:t,isTeardown:i,isSynchronous:c,sendReason:o,useSendBeacon:re(r),sendType:r}}),!c)}catch(e){(0,d.kP)(f.diagLog(),2,48,"Unexpected Exception sending batch: "+(0,l.eU)(e))}}}function fe(e,n,t){e[n]=e[n]||{},e[n][f.identifier]=t}function de(n,t,r,o){if(n&&n.payloadBlob&&n.payloadBlob.length>0){var s=!!e.sendHook,d=v[n.sendType];!re(n.sendType)&&n.isBeacon&&2===n.sendReason&&(d=v[2]||v[3]||d);var p=G;(n.isBeacon||3===d._transport)&&(p=!1);var g=function(e,n){var t={url:C,hdrs:{},useHdrs:!1};n?(t.hdrs=(0,u.l7)(t.hdrs,F),t.useHdrs=(0,c.FY)(t.hdrs).length>0):(0,c.rW)(F,(function(e,n){Q[e]?V(t,Q[e],n,!1):(t.hdrs[e]=n,t.useHdrs=!0)})),V(t,R,"NO_AUTH",n),V(t,E,u.vs,n);var i="";(0,c.tO)(e.apiKeys,(function(e){i.length>0&&(i+=","),i+=e})),V(t,K,i,n),V(t,_,(0,c.m6)().toString(),n);var r=function(e){for(var n=0;n<e.batches.length;n++){var t=e.batches[n].Msfpc();if(t)return encodeURIComponent(t)}return""}(e);if((0,u.Sn)(r)&&(t.url+="&ext.intweb.msfpc="+r),M.shouldAddClockSkewHeaders()&&V(t,k,M.getClockSkewHeaderValue(),n),h.getWParam){var a=h.getWParam();a>=0&&(t.url+="&w="+a)}for(var o=0;o<U.length;o++)t.url+="&"+U[o].name+"="+U[o].value;return t}(n,p);p=p||g.useHdrs;var m=(0,u.hK)();(0,a.Lm)(h,(function(){return"HttpManager:_doPayloadSend"}),(function(){for(var v=0;v<n.batches.length;v++)for(var E=n.batches[v].events(),R=0;R<E.length;R++){var k=E[R];if(W){var _=k.timings=k.timings||{};fe(_,"sendEventStart",m),fe(_,"serializationStart",t),fe(_,"serializationCompleted",r)}k.sendAttempt>0?k.sendAttempt++:k.sendAttempt=1}pe(n.batches,1e3+(o||0),n.sendType,!0);var K={data:n.payloadBlob,urlString:g.url,headers:g.hdrs,_thePayload:n,_sendReason:o,timeout:y};(0,c.o8)(b)||(K.disableXhrSync=!!b),p&&(Y(K.headers,T)||(K.headers[T]="no-cache, no-store"),Y(K.headers,x)||(K.headers["content-type"]=S));var C=null;d&&(C=function(t){M.firstRequestSent();var r=function(t,r){!function(n,t,r,a){var o,s=9e3,l=null,d=!1,v=!1;try{var h=!0;if(typeof n!==B.jA){if(t){M.setClockSkew(t[w]);var p=t["kill-duration"]||t["kill-duration-seconds"];(0,c.tO)(P.setKillSwitchTenants(t["kill-tokens"],p),(function(e){(0,c.tO)(r.batches,(function(n){if(n.iKey()===e){l=l||[];var t=n.split(0);r.numEvents-=t.count(),l.push(t)}}))}))}if(200==n||204==n)return void(s=200);((o=n)>=300&&o<500&&408!=o&&429!=o||501==o||505==o||r.numEvents<=0)&&(h=!1),s=9e3+n%1e3}if(h){s=100;var y=r.retryCnt;0===r.sendType&&(y<i?(d=!0,ve((function(){0===r.sendType&&A--,le(r.batches,y+1,r.isTeardown,$?2:r.sendType,5)}),$,I(y))):(v=!0,$&&(s=8001)))}}finally{d||(M.setClockSkew(),function(n,t,i,r){try{r&&f._backOffTransmission(),200===t&&(r||n.isSync||f._clearBackOff(),function(e){if(W){var n=(0,u.hK)();(0,c.tO)(e,(function(e){e&&e.count()>0&&function(e,n){W&&(0,c.tO)(e,(function(e){fe(e.timings=e.timings||{},"sendEventCompleted",n)}))}(e.events(),n)}))}}(n.batches)),pe(n.batches,t,n.sendType,!0)}finally{0===n.sendType&&(A--,5!==i&&e.sendQueuedRequests(n.sendType,i))}}(r,s,a,v)),pe(l,8004,r.sendType)}}(t,r,n,o)},a=n.isTeardown||n.isSync;try{d.sendPOST(t,r,a),e.sendListener&&e.sendListener(K,t,a,n.isBeacon)}catch(e){f.diagLog().warnToConsole("Unexpected exception sending payload. Ex:"+(0,l.eU)(e)),te(r,0,{})}}),(0,a.Lm)(h,(function(){return"HttpManager:_doPayloadSend.sender"}),(function(){if(C)if(0===n.sendType&&A++,s&&!n.isBeacon&&3!==d._transport){var t={data:K.data,urlString:K.urlString,headers:(0,u.l7)({},K.headers),timeout:K.timeout,disableXhrSync:K.disableXhrSync},i=!1;(0,a.Lm)(h,(function(){return"HttpManager:_doPayloadSend.sendHook"}),(function(){try{e.sendHook(t,(function(e){i=!0,H||e._thePayload||(e._thePayload=e._thePayload||K._thePayload,e._sendReason=e._sendReason||K._sendReason),C(e)}),n.isSync||n.isTeardown)}catch(e){i||C(K)}}))}else C(K)}))}),(function(){return{thePayload:n,serializationStart:t,serializationCompleted:r,sendReason:o}}),n.isSync)}n.sizeExceed&&n.sizeExceed.length>0&&pe(n.sizeExceed,8003,n.sendType),n.failedEvts&&n.failedEvts.length>0&&pe(n.failedEvts,8002,n.sendType)}function ve(e,n,t){n?e():s.set(e,t)}function he(n){var t=e._responseHandlers;try{for(var i=0;i<t.length;i++)try{t[i](n)}catch(e){(0,d.kP)(f.diagLog(),1,519,"Response handler failed: "+e)}if(n){var r=JSON.parse(n);(0,u.Sn)(r.webResult)&&(0,u.Sn)(r.webResult.msfpc)&&p.set("MSFPC",r.webResult.msfpc,31536e3)}}catch(e){}}function pe(e,n,t,i){if(e&&e.length>0&&o){var r=o[(c=n,l=X[c],(0,u.Sn)(l)||(l="oth",c>=9e3&&c<=9999?l="rspFail":c>=8e3&&c<=8999?l=m:c>=1e3&&c<=1999&&(l="send")),l)];if(r){var s=0!==t;(0,a.Lm)(h,(function(){return"HttpManager:_sendBatchesNotification"}),(function(){ve((function(){try{r.call(o,e,n,s,t)}catch(e){(0,d.kP)(f.diagLog(),1,74,"send request notification failed: "+e)}}),i||s,0)}),(function(){return{batches:ce(e),reason:n,isSync:s,sendSync:i,sendType:t}}),!s)}}var c,l}e.initialize=function(e,n,t,i,a){var o;a||(a={}),C=e+C,G=!!(0,c.o8)(a.avoidOptions)||!a.avoidOptions,h=n,p=n.getCookieMgr(),W=!h.config.disableEventTimings;var s=!!h.config.enableCompoundKey;f=t;var u=a.valueSanitizer,d=a.stringifyObjects;(0,c.o8)(a.enableCompoundKey)||(s=!!a.enableCompoundKey),y=a.xhrTimeout,b=a.disableXhrSync,L=!(0,l.b$)(),J=new q(h,u,d,s);var g=i,m=a.alwaysUseXhrOverride?i:null,S=a.alwaysUseXhrOverride?i:null;if(!i){H=!1;var T=(0,l.k$)();T&&T.protocol&&"file:"===T.protocol.toLowerCase()&&(r=!1);var x=[];x=(0,l.b$)()?[2,1]:[1,2,3];var w=a.transports;w&&((0,c.hj)(w)?x=[w].concat(x):(0,c.kJ)(w)&&(x=w.concat(x))),i=z(x,!1),g=z(x,!0),i||f.diagLog().warnToConsole("No available transport to send events")}(o={})[0]=i,o[1]=g||z([1,2,3],!0),o[2]=m||z([3,2],!0)||g||z([1],!0),o[3]=S||z([2,3],!0)||g||z([1],!0),v=o},e._getDbgPlgTargets=function(){return[v[0],P,J,v]},e.addQueryStringParameter=function(e,n){for(var t=0;t<U.length;t++)if(U[t].name===e)return void(U[t].value=n);U.push({name:e,value:n})},e.addHeader=function(e,n){F[e]=n},e.canSendRequest=function(){return oe()&&M.allowRequestSending()},e.sendQueuedRequests=function(e,n){(0,c.o8)(e)&&(e=0),$&&(e=ae(e),n=2),ue(j,e,0)&&le(se(),0,!1,e,n||0)},e.isCompletelyIdle=function(){return!O&&0===A&&0===j.length},e.setUnloading=function(e){$=e},e.addBatch=function(e){if(e&&e.count()>0){if(P.isTenantKilled(e.iKey()))return!1;j.push(e)}return!0},e.teardown=function(){j.length>0&&le(se(),0,!0,2,2)},e.pause=function(){O=!0},e.resume=function(){O=!1,e.sendQueuedRequests(0,4)},e.sendSynchronousBatch=function(e,n,t){e&&e.count()>0&&((0,c.le)(n)&&(n=1),$&&(n=ae(n),t=2),le([e],0,!1,n,t||0))}}))};function G(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout(e,n,t)}function ee(e){clearTimeout(e)}function ne(e,n){return{set:e||G,clear:n||ee}}var te="eventsDiscarded";const ie=function(e){function n(){var t,i=e.call(this)||this;i.identifier="PostChannel",i.priority=1011,i.version="3.2.3";var v,g,m,b,S,T,x,w=!1,E=[],R=null,k=!1,_=0,K=500,P=0,O=1e4,M={},B=h,A=null,H=null,U=0,q=0,F={},z=-1,N=!0,j=!1,D=6,X=2;return(0,r.Z)(n,i,(function(e,n){function i(e){"beforeunload"!==(e||(0,l.Jj)().event).type&&(j=!0,g.setUnloading(j)),ee(2,2)}function r(e){j=!1,g.setUnloading(j)}function J(e,n){if(e.sendAttempt||(e.sendAttempt=0),e.latency||(e.latency=1),e.ext&&e.ext.trace&&delete e.ext.trace,e.ext&&e.ext.user&&e.ext.user.id&&delete e.ext.user.id,N&&(e.ext=(0,c.Ax)(e.ext),e.baseData&&(e.baseData=(0,c.Ax)(e.baseData)),e.data&&(e.data=(0,c.Ax)(e.data))),e.sync)if(U||k)e.latency=3,e.sync=!1;else if(g)return N&&(e=(0,c.Ax)(e)),void g.sendSynchronousBatch(L.create(e.iKey,[e]),!0===e.sync?1:e.sync,3);var t=e.latency,i=P,r=O;4===t&&(i=_,r=K);var a=!1;if(i<r)a=!ae(e,n);else{var o=1,s=20;4===t&&(o=4,s=1),a=!0,function(e,n,t,i){for(;t<=n;){var r=ie(e,n,!0);if(r&&r.count()>0){var a=r.split(0,i),o=a.count();if(o>0)return 4===t?_-=o:P-=o,he(te,[a],f.h.QueueFull),!0}t++}return oe(),!1}(e.iKey,e.latency,o,s)&&(a=!ae(e,n))}a&&ve(te,[e],f.h.QueueFull)}function Q(e,n,t){var i=se(e,n,t);return g.sendQueuedRequests(n,t),i}function W(){return P>0}function Z(){if(z>=0&&se(z,0,S)&&g.sendQueuedRequests(0,S),_>0&&!H&&!k){var e=M[B][2];e>=0&&(H=V((function(){H=null,Q(4,0,1),Z()}),e))}var n=M[B][1];!A&&!R&&n>=0&&!k&&(W()?A=V((function(){A=null,Q(0===q?3:1,0,1),q++,q%=2,Z()}),n):q=0)}function Y(){t=null,w=!1,E=[],R=null,k=!1,_=0,K=500,P=0,O=1e4,M={},B=h,A=null,H=null,U=0,q=0,v=null,F={},m=void 0,b=0,z=-1,S=null,N=!0,j=!1,D=6,X=2,T=null,x=ne(),g=new $(500,2,1,{requeue:fe,send:pe,sent:ye,drop:ge,rspFail:me,oth:be},x),le(),F[4]={batches:[],iKeyMap:{}},F[3]={batches:[],iKeyMap:{}},F[2]={batches:[],iKeyMap:{}},F[1]={batches:[],iKeyMap:{}},Se()}function V(e,n){0===n&&U&&(n=1);var t=1e3;return U&&(t=I(U-1)),x.set(e,n*t)}function G(){return null!==A&&(x.clear(A),A=null,q=0,!0)}function ee(e,n){G(),R&&(x.clear(R),R=null),k||Q(1,e,n)}function ie(e,n,t){var i=F[n];i||(i=F[n=1]);var r=i.iKeyMap[e];return!r&&t&&(r=L.create(e),i.batches.push(r),i.iKeyMap[e]=r),r}function re(n,t){g.canSendRequest()&&!U&&(m>0&&P>m&&(t=!0),t&&null==R&&e.flush(n,null,20))}function ae(e,n){N&&(e=(0,c.Ax)(e));var t=e.latency,i=ie(e.iKey,t,!0);return!!i.addEvent(e)&&(4!==t?(P++,n&&0===e.sendAttempt&&re(!e.sync,b>0&&i.count()>=b)):_++,!0)}function oe(){for(var e=0,n=0,t=function(t){var i=F[t];i&&i.batches&&(0,c.tO)(i.batches,(function(i){4===t?e+=i.count():n+=i.count()}))},i=1;i<=4;i++)t(i);P=n,_=e}function se(n,t,i){var r=!1,o=0===t;return!o||g.canSendRequest()?(0,a.Lm)(e.core,(function(){return"PostChannel._queueBatches"}),(function(){for(var e=[],t=4;t>=n;){var i=F[t];i&&i.batches&&i.batches.length>0&&((0,c.tO)(i.batches,(function(n){g.addBatch(n)?r=r||n&&n.count()>0:e=e.concat(n.events()),4===t?_-=n.count():P-=n.count()})),i.batches=[],i.iKeyMap={}),t--}e.length>0&&ve(te,e,f.h.KillSwitch),r&&z>=n&&(z=-1,S=0)}),(function(){return{latency:n,sendType:t,sendReason:i}}),!o):(z=z>=0?Math.min(z,n):n,S=Math.max(S,i)),r}function ue(e,n){Q(1,0,n),oe(),ce((function(){e&&e(),E.length>0?R=V((function(){R=null,ue(E.shift(),n)}),0):(R=null,Z())}))}function ce(e){g.isCompletelyIdle()?e():R=V((function(){R=null,ce(e)}),.25)}function le(){(M={})[h]=[2,1,0],M[p]=[6,3,0],M[y]=[18,9,0]}function fe(n,t){var i=[],r=D;j&&(r=X),(0,c.tO)(n,(function(n){n&&n.count()>0&&(0,c.tO)(n.events(),(function(n){n&&(n.sync&&(n.latency=4,n.sync=!1),n.sendAttempt<r?((0,u.if)(n,e.identifier),J(n,!1)):i.push(n))}))})),i.length>0&&ve(te,i,f.h.NonRetryableStatus),j&&ee(2,2)}function de(n,t){var i=e._notificationManager||{},r=i[n];if(r)try{r.apply(i,t)}catch(t){(0,d.kP)(e.diagLog(),1,74,n+" notification failed: "+t)}}function ve(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];n&&n.length>0&&de(e,[n].concat(t))}function he(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];n&&n.length>0&&(0,c.tO)(n,(function(n){n&&n.count()>0&&de(e,[n.events()].concat(t))}))}function pe(e,n,t){e&&e.length>0&&de("eventsSendRequest",[n>=1e3&&n<=1999?n-1e3:0,!0!==t])}function ye(e,n){he("eventsSent",e,n),Z()}function ge(e,n){he(te,e,n>=8e3&&n<=8999?n-8e3:f.h.Unknown)}function me(e){he(te,e,f.h.NonRetryableStatus),Z()}function be(e,n){he(te,e,f.h.Unknown),Z()}function Se(){b=t&&t.disableAutoBatchFlushLimit?0:Math.max(1500,O/6)}Y(),e._getDbgPlgTargets=function(){return[g]},e.initialize=function(l,f,d){(0,a.Lm)(f,(function(){return"PostChannel:initialize"}),(function(){var a=f;n.initialize(l,f,d);try{f.addUnloadCb,T=(0,o.jU)((0,s.J)(e.identifier),f.evtNamespace&&f.evtNamespace());var h=e._getTelCtx();l.extensionConfig[e.identifier]=l.extensionConfig[e.identifier]||{},t=h.getExtCfg(e.identifier),x=ne(t.setTimeoutOverride,t.clearTimeoutOverride),N=!t.disableOptimizeObj&&(0,u.mJ)(),function(e){var n=e.getWParam;e.getWParam=function(){var e=0;return t.ignoreMc1Ms0CookieProcessing&&(e|=2),e|n()}}(a),t.eventsLimitInMem>0&&(O=t.eventsLimitInMem),t.immediateEventLimit>0&&(K=t.immediateEventLimit),t.autoFlushEventsLimit>0&&(m=t.autoFlushEventsLimit),(0,c.hj)(t.maxEventRetryAttempts)&&(D=t.maxEventRetryAttempts),(0,c.hj)(t.maxUnloadEventRetryAttempts)&&(X=t.maxUnloadEventRetryAttempts),Se(),t.httpXHROverride&&t.httpXHROverride.sendPOST&&(v=t.httpXHROverride),(0,u.Sn)(l.anonCookieName)&&g.addQueryStringParameter("anoncknm",l.anonCookieName),g.sendHook=t.payloadPreprocessor,g.sendListener=t.payloadListener;var p=t.overrideEndpointUrl?t.overrideEndpointUrl:l.endpointUrl;e._notificationManager=l.extensionConfig.NotificationManager,g.initialize(p,e.core,e,v,t);var y=l.disablePageUnloadEvents||[];(0,o.c9)(i,y,T),(0,o.TJ)(i,y,T),(0,o.nD)(r,l.disablePageShowEvents,T)}catch(n){throw e.setInitialized(!1),n}}),(function(){return{coreConfig:l,core:f,extensions:d}}))},e.processTelemetry=function(n,i){(0,u.if)(n,e.identifier);var r=(i=e._getTelCtx(i)).getExtCfg(e.identifier),a=!!t.disableTelemetry;r&&(a=a||!!r.disableTelemetry);var o=n;a||w||(t.overrideInstrumentationKey&&(o.iKey=t.overrideInstrumentationKey),r&&r.overrideInstrumentationKey&&(o.iKey=r.overrideInstrumentationKey),J(o,!0),j?ee(2,2):Z()),e.processNext(o,i)},e._doTeardown=function(e,n){ee(2,2),w=!0,g.teardown(),(0,o.JA)(null,T),(0,o.C9)(null,T),(0,o.Yl)(null,T),Y()},e.setEventQueueLimits=function(e,n){O=e>0?e:1e4,m=n>0?n:0,Se();var t=P>e;if(!t&&b>0)for(var i=1;!t&&i<=3;i++){var r=F[i];r&&r.batches&&(0,c.tO)(r.batches,(function(e){e&&e.count()>=b&&(t=!0)}))}re(!0,t)},e.pause=function(){G(),k=!0,g.pause()},e.resume=function(){k=!1,g.resume(),Z()},e.addResponseHandler=function(e){g._responseHandlers.push(e)},e._loadTransmitProfiles=function(e){G(),le(),B=h,Z(),(0,c.rW)(e,(function(e,n){var t=n.length;if(t>=2){var i=t>2?n[2]:0;if(n.splice(0,t-2),n[1]<0&&(n[0]=-1),n[1]>0&&n[0]>0){var r=n[0]/n[1];n[0]=Math.ceil(r)*n[1]}i>=0&&n[1]>=0&&i>n[1]&&(i=n[1]),n.push(i),M[e]=n}}))},e.flush=function(e,n,t){if(void 0===e&&(e=!0),!k)if(t=t||1,e)null==R?(G(),se(1,0,t),R=V((function(){R=null,ue(n,t)}),0)):E.push(n);else{var i=G();Q(1,1,t),null!=n&&n(),i&&Z()}},e.setMsaAuthTicket=function(e){g.addHeader(C,e)},e.hasEvents=W,e._setTransmitProfile=function(e){B!==e&&void 0!==M[e]&&(G(),B=e,Z())},e._backOffTransmission=function(){U<4&&(U++,G(),Z())},e._clearBackOff=function(){U&&(U=0,G(),Z())},(0,c.l_)(e,"_setTimeoutOverride",(function(){return x.set}),(function(e){x=ne(e,x.clear)})),(0,c.l_)(e,"_clearTimeoutOverride",(function(){return x.clear}),(function(e){x=ne(x.set,e)}))})),i}return(0,i.ne)(n,e),n}(v.i)}};
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/784b0177c56c607789f9638da7b6bf3230d47a8c/extensions/git/dist/391.js.map