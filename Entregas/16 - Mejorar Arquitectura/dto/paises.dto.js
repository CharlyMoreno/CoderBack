class DtoPaises {
    constructor(pais) {
        this.nombre = pais.nombre
        this.iso2 = pais.iso2
        this.iso3 = pais.iso3
        this.phone_code = pais.phone_code
    }
}

function asDto(paises) {
    if (Array.isArray(paises))
        return paises.map(p => new DtoPaises(p))
    else
        return new DtoPaises(paises)
}

  
 module.exports = {asDto};
  