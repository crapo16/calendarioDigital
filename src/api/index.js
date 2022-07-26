const eventos={
    cobranzas:[
        {id:1,vto:"14/07/2021",cv:"Venta",impComprobante:"3.455.612,2",iva:"345.612",saldoConf:"0,00",pendiente:"3.123.456",moneda:"S",datosCpte:"LP A 2 331004671478",
        cpteOrigen:"LP A 2 331004671478",cto:"21/16862/7",contraparte:"ADM Agro SRL", tipoCobranza:"Valor Zeni", observaciones:"--",tipo:"LP",coe:"331004671478"},
        {id:2,vto:"15/07/2021",cv:"Venta",impComprobante:"3.455.612,3",iva:"345.612",saldoConf:"0,00",pendiente:"3.123.456",moneda:"S",datosCpte:"LP A 2 331004671478",
        cpteOrigen:"LP A 2 331004671478",cto:"21/16862/7",contraparte:"ADM Agro SRL", tipoCobranza:"Valor Zeni", observaciones:"--",tipo:"LP",coe:"331004671478"},
    ],
    cupos:[
        {id:1,fecha:"29/06/2021", comprador:"ADM Agro SRL", vendedor:"Adeco Agropecuaria S.A", destinatario:"ADM Agro SRL", destino:"ADM Agro SRL", localidadDestino:"Ingeniero White", 
        contrato:"21/15334/5",otorgados:"1", producto:"Soja", nroCupo:"PS1274087"},
        {id:2,fecha:"20/06/2022", comprador:"ADM Agro SRL", vendedor:"Adeco Agropecuaria S.A", destinatario:"ADM Agro SRL", destino:"ADM Agro SRL", localidadDestino:"Ingeniero White", 
        contrato:"21/15334/5",otorgados:"1", producto:"Soja", nroCupo:"PS1274087"}
    ],
    futuros:[
        {id:1,tipo:"Futuros",operacion:"Futuro",condicion:"V",producto:"TRIGO",posicion:"01/2012",volumen:"100,000", precioEj:"0,00", precioPrima:"$ 185,0000", destino:"Buenos Aires",registro:"951990", fecAlta:"02/12/2010", regCancela:"--",
        fecInicial:"--", precioInic:"$ 0,0000", enContratos:"0.00", estado:"Cancelada"},
        {id:2,tipo:"Futuros",operacion:"Futuro",condicion:"V",producto:"ACEITE",posicion:"02/2012",volumen:"200,000", precioEj:"0,00", precioPrima:"$ 185,0000", destino:"Buenos Aires",registro:"951990", fecAlta:"02/12/2010", regCancela:"--",
        fecInicial:"--", precioInic:"$ 0,0000", enContratos:"0.00", estado:"Cancelada"}
    ],
    vencimientos:[
        {  id:1,nombre:"Vencimiento 1", fechaFin:"14/08/2022"},
        {  id:2,nombre:"Vencimiento 2", fechaFin:"15/08/2022"}
    ],
    eventosZeni:[
        {id:1,nombre:"zeni x zoom 15:30"},
        {id:2,nombre:"zeni x zoom 16:30"}
    ]
};


const promesa= new Promise(function(resolve,reject){
    
        resolve(eventos);
    
});

export default function getEventos(){
    return promesa;
}
/*export default function getEventos(){
    return new Promise((success,reject)=>{
    success({
        cobranzas:[
            {vto:"14/07/2021",cv:"Venta",impComprobante:"3.455.612,2",iva:"345.612",saldoConf:"0,00",pendiente:"3.123.456",moneda:"S",datosCpte:"LP A 2 331004671478",
            cpteOrigen:"LP A 2 331004671478",cto:"21/16862/7",contraparte:"ADM Agro SRL", tipoCobranza:"Valor Zeni", observaciones:"--",tipo:"LP",coe:"331004671478"},
            {vto:"15/07/2021",cv:"Venta",impComprobante:"3.455.612,2",iva:"345.612",saldoConf:"0,00",pendiente:"3.123.456",moneda:"S",datosCpte:"LP A 2 331004671478",
            cpteOrigen:"LP A 2 331004671478",cto:"21/16862/7",contraparte:"ADM Agro SRL", tipoCobranza:"Valor Zeni", observaciones:"--",tipo:"LP",coe:"331004671478"},
        ],
        cuposOrtogados:[
            {fecha:"29/06/2021", comprador:"ADM Agro SRL", vendedor:"Adeco Agropecuaria S.A", destinatario:"ADM Agro SRL", destino:"ADM Agro SRL", localidadDestino:"Ingeniero White", 
            contrato:"21/15334/5",otorgados:"1", producto:"Soja", nroCupo:"PS1274087"},
            {ffecha:"20/06/2022", comprador:"ADM Agro SRL", vendedor:"Adeco Agropecuaria S.A", destinatario:"ADM Agro SRL", destino:"ADM Agro SRL", localidadDestino:"Ingeniero White", 
            contrato:"21/15334/5",otorgados:"1", producto:"Soja", nroCupo:"PS1274087"}
        ],
        futuros:[
            {tipo:"Futuros",operacion:"Futuro",condicion:"V",producto:"TRIGO",posicion:"01/2012",volumen:"100,000", precioEj:"0,00", precioPrima:"$ 185,0000", destino:"Buenos Aires",registro:"951990", fecAlta:"02/12/2010", regCancela:"--",
            fecInicial:"--", precioInic:"$ 0,0000", enContratos:"0.00", estado:"Cancelada"},
            {tipo:"Futuros",operacion:"Futuro",condicion:"V",producto:"ACEITE",posicion:"02/2012",volumen:"200,000", precioEj:"0,00", precioPrima:"$ 185,0000", destino:"Buenos Aires",registro:"951990", fecAlta:"02/12/2010", regCancela:"--",
            fecInicial:"--", precioInic:"$ 0,0000", enContratos:"0.00", estado:"Cancelada"}
        ],
        vencimientos:[
            {  nombre:"Vencimiento 1", fechaFin:"14/08/2022"},
            {  nombre:"Vencimiento 2", fechaFin:"15/08/2022"}
        ],
        eventosZeni:[
            {nombre:"zeni x zoom 15:30"},
            {nombre:"zeni x zoom 16:30"}
        ]

    })});
}*/