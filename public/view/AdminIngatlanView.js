class AdminIngatlanView{
    constructor(szuloelem, adat){
        this.adat=adat
        szuloelem.append(`
            <tr>
                <td>${adat.kategoria}</td>
                <td>${adat.leiras}</td>
                <td>${adat.hirdetesDatuma}</td>
                <td>${adat.tehermentes ? "Igen" : "Nem"}</td>
                <td><img style="width: 10rem;" src="${adat.kepUrl}" alt="ház"></td>
                <td><button class="btn btn-primary">Érdekel</button></td>
            </tr>
        `)

        this.erdelekGomb = szuloelem.children(":last-child").children(":last-child").children(":first-child")

        this.erdelekGomb.on("click", ()=>{
            this.kattintasTrigger("erdekel")
        })
    }

    kattintasTrigger(tipus){
        const event = new CustomEvent(tipus, {detail:this.adat})
        window.dispatchEvent(event)
    }
}

export default AdminIngatlanView