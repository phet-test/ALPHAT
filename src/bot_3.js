const LineConnect = require('./connect');
let LINE = require('./main_3.js');

const auth = {
	authToken: 'Eloh4K4zokpQEKo5GP25.rb40y3Su137/1Dpq+Qh/Pq.ajC72mldGPMhfoGD2rMT169FwWXSugF8YXNa0zY7EQc=',
	certificate: '3ebfcbd976548b9d6856e5ccc8bc06c44526650b4807a5aa9052d8ad10c99cc8',
}
let client =  new LineConnect(auth);
 let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
