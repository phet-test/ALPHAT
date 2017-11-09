const LineConnect = require('./connect');
let LINE = require('./main_2.js');

const auth = {
	authToken: 'EliLb1zuTldAYhCsZtGc.N5OjwnyMFZQANF4tEWxAZa.nCNt61xBXAXiko7OEch11SwzLEBHNjXfiLcl+D8vvus=',
	certificate: '4c2c47e7f111db14e41acb9e6110ef5d257a9623d9f0399660a6b774c89460ce',
}
//let client =  new LineConnect(auth);
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
