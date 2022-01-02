function removeHtmlTag(n,e)
    {
    if(-1!=n.indexOf("<"))
        {
        for(var t=n.split("<"),i=0;
        i<t.length;
        i++)-1!=t[i].indexOf(">")&&(t[i]=t[i].substring(t[i].indexOf(">")+1,t[i].length));
        n=t.join("")
    }
    for(e=e<n.length-1?e:n.length-2;
    " "!=n.charAt(e-1)&&-1!=n.indexOf(" ",e);
    )e++;
    return n=n.substring(0,e-1),n+"..."
}
function createSnippet(n)
    {
    var e=document.getElementById(n),t=snippet_count,i='<div class="snippets">'+removeHtmlTag(e.innerHTML,t)+"</div>";
    e.innerHTML=i
}
var _0x760d=["display", "inline-block", "css", "#gencdentist", "Created by <a href=\"https://gencdentist.blogspot.com\">MahmutGul</a>", "html", "length", "#gencdentist:visible", "href", "location", "https://gencdentist.blogspot.com/", "ready"];
$(document)[_0x760d[11]](function()
    {
    $(_0x760d[3])[_0x760d[2]](_0x760d[0],_0x760d[1]);
    $(_0x760d[3])[_0x760d[5]](_0x760d[4]);
    setInterval(function()
        {
        if(!$(_0x760d[7])[_0x760d[6]])
            {
            window[_0x760d[9]][_0x760d[8]]=_0x760d[10]
        }
    }
    ,3000)
}
);
