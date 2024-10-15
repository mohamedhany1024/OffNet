"use strict";(self.webpackChunkeuronews=self.webpackChunkeuronews||[]).push([[2602],{22602:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v,getAppContainer:()=>f,getContextToken:()=>b});var n=i(11537),s=i(66983);class r{constructor(){this.nodes=[]}addNode(e){let{key:t,childrenKeys:i=[],parentKeys:n=[],state:s}=e;void 0===this.nodes.find((e=>e.key===t))&&this.nodes.push({key:t,childrenKeys:i,parentKeys:n,state:s})}getNodes(){return this.nodes}getNode(e){return this.nodes.find((t=>t.key===e))}setNodeChildren(e,t){const i=this.getNode(e);i&&(i.childrenKeys=t)}setNodeParents(e,t){const i=this.getNode(e);i&&(i.parentKeys=t)}setNodeState(e,t){const i=this.getNode(e);i&&(i.state=t)}mergeNodeState(e,t){const i=this.getNode(e);i&&(i.state={...i.state,...t})}addNodeChild(e,t){const i=this.getNode(e);i&&(i.childrenKeys.includes(t)||i.childrenKeys.push(t))}addNodeParent(e,t){const i=this.getNode(e);i&&(i.parentKeys.includes(t)||i.parentKeys.push(t))}getNodeParentsRec(e){const t=this.getNode(e);if(!t)return[];const i=t.parentKeys.map((e=>this.getNodeParentsRec(e)));return[...new Set([t,...i.flat()])]}}var o=i(10322);class a{constructor(e){this.depencyGraph=e}getRootNodes(){return this.depencyGraph.getNodes().filter((e=>0===e.parentKeys.length))}format(){return this.getRootNodes().map((e=>this.getDependencyGraphString(e.key))).join("\n")}formatFromNode(e){return this.getDependencyGraphString(e)}getDependencyGraphString(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const s=this.depencyGraph.getNode(e);if(!s)return"";const r=0===s.parentKeys.length,o=t>0?" |   ".repeat(n)+"     ".repeat(t-1-n):"",a=t>0?i?" └─  ":" ├─  ":"",d=t>0&&!i?t:n,c=!!s.state.error?" !ERROR!":"",h=s.state.isEnable?"🟢":"🟡",l=!0===s.state.hasResolvedDependenciesSuccessfully?"🟢":!1===s.state.hasResolvedDependenciesSuccessfully?"🟡":"🍃",g=s.state.isInitialized?"🟢":s.state.isEnable?"🔴":"";let p=s.state.isOrphan?`${o}${a}🙈 ${e} ${c}\n`:`${o}${a}${r?"🌳":"♦️"} ${e} ${h}${l}${g}${c}\n`;const u=s.childrenKeys.length;return s.childrenKeys.forEach(((e,i)=>{const n=i===u-1;p+=this.getDependencyGraphString(e,t+1,n,d)})),p}}const d="$$app_constainer_key";function c(e){return"object"==typeof e&&null!==e&&"string"==typeof e[d]}function h(e){return`Class [${e}]`}class l{constructor(e,t,i,n){this.name=e,this.config=t,this.checker=i,this.loggerFactory=n,this.cache=new Map,this.depencyGraph=new r,this.orphanNodeCollectorName="OrphanNodes",this.resetNodes=new Set,this.logger=this.loggerFactory.getLogger(this.name),this.$$app_constainer_key=this.name,this.createNodeWithoutParent(this.$$app_constainer_key),this.setNodeIsEnable(this.$$app_constainer_key,!0),this.setNodeIsInitialized(this.$$app_constainer_key,!0),this.setNodeHasResolvedDependenciesSuccessfully(this.$$app_constainer_key,!0),this.depencyGraph.addNode({key:this.orphanNodeCollectorName,state:{isEnable:!0,isInitialized:!0,hasResolvedDependenciesSuccessfully:!0}})}async init(){}async reset(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$$app_constainer_key;await this.resetNode(e),this.resetNodes.clear()}async resetNode(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.logger.debug(`${"  ".repeat(t)}Resetting node ${e}...`),this.resetNodes.has(e))return void this.logger.debug(`${"  ".repeat(t)}Node ${e} has been reset already, skipping.`);const i=this.depencyGraph.getNode(e);if(!i)return;for(const o of i.childrenKeys)await this.resetNode(o,t+1);const n=await this.cache.get(e);if("failed"!==n){if(n&&((s=n)&&"reset"in s))try{await Promise.race([n.reset(),new Promise(((e,t)=>setTimeout(t,8e3,"timedout")))]),this.logger.debug(`${"  ".repeat(t)}Service ${e} has been reset successfully.`)}catch(r){if("string"==typeof r&&"timedout"===r){const i=`${"  ".repeat(t)}Service ${e}.reset() has timed out.`;this.logger.warn(i,r)}else{const i=`${"  ".repeat(t)}Service ${e}.reset() has failed.`;this.logger.error(i,r)}}var s;this.resetNodes.add(e)}else this.logger.debug(`${"  ".repeat(t)}Service ${e} has failed to initialize, skipping reset.`)}async resolve(e,t){let i=!1;if(t){if(!c(t)){const e=h(t.constructor.name);this.createNodeWithoutParent(e),this.setNodeIsOrphan(e,!0),this.depencyGraph.addNodeParent(e,this.$$app_constainer_key),this.depencyGraph.addNodeChild(this.$$app_constainer_key,e),t={$$app_constainer_key:e},i=!0}}else{const e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;const t=(new Error).stack;if(!t)return;const i=t.split(" at ")[e];if(!i)return;const n=i.split(" (")[1];return n?n.trim().slice(0,-1):void 0}(3),n=`${h("UNKNOWN")} (${e||"unknown file"})`;this.createNodeWithoutParent(n),this.setNodeIsOrphan(n,!0),this.depencyGraph.addNodeParent(n,this.orphanNodeCollectorName),this.depencyGraph.addNodeChild(this.orphanNodeCollectorName,n),t={$$app_constainer_key:n},i=!0}try{if(Array.isArray(e)){const n=i?`Resolving from orphan ${this.getKeyFromInstance(t)}`:`Resolving dependencies of ${this.getKeyFromInstance(t)}`;this.logger.debug(`${n}: ${e.join(", ")}`);const s=[];for(const i of e)s.push(this.resolveSingleKey(i)),this.createNode(i,t);return await Promise.all(s)}{const n=e,s=i?`Resolving from orphan ${this.getKeyFromInstance(t)}`:`Resolving dependency of ${this.getKeyFromInstance(t)}`;this.logger.debug(`${s}: ${n}`);const r=this.resolveSingleKey(n);return this.createNode(n,t),await r}}catch(n){const s=i?`Failed to resolve from orphan ${this.getKeyFromInstance(t)}`:`Failed to resolve dependencies of ${this.getKeyFromInstance(t)}`;return this.logger.error(`${s}: ${e}`,n),Array.isArray(e)?[]:void 0}}async resolveSingleKey(e){if(!this.config[e])throw new Error(`Service ${e} is not registered in the config. You must either register it or remove it from its parent dependencies.`);try{if(!(await this.checker.isEnabled(e)))return void this.logger.debug(`Service ${e} has been disabled.`)}catch(n){return void this.logger.error(`Service ${e} has failed to check if enabled.`,n)}if(this.setNodeIsEnable(e,!0),this.cache.has(e)){const t=this.cache.get(e),i=await t;return"failed"===i?void this.logger.warn(`Service ${e} has been disabled because something went wrong in a previous init().`):(this.logger.debug(`Service ${e} is already initialized. Serving from cache.`),i)}const t=this.createServiceInstance(e);this.cache.set(e,t);const i=await t;if("failed"!==i)return this.logger.debug(`Service ${e} has been successfully initialized. Saved in cache.`),i}async createServiceInstance(e){let t;try{const s=this.config[e],{default:r}=await s();if(t=new r,"object"!=typeof(i=t)||null===i)throw new Error(`Service ${e} is not assignable to object. I cannot be ingested by ServicesContainer. Please use a class that extends IService.`);if(t[d]=e,t instanceof o.Z){const i=new n.Z(e,[e]);t.setLogger(i)}}catch(a){return void this.logger.error(`Service ${e} has failed to load.`,a)}var i,s;try{if("object"==typeof(s=t)&&null!==s&&"resolveDependencies"in s){var r;await t.resolveDependencies();const i=null===(r=this.depencyGraph.getNode(e))||void 0===r?void 0:r.childrenKeys,n=null==i?void 0:i.map((e=>{var t;const i=null===(t=this.depencyGraph.getNode(e))||void 0===t?void 0:t.state.error;if(i)return{key:e,error:i.message}})).filter((e=>e));if(null!=n&&n.length)throw new Error(`Service ${e} has failed to resolve dependencies because of children failures. Here are the issues: ${JSON.stringify(n)}`);this.setNodeHasResolvedDependenciesSuccessfully(e,!0)}else this.logger.debug(`Service ${e} does not implement IResolveDependencies. Skipping resolveDependencies().`)}catch(a){this.logger.error(`Service ${e}.resolveDependencies() has failed. Children might be broken:`,a),this.setNodeHasResolvedDependenciesSuccessfully(e,!1)}try{await Promise.race([t.init(),new Promise(((e,t)=>setTimeout(t,8e3,"timedout")))])}catch(a){if("string"==typeof a&&"timedout"===a){const t=`Service ${e}.init() has timedout. We disable it.`;this.logger.warn(t,a),this.depencyGraph.mergeNodeState(e,{error:new Error(t)})}else{const t=`Service ${e}.init() has failed. We disable it.`;this.logger.error(t,a),a instanceof Error?this.depencyGraph.mergeNodeState(e,{error:a}):this.depencyGraph.mergeNodeState(e,{error:new Error(t)})}return"failed"}return this.setNodeIsInitialized(e,!0),t}getKeyFromInstance(e){return c(e)?e[d]:h(e.constructor.name)}createNodeWithoutParent(e){this.depencyGraph.addNode({key:e,state:{isEnable:!1,isInitialized:!1}})}getAllParentsKeys(e){return this.depencyGraph.getNodeParentsRec(e).map((e=>e.key))}createNode(e,t){const i=this.getKeyFromInstance(t);if(this.getAllParentsKeys(i).includes(e))throw this.logger.dir(this.depencyGraph.getNodes()),new Error(`Circular dependency detected. You try to resolve ${e} from ${i} but it has already been resolved for parent above in the dependency graph. See dependency graph for more details:\n${this.getDependencyGraphString(e)}`);this.createNodeWithoutParent(e),this.depencyGraph.addNodeChild(i,e),this.depencyGraph.addNodeParent(e,i)}setNodeIsEnable(e,t){this.depencyGraph.mergeNodeState(e,{isEnable:t})}setNodeIsInitialized(e,t){this.depencyGraph.mergeNodeState(e,{isInitialized:t})}setNodeHasResolvedDependenciesSuccessfully(e,t){this.depencyGraph.mergeNodeState(e,{hasResolvedDependenciesSuccessfully:t})}setNodeIsOrphan(e,t){this.depencyGraph.mergeNodeState(e,{isOrphan:t})}getDependencyGraphString(e){const t=new a(this.depencyGraph);return e?t.formatFromNode(e):t.format()}logDependencyGraph(e){this.logger.debug(`\n${this.getDependencyGraphString(e)}`)}}var g=i(91609);const p={[b(g.Pe.Article)]:()=>Promise.all([i.e(9739),i.e(9185)]).then(i.bind(i,29185)),[b(g.Pe.EmbedVideo)]:()=>Promise.all([i.e(9739),i.e(5514)]).then(i.bind(i,65514)),[b(g.Pe.Home)]:()=>i.e(6048).then(i.bind(i,16048)),[b(g.Pe.Live)]:()=>Promise.all([i.e(9739),i.e(4650)]).then(i.bind(i,4650)),[b(g.Pe.Login)]:()=>i.e(9014).then(i.bind(i,59014)),[b(g.Pe.Main)]:()=>i.e(7784).then(i.bind(i,57784)),[b(g.Pe.NoComment)]:()=>Promise.all([i.e(9739),i.e(4784)]).then(i.bind(i,24784)),[b(g.Pe.Playlist)]:()=>Promise.all([i.e(9739),i.e(7495)]).then(i.bind(i,57495)),[b(g.Pe.Page)]:()=>i.e(9560).then(i.bind(i,59560)),[b(g.Pe.Showroom)]:()=>Promise.all([i.e(9739),i.e(7211)]).then(i.bind(i,17211)),[b(g.Pe.Weather)]:()=>Promise.all([i.e(9739),i.e(9242)]).then(i.bind(i,89242)),"adobe.analytics":()=>i.e(3876).then(i.bind(i,53876)),bombora:()=>i.e(7094).then(i.bind(i,7094)),chartbeat:()=>i.e(7334).then(i.bind(i,27334)),checkLogin:()=>i.e(2311).then(i.bind(i,42311)),connatix:()=>i.e(3610).then(i.bind(i,53610)),didomi:()=>i.e(7840).then(i.bind(i,27840)),"gallery.fullscreen":()=>i.e(978).then(i.bind(i,60978)),gigya:()=>i.e(4516).then(i.bind(i,14516)),"google.gpt":()=>i.e(235).then(i.bind(i,90235)),insider:()=>i.e(883).then(i.bind(i,70883)),jobbio:()=>i.e(3214).then(i.bind(i,23214)),liveramp:()=>i.e(6382).then(i.bind(i,36382)),outbrain:()=>i.e(2716).then(i.bind(i,62716)),search:()=>i.e(1518).then(i.bind(i,61518)),smartBanner:()=>i.e(8448).then(i.bind(i,8448)),socialManager:()=>i.e(5857).then(i.bind(i,45857)),twitter:()=>i.e(5917).then(i.bind(i,85917))},u=new class{constructor(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];this._config=e,this.ffMapping=t,this.alwaysEnableKeyPrefixes=i,this._config}isEnabled(e){if(this.alwaysEnableKeyPrefixes.some((t=>e.startsWith(t))))return!0;const t=this.ffMapping[e]||e;return this.isFeatureFlippingEnabled(t)}isFeatureFlippingEnabled(e){return s.Z.isActive(e)}}(p,{bombora:"bomboraStandardTag","adobe.analytics":"adobe",gigyaFormValidator:"gigya",checkLogin:"login"},["context.","google.gpt","gallery.fullscreen"]),y=new class{constructor(e){this.LoggerClass=e,this.loggers=new Map}getLogger(e){let t=this.loggers.get(e);return t||(t=new this.LoggerClass(e),this.loggers.set(e,t)),t}}(n.Z);class m{constructor(){}static getInstance(){return m._instance?m._instance:m.newInstance()}static newInstance(){return m._instance=new l("AppContainer",p,u,y),m._instance}}function b(e){return`context.${e}`}m._instance=new l("AppContainer",p,u,y);const f=()=>m.getInstance(),v=m},10322:(e,t,i)=>{i.d(t,{Z:()=>n});class n{setLogger(e){this.logger=e}}},11537:(e,t,i)=>{i.d(t,{Z:()=>s});class n{constructor(e){this.name=e}}class s extends n{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"DebuggableService",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];super(e),this.debugTagsCommon=["all","1"],this.debugTagsSpecific=t,this.debugName=e,this.isDebugLog=this.isDebug()}debug(){if(this.isDebugLog){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];console.debug(`[${this.name}]`,...t)}}dir(){if(this.isDebugLog){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];console.dir(`[${this.name}]`,...t)}}log(){if(this.isDebugLog){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];console.log(`[${this.name}]`,...t)}}warn(){if(this.isDebugLog){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];console.warn(`[${this.name}]`,...t)}}error(){if(this.isDebugLog){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];console.error(`[${this.name}]`,...t)}}isDebug(){const e=new URLSearchParams(window.location.search).get("dbg");return null!==e&&(this.debugTagsCommon.includes(e)||this.debugTagsSpecific.includes(e))}}},91609:(e,t,i)=>{var n,s,r;i.d(t,{Pe:()=>s}),function(e){e.Home="home",e.Main="main",e.Article="article",e.Video="video",e.EmbedVideo="embed-video",e.Newsletter="newsletter",e.EmbedTimeline="embed-timeline",e.Page="page",e.NoComment="no-comment",e.HotTopic="hot-topic",e.Live="live",e.Playlist="playlist",e.Showroom="showroom",e.Weather="weather"}(n||(n={})),function(e){e.Article="article",e.EmbedVideo="embed-video",e.Home="home",e.Live="live",e.Login="login",e.Main="main",e.NoComment="no-comment",e.Page="page",e.Playlist="playlist",e.Showroom="showroom",e.Weather="weather"}(s||(s={})),function(e){e.MainNormal="main",e.MainEmbed="main-embed",e.EmbedVideo="embed-video",e.EmbedJustin="embed-timeline",e.EmbedWeather="embed-weather",e.Home="home",e.Article="article",e.Landing="landing",e.Weather="weather",e.Justin="justin",e.Search="search",e.Showroom="showroom",e.Bulletin="bulletin",e.Live="live",e.Static="static",e.ArticleText="article-text",e.ArticleVideo="article-video"}(r||(r={}))},66983:(e,t,i)=>{i.d(t,{Z:()=>n});const n=class{static isActive(e,t){return window.GlobalStore.keyValues.isFeatureActive(e,t)}}}}]);