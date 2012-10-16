copy /b styles.css + pygment_trac.css style.temp.css
java -jar ../../Poker.JS/build/yuicompressor-2.4.7.jar --type css --charset utf-8 -v -o styles.min.css style.temp.css
del style.temp.css
