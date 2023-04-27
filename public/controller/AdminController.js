import AjaxOsztaly from "../model/AjaxOsztaly.js"
import AdminIngatlanokView from "../view/AdminIngatlanokView.js"
import KategoriakSelecthezView from "../view/KategoriakSelecthezView.js"

class AdminController {
    #token
    constructor() {
        this.#token = $("meta[name='csrf-token']").attr("content")
        const ajax = new AjaxOsztaly(this.#token)

        ajax.adatLeker("/api/ingatlanok", this.ingatlanAdatokBetolt)

        $(window).on("erdekel", (adat) => {
            const str = `
                Kategóriája: ${adat.detail.kategoria}
                Leírása: ${adat.detail.leiras}
                Hírdetés dátuma: ${adat.detail.hirdetesDatuma}
                Tehermentes-e: ${adat.detail.tehermentes == 1 ? "Igen" : "Nem"}
                Ára: ${adat.detail.ar}" Ft"
            `
            alert(str)
        })

        $(window).on("ujAdatMentes", (kateg) => {
            console.log(kateg);
            const adat = {
                kategoria: kateg.detail.id,
                leiras: $("#leiras").val(),
                tehermentes: $("#tehermentes").val() == "on" ? true : false,
                ar: $("#ar").val(),
                kepUrl: $("#kepUrl").val()
            }
            ajax.adatUj("/api/ujingatlan/", adat)
            const szuloelem = $("#ujIngatlanForm")
            szuloelem.html("");
            ajax.adatLeker("/api/ingatlanok", this.ingatlanAdatokBetolt)
        })

        $(window).on("ujAdatMegse", (kateg) => {
            const szuloelem = $("#ujIngatlanForm")
            console.log(kateg);
            szuloelem.html("");
        })

        $("#ujIngatlan").on("click", () => {
            const szulo = $("#ujIngatlanForm")
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
                    <label for="ar" class="form-label">Ár</label>
                    <input type="text" class="form-control" id="ar">
                </div>
                <div class="mb-3">
                    <label for="kepUrl" class="form-label">Kép webcíme</label>
                    <input type="text" class="form-control" id="kepUrl">
                </div>
                    <button class="btn btn-primary" id="mentes">Mentés</button>
                    <button class="btn btn-secondary" id="megse">Mégse</button>
            </form>
                    `)
            ajax.adatLeker("/api/kategoriak", this.kategHozzaadasSelecthez)
        })
    }

    ingatlanAdatokBetolt(tomb) {
        const szulo = $("#tartalom")
        new AdminIngatlanokView(szulo, tomb)
    }

    kategHozzaadasSelecthez(tomb) {
        const szulo = $("#kategoria")
        new KategoriakSelecthezView(szulo, tomb)
    }
}

export default AdminController