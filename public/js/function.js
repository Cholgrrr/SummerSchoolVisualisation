let SetPdata;
let SetPdataDB;
let getgasdata;
let getheatdata;
let getheatdatanew;
let year = 2012;
let coloringYN = false;
var colorizeit = false;
let dataOffice1 = "regExp(${gmlID}) =~ '";
let dataOffice2 = "regExp(${gml_parent_id}) =~ '";
let dataEducation1 = "regExp(${gmlID}) =~ '";
let dataEducation2 = "regExp(${gml_parent_id}) =~ '";
let dataHall1 = "regExp(${gmlID}) =~ '";
let dataHall2 = "regExp(${gml_parent_id}) =~ '";
let dataIndustry1 = "regExp(${gmlID}) =~ '";
let dataIndustry2 = "regExp(${gml_parent_id}) =~ '";
let dataEvent1 = "regExp(${gmlID}) =~ '";
let dataEvent2 = "regExp(${gml_parent_id}) =~ '";
let dataRestaurant1 = "regExp(${gmlID}) =~ '";
let dataRestaurant2 = "regExp(${gml_parent_id}) =~ '";
let dataHealth1 = "regExp(${gmlID}) =~ '";
let dataHealth2 = "regExp(${gml_parent_id}) =~ '";
let dataNon1 = "regExp(${gmlID}) =~ '";
let dataNon2 = "regExp(${gml_parent_id}) =~ '";
let dataHotel1 = "regExp(${gmlID}) =~ '";
let dataHotel2 = "regExp(${gml_parent_id}) =~ '";
let dataResidential1 = "regExp(${gmlID}) =~ '";
let dataResidential2 = "regExp(${gml_parent_id}) =~ '";
let dataRetail1 = "regExp(${gmlID}) =~ '";
let dataRetail2 = "regExp(${gml_parent_id}) =~ '";
let dataSport1 = "regExp(${gmlID}) =~ '";
let dataSport2 = "regExp(${gml_parent_id}) =~ '";
let coloringType = ""

let dataSetPDB18 = "regExp(${gmlID}) =~ 'Test";
let dataSetPDB19 = "regExp(${gmlID}) =~ 'Test";
let dataSetPDB20 = "regExp(${gmlID}) =~ 'Test";
let dataSetPDB21 = "regExp(${gmlID}) =~ 'Test";
let dataSetPDB22 = "regExp(${gmlID}) =~ 'Test";
let dataSetPDB23 = "regExp(${gmlID}) =~ 'Test";
let dataSetPDB24 = "regExp(${gmlID}) =~ 'Test";
let dataSetPDB25 = "regExp(${gmlID}) =~ 'Test";
let dataSetPDB17 = "regExp(${gmlID}) =~ 'Test";

let dataSetPDB18p = "regExp(${gml_parent_id}) =~ 'Test";
let dataSetPDB19p = "regExp(${gml_parent_id}) =~ 'Test";
let dataSetPDB20p = "regExp(${gml_parent_id}) =~ 'Test";
let dataSetPDB21p = "regExp(${gml_parent_id}) =~ 'Test";
let dataSetPDB22p = "regExp(${gml_parent_id}) =~ 'Test";
let dataSetPDB23p = "regExp(${gml_parent_id}) =~ 'Test";
let dataSetPDB24p = "regExp(${gml_parent_id}) =~ 'Test";
let dataSetPDB25p = "regExp(${gml_parent_id}) =~ 'Test";
let dataSetPDB17p = "regExp(${gml_parent_id}) =~ 'Test";

//-----------------------------------------------------------------------
// Variables for the natural gas use
let gasclass12013 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass22013 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass32013 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass42013 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass52013 = "regExp(${building_identification_number}) =~ 'Test";

let gasclass12014 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass22014 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass32014 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass42014 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass52014 = "regExp(${building_identification_number}) =~ 'Test";

let gasclass12015 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass22015 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass32015 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass42015 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass52015 = "regExp(${building_identification_number}) =~ 'Test";

let gasclass12016 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass22016 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass32016 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass42016 = "regExp(${building_identification_number}) =~ 'Test";
let gasclass52016 = "regExp(${building_identification_number}) =~ 'Test";



let heatclass1 = "regExp(${gmlID}) =~ 'Test";
let heatclass2 = "regExp(${gmlID}) =~ 'Test";
let heatclass3 = "regExp(${gmlID}) =~ 'Test";
let heatclass4 = "regExp(${gmlID}) =~ 'Test";
let heatclass5 = "regExp(${gmlID}) =~ 'Test";

let heatclass1new = "regExp(${gmlID}) =~ 'Test";
let heatclass2new = "regExp(${gmlID}) =~ 'Test";
let heatclass3new = "regExp(${gmlID}) =~ 'Test";
let heatclass4new = "regExp(${gmlID}) =~ 'Test";
let heatclass5new = "regExp(${gmlID}) =~ 'Test";



function startingSelection(city) {
    SetPdata = ""
    SetPdataDB = ""
    tesst(city);
    console.log('test')
    loadSetPDB();
    console.log('loadSetPDB')
};

function tempSelect() {
    coloringType = "temp"
        console.log(coloringType)
};
function heatSelect() {
    coloringType= "heat"
    console.log(coloringType)
    getheat();
}
function heatSelectnew() {
    coloringType= "heatnew"
    console.log(coloringType)
    getheatnew();
}
function gasSelect() {
    viewer.clock.multiplier = 86400;
    coloringType = "gas"
        console.log(coloringType)
        getgas();
};


function tesstgeneral(tileset,tileLocation,year){

    if (coloringType == "temp") {
        newtesst()
        showDiv()
    }else if (coloringType == "gas"){
        legendele();

        workgas()

        gasclass12013 += "'";
        gasclass22013 += "'";
        gasclass32013 += "'";
        gasclass42013 += "'";
        gasclass52013 += "'";

        gasclass12014 += "'";
        gasclass22014 += "'";
        gasclass32014 += "'";
        gasclass42014 += "'";
        gasclass52014 += "'";

        gasclass12015 += "'";
        gasclass22015 += "'";
        gasclass32015 += "'";
        gasclass42015 += "'";
        gasclass52015 += "'";

        gasclass12016 += "'";
        gasclass22016 += "'";
        gasclass32016 += "'";
        gasclass42016 += "'";
        gasclass52016 += "'";
        //colorTemp()
        colorizeit = true;
        colorTemp(tileset,tileLocation,year);
    }else if (coloringType == "heat"){
        legendheat();

        workheat()

        heatclass1 += "'";
        heatclass2 += "'";
        heatclass3 += "'";
        heatclass4 += "'";
        heatclass5 += "'";

        //colorTemp()
        colorizeit = true;
        colorTemp(tileset,"heatSQ",year);
    }else if (coloringType == "heatnew"){
        legendheatnew();

        workheatnew()

        heatclass1new += "'";
        heatclass2new += "'";
        heatclass3new += "'";
        heatclass4new += "'";
        heatclass5new += "'";

        //colorTemp()
        colorizeit = true;
        colorTemp(tileset,"heatSQnew",year);
    };
};

function workgas(){

    for (var i in getgasdata){

        
        if (getgasdata[i].ele2013wn >= 1 && getgasdata[i].ele2013wn < 30){
            gasclass12013 += ","
            gasclass12013 += getgasdata[i].bin
        }else if (getgasdata[i].ele2013wn >= 30 && getgasdata[i].ele2013wn < 70) {
            gasclass22013 += ","
            gasclass22013 += getgasdata[i].bin
        }else if (getgasdata[i].ele2013wn >= 70 && getgasdata[i].ele2013wn < 120) {
            gasclass32013 += ","
            gasclass32013 += getgasdata[i].bin
        }else if (getgasdata[i].ele2013wn >= 120 && getgasdata[i].ele2013wn < 200) {
            gasclass42013 += ","
            gasclass42013 += getgasdata[i].bin
        }else if (getgasdata[i].ele2013wn >= 200) {
            gasclass52013 += ","
            gasclass52013 += getgasdata[i].bin
        }
        
        if (getgasdata[i].ele2014wn >= 1 && getgasdata[i].ele2014wn < 30){
            gasclass12014 += ","
            gasclass12014 += getgasdata[i].bin
        }else if (getgasdata[i].ele2014wn >= 30 && getgasdata[i].ele2014wn < 70) {
            gasclass22014 += ","
            gasclass22014 += getgasdata[i].bin
        }else if (getgasdata[i].ele2014wn >= 70 && getgasdata[i].ele2014wn < 120) {
            gasclass32014 += ","
            gasclass32014 += getgasdata[i].bin
        }else if (getgasdata[i].ele2014wn >= 120 && getgasdata[i].ele2014wn < 200) {
            gasclass42014 += ","
            gasclass42014 += getgasdata[i].bin
        }else if (getgasdata[i].ele2014wn >= 200) {
            gasclass52014 += ","
            gasclass52014 += getgasdata[i].bin
        }

        if (getgasdata[i].ele2015wn >= 1 && getgasdata[i].ele2015wn < 30){
            gasclass12015 += ","
            gasclass12015 += getgasdata[i].bin
        }else if (getgasdata[i].ele2015wn >= 30 && getgasdata[i].ele2015wn < 70) {
            gasclass22015 += ","
            gasclass22015 += getgasdata[i].bin
        }else if (getgasdata[i].ele2015wn >= 70 && getgasdata[i].ele2015wn < 120) {
            gasclass32015 += ","
            gasclass32015 += getgasdata[i].bin
        }else if (getgasdata[i].ele2015wn >= 120 && getgasdata[i].ele2015wn < 200) {
            gasclass42015 += ","
            gasclass42015 += getgasdata[i].bin
        }else if (getgasdata[i].ele2015wn >= 200) {
            gasclass52015 += ","
            gasclass52015 += getgasdata[i].bin
        }

        if (getgasdata[i].ele2016wn >= 1 && getgasdata[i].ele2016wn < 30){
            gasclass12016 += ","
            gasclass12016 += getgasdata[i].bin
        }else if (getgasdata[i].ele2016wn >= 30 && getgasdata[i].ele2016wn < 70) {
            gasclass22016 += ","
            gasclass22016 += getgasdata[i].bin
        }else if (getgasdata[i].ele2016wn >= 70 && getgasdata[i].ele2016wn < 120) {
            gasclass32016 += ","
            gasclass32016 += getgasdata[i].bin
        }else if (getgasdata[i].ele2016wn >= 120 && getgasdata[i].ele2016wn < 200) {
            gasclass42016 += ","
            gasclass42016 += getgasdata[i].bin
        }else if (getgasdata[i].ele2016wn >= 200) {
            gasclass52016 += ","
            gasclass52016 += getgasdata[i].bin
        }


}};

function workheat(){

    for (var i in getheatdata){
        
        if (getheatdata[i].heating >= 1 && getheatdata[i].heating < 75){
            heatclass1 += ","
            heatclass1 += getheatdata[i].gmlid
        }else if (getheatdata[i].heating >= 76 && getheatdata[i].heating < 125) {
            heatclass2 += ","
            heatclass2 += getheatdata[i].gmlid
        }else if (getheatdata[i].heating >= 126 && getheatdata[i].heating < 175) {
            heatclass3 += ","
            heatclass3 += getheatdata[i].gmlid
        }else if (getheatdata[i].heating >= 176 && getheatdata[i].heating < 250) {
            heatclass4 += ","
            heatclass4 += getheatdata[i].gmlid
        }else if (getheatdata[i].heating >= 251 && getheatdata[i].heating < 600) {
            heatclass5 += ","
            heatclass5 += getheatdata[i].gmlid
        }
        
        


}};

function workheatnew(){

    for (var i in getheatdatanew){
        console.log(i)
        console.log(getheatdatanew[i].gmlid)
        console.log(getheatdatanew[i].heating)
        
        if (getheatdatanew[i].heating >= 1 && getheatdatanew[i].heating < 75){
            heatclass1new += ","
            heatclass1new += getheatdatanew[i].gmlid
        }else if (getheatdatanew[i].heating >= 76 && getheatdatanew[i].heating < 125) {
            heatclass2new += ","
            heatclass2new += getheatdatanew[i].gmlid
        }else if (getheatdatanew[i].heating >= 126 && getheatdatanew[i].heating < 175) {
            heatclass3new += ","
            heatclass3new += getheatdatanew[i].gmlid
        }else if (getheatdatanew[i].heating >= 176 && getheatdatanew[i].heating < 250) {
            heatclass4new += ","
            heatclass4new += getheatdatanew[i].gmlid
        }else if (getheatdatanew[i].heating >= 251 && getheatdatanew[i].heating < 600) {
            heatclass5new += ","
            heatclass5new += getheatdatanew[i].gmlid
        }
        
        


}};

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function newtesst() {
    console.log('Funktion aufgerufen')
	let numb = 0;
	var x = 0; 
    let type;
    

	while (x < Object.keys(SetPdata).length) {
   
	type = (SetPdata[x].function)
	if (type.includes("3012")||type.includes("3013")||type.includes("3015")||type.includes("3010")||type.includes("3024")||type.includes("1137")||type.includes("3044")||type.includes("3071")||type.includes("2020")||type.includes("2443")||type.includes("2729") ){
		numb = numb + 1
		if (x==0) {
				dataOffice1 += SetPdata[x].gmlid
				dataOffice2 += SetPdata[x].gmlid
		} else {
				dataOffice1 += "," + SetPdata[x].gmlid
				dataOffice2 += "," + SetPdata[x].gmlid
		}

	} else if (type.includes("3021")||type.includes("3023")||type.includes("3065") ){
		if (x==0) {
			dataEducation1 += SetPdata[x].gmlid
			dataEducation2 += SetPdata[x].gmlid
		} else {
			dataEducation1 += "," + SetPdata[x].gmlid
			dataEducation2 += "," + SetPdata[x].gmlid
		}
	//dataEducation = dataEducation + SetPdata[x].gmlid		
	} else if (type.includes("3034")||type.includes("3038")||type.includes("3031")||type.includes("3072")||type.includes("3080")||type.includes("3090")||type.includes("2060")||type.includes("2090")||type.includes("2412")||type.includes("3260")||type.includes("9701")||type.includes("2140") ){
		if (x==0) {
			dataHall1 += SetPdata[x].gmlid
			dataHall2 += SetPdata[x].gmlid
		} else {
			dataHall1 += "," + SetPdata[x].gmlid
			dataHall2 += "," + SetPdata[x].gmlid
		}
	//dataHall = dataHall + SetPdata[x].gmlid		
	} else if (type.includes("2112")||type.includes("2111")||type.includes("2120")||type.includes("2501")||type.includes("2523")||type.includes("2622")||type.includes("1220") ){
		if (x==0) {
			dataIndustry1 += SetPdata[x].gmlid
			dataIndustry2 += SetPdata[x].gmlid
		} else {
			dataIndustry1 += "," + SetPdata[x].gmlid
			dataIndustry2 += "," + SetPdata[x].gmlid
		}
	//dataIndustry = dataIndustry + SetPdata[x].gmlid	
	} else if (type.includes("3036")||type.includes("3041")||type.includes("3043") ){
		if (x==0) {
			dataEvent1 += SetPdata[x].gmlid
			dataEvent2 += SetPdata[x].gmlid
		} else {
			dataEvent1 += "," + SetPdata[x].gmlid
			dataEvent2 += "," + SetPdata[x].gmlid
		}
	//dataEvent = dataEvent + SetPdata[x].gmlid	
	} else if (type.includes("2081") ){
		if (x==0) {
			dataRestaurant1 += SetPdata[x].gmlid
			dataRestaurant2 += SetPdata[x].gmlid
		} else {
			dataRestaurant1 += "," + SetPdata[x].gmlid
			dataRestaurant2 += "," + SetPdata[x].gmlid
		}
	//dataRestaurant = dataRestaurant + SetPdata[x].gmlid	
	} else if (type.includes("3051")||type.includes("1022")||type.includes("3220")||type.includes("3240")||type.includes("3242")||type.includes("2849") ){
		if (x==0) {
			dataHealth1 += SetPdata[x].gmlid
			dataHealth2 += SetPdata[x].gmlid
		} else {
			dataHealth1 += "," + SetPdata[x].gmlid
			dataHealth2 += "," + SetPdata[x].gmlid
		}
	//dataHealth = dataHealth + SetPdata[x].gmlid		
	} else if (type.includes("3074")||type.includes("2055")||type.includes("2143")||type.includes("2461")||type.includes("2465")||type.includes("2463")||type.includes("2510")||type.includes("2513")||type.includes("2541")||type.includes("2611")||type.includes("2612")||type.includes("2720")||type.includes("2721")||type.includes("2723")||type.includes("2724")||type.includes("2726")||type.includes("2740")||type.includes("1313")||type.includes("2891")||type.includes("2894") ){
		if (x==0) {
			dataNon1 += SetPdata[x].gmlid
			dataNon2 += SetPdata[x].gmlid
		} else {
			dataNon1 += "," + SetPdata[x].gmlid
			dataNon2 += "," + SetPdata[x].gmlid
		}
	//dataNon = dataNon + SetPdata[x].gmlid	
	} else if (type.includes("3075")||type.includes("2071")||type.includes("2072")||type.includes("2074") ){
		if (x==0) {
			dataHotel1 += SetPdata[x].gmlid
			dataHotel2 += SetPdata[x].gmlid
		} else {
			dataHotel1 += "," + SetPdata[x].gmlid
			dataHotel2 += "," + SetPdata[x].gmlid
		}
	//dataHotel = dataHotel + SetPdata[x].gmlid		
	} else if (type.includes("1010")||type.includes("1020")||type.includes("1379")||type.includes("1121")||type.includes("1123")||type.includes("1122")||type.includes("1131")||type.includes("1221")||type.includes("1223")||type.includes("1312")||type.includes("1222") ){
		if (x==0) {
			dataResidential1 += SetPdata[x].gmlid
			dataResidential2 += SetPdata[x].gmlid
		} else {
			dataResidential1 += "," + SetPdata[x].gmlid
			dataResidential2 += "," + SetPdata[x].gmlid
		}
	//dataResidential = dataResidential + SetPdata[x].gmlid		
	} else if (type.includes("2050")||type.includes("2130") ){
		if (x==0) {
			dataRetail1 += SetPdata[x].gmlid
			dataRetail2 += SetPdata[x].gmlid
		} else {
			dataRetail1 += "," + SetPdata[x].gmlid
			dataRetail2 += "," + SetPdata[x].gmlid
		}
	console.log(SetPdata[x].gmlid)
	
	} else if (type.includes("3211")||type.includes("3210")||type.includes("3221") ){
	if (x==0) {
			dataSport1 += SetPdata[x].gmlid
			dataSport2 += SetPdata[x].gmlid
		} else {
			dataSport1 += "," + SetPdata[x].gmlid
			dataSport2 += "," + SetPdata[x].gmlid
		}
	//dataSport = dataSport + SetPdata[x].gmlid
	}
	
    x = x + 1;
	}
	

	console.log(numb)
	

    let temp;
    x = 0;
	    dataOffice1 = dataOffice1.replace("regExp(${gmlID}) =~ '",'')
        dataOffice2 = dataOffice2.replace("regExp(${gml_parent_id}) =~ '", '')
        dataEducation1 = dataEducation1.replace("regExp(${gmlID}) =~ '", '')
        dataEducation2 = dataEducation2.replace("regExp(${gml_parent_id}) =~ '", '')
        dataHall1 = dataHall1.replace("regExp(${gmlID}) =~ '", '')
        dataHall2 = dataHall2.replace("regExp(${gml_parent_id}) =~ '", '')
        dataIndustry1 = dataIndustry1.replace("regExp(${gmlID}) =~ '", '')
        dataIndustry2 = dataIndustry2.replace("regExp(${gml_parent_id}) =~ '", '')
        dataEvent1 = dataEvent1.replace("regExp(${gmlID}) =~ '", '')
        dataEvent2 = dataEvent2.replace("regExp(${gml_parent_id}) =~ '", '')
        dataRestaurant1 = dataRestaurant1.replace("regExp(${gmlID}) =~ '", '')
        dataRestaurant2 = dataRestaurant2.replace("regExp(${gml_parent_id}) =~ '", '')
        dataHealth1 = dataHealth1.replace("regExp(${gmlID}) =~ '", '')
        dataHealth2 = dataHealth2.replace("regExp(${gml_parent_id}) =~ '", '')
        dataHotel1 = dataHotel1.replace("regExp(${gmlID}) =~ '", '')
        dataHotel2 = dataHotel2.replace("regExp(${gml_parent_id}) =~ '", '')
        dataResidential1 = dataResidential1.replace("regExp(${gmlID}) =~ '", '')
        dataResidential2 = dataResidential2.replace("regExp(${gml_parent_id}) =~ '", '')
        dataRetail1 = dataRetail1.replace("regExp(${gmlID}) =~ '", '')
        dataRetail2 = dataRetail2.replace("regExp(${gml_parent_id}) =~ '", '')
        dataSport1 = dataSport1.replace("regExp(${gmlID}) =~ '", '')
        dataSport2 = dataSport2.replace("regExp(${gml_parent_id}) =~ '", '')
    while (x < Object.keys(SetPdataDB).length) {
		console.log('#################################')
        console.log(SetPdataDB[x].gmlid);
        dataOffice1 = dataOffice1.replace(SetPdataDB[x].gmlid,'')
        dataOffice2 = dataOffice2.replace(SetPdataDB[x].gmlid, '')
        dataEducation1 = dataEducation1.replace(SetPdataDB[x].gmlid, '')
        dataEducation2 = dataEducation2.replace(SetPdataDB[x].gmlid, '')
        dataHall1 = dataHall1.replace(SetPdataDB[x].gmlid, '')
        dataHall2 = dataHall2.replace(SetPdataDB[x].gmlid, '')
        dataIndustry1 = dataIndustry1.replace(SetPdataDB[x].gmlid, '')
        dataIndustry2 = dataIndustry2.replace(SetPdataDB[x].gmlid, '')
        dataEvent1 = dataEvent1.replace(SetPdataDB[x].gmlid, '')
        dataEvent2 = dataEvent2.replace(SetPdataDB[x].gmlid, '')
        dataRestaurant1 = dataRestaurant1.replace(SetPdataDB[x].gmlid, '')
        dataRestaurant2 = dataRestaurant2.replace(SetPdataDB[x].gmlid, '')
        dataHealth1 = dataHealth1.replace(SetPdataDB[x].gmlid, '')
        dataHealth2 = dataHealth2.replace(SetPdataDB[x].gmlid, '')
        dataNon1 = dataNon1.replace(SetPdataDB[x].gmlid, '')
        dataNon2 = dataNon2.replace(SetPdataDB[x].gmlid, '')
        dataHotel1 = dataHotel1.replace(SetPdataDB[x].gmlid, '')
        dataHotel2 = dataHotel2.replace(SetPdataDB[x].gmlid, '')
        dataResidential1 = dataResidential1.replace(SetPdataDB[x].gmlid, '')
        dataResidential2 = dataResidential2.replace(SetPdataDB[x].gmlid, '')
        dataRetail1 = dataRetail1.replace(SetPdataDB[x].gmlid, '')
        dataRetail2 = dataRetail2.replace(SetPdataDB[x].gmlid, '')
        dataSport1 = dataSport1.replace(SetPdataDB[x].gmlid, '')
        dataSport2 = dataSport2.replace(SetPdataDB[x].gmlid, '')
        
        temp = (SetPdataDB[x].setpointtemp)

        if (temp == '18') {

            if (x == 0) {
                dataSetPDB18 += SetPdataDB[x].gmlid
				dataSetPDB18p += SetPdataDB[x].gmlid
            } else {
                dataSetPDB18 += "," + SetPdataDB[x].gmlid
				dataSetPDB18p += "," + SetPdataDB[x].gmlid
            }
        } else if (temp == '19') {
            if (x == 0) {
                dataSetPDB19 += SetPdataDB[x].gmlid
				dataSetPDB19p += SetPdataDB[x].gmlid
            } else {
                dataSetPDB19 += "," + SetPdataDB[x].gmlid
				dataSetPDB19p += "," + SetPdataDB[x].gmlid
            }
        } else if (temp == '20') {
            if (x == 0) {
                dataSetPDB20 += SetPdataDB[x].gmlid
				dataSetPDB20p += SetPdataDB[x].gmlid
            } else {
                dataSetPDB20 += "," + SetPdataDB[x].gmlid
				dataSetPDB20p += "," + SetPdataDB[x].gmlid
            }
        } else if (temp == '21') {
            if (x == 0) {
                dataSetPDB21 += SetPdataDB[x].gmlid
				dataSetPDB21p += SetPdataDB[x].gmlid
            } else {
                dataSetPDB21 += "," + SetPdataDB[x].gmlid
				dataSetPDB21p += "," + SetPdataDB[x].gmlid
            }
        } else if (temp == '22') {
            if (x == 0) {
                dataSetPDB22 += SetPdataDB[x].gmlid
				dataSetPDB22p += SetPdataDB[x].gmlid
            } else {
                dataSetPDB22 += "," + SetPdataDB[x].gmlid
				dataSetPDB22p += "," + SetPdataDB[x].gmlid
            }
        } else if (temp == '23') {
            if (x == 0) {
                dataSetPDB23 += SetPdataDB[x].gmlid
				dataSetPDB23p += SetPdataDB[x].gmlid
            } else {
                dataSetPDB23 += "," + SetPdataDB[x].gmlid
				dataSetPDB23p += "," + SetPdataDB[x].gmlid
            }
        } else if (temp == '24') {
            if (x == 0) {
                dataSetPDB24 += SetPdataDB[x].gmlid
				dataSetPDB24p += SetPdataDB[x].gmlid
            } else {
                dataSetPDB24 += "," + SetPdataDB[x].gmlid
				dataSetPDB24p += "," + SetPdataDB[x].gmlid
            }
        }  else if (temp == '-50') {
            if (x == 0) {
                dataNon1 += SetPdataDB[x].gmlid
				dataNon2 += SetPdataDB[x].gmlid
            } else {
                dataNon1 += "," + SetPdataDB[x].gmlid
				dataNon2 += "," + SetPdataDB[x].gmlid
            }
        }else if (temp == '25') {
            if (x == 0) {
                dataSetPDB25 += SetPdataDB[x].gmlid
				dataSetPDB25p += SetPdataDB[x].gmlid
            } else {
                dataSetPDB25 += "," + SetPdataDB[x].gmlid
				dataSetPDB25p += "," + SetPdataDB[x].gmlid
            }
        } else if (temp == '17') {
        if (x == 0) {
            dataSetPDB17 += SetPdataDB[x].gmlid
			dataSetPDB17p += SetPdataDB[x].gmlid
        } else {
            dataSetPDB17 += "," + SetPdataDB[x].gmlid
			dataSetPDB17p += "," + SetPdataDB[x].gmlid
            }
        }
        x = x + 1;
    };
	
	
	dataNon1 += "'";
	dataNon2 += "'";
	
    dataSetPDB18 += "'";
    dataSetPDB19 += "'";
    dataSetPDB20 += dataResidential1 + "'";
    dataSetPDB21 += dataOffice1 + dataEducation1 + dataHall1 + dataEvent1 + dataRestaurant1 + dataHotel1 + dataRetail1 + dataSport1 + "'";
    dataSetPDB22 += dataHealth1 + "'";
    dataSetPDB23 += "'";
    dataSetPDB24 += "'";
    dataSetPDB25 += "'";
    dataSetPDB17 += dataIndustry1 + "'";
	
	
	dataSetPDB18p += "'";
    dataSetPDB19p += "'";
    dataSetPDB20p += dataResidential2 + "'";
    dataSetPDB21p += dataOffice2 + dataEducation2 + dataHall2 + dataEvent2 + dataRestaurant2 + dataHotel2 + dataRetail2 + dataSport2 + "'";
	dataSetPDB22p += dataHealth2 + "'";
    dataSetPDB23p += "'";
    dataSetPDB24p += "'";
    dataSetPDB25p += "'";
    dataSetPDB17p += dataIndustry2 + "'";
    
    






	colorTemp()


	
	
}

function colorTemp(tileset, tileLocation, year) {
    if (tileLocation == "W") { 
    tileset.style = new Cesium.Cesium3DTileStyle({
        color: {
            conditions: [
                //[test , "color('yellow')"],
                //17----------------------------------#ffffcc----#ffff4c----#8dff4c	
                //[dataIndustry1, "color('#8dff4c')"],
                //[dataIndustry2, "color('#8dff4c')"],
                [dataSetPDB17, "color('#8dff4c')"],
				//[dataSetPDB17p, "color('#8dff4c')"],
                //18---------------------------------#ffeda0----#ffd730---
                [dataSetPDB18, "color('#ffd730')"],
				//[dataSetPDB18p, "color('#ffd730')"],
                //19---------------------------------
                [dataSetPDB19, "color('#fed976')"],
	            [dataSetPDB20, "color('#feb24c')"],
                [dataSetPDB21, "color('#fd8d3c')"],
                [dataSetPDB22, "color('#fc4e2a')"],
				//[dataSetPDB22p, "color('#fc4e2a')"],
                //23---------------------------------
                [dataSetPDB23, "color('#e31a1c')"],
				//[dataSetPDB23p, "color('#e31a1c')"],
                //24---------------------------------
                [dataSetPDB24, "color('#bd0026')"],
				//[dataSetPDB24p, "color('#bd0026')"],
                //25---------------------------------
                [dataSetPDB25, "color('#800026')"],
				//[dataSetPDB25p, "color('#800026')"],
                //rest-------------------------------
                [dataNon1, "color('#00BFFF')"],
                //[dataNon2, "color('#00BFFF')"],
                ["true", "color('#000000')"]
            ]
        }
    });} else if (tileLocation =="V") {
        console.log(dataSetPDB20)
	tileset.style = new Cesium.Cesium3DTileStyle({
        color: {
            conditions: [
                [dataSetPDB17, "color('#8dff4c')"],
				//[dataSetPDB17p, "color('#8dff4c')"],
                //18---------------------------------#ffeda0----#ffd730---
                [dataSetPDB18, "color('#ffd730')"],
				//19---------------------------------
                [dataSetPDB19, "color('#fed976')"],
				[dataSetPDB20, "color('#feb24c')"],
				[dataSetPDB21, "color('#fd8d3c')"],
				[dataSetPDB22, "color('#fc4e2a')"],
				//[dataSetPDB22p, "color('#fc4e2a')"],
                //23---------------------------------
                [dataSetPDB23, "color('#e31a1c')"],
				//[dataSetPDB23p, "color('#e31a1c')"],
                //24---------------------------------
                [dataSetPDB24, "color('#bd0026')"],
				//[dataSetPDB24p, "color('#bd0026')"],
                //25---------------------------------
                [dataSetPDB25, "color('#800026')"],
				//[dataSetPDB25p, "color('#800026')"],
                //rest-------------------------------
                [dataNon1, "color('#00BFFF')"],
                //[dataNon2, "color('#00BFFF')"],
                ["true", "color('#000000')"]
            ]
        }
    });
    tileset.style = new Cesium.Cesium3DTileStyle({
        color: {
            conditions: [
                //[test , "color('yellow')"],
                //17----------------------------------#ffffcc----#ffff4c----#8dff4c	
                //[dataIndustry1, "color('#8dff4c')"],
                //[dataIndustry2, "color('#8dff4c')"],
                [dataSetPDB17, "color('#8dff4c')"],
				//[dataSetPDB17p, "color('#8dff4c')"],
                //18---------------------------------#ffeda0----#ffd730---
                [dataSetPDB18, "color('#ffd730')"],
				//[dataSetPDB18p, "color('#ffd730')"],
                //19---------------------------------
                [dataSetPDB19, "color('#fed976')"],
				//[dataSetPDB19p, "color('#fed976')"],
                //20---------------------------------
                //[dataResidential1, "color('#feb24c')"],
                //[dataResidential2, "color('#feb24c')"],
                [dataSetPDB20, "color('#feb24c')"],
				//[dataSetPDB20p, "color('#feb24c')"],
                //21---------------------------------
                //[dataRetail1, "color('#fd8d3c')"],
                //[dataRetail2, "color('#fd8d3c')"],
                //[dataEducation1, "color('#fd8d3c')"],
                //[dataEducation2, "color('#fd8d3c')"],
                //[dataHall1, "color('#fd8d3c')"],
                //[dataHall2, "color('#fd8d3c')"],
                [dataSetPDB21, "color('#fd8d3c')"],
                [dataSetPDB22, "color('#fc4e2a')"],
				//[dataSetPDB22p, "color('#fc4e2a')"],
                //23---------------------------------
                [dataSetPDB23, "color('#e31a1c')"],
				//[dataSetPDB23p, "color('#e31a1c')"],
                //24---------------------------------
                [dataSetPDB24, "color('#bd0026')"],
				//[dataSetPDB24p, "color('#bd0026')"],
                //25---------------------------------
                [dataSetPDB25, "color('#800026')"],
				//[dataSetPDB25p, "color('#800026')"],
                //rest-------------------------------
                [dataNon1, "color('#00BFFF')"],
                //[dataNon2, "color('#00BFFF')"],
                ["true", "color('#000000')"]
            ]
        }

});} else if (tileLocation =="N" && year == 2013 ) {
    
    tileset.style = new Cesium.Cesium3DTileStyle({
        //show : exp,
        color: {
            conditions: [
                //[expreverse, "color('White')"],
                [gasclass12013, "color('#1a9641')"],
                [gasclass22013, "color('#a6d96a')"],
                [gasclass32013, "color('#ffffbf')"],
                [gasclass42013, "color('#fdae61')"],
                [gasclass52013, "color('#d7191c')"],
                //[dataNon2, "color('#00BFFF')"],
                ["true", "color('Black', 0.2)"]
            ]
        }
});} else if (tileLocation =="N" && year == 2014 ) {
    
tileset.style = new Cesium.Cesium3DTileStyle({
    //show : exp,
    color: {
        conditions: [
            //[expreverse, "color('White')"],
            [gasclass12014, "color('#1a9641')"],
            [gasclass22014, "color('#a6d96a')"],
            [gasclass32014, "color('#ffffbf')"],
            [gasclass42014, "color('#fdae61')"],
            [gasclass52014, "color('#d7191c')"],
            //[dataNon2, "color('#00BFFF')"],
            ["true", "color('Black', 0.2)"]
        ]
    }
});} else if (tileLocation =="N" && year == 2015 ) {
    
tileset.style = new Cesium.Cesium3DTileStyle({
    //show : exp,
    color: {
        conditions: [
            //[expreverse, "color('White')"],
            [gasclass12015, "color('#1a9641')"],
            [gasclass22015, "color('#a6d96a')"],
            [gasclass32015, "color('#ffffbf')"],
            [gasclass42015, "color('#fdae61')"],
            [gasclass52015, "color('#d7191c')"],
            //[dataNon2, "color('#00BFFF')"],
            ["true", "color('Black',0.2)"]
        ]
    }
});} else if (tileLocation =="N" && year == 2016 ) {
    
tileset.style = new Cesium.Cesium3DTileStyle({
    //show : exp,
    color: {
        conditions: [
            //[expreverse, "color('White')"],
            [gasclass12016, "color('#1a9641')"],
            [gasclass22016, "color('#a6d96a')"],
            [gasclass32016, "color('#ffffbf')"],
            [gasclass42016, "color('#fdae61')"],
            [gasclass52016, "color('#d7191c')"],
            //[dataNon2, "color('#00BFFF')"],
            ["true", "color('Black', 0.2)"]
        ]
    }
});} else if (tileLocation =="heatSQ" ) {
    viewer.clock.multiplier = 0;
    tileset.style = new Cesium.Cesium3DTileStyle({
        //show : exp,
        color: {
            conditions: [
                [expreverse, "color('White',0)"],
                [heatclass1, "color('#1a9641')"],
                [heatclass2, "color('#a6d96a')"],
                [heatclass3, "color('#ffffbf')"],
                [heatclass4, "color('#fdae61')"],
                [heatclass5, "color('#d7191c')"],
                //[dataNon2, "color('#00BFFF')"],
                ["true", "color('Black', 0.2)"]
            ]
        }
});} else if (tileLocation =="heatSQnew" ) {
    viewer.clock.multiplier = 0;
    tileset.style = new Cesium.Cesium3DTileStyle({
        //show : exp,
        color: {
            conditions: [
                [expreverse, "color('Black',0)"],
                [heatclass1new, "color('#1a9641')"],
                [heatclass2new, "color('#a6d96a')"],
                [heatclass3new, "color('#ffffbf')"],
                [heatclass4new, "color('#fdae61')"],
                [heatclass5new, "color('#d7191c')"],
                //[dataNon2, "color('#00BFFF')"],
                ["true", "color('Black', 0.2)"]
            ]
        }
});

};
	
	
}
let gmlpicked
function calltemp() {
	SubmitTemp();
	FunkTemp();

}
function SubmitTemp() {
    let gmlID = {};
    let result
    quota = $("input:text").val();
    //alert(quota);

    gmlID[0] = gmlpicked
    gmlID[1] = quota
    console.log(gmlID[0])

    try {
        //console.log(pvStufe)
        $.ajax({
            async: false,
            type: "POST",
            url: '/askSetPoint',
            data: gmlID,
        }).done(function (newdata) {
            convertdata(newdata);
        });

        function convertdata(datanew) {
            result = datanew;
            console.log(result)
        }

        return result


    }
    catch (err) {
        console.log('Set Point failed!');
    }

    console.log(result)
};
function FunkTemp() {
    let gmlID = {};
    let result
    quota = $("input:text").val();
    //alert(quota);

    gmlID[0] = gmlpicked
    gmlID[1] = quota
    console.log(gmlID[0])

    try {
        //console.log(pvStufe)
        $.ajax({
            async: false,
            type: "POST",
            url: '/putSetPoint',
            data: gmlID,
        }).done(function (newdata) {
            convertdata(newdata);
        });

        function convertdata(datanew) {
            result = datanew;
            console.log(result)
        }

        return result


    }
    catch (err) {
        console.log('Set Point failed!');
    }

    console.log(result)
};






function temperatureSet(gmlID, gmlParentID) {


    //document.getElementById("visibilitySet").style.visibility = "visible";
    //document.getElementById("visibilitySet2").style.visibility = "visible";
    //document.getElementById("visibilitySet2").placeholder = gmlID;

    var txt;
    var temp;
	var temps;
	var id;
	
	if (gmlID.includes("DEBW")) {
		//temp = prompt("Please enter new Set Point Temperature:", "22 " + gmlID)
		id = gmlID
	} else {
		
		id = gmlParentID
	}
	
	if (dataOffice1.includes(id)) {
		temps = "21 (Office)"
	} else if (dataRetail1.includes(id)) {
		temps = "21 (Retail)"
	} else if (dataIndustry1.includes(id)) {
		temps = "17 (Industry)"
	} else if (dataEducation1.includes(id)) {
		temps = "21 (Education)"
	} else if (dataHall1.includes(id)) {
		temps = "21 (Hall)"
	} else if (dataEvent1.includes(id)){
		temps = "21 (Event)"
	} else if (dataRestaurant1.includes(id)){
		temps = "21 (Restaurant)"
	} else if (dataHealth1.includes(id)){
		temps = "22 (Health)"
	} else if (dataNon1.includes(id)){
		temps = "-50"
	} else if (dataHotel1.includes(id)){
		temps = "21 (Hotel)"
	} else if (dataResidential1.includes(id)) {
		temps = "20 (Residential)"
	} else if (dataSport1.includes(id)){
		temps = "21 (Sport)"
	} else if (dataSetPDB17.includes(id)) {
		temps = "17"
	} else if (dataSetPDB18.includes(id)) {
		temps = "18"
	} else if (dataSetPDB19.includes(id)) {
		temps = "19"
	} else if (dataSetPDB20.includes(id)) {
		temps = "20"
	} else if (dataSetPDB21.includes(id)) {
		temps = "21"
	} else if (dataSetPDB22.includes(id)) {
		temps = "22"
	} else if (dataSetPDB23.includes(id)) {
		temps = "23"
	} else if (dataSetPDB24.includes(id)) {
		temps = "24"
	} else if (dataSetPDB25.includes(id)) {
		temps = "25"
	} else {
		temps = "no Value"
	};

    document.getElementById("tempPlace").placeholder = temps
  
}

function PostSetPoint(Info) {
	try {
		console.log(Info[0])
		$.ajax({
			type: "POST",
			url: '/postSetP',
			data: Info,
		}).done(function (newdata) {
			convertdata(newdata);
		});
		
		function convertdata(datanew){
			resdata = datanew;
		}
		return resdata;
	}
	catch (err) {
		console.log('delivering of the inserted tree data to the server failed!');
	}
}
//--------------------------------------------------------------------------------------------
let getspecheatdata

let specheatsmall = "regExp(${gmlID}) =~ '";
let specheatbig = "regExp(${gmlID}) =~ '";


function colordata() {
    tileset.style = new Cesium.Cesium3DTileStyle({
        color: {
            conditions: [

                [specheatsmall, "color('#008000')"],
                [specheatbig, "color('#FF0000')"],               
                 ["true", "color('#000000')"]
            ]
        }


})}

var x = 0;


function managedata(){
    try{
        while (x < Object.keys(getspecheatdata).length) {
        
            if (getspecheatdata[x].specificheatdemand <= 80){
                specheatsmall += getspecheatdata[x].gmlid
                specheatsmall += ","
            } else if(getspecheatdata[x].specificheatdemand > 80){
                specheatbig+= getspecheatdata[x].gmlid
                specheatbig += ","
            }
            


        x = x +1;    
        }
        specheatbig += "'";
        specheatsmall += "'";
        colordata();
    }
    catch (err) {
        console.log('Error')
    }
}

function getspecheat() {
    try {
        $.ajax({
            type: "POST",
            url: '/loadspaceheating',
        }).done(function (newdata) {
            convertdata(newdata);
        });
        function convertdata(data) {
            getspecheatdata = data;
            console.log(getspecheatdata)
        }
        return getspecheatdata
    }
    catch (err) {
        console.log('loading Gas Values from DB failed!');
    }
};
//--------------------------------------------------------------------------------------------
function getgas() {
    try {
        $.ajax({
            type: "POST",
            url: '/loadgetgas',
        }).done(function (newdata) {
            convertdata(newdata);
        });
        function convertdata(data) {
            getgasdata = data;
            console.log(getgasdata)
        }
        return getgasdata
    }
    catch (err) {
        console.log('loading Gas Values from DB failed!');
    }
};

function getheat() {
    try {
        $.ajax({
            type: "POST",
            url: '/loadgetheat',
        }).done(function (newdata) {
            convertdata(newdata);
        });
        function convertdata(data) {
            getheatdata = data;
            console.log(getheatdata)
        }
        return getheatdata
    }
    catch (err) {
        console.log('loading Gas Values from DB failed!');
    }
};

function getheatnew() {
    try {
        $.ajax({
            type: "POST",
            url: '/loadgetheatnew',
        }).done(function (newdata) {
            convertdata(newdata);
        });
        function convertdata(data) {
            getheatdatanew = data;
            console.log(getheatdatanew)
        }
        return getheatdatanew
    }
    catch (err) {
        console.log('loading Gas Values from DB failed!');
    }
};



//--------------------------------------------------------------------------------------------
//Modal

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function ModalLegend() {
	modal.style.display = "block";
	
};

//--------------------------------------------------------------------------------------------

function loadSetPDB() {
    try {
        $.ajax({
            type: "POST",
            url: '/loadSetPDB',
        }).done(function (newdata) {
            convertdata(newdata);
        });
        function convertdata(data) {
            SetPdataDB = data;
            console.log(SetPdataDB)
        }
        return SetPdataDB
    }
    catch (err) {
        console.log('loading Set Point from DB failed!');
    }
};


function tesst(city){
	let cityn = {};
    cityn[0]=city
	try {
		//console.log(pvStufe)
		$.ajax({
			type: "POST",
			url: '/loadSetP',
			data: cityn,
		}).done(function (newdata) {
			convertdata(newdata);
		});
		
		function convertdata(datanew){
			SetPdata = datanew;
			console.log(SetPdata)
		}
        
		return SetPdata
        
		
	}
	catch (err) {
		console.log('Set Point failed!');
	}
	
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




function addOverlay() {
	
	
			var para = document.createElement("p");
			var node = document.createTextNode("This is new.");
			para.appendChild(node);
            //Add overlay by creating an HTML element
            var img = document.createElement('img');
            img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';
            viewer.container.appendChild(para)
            var rotation = Math.floor((Math.random() * 360) + 1) + 'deg';
            var topOffset = Math.floor((Math.random() * 201) - 100);
            var leftOffset = Math.floor((Math.random() * 201) - 100);
            //Position overlay with CSS styling
            img.style.width = '100px';
            img.style.position = 'absolute';
            img.style.top = 'calc(50% + ' + topOffset + 'px)';
            img.style.left = 'calc(50% + ' + leftOffset + 'px)';
            img.style['pointer-events'] = 'none';
            img.style['-ms-transform'] = 'rotate(' + rotation + ')'; /* IE 9 */
            img.style['-webkit-transform'] = 'rotate(' + rotation + ')'; /* Chrome, Safari, Opera */
            img.style.transform = 'rotate(' + rotation + ')';
        }

		
		
		
		
		
		
		
		
//####################################################################################################

function showDiv() {
   document.getElementById('menu').style.display = "block";
}

//function callall(){
//    calltemp();
//    recolor();
//    $('#tempPlace').val('');
//    document.getElementById("visibilitySet").style.visibility = "hidden";
//    document.getElementById("visibilitySet2").style.visibility = "hidden";
//    colorTemp(tileset);
//
//}


function recolor() {
    
    dataSetPDB18 = dataSetPDB18.replace(gmlpicked , '');
    dataSetPDB19 = dataSetPDB19.replace(gmlpicked, '');
    dataSetPDB20 = dataSetPDB20.replace(gmlpicked, '');
    dataSetPDB21 = dataSetPDB21.replace(gmlpicked, '');
    dataSetPDB22 = dataSetPDB22.replace(gmlpicked, '');
    dataSetPDB23 = dataSetPDB23.replace(gmlpicked, '');
    dataSetPDB24 = dataSetPDB24.replace(gmlpicked, '');
    dataSetPDB25 = dataSetPDB25.replace(gmlpicked, '');
    dataSetPDB17 = dataSetPDB17.replace(gmlpicked, '');
    if (quota == '17'){
        dataSetPDB17 += gmlpicked
        dataSetPDB17 = dataSetPDB17.replace("'" + gmlpicked, gmlpicked + "'");
    }else if (quota == '18') {
        dataSetPDB18 += gmlpicked
        dataSetPDB18 = dataSetPDB18.replace("'" + gmlpicked, gmlpicked + "'");
    }else if (quota == '19') {
        dataSetPDB19 += gmlpicked
        dataSetPDB19 = dataSetPDB19.replace("'" + gmlpicked, gmlpicked + "'");
    }else if (quota == '20') {
        dataSetPDB20 += gmlpicked
        dataSetPDB20 = dataSetPDB20.replace("'" + gmlpicked, gmlpicked + "'");
    }else if (quota == '21') {
        dataSetPDB21 += gmlpicked
        dataSetPDB21 = dataSetPDB21.replace("'" + gmlpicked, gmlpicked + "'");
    }else if (quota == '22') {
        dataSetPDB22 += gmlpicked
        dataSetPDB22 = dataSetPDB22.replace("'" + gmlpicked, gmlpicked + "'");
    }else if (quota == '23') {
        dataSetPDB23 += gmlpicked
        dataSetPDB23 = dataSetPDB23.replace("'" + gmlpicked, gmlpicked + "'");
    }else if (quota == '24') {
        dataSetPDB24 += gmlpicked
        dataSetPDB24 = dataSetPDB24.replace("'" + gmlpicked, gmlpicked + "'");
    }else if (quota == '25') {
        dataSetPDB25 += gmlpicked
        dataSetPDB25 = dataSetPDB25.replace("'" + gmlpicked, gmlpicked + "'");
    };
};