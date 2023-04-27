import AdminIngatlanView from "./AdminIngatlanView.js"

class AdminIngatlanokView{
    constructor(szuloelem, adat){
        szuloelem.html("")
        szuloelem.append(`
            <table class="table">
                <thead>
                    <th scope="col">Kategória</th>
                    <th scope="col">Leírás</th>
                    <th scope="col">Hírdetés dátuma</th>
                    <th scope="col">Tehermentes-e</th>
                    <th scope="col">Fénykép</th>
                    <th scope="col"></th>
                </thead>
                <tbody>
                </tbody>
            </table>
        `)
        $.each(adat, function (index, ertek) {
            new AdminIngatlanView($("tbody"), ertek)
        })
    }
}

export default AdminIngatlanokView