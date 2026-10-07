const d=document,$=s=>d.querySelector(s),$$=s=>[...d.querySelectorAll(s)],RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
let mx=-999,my=-999,PX=0,PY=0;
d.documentElement.classList.add('js');
const SK=[['JS','JavaScript',85],['TS','TypeScript',70],['Nd','Node.js & Express',75],['Py','Python',80],['Mg','MongoDB',70],['SQ','SQL',70],['Gt','Git & GitHub',80],['Pw','Progressive Web Apps',65],['Fr','Framer',60],['Bl','Blender',55],['Ps','Photoshop',65],['BI','Power BI & Tableau',60]];
$('#sg').innerHTML=SK.map(([m,n,v])=>`<div class="card sk" data-t="1" style="--o:${163.4*(1-v/100)}"><div class="ic"><svg viewBox="0 0 60 60"><circle class="t" cx="30" cy="30" r="26"/><circle class="v" cx="30" cy="30" r="26"/></svg><b>${m}</b></div><h3>${n}</h3><small>${v}%</small></div>`).join('');
const DEMO={d1:'',d2:''};
for(const k in DEMO)if(DEMO[k]){const a=$('#'+k);a.href=DEMO[k];a.target='_blank';a.rel='noopener';a.hidden=false}
const ov=$('#ov'),mn=$('#mn'),ct=$('#ct'),it=$('#intro'),lk=[$('main'),$('header'),$('footer'),ov];
function enter(e){const x=e.clientX||innerWidth/2,y=e.clientY||innerHeight/2;
it.style.setProperty('--cx',x+'px');it.style.setProperty('--cy',y+'px');
requestAnimationFrame(()=>{it.classList.add('gone');d.body.classList.add('entered');d.body.classList.remove('lock');lk.forEach(n=>n.inert=false);setTimeout(()=>it.remove(),1300)})}
if(location.hash){it.remove();d.body.classList.add('entered')}
else{d.body.classList.add('lock');lk.forEach(n=>n.inert=true);it.onclick=enter}
mn.onclick=()=>{const o=ov.classList.toggle('on');mn.setAttribute('aria-expanded',o);mn.textContent=o?'Close':'Menu'};
d.addEventListener('keydown',e=>{if(e.key=='Escape'&&ov.classList.contains('on'))mn.click()});
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
const h=a.getAttribute('href'),t=$(h);if(!t)return;e.preventDefault();
if(ov.classList.contains('on'))mn.click();
const go=()=>{scrollTo({top:t.getBoundingClientRect().top+scrollY-60,behavior:'instant'});history.replaceState(0,'',h)};
if(RM)return go();
if(d.startViewTransition){const x=e.clientX||innerWidth/2,y=e.clientY||innerHeight/2,r=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
d.startViewTransition(go).ready.then(()=>R.animate({clipPath:['circle(0 at '+x+'px '+y+'px)','circle('+r+'px at '+x+'px '+y+'px)']},{duration:800,easing:'cubic-bezier(.7,0,.2,1)',pseudoElement:'::view-transition-new(root)'}));return}
ct.style.transformOrigin='bottom';ct.style.transform='scaleY(1)';
setTimeout(()=>{go();ct.style.transformOrigin='top';ct.style.transform='scaleY(0)'},520)}));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
$$('.rv').forEach(e=>io.observe(e));
const co=new IntersectionObserver(e=>e.forEach(x=>{if(!x.isIntersecting)return;co.unobserve(x.target);
const el=x.target,n=+el.dataset.n,dc=el.dataset.d|0,t0=performance.now();
(function f(t){const p=Math.min(1,(t-t0)/1400);el.textContent=(n*(1-Math.pow(1-p,3))).toFixed(dc);if(p<1)requestAnimationFrame(f)})(t0)}),{threshold:.6});
if(!RM)$$('.num').forEach(n=>co.observe(n));
const bar=$('#bar'),R=d.documentElement;
addEventListener('scroll',()=>{bar.style.transform='scaleX('+Math.min(1,scrollY/(d.body.scrollHeight-innerHeight))+')';R.style.setProperty('--sy',scrollY)},{passive:true});
const hero=$('.hero');
$$('.card').forEach(c=>{
c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
c.style.setProperty('--mx',x+'px');c.style.setProperty('--my',y+'px');
if(c.dataset.t&&!RM)c.style.transform='perspective(800px) rotateX('+(.5-y/r.height)*9+'deg) rotateY('+(x/r.width-.5)*9+'deg) translateY(-4px)'};
c.onmouseleave=()=>c.style.transform=''});
$$('.mag').forEach(b=>{
b.onmousemove=e=>{if(RM)return;const r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.25+'px,'+(e.clientY-r.top-r.height/2)*.35+'px)'};
b.onmouseleave=()=>b.style.transform=''});
let cur,ring,gl,rx=0,ry=0;
if(matchMedia('(pointer:fine)').matches&&!RM){
d.body.classList.add('cc');
cur=d.createElement('div');ring=d.createElement('div');gl=d.createElement('div');
cur.className='cur';ring.className='ring';gl.className='mg';d.body.append(gl,cur,ring);
(function f(){rx+=(mx-rx)*.15;ry+=(my-ry)*.15;ring.style.transform='translate('+rx+'px,'+ry+'px)';requestAnimationFrame(f)})();
d.addEventListener('mouseover',e=>ring.classList.toggle('big',!!e.target.closest('a,button,.card')))}
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;PX=mx/innerWidth-.5;PY=my/innerHeight-.5;
hero.style.setProperty('--px',PX);hero.style.setProperty('--py',PY);
it.style.setProperty('--ix',mx+'px');it.style.setProperty('--iy',my+'px');
if(cur){cur.style.transform='translate('+mx+'px,'+my+'px)';gl.style.transform='translate('+mx+'px,'+my+'px)'}});
const nc=$('#net'),x=nc.getContext('2d');let W,H,P=[];
function rs(){W=nc.width=innerWidth;H=nc.height=innerHeight;P=Array.from({length:Math.min(70,W/18|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))}
rs();addEventListener('resize',rs);
(function f(){x.clearRect(0,0,W,H);
P.forEach((p,i)=>{if(!RM){p.x+=p.vx;p.y+=p.vy}if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
x.fillStyle='rgba(34,211,238,.7)';x.fillRect(p.x,p.y,2,2);
for(let j=i+1;j<P.length;j++){const q=P[j],dd=Math.hypot(p.x-q.x,p.y-q.y);if(dd<130){x.strokeStyle='rgba(139,92,246,'+(1-dd/130)*.35+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}
const dm=Math.hypot(p.x-mx,p.y-my);if(dm<170){x.strokeStyle='rgba(236,72,153,'+(1-dm/170)*.6+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(mx,my);x.stroke()}});
if(!RM)requestAnimationFrame(f)})();
addEventListener('load',()=>{if(!window.THREE)return;const el=$('#cv');try{
const r=new THREE.WebGLRenderer({canvas:el,alpha:true,antialias:true}),s=new THREE.Scene(),c=new THREE.PerspectiveCamera(45,1,.1,50),G=new THREE.Group();
r.setPixelRatio(Math.min(devicePixelRatio,2));c.position.z=7;s.add(G);
const U={t:{value:0}},K=new THREE.Mesh(new THREE.TorusKnotGeometry(1.1,.36,180,28),new THREE.ShaderMaterial({uniforms:U,vertexShader:'varying vec3 n,v;void main(){n=normalize(normalMatrix*normal);vec4 m=modelViewMatrix*vec4(position,1.);v=-m.xyz;gl_Position=projectionMatrix*m;}',fragmentShader:'varying vec3 n,v;uniform float t;void main(){float f=pow(1.-abs(dot(normalize(n),normalize(v))),2.);vec3 a=.5+.5*cos(6.283*(vec3(0.,.33,.67)+f*1.2+t*.15));gl_FragColor=vec4(mix(vec3(.02,.03,.08),a,clamp(.25+f*.85,0.,1.)),1.);}'})),
Wf=new THREE.Mesh(new THREE.IcosahedronGeometry(2.1,1),new THREE.MeshBasicMaterial({color:0x22d3ee,wireframe:true,transparent:true,opacity:.3})),
T=new THREE.Mesh(new THREE.TorusGeometry(2.7,.015,8,200),new THREE.MeshBasicMaterial({color:0xec4899}));
T.rotation.x=1.25;
const a=[];for(let i=0;i<500;i++){const u=Math.random()*6.283,v=Math.acos(2*Math.random()-1),dd=3+Math.random()*.8;a.push(dd*Math.sin(v)*Math.cos(u),dd*Math.sin(v)*Math.sin(u),dd*Math.cos(v))}
const gm=new THREE.BufferGeometry();gm.setAttribute('position',new THREE.Float32BufferAttribute(a,3));
const Pt=new THREE.Points(gm,new THREE.PointsMaterial({color:0x8b5cf6,size:.035}));
G.add(K,Wf,T,Pt);
let on=1;new IntersectionObserver(e=>on=e[0].isIntersecting).observe(el);
function rz(){const w=el.clientWidth,h=el.clientHeight;r.setSize(w,h,false);c.aspect=w/h;c.updateProjectionMatrix()}
rz();addEventListener('resize',rz);
(function f(){requestAnimationFrame(f);if(!on)return;const t=RM?0:1;
U.t.value+=.016*t;K.rotation.x+=.008*t;K.rotation.y+=.012*t;Wf.rotation.y-=.004*t;T.rotation.z+=.01*t;Pt.rotation.y+=.0015*t;
G.rotation.y+=(PX*.9+scrollY*.002-G.rotation.y)*.05;G.rotation.x+=(PY*.5-G.rotation.x)*.05;r.render(s,c)})();
}catch(e){el.hidden=true}});
$('#f').onsubmit=e=>{e.preventDefault();const f=e.target;
location.href='mailto:omshewale28@gmail.com?subject='+encodeURIComponent('Portfolio message from '+f.nm.value)+'&body='+encodeURIComponent(f.ms.value+'\n\n'+f.nm.value+'\n'+f.em.value);
$('#st').textContent='Opening your email app. If nothing opens, write to omshewale28@gmail.com.'};
