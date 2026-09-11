import assert from'node:assert/strict';import{INITIAL,stepModel,viable,healthyScore}from'../model.mjs';
const a=stepModel(INITIAL),b=stepModel(INITIAL);assert.deepEqual(a,b);assert.ok(Object.values(a).filter(x=>typeof x==='number').every(Number.isFinite));
let dry={...INITIAL,water:20};const seq=[];for(let i=0;i<4;i++){dry=stepModel(dry);seq.push(dry.grass)}assert.ok(seq.every((v,i)=>i===0||v<=seq[i-1]));
let nofood={...INITIAL,grass:0,clover:0,rabbit:50,grasshopper:50};for(let i=0;i<6;i++)nofood=stepModel(nofood);assert.ok(nofood.rabbit<50&&nofood.grasshopper<50);
let recover={...INITIAL,water:20,sun:30,grass:25,clover:25,rabbit:30,grasshopper:30,fox:25};for(let i=0;i<3;i++)recover=stepModel(recover);const low=healthyScore(recover);recover={...recover,water:80,sun:80};for(let i=0;i<6;i++)recover=stepModel(recover);assert.ok(healthyScore(recover)>low);
assert.equal(viable({grass:true,clover:false,rabbit:true,grasshopper:false,fox:true}).ok,true);assert.equal(viable({grass:false,clover:false,rabbit:true,grasshopper:false,fox:false}).ok,false);assert.equal(viable({grass:true,clover:false,rabbit:false,grasshopper:false,fox:true}).ok,false);
for(let s={...INITIAL},i=0;i<100;i++){s=stepModel(s);for(const k of ['sun','water','grass','clover','rabbit','grasshopper','fox'])assert.ok(s[k]>=0&&s[k]<=100&&Number.isFinite(s[k]))}console.log('model tests: PASS');
