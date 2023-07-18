
var calendario = {}
var diaInicial = 1
var mesInicial = 1
var anoInicial = 2000

var mesesDoAno = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out","Nov","Dez"]
var diasDaSemana = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]

primeiroDia = diasDaSemana[5]
var anoBissexto = true
var meses31 = [1,3,5,7,8,10,12]

var mes = {}
var obj1 = {}

var [dia, bissexto] = [5,4]

for (let i = anoInicial; i <= anoInicial + 50; i++) {

    if (bissexto == 4){
        anoBissexto =true
        bissexto=1
    }else{
        anoBissexto=false
        bissexto+=1
    }

    for(let l = mesInicial; l<=mesesDoAno.length;l++){
        
        if(l==2 && anoBissexto){
            for(let k =1; k<=29;k++){
                mes[k.toString()]={nomeDia:`${diasDaSemana[dia]}`}
                dia++
                if (dia==7) {
                    dia=0
                }
            }
        } else if (l==2 && !anoBissexto){
            for(let k =1; k<=28;k++){
                mes[k.toString()]={nomeDia:`${diasDaSemana[dia]}`}
                dia++
                if (dia==7) {
                    dia=0
                }
            }
        }else if (meses31.includes(l)){
            for(let k =1; k<=31;k++){
                mes[k.toString()]={nomeDia:`${diasDaSemana[dia]}`}
                dia++
                
                if (dia==7) {
                    dia=0
                }
            }
        }else{
            for(let k =1; k<=30;k++){
                mes[k.toString()]={nomeDia:`${diasDaSemana[dia]}`}
                
                if (dia==7) {
                    dia=0
                }
            }
        }
        obj1[l.toString()]=mes
        mes={}
    }
    
    calendario[i.toString()] = obj1
    obj1={}
}



const fs = require('fs');
const json = JSON.stringify(calendario, null, 1);
fs.writeFileSync('calendario.json', json);

/*

calendario:{
    2001:{
        1:{
            1:terça,
            2:quarta,
            3:quinta,
            4:sexta
            5:sabado,
            6:domingo,
            7:segunda,
            8:terça,
            9:quarta,
            10:quinta,
            11:sabado,
            12:domingo,
            13:segunda,
            14:terça,
            15:quarta,
            16:quinta,
            17:sexta
            18:sabado,
            19:domingo,
            20:segunda,
            21:terça,
            22:quarta,
            23:quinta,
            24:sexta
            25:sabado,
            26:domingo,
            27:segunda,
            28:terça,
            29:quarta,
            30:quinta,
            31:sexta
        }
        2:{
            dia:quarta
        }
        3:{
            dia:quarta
        }
    },
    2002:{
    }
}

*/