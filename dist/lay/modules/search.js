/** moai-v1.0 MIT License By https://www.layui.com */
 ;var searchUrl=window.location.href,searchData=searchUrl.split("="),searchText=decodeURI(searchData[1]);window.onload=function(){document.getElementById("keywords").value=searchText};var person={firstName:searchText,age:50};document.getElementById("url1").href="search_content.html?q="+person.firstName,document.getElementById("url2").href="search_atlas.html?q="+person.firstName,document.getElementById("url3").href="search_user.html?q="+person.firstName;