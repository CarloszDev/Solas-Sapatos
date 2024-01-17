import axios from 'axios';
import FormData from 'form-data';

 const form = new FormData();
 form.append('login', 'solasesapatos');
 form.append('password', '@Theo2017');

 const response = await axios.post(
   'https://www.bling.com.br/Api/v3/oauth/login',
   form,
   {
     params: {
       'client_id': '3e1470bcc067d779f07e67dbe006d31f2b53ecae',
       'response_type': 'code',
       'scopes': '98309+98314+363953167',
       'state': '47d5ee2075ac4a20316574da63726de9'
     },
     headers: {
       ...form.getHeaders(),
     }
   }
 );

 //import axios from 'axios';

// const response = await axios.get('https://www.bling.com.br/Api/v3/oauth/authorize', {
//   params: {
//     'client_id': '3e1470bcc067d779f07e67dbe006d31f2b53ecae',
//     'response_type': 'code',
//     'scopes': '98309 98314 363953167',
//     'state': '47d5ee2075ac4a20316574da63726de9'
//   },
//   headers: {
//     'authority': 'www.bling.com.br',
//     'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//     'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
//     'cache-control': 'max-age=0',
//     'referer': 'https://www.bling.com.br/OAuth2/views/login.php?client_id=3e1470bcc067d779f07e67dbe006d31f2b53ecae&response_type=code&scopes=98309+98314+363953167&state=47d5ee2075ac4a20316574da63726de9',
//     'sec-ch-ua': '"Opera GX";v="105", "Chromium";v="119", "Not?A_Brand";v="24"',
//     'sec-ch-ua-mobile': '?0',
//     'sec-ch-ua-platform': '"Windows"',
//     'sec-fetch-dest': 'document',
//     'sec-fetch-mode': 'navigate',
//     'sec-fetch-site': 'same-origin',
//     'sec-fetch-user': '?1',
//     'upgrade-insecure-requests': '1',
//     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 OPR/105.0.0.0'
//   }
// });

console.log('Magia Negra || ', response)
