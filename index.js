var request = require('request');
	
var headers = {
	'origin': 'https://hangouts.google.com',
	'accept-language': 'en',
	'authorization': 'SAPISIDHASH 1548048722_e9b962f92d35acc1e7b080925b4a32b7f0bc4415',
	'cookie': 'CONSENT=YES+IN.en+20170126-12-0; ANID=AHWqTUldftN6leGpztLNy2P-psUD0VjdcbkGErKofpYN3x2sXsYoxH_xW1DSZW-E; SID=-gaPSfHaHtHarxpdfQ7EVua62mXis6kk8viISBaSlnOublfEe73cn9wMgCW13_byCrsnkw.; HSID=A5qufslfbf4cEd_Fl; SSID=AUp7laA2DKu46mkCB; APISID=AMJmSvaqy5kH4Y-0/AXOVMh0AL1DeQlQNs; SAPISID=my9Xh1XnjhYnFDNy/A-yMZn5K_sDBLmi5L; NID=156=DjOmrjlPwLrGG2RLphqGxCbNH8ENHYS36rQsX_MaLL6jNlsTSffV5d-L-sHksIvf_bOlPCN2QuLNx5yFP2with2spmCQ6Uks4NuO3mYrSrKT7HvwqmZ98pM3a92UnO_edBgBLmyVBe1j0L1nVMcBZ5c7RvBxYeJ9LzMivPIc3N0dpVwH7ZjYHZ7aTJ3PjnSVLyrK3x-rqWnamYiLYYWtW8PzLrJKToGKSpjBKEuZomni1KVqF_aZGK1teFBA_vRzmdBxiLyQ3QSIl51BvGouG-MjvYNmHw; 1P_JAR=2019-1-21-5; SIDCC=ABtHo-Hi5Lvkw2VVSv6oSl4WdSKpFTyPD4bIkmI2ji5r8eh-JlcQP41PkXadQ5-Xv8lGUUi0Vw',
	'x-client-data': 'CK21yQEIi7bJAQiltskBCKmdygEIqKPKAQi/p8oBCOKoygEY+aXKAQ==',
	'x-goog-authuser': '1',
	'x-http-method-override': 'GET',
	'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
	'content-type': 'application/x-www-form-urlencoded',
	'accept': '*/*',
	'referer': 'https://hangouts.google.com/webchat/u/1/load?client=sm&prop=gmail&nav=true&fid=gtn-roster-iframe-id&os=Linux%20x86_64&stime=1548048119209&xpc=%7B%22cn%22%3A%22gvofj4%22%2C%22tp%22%3A1%2C%22ifrid%22%3A%22gtn-roster-iframe-id%22%2C%22pu%22%3A%22https%3A%2F%2Fhangouts.google.com%2Fwebchat%2Fu%2F1%2F%22%7D&ec=%5B%22ci%3Aec%22%2Ctrue%2Ctrue%2Cfalse%5D&pvt=AMP3uWbsNbAxlY73k8gqqTsapHwPEHVIc2297l2SslIhPNySYvY1oAGltF_6SED0LFb26WzmFesGTpbL1XNr1jOrBgaUpob9wg%3D%3D&href=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F1%2F%3Frel%3D1%26pli%3D1%23inbox&pos=l&uiv=2&hl=en&hpc=true&hsm=true&hrc=true&pal=1&uqp=false&gooa=false&gltsi=true&gusm=true&sl=false&hs=%5B%22h_hs%22%2Cnull%2Cnull%2C%5B0%2C0%5D%5D&moleh=380&mmoleh=36&two=https%3A%2F%2Fmail.google.com&host=1&zx=adxm6dyv0uis',
	'authority': 'people-pa.clients6.google.com'
};
module.exports ={
	isValid: (email,cb)=>{
		
		var dataString = 'query='+email+'&client=HANGOUTS_WITH_DATA_AND_PHONE_CONTACTS&pageSize=15&key=AIzaSyD7InnYR3VKdb4j2rMUEbTCIr2VyEazl6k';
	
		var options = {
			url: 'https://people-pa.clients6.google.com/v2/people/autocomplete?key=AIzaSyD7InnYR3VKdb4j2rMUEbTCIr2VyEazl6k',
			method: 'POST',
			headers: headers,
			body: dataString
		};
	
		function callback(error, response, body) {
			if (!error && response.statusCode == 200) {
				body = JSON.parse(body);
				if (body.results) cb(null,true);
				else cb("false")
				// return body;
			}else{
				cb(error)
			}
		}
		request(options, callback);
	},
	getProfile:(email,cb)=>{
		
		var dataString = 'query='+email+'&client=HANGOUTS_WITH_DATA_AND_PHONE_CONTACTS&pageSize=15&key=AIzaSyD7InnYR3VKdb4j2rMUEbTCIr2VyEazl6k';
	
		var options = {
			url: 'https://people-pa.clients6.google.com/v2/people/autocomplete?key=AIzaSyD7InnYR3VKdb4j2rMUEbTCIr2VyEazl6k',
			method: 'POST',
			headers: headers,
			body: dataString
		};
	
		function callback(error, response, body) {
			if (!error && response.statusCode == 200) {
				body = JSON.parse(body);
				if (body.results){
					var setDoc = {email:email,valid: true};
                        if (body.results && body.results[0].person && body.results[0].person.name && body.results[0].person.name.length) {
                            body.results[0].person.name.forEach(function (value) {
                                if(value.displayName && value.displayName.toLowerCase() != email){
                                    setDoc["fullname"] = value.displayName;
                                }
                            })
						}
						if (body.results && body.results[0].person && body.results[0].person.phone && body.results[0].person.phone.length) {
                            if(body.results[0].person.phone[0].value)	setDoc["contact"] = body.results[0].person.phone[0].value
						}
						if(body.results && body.results[0].person && body.results[0].person.personId){
                            setDoc["gplusid"] = body.results[0].person.personId;
                        }
                        cb(null, setDoc);
				}
				else cb("No Profile for "+email+"");
			}else{
				cb(error)
			}
		}
		request(options, callback);
	}
}