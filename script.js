// ...existing code...
function googleSearch(type) {
    var targetDomain = document.getElementById('target').value;

    if (!targetDomain) {
        alert('Please enter a target domain.');
        return;
    }

    var searchQuery = 'site:' + targetDomain;

    switch (type) {
        case 1:
            searchQuery += ' intitle:index.of';
            break;
        case 2:
            searchQuery += ' ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini';
            break;
        case 3:
            searchQuery += ' ext:sql | ext:dbf | ext:mdb';
            break;
        case 4:
            searchQuery += ' ext:log';
            break;
        case 5:
            searchQuery += ' ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup';
            break;
        case 6:
            searchQuery += ' inurl:login | inurl:signin | intitle:login | intitle:signin | inurl:secure';
            break;
        case 7:
            searchQuery += ' intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"';
            break;
        case 8:
            searchQuery += ' ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv';
            break;
        case 9:
            searchQuery += ' ext:php intitle:phpinfo "published by the PHP Group"';
            break;
        case 10:
            searchQuery += ' inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download';
            break;
        case 11:
            searchQuery += ' inurl:shell | inurl:backdoor | inurl:wso | inurl:cmd | shadow | passwd | boot.ini | inurl:backdoor';
            break;
        case 12:
            searchQuery += ' inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config';
            break;
        case 13:
            searchQuery += ' inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http';
            break;
        case 14:
            searchQuery += ' ext:action | ext:struts | ext:do';
            break;
        case 15:
            var site = 'site:pastebin.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 16:
            var site = 'site:linkedin.com employees "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 17:
            var site = 'inurl:"/phpinfo.php" | inurl:".htaccess" | inurl:"/.git" ' + targetDomain + ' -github';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 18:
            var site = 'site:*.' + targetDomain;
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 19:
            var site = 'site:*.*.' + targetDomain;
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 20:
            var site = 'inurl:wp-content | inurl:wp-includes "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 21:
            var site = '"*.' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 23:
            var url = 'http://ci-www.threatcrowd.org/domain.php?domain=' + targetDomain;
            window.open(url, '_blank');
            return;
        case 24:
            var site = '+inurl:' + targetDomain + ' +ext:swf';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 25:
            var site = 'site:' + targetDomain + ' mime:swf';
            var url = 'https://yandex.com/search/?text=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 26:
            var site = targetDomain;
            var url = 'https://web.archive.org/cdx/search?url=' + encodeURIComponent(site) + '/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=urlkey:.*swf&limit=100000&_=1507209148310';
            window.open(url, '_blank');
            return;
        case 27:
            var site = targetDomain;
            var url = 'https://web.archive.org/cdx/search?url=' + encodeURIComponent(site) + '/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=mimetype:application/x-shockwave-flash&limit=100000&_=1507209148310';
            window.open(url, '_blank');
            return;
        case 28:
            var site = '.' + targetDomain;
            var url = 'https://web.archive.org/web/*/(.' + encodeURIComponent(site) + ')';
            window.open(url, '_blank');
            return;
        case 29:
            var site = targetDomain;
            var url = 'https://web.archive.org/web/*/' + encodeURIComponent(site) + '/*';
            window.open(url, '_blank');
            return;
        case 30:
            var url = 'https://crt.sh/?q=%25.' + targetDomain;
            window.open(url, '_blank');
            return;
        case 32:
            var site = targetDomain;
            var url = 'https://www.reddit.com/search/?q=' + encodeURIComponent(site) + '&source=recent';
            window.open(url, '_blank');
            return;
        case 34:
            var url = 'https://censys.io/ipv4?q=' + targetDomain;
            window.open(url, '_blank');
            return;
        case 35:
            var url = 'https://censys.io/domain?q=' + targetDomain;
            window.open(url, '_blank');
            return;
        case 36:
            var url = 'https://censys.io/certificates?q=' + targetDomain;
            window.open(url, '_blank');
            return;
        case 37:
            var url = 'https://www.shodan.io/search?query=' + targetDomain;
            window.open(url, '_blank');
            return;
        case 38:
            searchQuery += ' inurl:"/geoserver/ows?service=wfs"';
            break;
        case 39:
            searchQuery += ' intext:"ArcGIS REST Services Directory" intitle:"Folder: /"';
            break;
        case 40:
            searchQuery += ' inurl:/wp-content/uploads/wpo_wcpdf';
            break;
        case 41:
            searchQuery += ' intitle:"index of "main.yml"';
            break;
        case 42:
            searchQuery += ' inurl:/admin.aspx';
            break;
        case 43:
            searchQuery += ' inurl:/wp-content/uploads/wpo_wcpdf';
            break;
        case 44:
            searchQuery += ' inurl:uploadimage.php';
            break;
        case 45:
            searchQuery += ' inurl:*/wp-content/plugins/contact-form-7/';
            break;
        case 46:
            searchQuery += ' intitle:index.of conf.php';
            break;
        case 47:
            searchQuery += ' intitle:"Sharing API Info"';
            break;
        case 48:
            searchQuery += ' intitle:"Index of" inurl:/backup/ "admin.zip"';
            break;
        case 49:
            searchQuery += ' intitle:"index of" github-api';
            break;
        case 50:
            searchQuery += ' inurl:wp-content/uploads/wcpa_uploads';
            break;
        case 51:
            searchQuery += ' inurl:user intitle:"Drupal" intext:"Log in" -"powered by"';
            break;
        case 52:
            searchQuery += ' inurl: /libraries/joomla/database/';
            break;
        case 53:
            searchQuery += ' inurl:"php?sql=select" ext:php';
            break;
        case 54:
            searchQuery += ' inurl:"wp-content" intitle:"index.of" intext:wp-config.php';
            break;
        case 55:
            searchQuery += ' intext:"index of" inurl:json-rpc';
            break;
        case 56:
            searchQuery += ' intitle:"index of" "download.php?file="';
            break;
        case 57:
            searchQuery += ' intext:"index of" inurl:jwks-rsa';
            break;
        case 58:
            searchQuery += ' inurl:"wp-content" intitle:"index.of" intext:backup"';
            break;
        case 59:
            searchQuery += ' intitle:index.of conf.mysql';
            break;
        case 60:
            searchQuery += ' intitle:"index of" "users.yml" | "admin.yml" | "config.yml"';
            break;
        case 61:
            searchQuery += ' intitle:"index of" "docker-compose.yml"';
            break;
        case 62:
            searchQuery += ' intext:pom.xml intitle:"index of /"';
            break;
        case 63:
            searchQuery += ' intext:"Index of" intext:"/etc"';
            break;
        case 64:
            searchQuery += ' "sql" "parent" intitle:index.of -injection';
            break;
        case 65:
            searchQuery += ' ext:php inurl:?';
            break;
        case 66:
            searchQuery += ' ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess | ext:json';
            break;
        case 67:
            searchQuery += ' "sql" "parent" intitle:index.of -injection';
            break;
        case 31:
            searchQuery += ' inurl:"error" | intitle:"exception" | intitle:"failure" | intitle:"server at" | inurl:exception | "database error" | "SQL syntax" | "undefined index" | "unhandled exception" | "stack trace"';
            break;
        case 22:
            searchQuery += ' inurl:api | site:*/rest | site:*/v1 | site:*/v2 | site:*/v3';
            break;
        case 33:
            searchQuery += ' inurl:q= | inurl:s= | inurl:search= | inurl:query= | inurl:keyword= | inurl:lang= inurl:&';
            break;
        case 67:
            searchQuery += ' inurl:conf | inurl:env | inurl:cgi | inurl:bin | inurl:etc | inurl:root | inurl:sql | inurl:backup | inurl:admin | inurl:php';
            break;
        case 68:
            searchQuery += ' inurl:url= | inurl:return= | inurl:next= | inurl:redirect= | inurl:redir= | inurl:ret= | inurl:r2= | inurl:page= inurl:& inurl:http';
            break;
        case 69:
            searchQuery += ' inurl:id= | inurl:pid= | inurl:category= | inurl:cat= | inurl:action= | inurl:sid= | inurl:dir= inurl:&';
            break;
        case 70:
            searchQuery += ' inurl:http | inurl:url= | inurl:path= | inurl:dest= | inurl:html= | inurl:data= | inurl:domain=  | inurl:page= inurl:&';
            break;
        case 71:
            searchQuery += ' inurl:include | inurl:dir | inurl:detail= | inurl:file= | inurl:folder= | inurl:inc= | inurl:locate= | inurl:doc= | inurl:conf= inurl:&';
            break;
        case 72:
            searchQuery += ' inurl:cmd | inurl:exec= | inurl:query= | inurl:code= | inurl:do= | inurl:run= | inurl:read=  | inurl:ping= inurl:&';
            break;
        case 73:
            searchQuery += ' ”choose file”';
            break;
        case 74:
            searchQuery += ' inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer';
            break;
        case 75:
            searchQuery += ' inurl:test | inurl:env | inurl:dev | inurl:staging | inurl:sandbox | inurl:debug | inurl:temp | inurl:internal | inurl:demo';
            break;
        case 76:
            searchQuery += ' ext:txt | ext:pdf | ext:xml | ext:xls | ext:xlsx | ext:ppt | ext:pptx | ext:doc | ext:docx intext:“confidential” | intext:“Not for Public Release” | intext:”internal use only” | intext:“do not distribute”';
            break;
        case 77:
            searchQuery += ' inurl:email= | inurl:phone= | inurl:password= | inurl:secret= inurl:&';
            break;
        case 78:
            searchQuery += ' inurl:/content/usergenerated | inurl:/content/dam | inurl:/jcr:content | inurl:/libs/granite | inurl:/etc/clientlibs | inurl:/content/geometrixx | inurl:/bin/wcm | inurl:/crx/de';
            break;
        case 79:
            var site = 'site:openbugbounty.org inurl:reports intext:' + targetDomain;
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 80:
            var site = 'site:groups.google.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 81:
            var site = 'site:trello.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 82:
            var site = 'site:jsfiddle.net "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 83:
            var site = 'site:codebeautify.org "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 84:
            var site = 'site:codepen.io "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 85:
            var site = 'site:s3.amazonaws.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 86:
            var site = 'site:blob.core.windows.net "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 87:
            var site = 'site:googleapis.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 88:
            var site = 'site:drive.google.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 89:
            var site = 'site:dev.azure.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 90:
            var site = 'site:onedrive.live.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 91:
            var site = 'site:digitaloceanspaces.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 92:
            var site = 'site:sharepoint.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 93:
            var site = 'site:s3-external-1.amazonaws.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 94:
            var site = 'site:s3.dualstack.us-east-1.amazonaws.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 95:
            var site = 'site:dropbox.com/s "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 96:
            var site = 'site:box.com/s "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 97:
            var site = 'site:docs.google.com inurl:"/d/" "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 98:
            var site = 'site:jfrog.io "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 99:
            var site = 'site:firebaseio.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 100:
            searchQuery += ' filetype:js apiKey';
            break;
        case 101:
            searchQuery += ' filetype:js token';
            break;
        case 102:
            searchQuery += ' inurl:.env';
            break;
        case 103:
            searchQuery += ' "Authorization: Bearer"';
            break;
        case 104:
            var site = 'site:scribd.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 105:
            var site = 'site:npmjs.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 106:
            var site = 'site:npm.runkit.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 107:
            var site = 'site:libraries.io "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 108:
            var site = 'site:coggle.it "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 109:
            var site = 'site:papaly.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 110:
            var site = 'site:prezi.com "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 111:
            var site = 'site:jsdelivr.net "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 112:

        case 113:
            var site = 'site:repl.it "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 114:
            var site = 'site:gitter.im "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 115:
            var site = 'site:bitbucket.org "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 116:
            var site = 'site:*.atlassian.net "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 117:
            var site = 'inurl:gitlab "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 118:
            var site = 'inurl:github "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 119:
            var site = 'ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 120:
            var site = 'hostname:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 121:
            var site = 'domain:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 122:
            var site = 'org:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 123:
            var site = 'product:"nginx" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 124:
            var site = 'product:"Apache httpd" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 125:
            var site = 'product:"Microsoft-IIS" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 126:
            var site = 'port:22 ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 127:
            var site = 'port:21 ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 128:
            var site = 'port:445 ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 129:
            var site = 'port:3389 ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 130:
            var site = 'port:5895 ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 131:
            var site = 'http.title:"Login" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 132:
            var site = 'http.title:"Admin" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 133:
            var site = 'http.title:"phpMyAdmin" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 134:
            var site = 'http.title:"Kibana" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 135:
            var site = 'http.title:"Grafana" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 136:
            var site = 'http.title:"Remote Desktop" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 137:
            var site = 'port:27017 product:"MongoDB" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 138:
            var site = 'port:9200 product:"ElasticSearch" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 139:
            var site = 'port:6379 product:"Redis" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 140:
            var site = 'port:3306 product:"MySQL" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 141:
            var site = 'port:5432 product:"PostgreSQL" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 142:
            var site = 'http.html:"index of /" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 143:
            var site = 'http.html:"config.php" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 144:
            var site = 'http.html:".git" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 145:
            var site = 'http.html:"/phpinfo.php" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 146:
            var site = 'http.status:200 http.component:odoo port:8069 ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 147:
            var site = 'port:"2375" docker ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 148:
            var site = 'product:"kubernetes" port:"10250" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 149:
            var site = 'x-jenkins 200 ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 150:
            var site = 'http.title:"Jenkins" x-jenkins 200 org:"Cogent Communications" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 151:
            var site = 'http.body="access_token=sk" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 152:
            var site = 'http.body="token=sk" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 153:
            var site = 'http.body="filepicker_key" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 154:
            var site = 'http.body="amzn.mws." ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 155:
            var site = 'http.body="slackToken =" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 156:
            var site = 'http.body="slackToken:" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 157:
            var site = 'http.body="slack_Token" && title="Whoops! There was an error." ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 158:
            var site = 'http.body="sk_live" && http.body="apikey" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 159:
            var site = 'http.body="sk_live" && http.body="api_key" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 160:
            var site = 'http.body="sk_" && http.body="apikey" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 161:
            var site = 'http.body="sk_" && http.body="api_key" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 162:
            var site = 'http.body="BEGIN PRIVATE KEY" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 163:
            var site = 'http.body="---BEGIN PRIVATE KEY---" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 164:
            var site = 'site:github.com api key regex "' + targetDomain + '"';
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 165:
            var site = '"apiKey" "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 166:
            var site = '"Bearer" "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 167:
            var site = '"token" "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 168:
            var site = '"Authorization" '+ targetDomain ;
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 169:
            var site = '"secret" "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 170:
            var site = 'filename:.env OR filename:.json "api_key" "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 171:
            var site = 'api_key "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 172:
            var site = '“api keys” "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 173:
            var site = 'authorization_bearer: "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 174:
            var site = 'oauth "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 175:
            var site = 'auth "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 176:
            var site = 'authentication "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 177:
            var site = 'client_secret "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 178:
            var site = 'api_token: "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 179:
            var site = '“api token” "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 180:
            var site = 'client_id "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 181:
            var site = 'password "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 182:
            var site = 'user_password "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 183:
            var site = 'user_pass "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 184:
            var site = 'passcode "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 185:
            var site = 'client_secret "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 186:
            var site = 'secret "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 187:
            var site = 'password hash "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 188:
            var site = 'OTP "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 189:
            var site = 'user auth "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 190:
            var site = 'remove password "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 191:
            var site = 'root "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 192:
            var site = 'admin "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 193:
            var site = 'log "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 194:
            var site = 'trash "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 196:
            var site = 'FTP_PORT "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 197:
            var site = 'FTP_PASSWORD "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 198:
            var site = 'DB_DATABASE= "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 199:
            var site = 'DB_HOST= "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 200:
            var site = 'DB_PORT= "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 201:
            var site = 'DB_PASSWORD= "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 202:
            var site = 'DB_PW= "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 203:
            var site = 'DB_USER= "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 204:
            var site = 'number "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 205:
            var site = 'like: language:shell username "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 206:
            var site = 'language:sql username "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 207:
            var site = 'language:python ftp "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 208:
            var site = 'language:bash ftp "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 209:
            var site = 'dotfiles "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 210:
            var site = 'filename:sftp-config.json password "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 211:
            var site = 'filename:.s3cfg "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 212:
            var site = 'filename:config.php dbpasswd "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 213:
            var site = 'filename:.bashrc password "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 214:
            var site = 'filename:.esmtprc password "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 215:
            var site = 'filename:.netrc password "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 216:
            var site = 'filename:_netrc password "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 217:
            var site = 'filename:.env MAIL_HOST=smtp.gmail.com "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 218:
            var site = 'filename:prod.exs NOT prod.secret.exs "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 219:
            var site = 'filename:.npmrc _auth "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 220:
            var site = 'filename:WebServers.xml "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 221:
            var site = 'filename:sftp-config.json "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 222:
            var site = 'filename:.esmtprc password "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 224:
            var site = 'filename:passwd path:etc "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 225:
            var site = 'filename:prod.secret.exs "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 226:
            var site = 'filename:sftp-config.json "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 227:
            var site = 'filename:proftpdpasswd "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 228:
            var site = 'filename:travis.yml "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 229:
            var site = 'filename:vim_settings.xml "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 230:
            var site = 'filename:sftp.json path:.vscode "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 231:
            var site = 'filename:secrets.yml password "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 232:
            var site = 'extension:sql mysql dump "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 233:
            var site = 'extension:sql mysql dump "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 234:
            var site = 'extension:sql mysql dump password "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 235:
            var site = 'extension:pem private "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 236:
            var site = 'extension:ppk private "' + targetDomain + '"';
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=host';
            window.open(url, '_blank');
            return;
        case 195:
            var site = '"authentication disabled" "RFB 003.008" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 223:
            var site = 'title:"Weave Scope" http.favicon.hash:567176827 ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 237:
            var site = '"MongoDB Server Information" port:27017 -authentication ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 238:
            var site = '"Set-Cookie: mongo-express=" "200 OK" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 239:
            var site = '"X-Jenkins" "Set-Cookie: JSESSIONID" http.title:"Dashboard" ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 240:
            var site = '"Docker Containers:" port:2375 ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        case 241:
            var site = '"Docker-Distribution-Api-Version: registry" "200 OK" -gitlab ssl:' + targetDomain;
            var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
        default:
            alert('Invalid option.');
            return;
    }

    var url = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
    window.open(url, '_blank');
}
