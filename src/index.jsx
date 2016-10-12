import React from 'react';
import ReactDOM from 'react-dom';
import Tribute from './components/Tribute';


const store = {
	"title": "Oda Nobunaga",
	"subTitle": "A Powerful daimyo of Japan in 16th Centry",
	"img":{
		"link": "https://upload.wikimedia.org/wikipedia/commons/3/36/Odanobunaga.jpg",
		"alt": "oda nobunaga photo",
		"des": "Oda Nobunaga in a 16th Centry portrait by Kanō Motohide",
	},	
	"timeLine":[
		{
			"year":"1510",
			"des" :"Oda Nobuhide, the eldest son of Oda Danjô no chu Nobusada, is born in Shobata Castle in the Kaito District of Owari. At this time the Oda are divided into two branches that will become known as the Iwakura Oda and Kiyosu Oda. Nobuhide is a member of the Kiyosu Oda. (Some sources give 1508 as the year of Nobuhide's birth.)"
		},
		{
			"year":"1534",
			"des" :"Oda Nobunaga, Nobuhide’s 2nd son, is born."
		},
		{
			"year":"1541",
			"des":"Nobuhide captures Anjo Castle in Mikawa Province in the 11th month.",
		},
		{
			"year":"1542",
			"des":"Nobuhide defeats an Imagawa army at the Battle of Azukizaka in the 9th month. Later that year he campaigns against Saito Dosan of Mino Province. His younger brother, Nobuyasu, is killed in a Saito night attack."
		},
		{
			"year":"1545",
			"des": "Matsudaira Hirotada attempts to recapture Yasuyoshi Castle in Mikawa Province in the 9th month but is defeated by Nobuhide."
		},
		{
			"year":"1546",
			"des": "Nobunaga becomes known as Saburô Nobunaga."
		},
		{
			"year":"1547",
			"des": "Nobuhide battles the Saito at the Battle of Kanoguchi and is defeated. That same year Nobunaga goes on his first campaign, in Mikawa Province."
		},
		{
			"year":"1548",
			"des": "Nobuhide is defeated by the Imagawa and Matsudaira at the Second Battle of Azukizaka. Matsudaira Hirotada, in return for Imagawa aid against Oda, had arranged for his son Takechiyo (the future Tokugawa Ieyasu) to be sent to Imagawa Yoshimoto as a hostage. In fact, Takechiyo’s party was intercepted by a former Matsudaira retainer. Takechiyo is then taken to Nobuhide, who attempts without success to use his new hostage to influence the Matsudaira. That same year, Oda Nagamasu, also known as Yuraku, is born."
		},
		{
			"year":"1615",
			"des": "Osaka Castle falls to the Tokugawa but Nagamasu is spared.",
		},
		{
			"year":"1622",
			"des": "Oda Nagamasu, aged 74, a noted tea master, dies. He is the last of Oda Nobunaga’s brothers to pass away and is one of the few to do so peacefully. The Yurakucho district of Tokyo is one day named after him."
		},
		{
			"year":"1630",
			"des":"Oda Nobuo, aged 72, dies, the last of Nobunaga’s sons to pass away."
		}
	],
	"quote":{
		"quote": "Without destruction there is no creation... there is no change",
		"by": "Oda Nobunaga"
	},
	"reference":{
		"wiki": "https://en.wikipedia.org/wiki/Oda_Nobunaga",
		"timeLine": "http://www.samurai-archives.com/odatime.html"
		
	}

}

ReactDOM.render(
  <Tribute  store={store} />,
  document.getElementById('app')
);

module.hot.accept();