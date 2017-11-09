const LineConnect = require('./connect');
let LINE = require('./main_1.js');

const auth = {
	authToken: 'ElxMUR2f9mC8VBxSxSAd.f2qKH7z9Vam8UA5s1cN6Zq.FEDKtLHwdIaLH9f1J/ysI+fJVVeiSN+NTO+8fw9aQ6U=',
	certificate: 'f1f79cc27e730af685f73de4cafcd175183c50f085559ff50e976786e119b2a3',
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
