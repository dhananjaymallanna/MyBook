#!/bin/bash
for filename in *.md; do
  onlyname=${filename:4}
  str2="${onlyname//-/ }"
    #echo $str2
  str3=${str2%???}
    #echo $str3
  str4="---\ntitle: $str3 \nslug: $str3 \nabstract: $str3 \n---\n"
  echo $str4
  echo "$str4\n $(cat $filename)" > $filename
done
#for filename in *.php; do
#  echo "text" >> "$filename"
#done