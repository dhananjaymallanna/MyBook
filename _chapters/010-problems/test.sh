#!/bin/bash



for filename in *.md; do
  onlyname=${filename:4}
  str2="${onlyname//-/ }"
  #echo $str2
  str3=${str2%???}
  echo $str3
echo "
---
title: $str3
slug: $str3
abstract: $str3
--- "

done


#for filename in *.php; do
#  echo "text" >> "$filename"
#done