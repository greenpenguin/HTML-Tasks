{\rtf1\ansi\ansicpg1251\cocoartf1671\cocoasubrtf400
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 'use strict';\
document.getElementById('btn').addEventListener('click', changeText);\
\
function changeText() \{\
    var str = document.getElementById('txt').value;\
    var ignore = ["?", "!", ":", ";", ",", ".", " ", "\\t", "\\r"];\
    var letters = \{\}, result;\
    var words = str.split(' ');\
\
    words.forEach(function (word) \{\
        word.split('').forEach(function (letter, i) \{\
            if (!letters[letter] && ignore.indexOf(letter) == -1 && -1 != word.indexOf(letter, i + 1)) \{\
                letters[letter] = 1;\
            \}\
        \});\
    \});\
\
    result = str.split('').filter(function (v) \{\
        return !letters[v];\
    \}).join('');\
  \
  document.getElementById("output").innerHTML = result;\
    \
\}}