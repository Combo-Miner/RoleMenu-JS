const _0x3ce63d=_0x4c23;(function(_0x40fe63,_0x3f5c7b){const _0x3c1b1d=_0x4c23,_0x36fa28=_0x40fe63();while(!![]){try{const _0x28a759=-parseInt(_0x3c1b1d(0x142))/0x1+-parseInt(_0x3c1b1d(0x152))/0x2*(parseInt(_0x3c1b1d(0x150))/0x3)+parseInt(_0x3c1b1d(0x14b))/0x4+parseInt(_0x3c1b1d(0x157))/0x5*(parseInt(_0x3c1b1d(0x155))/0x6)+parseInt(_0x3c1b1d(0x147))/0x7*(parseInt(_0x3c1b1d(0x148))/0x8)+parseInt(_0x3c1b1d(0x13e))/0x9*(parseInt(_0x3c1b1d(0x149))/0xa)+-parseInt(_0x3c1b1d(0x14c))/0xb*(parseInt(_0x3c1b1d(0x141))/0xc);if(_0x28a759===_0x3f5c7b)break;else _0x36fa28['push'](_0x36fa28['shift']());}catch(_0x58d75c){_0x36fa28['push'](_0x36fa28['shift']());}}}(_0x545e,0xc82f3));function _0x4c23(_0xf26637,_0x4332be){const _0x545e0d=_0x545e();return _0x4c23=function(_0x4c235c,_0x41a1e8){_0x4c235c=_0x4c235c-0x13c;let _0x98fbfa=_0x545e0d[_0x4c235c];return _0x98fbfa;},_0x4c23(_0xf26637,_0x4332be);}const client=require(_0x3ce63d(0x146)),db=require(_0x3ce63d(0x143));function _0x545e(){const _0x1a385f=['32394ZgdyRD','remove','has','2731728iGLmCD','bot','15kscanL','permissions','cache','2279736wTfdGY','find','message','12kNKzcZ','450207VsYekk','quick.db','emoji','partial','../../index','7iJHeOD','1622056EYWIEk','20KqflHf','catch','5098868nWzLJd','8089763RftbzP','fetch','roles','toString','249kdCvYc','get'];_0x545e=function(){return _0x1a385f;};return _0x545e();}client['on']('messageReactionRemove',async(_0x416735,_0x1190ed)=>{const _0x27cebf=_0x3ce63d;if(_0x416735[_0x27cebf(0x140)][_0x27cebf(0x145)])await _0x416735[_0x27cebf(0x140)]['fetch']();if(_0x416735[_0x27cebf(0x145)])await _0x416735[_0x27cebf(0x14d)]();if(_0x1190ed[_0x27cebf(0x156)])return;const {guild:_0x3a72f7}=_0x416735[_0x27cebf(0x140)];if(!_0x3a72f7)return;if(!_0x3a72f7['me'][_0x27cebf(0x13c)][_0x27cebf(0x154)]('MANAGE_ROLES'))return;const _0x45c0f8=_0x3a72f7['members'][_0x27cebf(0x13d)][_0x27cebf(0x151)](_0x1190ed['id']);if(!_0x45c0f8)return;const _0x349122=db['get']('reactions_'+_0x3a72f7['id']+'_'+_0x416735['message']['id']);if(!_0x349122)return;const _0x55f8ad=_0x349122[_0x27cebf(0x13f)](_0x2b0bdc=>_0x2b0bdc[_0x27cebf(0x144)]===_0x416735[_0x27cebf(0x144)][_0x27cebf(0x14f)]());if(!_0x55f8ad)return;_0x45c0f8[_0x27cebf(0x14e)][_0x27cebf(0x153)](_0x55f8ad['roleId'])[_0x27cebf(0x14a)](_0xbe0a3d=>undefined);});