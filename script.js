document.getElementById("hide").style.display = "none";
document.getElementById("hiden").style.display = "none";
var yourbloodtypes = [];

var donate = ["A+ can donate blood to A+ and AB+, and can receive blood from A+, A-, O+, and O-.", "O+ can donate blood to O+, A+, B+, and AB+, and can receive blood from O+ and O-.", "B+ can donate blood to B+ and AB+, and can receive blood from B+, B-, O+, and O-.", "AB+ can only donate blood to AB+, but can receive blood from anyone.","A- can give blood to A+, A-, AB+, and AB-, and can receive blood from A- and O-.", "O- can donate blood to anyone, but can only receive blood from O-.", "B- can donate blood to B+, B-, AB+, and AB-, but can receive blood from B- and O-.", "AB- can donate blood to AB+ and AB-, but can receive blood from AB-, A-, B-, and O-."]

var donateblood = ["A+","O+","B+","AB+","A-","O-","B-", "AB-"]

function bloodType() {
  var mbloodtype = "";
  var fbloodtype = "";
  var ybloodtype = "";
  var possiblem = [];
  var possiblef = [];
  var mr = "";
  var fr = "";
  
                      
  var ele = document.getElementsByName('m');
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      mbloodtype = ele[i].value;
    }
  }
  var ele = document.getElementsByName('mr');
    for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      mr = ele[i].value;
    }
  }
  var ele = document.getElementsByName('f');
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      fbloodtype = ele[i].value;
    }
  }
  var ele = document.getElementsByName('fr');
  for (i = 0; i < ele.length; i++) {
  if (ele[i].checked) {
    fr = ele[i].value;
    }
  }

  // adding potential genotypes for the phenotype
  console.log(fbloodtype);
  if (mbloodtype == "AB"){
    possiblem.push("AB");
  }
  if (fbloodtype == "AB"){
    possiblef.push("AB");
    possiblef.push("AB");
  }
  if (fbloodtype == "O"){
    possiblef.push("OO");
    possiblef.push("OO");
  }
  if (mbloodtype == "O"){
    possiblem.push("OO");
    possiblem.push("OO");
  }
  if (mbloodtype =="A"){
    possiblem.push("AO");
    possiblem.push("AA");
  }
  if (fbloodtype == "A"){
    possiblef.push("AO");
    possiblef.push("AA");
  }
  if (fbloodtype == "B") {
    possiblef.push("BO");
    possiblef.push("BB");
  }
  if (mbloodtype =="B"){
    possiblem.push("BO");
    possiblem.push("BB");
  }
  var youralleles = []

  // different allele combinations
  for (var i = 0; i < possiblem.length; i++) {
    var allele = possiblem[i].split("")
    var fallele = possiblef[i].split("")
    console.log(allele)
    console.log(fallele)
    youralleles.push(allele[0] + fallele[0])
    youralleles.push(allele[1] + fallele[1])
    youralleles.push(allele[1] + fallele[0])
    youralleles.push(allele[0] + fallele[1])
    console.log(youralleles)  
  }

  var genotypes = []
  var alleles = []
  for (var i = 0; i < youralleles.length; i++) {
    alleles = youralleles[i].split("")
    console.log(alleles)
    if (alleles[0] == "O") {
      var flip = alleles[1] + alleles[0]
      genotypes.push(flip)
    } else {
      if (youralleles[i] == "BA") {
        genotypes.push("AB")
      } else {
        genotypes.push(youralleles[i])
      }
    }
  }
                      
  console.log(genotypes)

  var phenotypes = []
  for (var i = 0; i < genotypes.length; i++) {
    if ((genotypes[i] == "BO") || (genotypes[i] == "BB")) {
      phenotypes.push("B")
    } else if ((genotypes[i] =="AO") || (genotypes[i] == "AA")) {
      phenotypes.push("A")
    } else if (genotypes[i] == "AB") {
      phenotypes.push("AB")
    } else if (genotypes[i] == "OO") {
      phenotypes.push("O")
    }
    }

  var A = 0
  var B = 0
  var AB = 0
  var O = 0

  for (var i = 0; i < phenotypes.length; i++) {
    if (phenotypes[i] == "B") {
      B++;
    } else if (phenotypes[i] =="A"){
      A++;
    } else if (phenotypes[i] == "AB") {
      AB++;
    } else if (phenotypes[i] == "O") {
      O++;
    }
  }

                      
  var unique = []; 
  genotypes.forEach(element => { 
    if (!unique.includes(element)) { 
      unique.push(element); 
    } 
    }); 
    console.log(unique); 

  console.log(mr + fr)
  var uniquer = []
  var rf = ""
  if ((mr == "-") && (fr == "-")){
    rf = "--"
  } else if ((mr == "+") && (fr == "+")) {
    rf = "++"
  } else if ((mr == "+") || (fr == "+")) {
    rf = "+-"
  }
  
  for (var i = 0; i < unique.length; i++) {
    uniquer.push(unique[i] + rf)
  }

  console.log(uniquer)
  
  var types = []
  if (unique.includes("AB")) {
    types.push("AB")
  }
  if (unique.includes("AO") || unique.includes("AA")) {
    types.push("A")
  }
  if (unique.includes("BO") || unique.includes("BB")) {
    types.push("B")
  }
  if (unique.includes("OO")) {
    types.push("O")
  }


var types = []; 
  phenotypes.forEach(element => { 
    if (!types.includes(element)) { 
      types.push(element); 
    } 
    }); 
    console.log(types);
  
  var rfac = ""
  var typesr = []
  if ((mr == "+") || (fr == "+")) {
    rfac = "+"
  } else if ((mr == "-") && (fr == "-")) {
    rfac = "-"
  } 
    for (var i = 0; i < types.length; i++) {
      typesr.push(types[i] + rfac)
    } 



  var uniques = ""
  for (var i = 0; i < uniquer.length; i++) {
    if (i < uniquer.length - 1) {
    uniques = uniques + "" + uniquer[i] + ", "
    } else {
      uniques = uniques + "" + uniquer[i]
    }
  }

  var ratios = []
  if (types.includes("A")) {
    ratios.push(A / phenotypes.length * 100)
  }
  if (types.includes("B")) {
    ratios.push(B / phenotypes.length * 100)
  }
  if (types.includes("AB")) {
    ratios.push(AB / phenotypes.length * 100)
  }
  if (types.includes("O")) {
    ratios.push(O / phenotypes.length * 100)
  }

  console.log(ratios)

  yourbloodtypes = typesr;
  var percents = ""
  for (var i = 0; i < types.length; i++) {
    if (i < types.length - 1) {
    percents = percents + typesr[i] + " (" + ratios[i] + "%" + "), "
    } else {
      percents = percents + typesr[i] + " (" + ratios[i] + "%" + ")" 
        }
  }
  
  document.getElementById("results").innerHTML = "<h3>"+ "Possible genotypes include: "+"</h3>" + uniques;
  document.getElementById("finaltypes").innerHTML = "<h3>"+ "Possible blood types include: " + "</h3>" + percents;
document.getElementById("hide").style.display = "block";
  
}

function learnMore() {
  document.getElementById("hiden").style.display = "block";
  var bloodtypes = ""
  for (var i = 0; i < yourbloodtypes.length; i++) {
    if (i < yourbloodtypes.length - 1) {
    bloodtypes = bloodtypes + "" + yourbloodtypes[i] + ", "
    } else {
    bloodtypes = bloodtypes + "" + yourbloodtypes[i]
    }
  }
  document.getElementById("yourblood").innerHTML = bloodtypes;
  var text = ""
  for (var i = 0; i < donateblood.length; i++) {
    for (var j = 0; j < yourbloodtypes.length; j++){
      if (donateblood[i] == yourbloodtypes[j]) {
        text = text + "<h3>" + donateblood[i] + "</h3>" + donate[i] 
      }
    }
  }
  document.getElementById("info").innerHTML = text;
}