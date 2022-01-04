
            function fn1(){
            
                var weigh = document.getElementById("weig").value;
                var heigh = document.getElementById("heig").value;

                var s_weig = document.getElementById("w_select");
                var WEIGHT = s_weig.options[s_weig.selectedIndex].value; 
            
                var s_heig = document.getElementById("h_select");
                var HEIGHT = s_heig.options[s_heig.selectedIndex].value; 
            
                var p1=0, c1=0, i1=0, k1=weigh, m1=heigh, vds;

                if(WEIGHT == 'Pounds'){
                    p1 = weigh*0.454;
                }
                if(HEIGHT == 'Centimeter'){
                    c1 = heigh*0.01;
                }
                if(HEIGHT == 'Inches'){
                    i1 = heigh*0.0254;
                }
    

                if(isNaN(weigh) ||weigh.trim() == "" || isNaN(heigh)|| heigh.trim() == ""){
                    if(isNaN(weigh) ||weigh.trim() == "" ){
                        document.getElementById("weig").style.boxShadow = "5px 10px 20px Red"; 
                    }
                    if(isNaN(heigh)|| heigh.trim() == ""){
                        document.getElementById("heig").style.boxShadow = "5px 10px 20px Red";
                    }
                }
                else{
                    if (weigh){
                        document.getElementById("weig").style.boxShadow = "5px 10px 20px indigo";
                        document.getElementById("heig").style.boxShadow = "5px 10px 20px indigo";
                    }
                    if(WEIGHT == 'Pounds' && HEIGHT == 'Centimeter'){
                        vds = (p1/(c1*c1));
                        vds = vds.toFixed(2);
                    }
                    if(WEIGHT == 'Kilogram' && HEIGHT == 'Centimeter'){
                        vds = (k1/(c1*c1));
                        vds = vds.toFixed(2);
                    }
                    if(WEIGHT == 'Pounds' && HEIGHT == 'Inches'){
                        vds = (p1/(i1*i1));
                        vds = vds.toFixed(2);
                    }
                    if(WEIGHT == 'Kilogram' && HEIGHT == 'Inches'){
                        vds = (k1/(i1*i1));
                        vds = vds.toFixed(2);
                    }
                    if(WEIGHT == 'Pounds' && HEIGHT == 'Meter'){
                        vds = (p1/(m1*m1));
                        vds = vds.toFixed(2);
                    }
                    if(WEIGHT == 'Kilogram' && HEIGHT == 'Meter'){
                        vds = (k1/(m1*m1));
                        vds = vds.toFixed(2);
                    } 
                    if(vds < 18.5){
                        let abc = "Your BMI is " + vds +", indicating your weight is in the Underweight category for adults of your height.";
                        let asd = abc.bold();
                        document.getElementById('display').innerHTML = (asd);
                    }
                    if(vds > 18.5 && vds <24.9){
                        let abc = "Your BMI is " + vds +", indicating your weight is in the Healthy category for adults of your height.";
                        let asd = abc.bold();
                        document.getElementById('display').innerHTML = (asd);
                    }
                    if(vds > 24.9 && vds <29.9){
                        let abc = "Your BMI is " + vds +", indicating your weight is in the Overweight category for adults of your height.";
                        let asd = abc.bold();
                        document.getElementById('display').innerHTML = (asd);
                    }
                    if(vds > 29.9){
                        let abc = "Your BMI is " + vds +", indicating your weight is in the Obese category for adults of your height.";
                        let asd = abc.bold();
                        document.getElementById('display').innerHTML = (asd);
                    }
                }
            }