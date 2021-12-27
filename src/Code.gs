/* HARMONY ENDPOINTS */
HARMONY_URL = 'https://api.s0.t.hmny.io/'

/**
 * hmy_getBalance
 * GetBalance
 * Get latest balance of an address.
 * https://docs.harmony.one/home/developers/api/methods/account-methods/hmy_getbalance
 *
 * @param {String} address Address of the user you want to query
 * @return {String} the result of the API response
 * @customfunction
 */  

function testHarmony(ADDRESS_TO_LOOKUP) {
  var address = ADDRESS_TO_LOOKUP;
  var url = HARMONY_URL;
  var headers = 
    {
      "Content-Type": "application/json" 
    }
  var payload = {
    "id": "1",
    "jsonrpc": "2.0",
    "method": "hmyv2_getBalance",
    "params": [
        address
    ]
}
  Logger.log(payload)
  var options = {
  "method": "POST",
  "contentType": "application/json",
  "headers": headers,
  "payload": JSON.stringify(payload)
  };
  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);
  var balance = data.result;
  Logger.log(balance);
  return balance;
}


/* Note: Using Google Apps Script, we recreated this example cURL From https://docs.harmony.one/home/developers/api/methods/account-methods/hmy_getbalance
curl -d '{
    "id": "1",
    "jsonrpc": "2.0",
    "method": "hmy_getBalance",
    "params": [
        "one1z05g55zamqzfw9qs432n33gycdmyvs38xjemyl", 
        "0x1"
    ]
}' -H "Content-Type: application/json" -X POST "http://localhost:9500"
*/
