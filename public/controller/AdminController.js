import AjaxOsztaly from "../model/AjaxOsztaly.js"
import AdminIngatlanokView from "../view/AdminIngatlanokView.js"

class AdminController{
    #token
    constructor(){
        this.#token = $("meta[name='csrf-token']").attr("content")
        const ajax= new AjaxOsztaly(this.#token)

        ajax.adatLeker("/api/ingatlanok", this.ingatlanAdatokBetolt)

        $(window).on("erdekel", (adat)=>{
            const str=`
                Kategóriája: ${adat.detail.kategoria}
                Leírása: ${adat.detail.leiras}
                Hírdetés dátuma: ${adat.detail.hirdetesDatuma}
                Tehermentes-e: ${adat.detail.tehermentes}
                Ára: ${adat.detail.ar}" Ft"
            `
            alert(str)
        })

        $("#ujIngatlan").on("click", ()=>{
            const szulo = $("#ujIngatlanFelvitel")
            szulo.append(`
            <form>
                <div class="mb-3">
                    <label for="kategoria" class="form-label">Kategória</label>
                    <select id="kategoria" class="form-select">
                
                    </select>
                </div>
                    <div class="mb-3">
                    <label for="leiras" class="form-label">Leírás</label>
                    <input type="text" class="form-control" id="leiras">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="tehermentes">
                    <label class="form-check-label" for="tehermentes">Tehermentes</label>
                </div>
                <div class="mb-3">
                    <label for="kepUrl" class="form-label">Kép webcíme</label>
                    <input type="text" class="form-control" id="kepUrl">
                </div>
                    <button class="btn btn-primary" id="mentes">Mentés</button>
                    <button class="btn btn-secondary" id="megse">Mégse</button>
            </form>
                    `)
            const adat = ajax.adatLeker("/api/kategoriak", this.kategHozzaadasSelecthez)
                    
            $("#mentes").on("click", ()=>{
                const adat = {
                    kategoria: $("#kategoria option:selected").val(),
                    leiras: $("#leiras").val(),
                    tehermentes: $("#tehermentes").val() == "on" ? true:false ,
                    kepUrl: $("#kepUrl").val()
                }
                ajax.adatUj("/api/ujingatlan/", adat)
                szulo.html("");
                ajax.adatLeker("/api/ingatlanok", this.ingatlanAdatokBetolt)
            })
            $("#megse").on("click", ()=>{
                szulo.html("");
            })
        })
    }

    ingatlanAdatokBetolt(tomb){
        const szulo = $("#tartalom")
        new AdminIngatlanokView(szulo, tomb)
    }

    kategHozzaadasSelecthez(tomb){
        const szulo = $("#kategoria")
        $.each(tomb, function (index, ertek) {
            szulo.append(`
            <option>${ertek.nev}</option>
            `)
        })
    }
}

export default AdminController