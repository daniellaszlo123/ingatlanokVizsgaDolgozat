class KategoriakSelecthezView {
    constructor(szulo, adat) {
        this.adat = adat
        this.szulo = szulo
        $.each(adat, function (index, ertek) {
            szulo.append(`
                <option>${ertek.nev}</option>
            `)
        })

        const mentesGomb = $("#mentes")

        const megseGomb = $("#megse")

        mentesGomb.on("click", () => {
            this.kattintasTrigger("ujAdatMentes")
        })

        megseGomb.on("click", () => {
            this.kattintasTrigger("ujAdatMegse")
        })
    }

    kattintasTrigger(tipus) {
        const event = new CustomEvent(tipus, { detail: this.adat[this.szulo.prop('selectedIndex')] })
        window.dispatchEvent(event)
    }

    /*ADOTT ELEMHEZ HOZZÁRENDELT EVENTEK SZÁMA*/
    getEventSzam(elem) {
        const tomb = []
        for (const key in elem[0]) {
            if (Object.hasOwnProperty.call(elem[0], key)) {
                const element = elem[0][key];
                tomb.push(element.events)
            }
        }
        return tomb.length;
    }
}

export default KategoriakSelecthezView