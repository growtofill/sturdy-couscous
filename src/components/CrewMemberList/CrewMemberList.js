import React from 'react';

import CrewMemberCard from '../CrewMemberCard/CrewMemberCard';

const data = {"results":[{"gender":"male","name":{"title":"mr","first":"peter","last":"lynch"},"location":{"street":"1158 north road","city":"city of london","state":"humberside","postcode":"G0 0YA","coordinates":{"latitude":"47.7090","longitude":"-113.7149"},"timezone":{"offset":"+7:00","description":"Bangkok, Hanoi, Jakarta"}},"email":"peter.lynch@example.com","login":{"uuid":"c8d18388-649b-4dc7-ac50-21676937d962","username":"goldenbear264","password":"rt6ytere","salt":"AqKS1XD4","md5":"36a2aba1a6156f39bc276ecb30438046","sha1":"28d3492c5f2b261ea93eef2a5c01675bdfad9813","sha256":"afdd7496da7f55ab657f8061bd6389492e05ae41c5277dfff6047c45dca812d7"},"dob":{"date":"1950-12-27T15:14:15Z","age":67},"registered":{"date":"2008-06-26T03:26:39Z","age":10},"phone":"017683 14996","cell":"0761-009-928","id":{"name":"NINO","value":"BG 39 97 67 P"},"picture":{"large":"https://randomuser.me/api/portraits/men/48.jpg","medium":"https://randomuser.me/api/portraits/med/men/48.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/48.jpg"},"nat":"GB"},{"gender":"male","name":{"title":"mr","first":"leroy","last":"hudson"},"location":{"street":"9406 grove road","city":"plymouth","state":"strathclyde","postcode":"F3 0DE","coordinates":{"latitude":"31.0017","longitude":"46.4572"},"timezone":{"offset":"+10:00","description":"Eastern Australia, Guam, Vladivostok"}},"email":"leroy.hudson@example.com","login":{"uuid":"c00c15ad-a0e5-44d8-9467-b681938324f0","username":"lazyduck527","password":"ursitesux","salt":"iDyfjSYf","md5":"ff087c853a235aa61897554a10e3589c","sha1":"790ae17d709b87c5873f643d05f4ea47a50ed04b","sha256":"1ce78f89e971c4f037603518cdccd3567bb185bbbbb34852dcb3b8b456cd88fa"},"dob":{"date":"1965-05-10T20:31:36Z","age":53},"registered":{"date":"2004-01-15T02:14:02Z","age":14},"phone":"015396 80175","cell":"0709-928-942","id":{"name":"NINO","value":"CS 91 09 80 N"},"picture":{"large":"https://randomuser.me/api/portraits/men/98.jpg","medium":"https://randomuser.me/api/portraits/med/men/98.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/98.jpg"},"nat":"GB"},{"gender":"female","name":{"title":"mrs","first":"laura","last":"hawkins"},"location":{"street":"5725 richmond road","city":"newry","state":"cleveland","postcode":"K77 2AQ","coordinates":{"latitude":"-88.1917","longitude":"-78.7332"},"timezone":{"offset":"-3:00","description":"Brazil, Buenos Aires, Georgetown"}},"email":"laura.hawkins@example.com","login":{"uuid":"eaac16db-bce6-42c0-a3ed-3684f0621543","username":"sadsnake904","password":"yyyy","salt":"1e6B0kAp","md5":"8a6da48ba739d4de8a6beae8319f2475","sha1":"cfadc80800a955769a1ce4ee2ad095db1d71f0d5","sha256":"beded2f10a98d6eb5c2895e66ffade3977aaaaf21d4a402dc68e6d62933205b5"},"dob":{"date":"1952-11-20T19:21:48Z","age":65},"registered":{"date":"2002-11-07T13:42:37Z","age":15},"phone":"016973 34249","cell":"0719-979-852","id":{"name":"NINO","value":"BG 40 20 67 A"},"picture":{"large":"https://randomuser.me/api/portraits/women/91.jpg","medium":"https://randomuser.me/api/portraits/med/women/91.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/91.jpg"},"nat":"GB"},{"gender":"female","name":{"title":"ms","first":"vicky","last":"hughes"},"location":{"street":"1825 north road","city":"bristol","state":"strathclyde","postcode":"TS38 1QP","coordinates":{"latitude":"-56.0462","longitude":"-134.1016"},"timezone":{"offset":"+1:00","description":"Brussels, Copenhagen, Madrid, Paris"}},"email":"vicky.hughes@example.com","login":{"uuid":"ce8426ff-9c9d-4c2f-8bc9-556bdfb715ec","username":"happybird542","password":"404040","salt":"klmK6G3x","md5":"e9fdf80cd16b1ffdfcd04bf26eb7d960","sha1":"05ce0b454775c3326d780b0abd8943dc77b31b80","sha256":"473d169e01de283cd960c01fb4bc496ea3602600464303d4f00ae24ecf3a86e4"},"dob":{"date":"1965-06-25T07:51:11Z","age":53},"registered":{"date":"2002-06-22T15:46:21Z","age":16},"phone":"01840 857512","cell":"0772-402-496","id":{"name":"NINO","value":"XX 55 91 81 V"},"picture":{"large":"https://randomuser.me/api/portraits/women/13.jpg","medium":"https://randomuser.me/api/portraits/med/women/13.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/13.jpg"},"nat":"GB"},{"gender":"male","name":{"title":"mr","first":"aiden","last":"freeman"},"location":{"street":"6730 north street","city":"city of london","state":"isle of wight","postcode":"K4S 0DT","coordinates":{"latitude":"77.3896","longitude":"-72.1811"},"timezone":{"offset":"+2:00","description":"Kaliningrad, South Africa"}},"email":"aiden.freeman@example.com","login":{"uuid":"cb200fe4-d400-4f00-b81d-62ee3f5da800","username":"beautifulfrog896","password":"scarlett","salt":"FIqOHa5d","md5":"2d657479589e11e530a67c61c4718098","sha1":"f838243cbfe6e67308e6ad9056cf0c9fd45b263c","sha256":"99829760fec8c4793688a78995633bb1e737ea8c019712c240aa5fe6e9b84d4f"},"dob":{"date":"1960-05-02T08:39:48Z","age":58},"registered":{"date":"2018-04-23T17:27:50Z","age":0},"phone":"017687 87758","cell":"0745-165-117","id":{"name":"NINO","value":"MT 11 30 23 P"},"picture":{"large":"https://randomuser.me/api/portraits/men/33.jpg","medium":"https://randomuser.me/api/portraits/med/men/33.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/33.jpg"},"nat":"GB"}],"info":{"seed":"dae20f841da767d1","results":5,"page":1,"version":"1.2"}};
 
const CrewMemberList = () => (
    data.results.map(crewMember => (
        <CrewMemberCard
            key={crewMember.login.uuid}
            {...crewMember }
        />
    ))
);

export default CrewMemberList;