/**
 * Created by Jason on 2018/6/20.
 */

var searchUrl =window.location.href;
var searchData =searchUrl.split("=");        //截取 url中的“=”,获得“=”后面的参数
var searchText =decodeURI(searchData[1]);   //decodeURI解码
window.onload = function(){
    document.getElementById('keywords').value =  searchText;
}
var person = {
    firstName:searchText,
    age:50
};
document.getElementById("url1").href = "search_content.html?q="+person.firstName;
document.getElementById("url2").href = "search_atlas.html?q="+person.firstName;
document.getElementById("url3").href = "search_user.html?q="+person.firstName;