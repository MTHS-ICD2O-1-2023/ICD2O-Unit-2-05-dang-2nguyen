// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Mar 2024
// This file contains the JS functions for index.html
"use strict"

/**
 * This function calculates area of a triangle.
 */const TAX_RATE = 0.18
function calculateTheSalary () {
  
  // input
  const time = parseInt(document.getElementById('the-time').value)
  const money = parseInt(document.getElementById('salary').value)

  // process
  const pay = (time*money)*(1.00- TAX_RATE )
  const government = (time * money) * TAX_RATE
  
  // output
  document.getElementById('pay').innerHTML = 'Your pay will be : ' +'$' + pay.toFixed(2)  
  document.getElementById('goverment').innerHTML = 'the government will take : '+ '$' + government.toFixed(2) 
}